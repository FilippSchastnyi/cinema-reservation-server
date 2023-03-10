import HallModel from "../../models/Hall.model.js";
import CinemaModel from "../../models/Cinema.model.js";
import SessionModel from "../../models/Session.model.js";

class HallController {
  async createHall(_, {input}) {

    return HallModel.create({input})
  }

  async updateHall() {

  }

  async getAllCinemaHalls(_, input) {
    const {cinemaId} = input
    const cinemaHalls = await CinemaModel.findOne({_id: cinemaId}, {halls: 1, _id: 0}).populate({
      path:'halls',
      model: HallModel,
      populate: {
        path: 'schedule',
        select: 'showTime',
        model: SessionModel
      }
      }
    ).lean()
    return cinemaHalls.halls
  }

  async getOneHall(_, input) {
    console.log(input)
  }
}

export default new HallController()
