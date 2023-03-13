import React, { Component, useEffect } from 'react';
import Carousel from 'react-elastic-carousel';

function CarouselPreview({ Images }) {

  const items = [
    { id: 1, title: 'item #1' },
    { id: 2, title: 'item #2' },
    { id: 3, title: 'item #3' },
    { id: 4, title: 'item #4' },
    { id: 5, title: 'item #5' }
  ]

  useEffect(() => {
    console.log(Images)
  }, [Images])

  return (
    <Carousel>
      {Images.map((image) => (
        <img src={image.preview} srcSet={image.preview} 
        height="500px"
        />
      ))}
    </Carousel>
  );
}

export default CarouselPreview;