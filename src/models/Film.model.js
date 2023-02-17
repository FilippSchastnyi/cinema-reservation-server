import {Schema, model} from "mongoose";

const filmSchema = new Schema({
  name: {type: String, required: true, unique: true},
  description: {type: String, required: true},
  country: {type: String, required: true},
  director: {type: String, required: true},
  duration: {type: String, required: true},
  release: {type: String, required: true},
  genres: [{type: Schema.Types.ObjectId, required: true, ref: "genre"}],
  image: {type: String}
})

export default model('Film', filmSchema)

/*
db.films.insertOne({
  name: "Аватар: Путь воды",
  description: "После принятия образа аватара солдат Джейк Салли становится предводителем народа на'ви и берет на себя миссию по защите новых друзей от корыстных бизнесменов с Земли. Теперь ему есть за кого бороться — с Джейком его прекрасная возлюбленная Нейтири. Когда на Пандору возвращаются до зубов вооруженные земляне, Джейк готов дать им отпор.",
  country: "США",
  director: "Джеймс Кэмерон",
  release: "2022-12-06T00:00:00.000Z",
  genres: [
      ObjectId("63dba55715fa0561b8b8fc6e"),
      ObjectId("63db9d3b69342432f6271cd8"),
      ObjectId("63dbbf8669342432f6271cdb"),
  ]
})
*/