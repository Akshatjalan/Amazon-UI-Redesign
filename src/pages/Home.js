import React from "react";
import "../styles/Home.css";
import iphonePng from "../assets/iphoneBlack.jpg";
import watchPng from "../assets/appleWatch.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import userPng from "../assets/user.png";
import orderPng from "../assets/order_package.svg";
import mobilePng from "../assets/mobile.png";
import kitchenPng from "../assets/kitchen.png";

function Home() {
  return (
    <div>
      <div className="heroContainer">
        <div className="heroContainerLeft">
          <div className="heroHeading">SHOP MOBILES & ACCESSORIES</div>
          <div className="heroDesc">
            Shop laptops, desktops, monitors, tablets, PC gaming, hard drives
            and storage, Accessories and more
          </div>
          <button className="heroButton">Explore all Products</button>
        </div>
        {/* <div className="heroContainerRight">
          <h4>iPhone 15 Pro 512 GB</h4>
          <img
            className="heroImg"
            src={mobilePng}
            height="
            440px"
            alt="headphone"
          />
        </div> */}
        <Swiper
          spaceBetween={40}
          slidesPerView={1.6}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <div className="swiperCard">
              <div className="cardDetails">
                <div className="cardCompany">Apple</div>
                <div className="cardHeading">iPhone 15 Pro 128 GB</div>
                <div className="cardPrice">₹ 1,30,990</div>
              </div>
              <img
                className="heroImg"
                src={iphonePng}
                height="
            440px"
                alt="headphone"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiperCard">
              <div className="cardDetails">
                <div className="cardCompany">Apple</div>
                <div className="cardHeading">Watch Ultra 2 Smartwatch</div>
                <div className="cardPrice">₹ 89,900</div>
              </div>
              <img
                className="heroImg"
                src={watchPng}
                height="
            380px"
                alt="headphone"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiperCard">
              <div className="cardDetails">
                <div className="cardCompany">Apple</div>
                <div className="cardHeading">iPhone 15 Pro 128 GB</div>
                <div className="cardPrice">$999</div>
              </div>
              <img
                className="heroImg"
                src={iphonePng}
                height="
            380px"
                alt="headphone"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="accountContainer">
        <div className="accountItems">
          <div className="itemCard">
            <img width="92px" src={userPng} alt="profileDeals" />
            <div>
              <div> Hi, Akshat</div>
              <div> recommendations for you</div>
            </div>
          </div>
          <div className="itemCard">
            <img width="96px" src={orderPng} alt="ordersDeals" />
            <div>
              <div>Your Orders</div>
              <div>View your Orders</div>
            </div>
          </div>
          <div className="itemCard">
            <img width="100px" src={mobilePng} alt="mobileDeals" />
            <div>
              <div>Mobiles and electronics</div>
              <div> Big sale upto 40% off</div>
            </div>
          </div>
          <div className="itemCard">
            <img width="68px" src={kitchenPng} alt="homeDeals" />
            <div>
              <div> Home and Kitchen</div>
              <div> Big sale 30% off</div>
            </div>
          </div>
        </div>
      </div>

      <div className="categoryHeaders">
        <div>Shop by categories →</div>
      </div>
      <div className="categoryContainer">
        <div className="categoryItems">
          <div className="categoryitemCard">
            <img width="92px" src={userPng} alt="profileDeals" />
            <div>
              <div> Hi, Akshat</div>
              <div> recommendations for you</div>
            </div>
          </div>
          <div className="categoryitemCard">
            <img width="96px" src={orderPng} alt="ordersDeals" />
            <div>
              <div>Your Orders</div>
              <div>View your Orders</div>
            </div>
          </div>
          <div className="categoryitemCard">
            <img width="100px" src={mobilePng} alt="mobileDeals" />
            <div>
              <div>Mobiles and electronics</div>
              <div> Big sale upto 40% off</div>
            </div>
          </div>
          <div className="categoryitemCard">
            <img width="68px" src={kitchenPng} alt="homeDeals" />
            <div>
              <div> Home and Kitchen</div>
              <div> Big sale 30% off</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
