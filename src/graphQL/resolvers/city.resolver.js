import CityController from '../controllers/City.controller.js'

const CityResolver = {
  Query: {
    getOneCity: CityController.getOneCity,
    getAllCities: CityController.getAllCities,
  },
  Mutation: {
    addCity: CityController.addCity,
  }
}

export default CityResolver