import PlanController from '../controllers/Plan.controller.js'

const PlanResolver = {
  Query: {
    getOnePlan: PlanController.getOnePlan,
    getAllPlans: PlanController.getAllPlans,
  },
  Mutation: {
    createPlan: PlanController.createPlan,
    updatePlan: PlanController.updatePlan,
  }
}

export default PlanResolver