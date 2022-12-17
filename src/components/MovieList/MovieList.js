import "./MovieList.css";
import MovieListItem from "../MovieListItem/MovieListItem";

const MovieList = ({ data, onDelete }) => {
  return (
    <ul className="MovieList">
      {data.map(item => (
        <MovieListItem
          key={item.id}
          name={item.name}
          viewers={item.viewers}
          increase={ item.increase }
          onDelete={ () => onDelete(item.id) }
        />
      ))}
    </ul>
  );
};

export default MovieList;
