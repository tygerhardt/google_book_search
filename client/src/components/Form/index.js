import React from "react";
import "./style.css";

function Form(props){
return (
  <div className="container">
  <form>
    <div className="form-group">
      <label htmlFor="search"><h2>Search by title or author</h2></label>
      <input
        onChange={props.handleInputChange}
        value={props.search}
        name="search"
        type="text"
        className="form-control"
        placeholder="Search a Book"
        id="search"
      />
      <button onClick={props.handleFormSubmit} className="btn badge-pill btn-outline-warning mt-3 ml-3 btn2">
        Search
        </button>
    </div>
  </form>
  </div>
);
}

export default Form;