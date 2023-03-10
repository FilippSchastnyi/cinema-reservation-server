class ConstantsService {
  baseURL = 'http://localhost:5000/'

  getImagesURL(folder, fileName){
    return this.baseURL + `img/${folder}/${fileName}`
  }
}

export default new ConstantsService()