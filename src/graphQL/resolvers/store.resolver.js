import StoreController from '../controllers/Store.controller.js'

const StoreResolver = {
  Query: {
    getOneStore: StoreController.getOneStore,
    getAllStores: StoreController.getAllStores,
  },
  Mutation: {
    createStore: StoreController.createStore,
    createGoods: StoreController.createGoods,
  }
}

export default StoreResolver