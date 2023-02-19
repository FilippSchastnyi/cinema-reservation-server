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
      const sessions = await SessionModel.find({_id: {$in: hall.schedule}})
      const hallSchedule = sessions.map(session => {
        return {
          _id: session._id,
          showTime: session.showTime
        }
      })
      processedHalls.push({
        _id: hall._id,
        name: hall.name,
        schedule: hallSchedule
      })
    }
    const cinemaName = cinema.name
    console.log()

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
