import Utils from "../../utils/Utils.js";
import FilmModel from "../../models/Film.model.js";
import fs from "fs"
import path from "path";
import CinemaModel from "../../models/Cinema.model.js";

class FilmController {
  async createFilm(_, {input}) {
    const { filename,  mimetype, createReadStream} = await input.image
    const __dirname = path.resolve();
    const stream = createReadStream()
    const pathToSaveImage = path.join(__dirname, `/static/img/films/${filename}`)
    await stream.pipe(fs.createWriteStream(pathToSaveImage))

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
    const { page = 1, limit = 0, name } = input;
    const start = (page - 1) * limit;
    const cinema = await CinemaModel.find({name})

    if (!cinema.length) {
      return [];
    }

    const filmIds = cinema[0].films;

    const films = await FilmModel.find({ _id: { $in: filmIds } })
      .skip(start)
      .limit(limit);
    const __dirname = "http://localhost:5000/img/films/"

    films.forEach((film)=>{
      film.image = path.join(__dirname, `${film.image}`)
    })
    return films;
  }

  async getAllFilms(_, { input }) {
    return FilmModel.find({})
  }

  async getFilm() {

  }
}

export default new FilmController()
