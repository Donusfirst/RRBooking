import React, { useEffect, useRef, useState } from 'react'

const SlideImages = () => {
    const data = [
            {
              id: 1,
              imgUrl: 'Images/imagen-1.jpg',
            },
            {
              id: 2,
              imgUrl: 'Images/imagen-2.jpg',
            },
            {
              id: 3,
              imgUrl: 'Images/imagen-3.jpg',
            },
            {
              id: 4,
              imgUrl: 'Images/imagen-4.jpg',
            },
            {
              id: 5,
              imgUrl: 'Images/imagen-5.jpg',
            },
          ];
    const listRef = useRef();
    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(() => {
        const listNode = listRef.current;
        const imgNode = listNode.querySelectorAll("li > img")[currentIndex];
    if (imgNode) {
      imgNode.scrollIntoView({
        behavior: "smooth"
      });
    }
    }, [currentIndex]);

    const scrollToImage = (direction) => {
        if (direction === 'prev') {
         setCurrentIndex((CurrentIndex) => {
         return CurrentIndex === 0 ? data.length - 1 : CurrentIndex - 1;
         });
    } else {
        setCurrentIndex((CurrentIndex) => {
        return CurrentIndex === data.length - 1 ? 0 : CurrentIndex + 1;
      });
    }
  };
  
  return (
    <div className="main-container" >
      <div className="slider-container">
        <div className='leftArrow' onClick={() => scrollToImage('prev')}>&#10092;</div>
        <div className='rightArrow' onClick={() => scrollToImage('next')}>&#10093;</div>
        <div className="container-images">
          <ul ref={listRef}>
            {
              data.map((item) => {
                return <li key={item.id}>
                  <img src={item.imgUrl} alt="" width={1500} height={300} />
                </li>
              })
            }
          </ul>
        </div>
      </div>
    </div >
  )
}

export default SlideImages