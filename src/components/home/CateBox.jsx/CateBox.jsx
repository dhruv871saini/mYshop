import React from 'react';
import './catebox.css';

export default function CateBox() {
  return (
    <section className="w-100">
      <div className="container-fluid">
        <div className="row p-0 m-0">
          <div className="one col-lg-4 col-md-4 col-12 p-0">
            <img className="img-fluid img-size" src={`${process.env.PUBLIC_URL}/images/tshirt.jpg`} alt="Extreme Rare Sneakers" />
            <div className="details">
              <h2>Extreme Rare Fashion <br/>Design</h2>
              <button className="text-uppercase">Shop Now</button>
            </div>
          </div>
          <div className="one col-lg-4  col-md-4 p-0">
            <img className="img-fluid " src={`${process.env.PUBLIC_URL}/images/istockphoto-1277517094-612x612.jpg`} alt="Awesome Blank Outfit sportware" />
            <div className="details">
              <h2>Awesome Gold and <br/> Diamond Jewellary</h2>
              <button className="text-uppercase">Shop Now</button>
            </div>
          </div>
          <div className="one col-lg-4 col-md-4 p-0">
            <img className="img-fluid img-size" src={`${process.env.PUBLIC_URL}/images/pexels-photo-190819.jpeg`} alt="Watch Up To 50% Off" />
            <div className="details">
              <h2>Watch Up To 50% Off</h2>
              <button className="text-uppercase">Shop Now</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
