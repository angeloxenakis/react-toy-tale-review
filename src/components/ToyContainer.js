import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys, renderUpdatedToy }) {
  return (
    <div id="toy-collection">{toys.map(toy => <ToyCard toy={toy} renderUpdatedToy={renderUpdatedToy}/>)}</div>
  );
}

export default ToyContainer;
