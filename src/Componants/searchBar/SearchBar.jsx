import React, { useState } from "react";
import "./SearchBar.scss";
import { Link } from "react-router-dom";

const types = ["buy", "rent"];

const SearchBar = () => {
  const [qurey, setQurey] = useState({
    type: "buy",
    city: "",
    minPrice: 0,
    maxPrice: 0,
  });

  const switchType = (val) => {
    setQurey((prev) => ({ ...prev, type: val }));
  };

  const handleChange = (e) => {
    setQurey((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

// console.log(qurey)
  return (
    <div className="searchBar">
      <div className="typeBtn">
        {types.map((type1) => (
          <button
            name={type1}
            key={type1}
            onClick={() => switchType(type1)}
            className={qurey.type == type1 ? "active" : ""}
          >
            {type1}
          </button>
        ))}
      </div>

      <form action="">
        <input
          type="text"
          name="city"
          placeholder="city"
          onChange={handleChange}
        />
        <input
          type="number"
          name="minPrice"
          min={0}
          max={10000000}
          placeholder="Min price"
          onChange={handleChange}
        />
        <input
          type="number"
          name="maxPrice"
          min={0}
          max={10000000}
          placeholder="Max price"
          onChange={handleChange}
        />
        <button>
          <Link
            to={`/list/?city=${qurey.city}&type=${qurey.type}&minPrice=${qurey.minPrice}&maxprice=${qurey.maxPrice}`}
          >
            <img src="./public/search.png" alt="" />
          </Link>
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
