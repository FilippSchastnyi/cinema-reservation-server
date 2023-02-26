import Utils from "../../utils/Utils.js";
import FilmModel from "../../models/Film.model.js";
import CinemaModel from "../../models/Cinema.model.js";
import GenreModel from "../../models/Genre.model.js";
import {sortFilmsModule} from "../modules/sort-films.module.js";

class FilmController {
  async createFilm(_, {input}) {
    await Utils.writeFileToStaticFolder(input.image, "/static/img/films")

    if (await Utils.doesDocumentExist(FilmModel, {name: input.name})) {
      return null
    }

    try {
      return await FilmModel.create({...input, image: filename})
    } catch (e) {
      console.log(e)
    }
  }

  async updateFilm() {

  }

  async getCinemaFilms(_, {input}) {
    const {name} = input
    const cinema = await CinemaModel.find({name})
    if (!cinema.length) return [];

    const cinemaFilmsIds = cinema[0].films;
    const cinemaFilms = await FilmModel.find({_id: {$in: cinemaFilmsIds}})
    const cinemaFilmsOutput = sortFilmsModule(input, cinemaFilms)
    const documentsCount = cinemaFilms.length


    const baseImageUrl = "http://localhost:5000/img/films/";
    const processedFilms = []

    for (let film of cinemaFilmsOutput) {
      const updatedFilm = {...film.toObject()}
      const image = baseImageUrl + film.image;
      const genres = await GenreModel.find({_id: {$in: film.genres}})
      updatedFilm.genres = genres
      updatedFilm.image = image
      processedFilms.push(updatedFilm)
    }

    return {
      films: processedFilms, documentsCount
    };
  }

  async getAllFilms(_, {input}) {
    return FilmModel.find({})
  }

  async getOneFilm(_, input) {
    const {id} = input
    const currentFilm = await FilmModel.findOne({_id: id})
    const genres = await GenreModel.find({_id: {$in: currentFilm.genres}})
    const baseImageUrl = "http://localhost:5000/img/films/";
    const image = baseImageUrl + currentFilm.image;
    return {...currentFilm.toObject(), genres, image}
  }
}

export default new FilmController()
