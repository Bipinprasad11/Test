import React from "react";

function FourthSection(){
    return(
        <div className="container mt-5 mb-5">
      <div className="row p-3">
        <div className="col-6 p-3 mt-5">
          <h3 className="fw-bold fs-1">
            Improve work flow
          </h3>
          <p className="text-muted mt-3">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam
            atque natus soluta, <br />a veniam culpa impedit magni quisquam
            optio laborum quo quod non architecto <br />
            amet repellat quaerat quidem officiis voluptatem.
          </p>
          <p className="mt-4" style={{ color: "#0073e6" }}>
            Check the tools →
          </p>
        </div>
        <div className="col-6 p-">
          <img src="media/images/Fourth.png" />
        </div>
      </div>
    </div>
    );
}

export default FourthSection;