import SessionModel from "../../models/Session.model.js";

class SessionController {
  async createSession(_, {input}){
    console.log(input)
    return SessionModel.create(input);
  }

  async updateSession(){

  }

  async getAllSessions(){

  }

  async getOneSession(){

  }
}

export default new SessionController()
