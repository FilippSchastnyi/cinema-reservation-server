import CinemaModel from "../../models/Cinema.model.js";
import cinemaModel from "../../models/Cinema.model.js";
import filmModel from "../../models/Film.model.js";
import CityModel from "../../models/City.model.js";

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
    const cinemaList = await cinemaModel.find({})
    const processedCinemas = []
    for (let cinema of cinemaList){
      const updatedCinema = {...cinema.toObject()}
      const films = await filmModel.find({_id: {$in: cinema.films}})
      const city = await CityModel.findOne({_id: cinema.city})
      updatedCinema.films = films
      updatedCinema.city = city
      processedCinemas.push(updatedCinema)
    }
    console.log(processedCinemas)
    return processedCinemas
  }

  async getOneCinema(_, id){
    console.log('?')
    return CinemaModel.findOne({id})
  }
}

export default new CinemaController()
