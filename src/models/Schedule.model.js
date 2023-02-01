import {model, Schema} from "mongoose";

const scheduleSchema = new Schema({
  hall: {type: Schema.Types.ObjectId, ref: 'Hall'},
  schedule: [
    {
      showTime:[{type: Date}],
      film: {type: Schema.Types.ObjectId, ref: 'Film'}
    }
  ],
})

export default model("Schedule", scheduleSchema)