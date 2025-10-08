import React from "react";

function SecondSection() {
  return (
    <div className="main-container-two">
      <div className="content">
        <div className="left-section-two">
          <div className="img-box small">
          <img src="media/images/one.png" alt="one"/>
        </div>
        <div className="img-box small">
          <img src="media/images/two.png" alt="two"/>
        </div>
        <div className="img-box medium">
          <img src="media/images/three.png" alt="three"/>
        </div>
        </div>

        <div className="right-section-two">
          <h3>
            Enjoy your time,
            <br />
            working
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam
            atque natus soluta, a veniam culpa impedit magni quisquam optio
            laborum quo quod non architecto amet repellat quaerat quidem
            officiis voluptatem.
          </p>
          <p style={{ color: "#0073e6" }}>See how it helps others →</p>
        </div>
      </div>
    </div>
  );
}

export default SecondSection;
