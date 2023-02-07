import CinemaModel from "../../models/Cinema.model.js";

class CinemaController {
  async createCinema(_, {input}){
    console.log('?')
    const {name, city, films} = input
    return await CinemaModel.create({
      name,
      city,
      films
    })
  }

  async updateCinema(){

  }

  async getAllCinemas(){

  }

  async getOneCinema(){

  }
}

export default new CinemaController()
