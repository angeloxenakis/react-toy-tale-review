import React from "react";

function ToyForm({ renderNewToy }) {

  const createToy = (e) => {
    e.preventDefault()
    // console.log(e.target.name.value)
    // console.log(e.target.image.value)

    fetch("http://localhost:3000/toys", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        name: e.target.name.value,
        image: e.target.image.value,
        likes: 0,
      })
    })
    .then(res => res.json())
    .then(newToy => renderNewToy(newToy))
  }

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={(e) => createToy(e)}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
