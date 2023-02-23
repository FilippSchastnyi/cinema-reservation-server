import StoreModel from "../../models/Store.model.js";

class StoreController {
  async createStore(_, {input}){
    return StoreModel.create(input)
  }

  async updateStore(){

  }

  async getAllStores(){

  }

  async getOneStore(){

  }
}

export default new StoreController()
