import CinemaModel from "../../models/Cinema.model.js";
import cinemaModel from "../../models/Cinema.model.js";
import filmModel from "../../models/Film.model.js";
import CityModel from "../../models/City.model.js";
import storeModel from "../../models/Store.model.js";
import ConstantsService from "../../services/Constants.service.js";

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
      updatedCinema.city = city.name
      processedCinemas.push(updatedCinema)
    }
    return processedCinemas
  }

  async getOneCinema(_, input){
    const cinema = await CinemaModel.findOne({_id: input.id}).populate({path: "store", model:storeModel})
    const cinemaGoods = [...cinema.store.goods]
    const updatedCinemaGoods = cinemaGoods.map(item=> {
      return {
        ...item.toObject(),
        image: ConstantsService.getImagesURL('goods', item.image)
      }
    })
    cinema.store.goods = updatedCinemaGoods
    return cinema

  }
}

export default new CinemaController()
