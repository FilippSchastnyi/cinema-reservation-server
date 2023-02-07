import CityModel from "../../models/City.model.js";
import Utils from "../../utils/Utils.js";

class CityController {
  async addCity(_, {input}){
    const {name} = input
    if (await Utils.doesDocumentExist(CityModel, {name})){
      return null
    }
    return await CityModel.create({name})
  }

  async updateCity(){

  }

  async getAllCities(){
    return CityModel.find({})
  }

  async getOneCity(){

  }
}

export default new CityController()
