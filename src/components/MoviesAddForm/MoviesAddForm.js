import { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import "./MoviesAddForm.css";

class MoviesAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      views: "",
    };
  }

  changeHandlerInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  addFormHandler = (e) => {
    e.preventDefault()
    this.props.addForm( { name: this.state.name, viewers: this.state.views, id: uuidv4() } )
    this.setState( {
      name: '',
      views: '',
    })
  }

  render() {
    const { name, views } = this.state;
    return (
      <div className="MoviesAddForm">
        <h3>Yangi kino qo'shish</h3>
        <form
          className="add-form d-flex"
          onSubmit={this.addFormHandler}
        >
          <input
            type="text"
            className="form-control new-post-label"
            placeholder="Qanday kino?"
            onChange={this.changeHandlerInput}
            name="name"
            value={name}
          />
          <input
            type="number"
            className="form-control new-post-label"
            placeholder="necha marotaba ko'rilgan?"
            onChange={this.changeHandlerInput}
            name="views"
            value={views}
          />
          <button type="submit" className="btn btn-outline-dark">
            Qo'shish
          </button>
        </form>
      </div>
    );
  }
}

export default MoviesAddForm;
