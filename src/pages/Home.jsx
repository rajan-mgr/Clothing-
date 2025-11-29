import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";
import pic1 from "../assets/pic1.png";
import pic2 from "../assets/homephoto2.webp";
import pic3 from "../assets/home3.webp";


function Home() {
  return (
    <div className="home-info">
      <div className="home-content">
        {/* Left: Text */}
        <div className="home-text">
          <h2>
            Experience the height of fashion with our exquisite designer pieces.
          </h2>
          <p>
            Where style, sophistication, exclusivity is the forefront of our
            collection. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repellat quaerat nostrum quia nam earum, libero, expedita impedit
            delectus provident quo eveniet.
          </p>
          <Link to="/men">
            <button className="home-btn">Discover Our Products</button>
          </Link>
        </div>

        <div className="home-images">
          <img src={pic1} alt="Fashion 1" className="img1" />
          <img src={pic2} alt="Fashion 2" className="img2" />
          <img src={pic3} alt="Fashion 3" className="img3" />
        </div>
      </div>
    </div>
  );
}

export default Home;
