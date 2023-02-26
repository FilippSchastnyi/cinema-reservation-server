import path from "path";
import fs from "fs";

class Utils {

  async doesDocumentExist(model, query) {
    return query
      ? await model.findOne(query).then((result) => !!result)
      : false
  }

  async writeFileToStaticFolder(imageFile, pathToSaveFile){
    const {filename, createReadStream} = await imageFile
    const __dirname = path.resolve();
    const pathToSaveImage = path.join(__dirname, `${pathToSaveFile}/${filename}`)
    await createReadStream().pipe(fs.createWriteStream(pathToSaveImage))
  }
}

export default new Utils()