import React from "react";

function SecondSection() {
  return (
    <div className="container mt-3 mb-3">
      <div className="row p-3">
        <div className="col-2">
          <img src="media/images/one.png"/>
        </div>
        <div className="col-2">
          <img src="media/images/two.png"/>
        </div>
        <div className="col-2 mt-5">
          <img src="media/images/three.png"/>
        </div>
        <div className="col-6 p-3 mt-5">
          <h3 className="fw-bold fs-1">
            Enjoy your time,
            <br />
            working
          </h3>
          <p className="text-muted mt-3">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam
            atque natus soluta, <br />a veniam culpa impedit magni quisquam
            optio laborum quo quod non architecto <br />
            amet repellat quaerat quidem officiis voluptatem.
          </p>
          <p className="mt-4" style={{ color: "#0073e6" }}>
            See how it help others →
          </p>
        </div>
      </div>
    </div>
  );
}

export default SecondSection;
