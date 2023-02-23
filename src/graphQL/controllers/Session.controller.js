import SessionModel from "../../models/Session.model.js";
import HallModel from "../../models/Hall.model.js";

class SessionController {
  async createSession(_, {input}){
    console.log(input)
    return SessionModel.create(input);
  }

  async updateSession(){

  }

  async getAllSessions(){

  }

  async getOneSession(_, {id}){
    const session = await SessionModel.findOne({_id: id}).populate("hall", "plan name", HallModel)
    const hallPlanRows = session.hall.plan
    const bookedPlaces = session.booking
    const sessionPlan = hallPlanRows.map((row, index) => {
      bookedPlaces.forEach(place => {
        if(place.row === row.rowNumber){
          console.log(place.row)
        }
      })
    })
  }
}

export default new SessionController()
