import { Component } from "react";
import Appfilter from "../Appfilter/Appfilter";
import Appinfo from "../Appinfo/Appinfo";
import MovieList from "../MovieList/MovieList";
import MoviesAddForm from "../MoviesAddForm/MoviesAddForm";
import Searchpanel from "../Searchpanel/Searchpanel";
import {v4 as uuidv4} from 'uuid'
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: "Ertugrul", viewers: 890, increase: false, id: 1 },
        { name: "Empire of Usman", viewers: 54, increase: false, id: 2 },
        { name: "Omar", viewers: 784, increase: true, id: 3 },
      ],
    };
  }

  onDelete = (id) => {
    this.setState(({ data }) => ({ data: data.filter((c) => c.id !== id) }));
  };

  addForm = ( item) => {
    this.setState( ( { data } ) => {
      const newArr = [...data, {...item, id: uuidv4()}]
      return {
        data: newArr,
      }
    } )
  }

  render() {
    const { data } = this.state;
    return (
      <div className="App font-monospace">
        <div className="content">
          <Appinfo />
          <div className="Searchpanel">
            <Searchpanel />
            <Appfilter />
          </div>
          <MovieList data={data} onDelete={this.onDelete} />
          <MoviesAddForm addForm={ this.addForm} />
        </div>
      </div>
    );
  }
}

export default App;
