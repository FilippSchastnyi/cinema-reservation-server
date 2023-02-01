import SnackController from '../controllers/Snack.controller.js'

const SnackResolver = {
  Query: {
    getOneSnack: SnackController.getOneSnack,
    getAllSnacks: SnackController.getAllSnacks,
  },
  Mutation: {
    createSnack: SnackController.createSnack,
    updateSnack: SnackController.updateSnack,
  }
}

export default SnackResolver