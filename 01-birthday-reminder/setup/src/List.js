// List.js
import React from 'react';

const List = ({ people }) => {
  // Check if people is not defined or not an array
  if (!people || !Array.isArray(people)) {
    return <p>No people data available</p>; // or any other fallback UI
  }

  return (
    <>
      {people.map((person) => {
        const { id, name, age, image } = person;
        return (
          <article key={id} className='person'>
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{age} years</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
