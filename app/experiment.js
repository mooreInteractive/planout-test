import PlanOut from 'planout';

export default class Experiment extends PlanOut.Experiment {

  configureLogger() {
    return;
    // configure logger
  }

  log(event) {
      console.log(event);
    // log the event somewhere
  }

  previouslyLogged() {
    // check if we’ve already logged an event for this user
    // return this._exposureLogged; is a sane default for client-side experiments
  }

  setup() {
    // set experiment name, etc.
  }

  /*
  This function should return a list of the possible parameter names that the assignment procedure may assign.
  You can optionally override this function to always return this.getDefaultParamNames() which will analyze your program at runtime to determine what the range of possible experimental parameters are. Otherwise, simply return a fixed list of the experimental parameters that your assignment procedure may assign.
  */

  getParamNames() {
    return this.getDefaultParamNames();
  }

  assign(params, args) {
    params.set('foo', new PlanOut.Ops.Random.UniformChoice({choices: ['A', 'B'], weights: [8, 1, 1], 'unit': args.userId}));
  }

}
