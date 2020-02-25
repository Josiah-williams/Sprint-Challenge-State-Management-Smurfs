import * as types from './actionTypes'
// STEP-1 DESIGN APPLICATION STATE
// [
  //   {
  //     name: "Brainey",
  //     age: 200,
  //     height: "5cm",
  //     id: 0
  //   }
  // ];

  const initialState = {
    smurfs: []
  };
// const initialState2 = []


// export function getsmurfReducer(state = initialState2, action) {
//   switch (action.type) {
//     case types.GET_SMURFS_SUCCESS:
//       return action.payload;
//     default:
//       return state
//     }    
// }

//STEP-3 CREATE ONE REDUCER FUNCTION PER SLICE OF STATE
export function smurfsReducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_SMURFS:
      return {
        ...state,
        isFetching:true,
        error: ''
      };
    case types.GET_SMURFS_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        isFetching:false,
        smurfs: action.payload,
        error: ''
      };
    case types.GET_SMURFS_FAIL:
      return {
        ...state,
        isFetching:false,
        error:action.payload
      };
    case types.POST_SMURFS:
      return {
        ...state,
        smurfs: action.payload,
        isFetching:true,
        error: ''
      };
    case types.POST_SMURFS_SUCCESS:
      return {
        ...state,
        isFetching:false,
        smurfs: action.payload,
        error: ''
      };
    case types.POST_SMURFS_FAILURE:
      return {
        ...state,
        isFetching:false,
        error:action.payload
      };
    default:
      return state;
    }
  }

  export default smurfsReducer