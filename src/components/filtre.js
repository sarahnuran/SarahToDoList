import React from "react";

class Filtre extends React.Component {
  render() {
    return (
      <div className="filtre">
        <button type="button" name="all" className="btn btn-primary">
          ALL
        </button>
        <button type="button" name="done-only" className="btn btn-success">
          DONE ONLY
        </button>
        <button type="button" name="not-done-only" className="btn btn-dark">
          NOT DONE ONLY
        </button>
      </div>
    );
  }
}

export default Filtre;