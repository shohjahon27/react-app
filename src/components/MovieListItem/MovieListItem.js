import "./MovieListItem.css";
import { Component } from "react";

class MovieListItem extends Component {
  constructor(props) {
    super(props);
    this.state = { increase: false, like: false, trash: false };
  }

  onIncrease = () => {
    this.setState(({ increase }) => ({
      increase: !increase,
    }));
  };

  onLike = () => {
    this.setState(({ like }) => ({
      like: !like,
    }));
  };


  render() {
    const { name, viewers, onDelete } = this.props;
    const { increase, like } = this.state;

    return (
      <li
        className={`list-group-item d-flex justify-content-between ${
          increase && "increase"
        } ${like && "like"}`}
      >
        <span onClick={this.onLike} className="list-group-item-label">
          {name}
        </span>
        <input
          type="number"
          className="list-group-item-input"
          defaultValue={viewers}
        />
        <div className="d-flex justify-content-center align-items-center">
          <button
            onClick={this.onIncrease}
            type="button"
            className="btn-cookie btn-sm "
          >
            <i className="fas fa-cookie"></i>
          </button>

          <button
            onClick={onDelete}
            type="button"
            className="btn-trash btn-sm "
          >
            <i className="fas fa-trash"></i>
          </button>
          <i className="fas fa-star"></i>
        </div>
      </li>
    );
  }
}

export default MovieListItem;
