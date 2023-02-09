import CinemaModel from "../../models/Cinema.model.js";

class CinemaController {
  async createCinema(_, {input}){
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

  async getOneCinema(_, id){
    console.log('?')
    return CinemaModel.findOne({id})
  }
}

export default new CinemaController()
