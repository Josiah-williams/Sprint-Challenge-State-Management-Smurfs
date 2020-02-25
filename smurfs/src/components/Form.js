import React, { useState } from "react";
import { connect } from "react-redux";
import { postSmurfs } from "../state/actionCreators";

export function SmurfForm({ postSmurfs }) {
  const [smurfs, setSmurfsValues] = useState({ name: "", age: "", height: "" });
  const changeHandler = event => {
    setSmurfsValues({
      ...smurfs,
      [event.target.name]: event.target.value
    });
  };
  const submitHandler = event => {
    event.preventDefault();
    console.log(smurfs);
    if (!smurfs.name || !smurfs.age || !smurfs.height) {
      return alert("!Please fill in the boxes!");
    }
    postSmurfs(smurfs);
  };
return (
     <form>
            <label>Name: </label>
          <input
            type="text"
            name="name"
            value={smurfs.name}
            placeholder="type name"
            onChange={changeHandler}
          />
          <label>Age: </label>
          <input
            type="number"
            name="age"
            value={smurfs.age}
            placeholder="type age"
            onChange={changeHandler}
          />
          <label>Height: </label>
          <input
            type="number"
            name="height"
            value={smurfs.height}
            placeholder="type height"
            onChange={changeHandler}
          />
          <button type = "submit"onClick={submitHandler}>Add Smurf</button>
        </form>
)
}
export default connect(state => state, { postSmurfs })(SmurfForm);