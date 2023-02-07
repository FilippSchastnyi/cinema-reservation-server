class Utils {

  async doesDocumentExist(model, query) {
    return query
      ? await model.findOne(query).then((result) => !!result)
      : false
  }
}

export default new Utils()