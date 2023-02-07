import Utils from "../../utils/Utils.js";
import FilmModel from "../../models/Film.model.js";
import fs from "fs"
import path from "path";

class FilmController {
  async createFilm(_, {input}) {
    const { filename,  mimetype, createReadStream} = await input.image
    const __dirname = path.resolve();
    const stream = createReadStream()
    const pathToSaveImage = path.join(__dirname, `/static/img/films/${filename}`)
    await stream.pipe(fs.createWriteStream(pathToSaveImage))

    console.log(pathToSaveImage)

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

  async getChunkOfFilms(_, { input }) {
    const { page, limit, filmIds } = input;
    const start = (page - 1) * limit;
    const query = filmIds.length ? { _id: { $in: filmIds } } : {};

    let films = await FilmModel.find(query).skip(start).limit(limit);

    if (!films.length){
      films = await FilmModel.find(query).skip(0).limit(limit);
    }

    return films;
  }

  async getAllFilms(_, { input }) {
    return FilmModel.find({})
  }

  async getFilm() {

  }
}

export default new FilmController()
