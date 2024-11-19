import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';

function App() {
 const [people, setPeople] = useState([]);
 const [index, setIndex] = useState(0);

 useEffect(() => {
    setPeople(data);
 }, []);

 const nextPerson = () => {
    setIndex(index < people.length - 1 ? index + 1 : index);
 };

 const prevPerson = () => {
    setIndex(index > 0 ? index - 1 : index);
 };

 if (!Array.isArray(people) || people.length === 0) {
    return <div>Loading...</div>;
 }

 const { id, image, name, title, quote } = people[index];

 return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span>reviews
        </h2>
      </div>
      <div className="section-center">
        <article key={id}>
          <img src={image} alt={name} className="person-img" />
          <h4>{name}</h4>
          <p className="title">{title}</p>
          <p className="text">{quote}</p>
          <FiChevronLeft className="arrow prev" onClick={prevPerson} />
          <FiChevronRight className="arrow next" onClick={nextPerson} />
        </article>
      </div>
    </section>
 );
}

export default App;