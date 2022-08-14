import { actions } from "./Stock.actions";

type Action = {
  type: keyof typeof actions;
  payload?: any;
}

export default function mathReducer(state = 0, action:Action ){
  switch(action.type){
    case actions.INCREMENT:
      return state + 1
    case actions.DECREMENT:
      return state - 1
    default:
      return state
  }
}