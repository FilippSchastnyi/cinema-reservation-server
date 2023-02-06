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

  async getChunkOfFilms(page, limit){
    const startFrom = page * limit
    const films = await FilmModel.find({}).skip(startFrom).limit(limit)
    const count = await films.countDocuments()
    console.log(count)
    return films
  }

  async getAllFilms() {
    return FilmModel.find({})
  }

  async getFilm() {

  }
}

export default new FilmController()
