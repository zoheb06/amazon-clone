import React from 'react'
import "./Home.css";
import Product from "./Product";

function Home() {
    return (
        <div className="home">
            <div className="home__container">
            <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home__row">
            <Product
            id="2345678"
            title="Virat Kohli’S Wedding Vintage Benarasi Pattern Sherwani"
            price={1.999}
            image="https://www.zakarto.com/wp-content/uploads/2019/08/9025402651.jpg"
            rating={4} />

            <Product
            id="2345688"
             title="Echo Dot (3rd Gen) – Smart speaker with Alexa (White)"
             price={6.999}
             image="https://5.imimg.com/data5/XQ/CM/RW/SELLER-82344205/amazon-echo-plus-500x500.jpg"
             rating={5} />
    
        </div>

        <div className="home__row">
        <Product 
        id="2345698"
        title="PureMe 100% Linen Reusable N95 Anti Pollution Mask with 2 Activated Carbon Filters"
        price={458}
        image="https://cdn.vox-cdn.com/thumbor/a7YFRQeSp8J_J3788z2bFu9vSI0=/0x0:2180x1092/1200x800/filters:focal(916x372:1264x720)/cdn.vox-cdn.com/uploads/chorus_image/image/67311270/Screen_Shot_2020_08_28_at_1.58.02_PM.0.png" 
        rating={4}   />

        <Product
        id="23456108"
         title="Oneplus 7T PRO Haze Blue (8GB RAM+256GB Storage)"
         price={43.999}
        image="https://i.pinimg.com/originals/e3/a1/96/e3a196b9e3403803af60f0cce9260f23.jpg" 
         rating={4}  />
        <Product
        id="23456208"
         title="boAt Bassheads 900 On Ear Wired Headphones(Carbon Black)"
         price={749}
         image="https://images-na.ssl-images-amazon.com/images/I/61US9yCTRJL._SL1500_.jpg" 
         rating={5} />
            {/*product */}
            {/*product */}
            {/*product */}
            
        </div>

        <div className="home__row">
        <Product 
        id="23456308"
         title="LG 139 cm (55 inches) 4K Ultra HD Smart OLED TV 55BXPTA (Dark Steel Silver) (2020 Model)"
          price={9.999}
         image="https://image-us.samsung.com/SamsungUS/home/televisions-and-home-theater/tvs/uhd-tv/ru7300/gallery/01_RU7300-L-Perspective-Black-031519.jpg?$product-details-jpg$" 
         rating={5}/>
            {/*product */}
            
        </div>
            </div>
            
        </div>
    )
}

export default Home
