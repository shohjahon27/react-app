import './Appinfo.css';

const Appinfo = ({ allMoviesCount, increaseMovieCount }) => {
  return (
    <div className="Appinfo">
      <p className="fs-3 text-uppercase">
        Barcha kinolar soni: {allMoviesCount}
      </p>
      <p className="fs-4 text-uppercase">
        Sevimli kinolar: {increaseMovieCount}
      </p>
    </div>
  );
};

export default Appinfo;