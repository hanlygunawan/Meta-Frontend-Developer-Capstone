import React from "react";
import { Link } from "react-router-dom";
import bannerImg from "../images/restauranfood.jpg";

const Header = () => {
  return (
    <header className="header">
      <section>
        {/* banner text */}
        <div className="banner">
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>
          <p>
            Little Lemon is a cozy, Mediterranean-inspired restaurant located in
            Chicago. Known for its vibrant ambiance and fresh, flavorful dishes,
            it serves a variety of Mediterranean and American fusion cuisine.
          </p>
          <Link to="/booking">
            <button aria-label="On Click">Reserve Table</button>
          </Link>
        </div>

        {/* banner image */}
        <div className="banner-img">
          <img src={bannerImg} alt="banner img" />
        </div>
      </section>
    </header>
  );
};

export default Header;
