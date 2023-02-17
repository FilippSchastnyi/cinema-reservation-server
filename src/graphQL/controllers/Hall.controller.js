import HallModel from "../../models/Hall.model.js";
import CinemaModel from "../../models/Cinema.model.js";
import SessionModel from "../../models/Session.model.js";

class HallController {
  async createHall(_, {input}) {

    return HallModel.create({input})
  }

  async updateHall() {

  }

  async getAllHalls(_, input) {
    const {cinemaId} = input
    const cinema = await CinemaModel.findOne({_id: cinemaId})
    const halls = await HallModel.find({_id: {$in: cinema.halls}})

    const processedHalls = []
    for (let hall of halls) {
      const sessionList = await SessionModel.find({_id: {$in: hall.sessions}})
      const showTimeList = sessionList.map(session => session.showTime)
      processedHalls.push({
        name: hall.name,
        showTimeList
      })
    }
    const cinemaName = cinema.name

    return {
      cinemaName,
      halls: processedHalls
    }
  }

  async getOneHall(_, input) {
    console.log(input)
  }
}

export default new HallController()
