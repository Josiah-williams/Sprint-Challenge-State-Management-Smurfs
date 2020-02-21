import * as types from './actionTypes'
// STEP-1 DESIGN APPLICATION STATE
// {
//   formValues: {     // SLICE 1
//     name: '',
//     age: '',

//   },
//   friends: [        // SLICE 2
//     { id: someId, name: '', age: '' , height: '' },
//     { id: anotherId, name: '', age: '', height:'' },
//   ],

// STEP-3 CREATE ONE REDUCER FUNCTION PER SLICE OF STATE
const initialStateForm = { fname: '', lname: '' }
  export function formReducer(state = initialStateForm, action) {
    switch (action.type) {
        case types.INPUT_CHANGE:
          return {
            ...state,
            [action.payload.inputName]: action.payload.inputValue
          }
        case types.RESET_INPUTS:
          return initialStateForm
        default:
          return state
      }
    }


  const initialStatesmurfs = []
export function smurfsReducer(state = initialStatesmurfs, action) {
  switch (action.type) {
    case types.FETCH_SMURFS_START:
      return state
    case types.POST_SMURFS_START:
      return state
    case types.POST_SMURFS_SUCCESS_SMURFS:
      return state.concat(action.payload) // newly created smurf
    case types.SET_FETCHED_SMURFS:
      return action.payload // all smurfs from API
      return state.map(smurfs => {
        if (action.payload.id === smurfs.id) {
          return action.payload
        }
        return smurfs
      })
    default:
      return state
  }
}