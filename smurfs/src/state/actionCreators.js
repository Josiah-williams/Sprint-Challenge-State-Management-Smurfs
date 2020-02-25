import * as types from './actionTypes'
import axios from 'axios'

const smurfsAPI = 'http://localhost:3333/smurfs'
// STEP-7 MAKE ACTION CREATORS THE COMPONENTS CAN USE DIRECTLY
export const getSmurfs = () => dispatch => {
    dispatch({ type:types.GET_SMURFS });
    axios
      .get('http://localhost:3333/smurfs')
      .then(res => {
          console.log(res.data);
        dispatch({ type: types.GET_SMURFS_SUCCESS, payload: res.data })
      }
      )
      .catch(err => dispatch({ type: types.GET_SMURFS_FAIL, payload: err }));
  }; 
  export const postSmurfs = addSmurf => dispatch => {
 
    dispatch({ type: types.POST_SMURFS })
    axios
    .post("http://localhost:3333/smurfs", addSmurf)
    .then(response => {
      dispatch({
        type: types.POST_SMURFS_SUCCESS,
        payload: response.data
      });
    })
    .catch(error => {
      console.log(error.response)
      dispatch({
        type: types.POST_SMURFS_FAILURE,
        payload: error.response.data.Error
      });
    });
  };
  