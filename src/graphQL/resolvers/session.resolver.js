import SessionController from '../controllers/Session.controller.js'

const SessionResolver = {
  Query: {
    getOneSession: SessionController.getOneSession,
    getAllSessions: SessionController.getAllSessions,
  },
  Mutation: {
    createSession: SessionController.createSession,
  }
}

export default SessionResolver