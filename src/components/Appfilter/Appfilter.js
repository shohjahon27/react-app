import "./Appfilter.css";

const Appfilter = ({ updateHandlerFilter, filter }) => {
  return (
    <div className="btn-group">
      {btnsArr.map((btn) => (
        <button
          key={btn.name}
          className={`btn ${filter === btn.name ? 'btn-primary' : 'btn-danger'}`}
          onClick={() => updateHandlerFilter(btn.name)}
          type="button"
        >
          {btn.label}
        </button>
      ))}
    </div>
  );
};

const btnsArr = [
  { name: "all", label: "Barcha kinolar" },
  { name: "popular", label: "sevimli kinolar" },
  { name: "mostViewed", label: "Eng ko'p ko'rilgan kinolar" },
];

export default Appfilter;
