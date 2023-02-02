import GenreModel from "../../models/Genre.model.js";
import Utils from "../../utils/Utils.js";

class GenreController {
  async createGenre(_, {input}) {
    if (await Utils.doesDocumentExist(GenreModel, input)) {
      return null
    }

    try {
      return await GenreModel.create(input)
    } catch (e) {
      console.log(e)
    }
  }

  async updateGenre() {

  }

  async getAllGenres() {

  }

  async getOneGenre() {

  }
}

export default new GenreController()
