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
          <img src={item.Image[index]} alt="" />
          <div className='content'>
            <p>{item.Title}</p>
            <p>{item.Status}</p>
            <p>{item.Paragrap}</p>
            <button className='w-[60px] h-[50px]' onClick={() => window.open(item.Paragraph)} >More Stories</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;


