import React from 'react'; 
import "./BannerItem.css"

const BannerItem = ({banner}) => {
    const{id,prev,next,image}=banner;
    console.log(banner);

    // image: img6,
    //   prev: 5,
    //   id: 6,
    //   next: 1
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
        <div className='slide-image'>
          <img src={image} alt="" className="w-full rounded-xl" />
        </div>

        <div className="absolute flex justify-end transform -translate-y-1/2 left-10 top-1/4">
          <h1 className='text-6xl text-white'>
            Affordable <br /> Price For Car<br /> Servicing
          </h1>
        </div>
        <div className="absolute w-1/3 flex justify-end transform -translate-y-1/2 left-10 top-1/2">
          <p className='text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
        </div>
        <div className="absolute w-1/3 flex justify-start transform -translate-y-1/2 left-10
      bottom-1/4">
          <button className="btn btn-outline btn-secondary">Button</button>
          <button className="btn btn-outline btn-warning">Warning</button>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href={`#slide${prev}`} className="btn btn-circle mr-3">❮</a>
          <a href={`#slide${next}`} className="btn btn-circle">❯</a>
        </div>
      </div>

    );
};

export default BannerItem;