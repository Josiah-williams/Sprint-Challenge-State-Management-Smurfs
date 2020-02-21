import * as types from './actionTypes'
import axios from 'axios'


const smurfsAPI = 'http://localhost:3333/smurfs'
// STEP-7 MAKE ACTION CREATORS THE COMPONENTS CAN USE DIRECTLY
export function changeInput({ inputName, inputValue }) {
    return {
      type: types.INPUT_CHANGE,
      payload: { inputName, inputValue }
    }
  }

  export const getSmurfs = () => dispatch => {
    dispatch({ type: FETCH_SMURFS_START });
    axios
      .get('http://localhost:3333/smurfs')
      .then(res => {
          console.log(res.data);
        dispatch({ type: FETCH_SMURFS_SUCCESS, payload: res.data })
      }
      )
      .catch(err => dispatch({ type: FETCH_SMURFS_FAIL, payload: err }));
  }; 

  export const postNewSmurfs = ({ name, age, height }) => dispatch => {
    dispatch({ type: types.POST_SMURFS_START })
    dispatch({ type: types.POST_SMURFS_SUCCESS })
    dispatch({ type: types.POST_SMURFS_FAIL})

    axios.post(smurfsAPI, {
        name,
        age,
        height
      })

      .then(res => {
        // we have the newly created smurfs inside res.data
        dispatch({ type: types.SET_POSTED_SMURFS, payload: res.data })
      })
      .catch(err => console.log(err)); 
      }  
  