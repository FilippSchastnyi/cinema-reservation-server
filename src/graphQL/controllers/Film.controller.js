import Utils from "../../utils/Utils.js";
import FilmModel from "../../models/Film.model.js";

class FilmController {
  async createFilm(_, {input}) {
    const {name} = input
    if (await Utils.doesDocumentExist(FilmModel, {name})) {
      return null
    }

    try {
      return await FilmModel.create({...input, image: 'test'})
    } catch (e) {
      console.log(e)
    }

  }

  async updateFilm() {

  }

  async getAllFilms() {

  }

  async getFilm() {

  }
}

export default new FilmController()
