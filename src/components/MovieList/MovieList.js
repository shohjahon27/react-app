import "./MovieList.css";
import MovieListItem from "../MovieListItem/MovieListItem";

const MovieList = ({ data, onDelete, onToggleIncrease, onToggleLike }) => {
  return (
    <ul className="MovieList">
      {data.map((item) => (
        <MovieListItem
          key={item.id}
          name={item.name}
          viewers={item.viewers}
          increase={ item.increase }
          like={ item.like }
          onDelete={() => onDelete(item.id)}
          onToggleIncrease={() => onToggleIncrease(item.id)}
          onToggleLike={() => onToggleLike(item.id)}
        />
      ))}
    </ul>
  );
};

export default MovieList;
