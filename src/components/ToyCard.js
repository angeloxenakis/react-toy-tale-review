import React from "react";

function ToyCard({ toy, renderUpdatedToy }) {

  const handleLikeClick = () => {

    fetch(`http://localhost:3000/toys/${toy.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        likes: toy.likes + 1
      })
    })
    .then(res => res.json())
    .then(updatedToy => renderUpdatedToy(updatedToy))
  }

  return (
    <div className="card">
      <h2>{toy.name}</h2>
      <img
        src={toy.image}
        alt={toy.name}
        className="toy-avatar"
      />
      <p>{toy.likes} Likes </p>
      <button className="like-btn" onClick={() => handleLikeClick()}>Like {"<3"}</button>
      <button className="del-btn">Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
