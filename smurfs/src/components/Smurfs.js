import React, {useState, useEffect} from 'react';
import { connect } from "react-redux";
import  * as actionCreators  from "../state/actionCreators";

export function Smurf({ getSmurfs, smurfs }) {
    useEffect(() => {
      getSmurfs();
    }, []);
    return (
      <>
        <h1>smurf Village</h1>
        {
          
           smurfs.map(smurf => (
              <div key={smurf.id}>
                <div>{smurf.name}</div>
                <div>
                  <div> {smurf.age}</div>
                  <div>{smurf.height}</div>
                </div>
              </div>
            ))
       }
        {}
      </>
    );
  }
   export default connect(
    function mapStateToProps(state) {
      return {
        smurfs: state.smurfs.smurfs
      };
    },
    actionCreators
  )(Smurf);
  