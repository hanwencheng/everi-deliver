import _ from "lodash"
import types from './actionTypes'


const user = (state = {}, action) => {
  switch (action.type) {
    case types.deliver.request:
      console.log("request token in user")
      return {...state,

      }
    default:
      return state
  }
}

export default user