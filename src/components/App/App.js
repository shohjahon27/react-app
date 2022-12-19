import { Component } from "react";
import Appfilter from "../Appfilter/Appfilter";
import Appinfo from "../Appinfo/Appinfo";
import MovieList from "../MovieList/MovieList";
import MoviesAddForm from "../MoviesAddForm/MoviesAddForm";
import Searchpanel from "../Searchpanel/Searchpanel";
import { v4 as uuidv4 } from "uuid";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: "Ertugrul", viewers: 890, increase: false, like: false, id: 1 },
        {
          name: "Empire of Usman",
          viewers: 54,
          increase: false,
          like: false,
          id: 2,
        },
        { name: "Omar", viewers: 784, increase: false, like: false, id: 3 },
      ],
      term: "",
    };
  }

  onDelete = (id) => {
    this.setState(({ data }) => ({ data: data.filter((c) => c.id !== id) }));
  };

  addForm = (item) => {
    const newItem = {
      name: item.name,
      viewers: item.viewers,
      id: uuidv4(),
      increase: true,
      like: true,
    };
    this.setState(({ data }) => {
      const newArr = [...data, { ...item, newItem }];
      return {
        data: newArr,
      };
    });
  };

  onToggleIncrease = (id) => {
    this.setState(({ data }) => {
      const newArr = data.map((item) => {
        if (item.id === id) {
          return { ...item, increase: !item.increase };
        }
        return item;
      });
      return {
        data: newArr,
      };
    });
  };

  onToggleLike = (id) => {
    this.setState(({ data }) => {
      const newArr = data.map((item) => {
        if (item.id === id) {
          return { ...item, like: !item.like };
        }
        return item;
      });
      return {
        data: newArr,
      };
    });
  };

  SearchHandler = (arr, term) => {
    if (arr.length === 0) {
      return arr;
    }
    return arr.filter((item) => item.name.toLowerCase().indexOf(term) > -1);
  };

  updateTermHandler = ( term ) => { 
    this.setState( { term })
  }

  render() {
    const { data, term } = this.state;
    const allMoviesCount = data.length;
    const increaseMovieCount = data.filter((m) => m.increase).length;
    const visibleDate = this.SearchHandler(data, term);
    return (
      <div className="App font-monospace">
        <div className="content">
          <Appinfo
            allMoviesCount={allMoviesCount}
            increaseMovieCount={increaseMovieCount}
          />
          <div className="Searchpanel">
            <Searchpanel updateTermHandler={this.updateTermHandler} />
            <Appfilter />
          </div>
          <MovieList
            onToggleIncrease={this.onToggleIncrease}
            onToggleLike={this.onToggleLike}
            data={visibleDate}
            onDelete={this.onDelete}
          />
          <MoviesAddForm addForm={this.addForm} />
        </div>
      </div>
    );
  }
}

export default App;
