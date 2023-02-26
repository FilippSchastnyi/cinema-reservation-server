import StoreModel from "../../models/Store.model.js";
import Utils from "../../utils/Utils.js";

class StoreController {
  async createStore(_, {input}) {
    return StoreModel.create(input)
  }

  async createGoods(_, {input}) {
    const {name: goodsName, count, price, storeId} = input
    const {filename} = await input.image

    if (await Utils.doesDocumentExist(StoreModel, {
      _id: storeId,
      goods: {$elemMatch: {name: `${goodsName}`}}
    })) {
      return null
    }

    await Utils.writeFileToStaticFolder(input.image, "/static/img/goods")

    const newGoods = {
      name: goodsName,
      count,
      price,
      image: "http://localhost:5000/img/goods/" + filename
    }

    await StoreModel.findOneAndUpdate(
      {_id: storeId},
      {$push: {goods: newGoods}},
      {new: true}
    )

    return newGoods
  }

  async getAllStores() {

  }

  async getOneStore() {

  }
}

export default new StoreController()
