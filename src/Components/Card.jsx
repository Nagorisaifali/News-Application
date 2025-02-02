import React from 'react';

const Card = ({ data }) => {
  console.log("Received data:", data); // Debugging

  if (!Array.isArray(data)) {
    // console.error("Error: data is not an array", data);
    return <p>No data available</p> ;
  }
  
  

  return (
    <div className='cardContainer'>
      {data.map((item, index) => (
        <div key={index} className='card'>
          <img src={item.urlToImage} alt="" />
          <div className='content'>
            <a className='title'  onClick={() => window.open(item.url)}>{item.title}</a>
            <p>{item.description}</p>
            <button onClick={() => window.open(item.url)} >Read More</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;


