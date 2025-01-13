import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";
import iphonePng from "../assets/iphoneBlack.jpg";
import watchPng from "../assets/appleWatch.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import userPng from "../assets/userAvatar.png";
import orderPng from "../assets/order_package.svg";
import mobilePng from "../assets/mobile.png";
import kitchenPng from "../assets/kitchen.png";
import dogPng from "../assets/dog.png";
import laptopPng from "../assets/Laptop.png";
import beautyPng from "../assets/sneakers.png";
import toysPng from "../assets/toys.png";
import kitchenAppliancePng from "../assets/kitchenAppliances.png";
import shoes6Png from "../assets/Shoes 6.PNG";
import Products from "./Products";

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
          <Link to="/Products" className="allProductsButton">
            <button className="heroButton">
              <div>Explore all Products</div>
              <span>➜</span>
            </button>
          </Link>
        </div>

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
                <div className="cardHeading">Watch Ultra 2 Smartwatch</div>
                <div className="cardPrice">₹ 89,900.00</div>
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
                <div className="cardCompany">Nike</div>
                <div className="cardHeading">Nike Men's Air Max pulse</div>
                <div className="cardPrice">₹ 12,499.00</div>
              </div>
              <img
                className="heroImg"
                src={shoes6Png}
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
                <div className="cardHeading">iPhone 15 Pro 128 GB</div>
                <div className="cardPrice">₹ 1,30,990.00</div>
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
            <img width="50px" src={userPng} alt="profileDeals" />
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
            <div>All Clothing</div>
            <img width="400px" src={laptopPng} alt="profileDeals" />
          </div>
          <div className="categoryitemCard">
            <div>Sneakers & Shoes</div>
            <img width="300px" src={beautyPng} alt="profileDeals" />
          </div>
          <div className="categoryitemCard">
            <div>Bags & Backpacks</div>
            <img width="400px" src={kitchenAppliancePng} alt="profileDeals" />
          </div>
          <div className="categoryitemCard">
            <div>Hats & Caps</div>
            <img width="300px" src={toysPng} alt="profileDeals" />
          </div>
        </div>
      </div>

      <div className="productsHeaders">
        <div>Pick up where you left off</div>
        <div>→</div>
      </div>
      <Products type="Shoes" />

      <div className="bannerContainer">
        <div className="bannerContainerLeft">
          <div className="bannerHeading">AMAZON DELIVERS TO YOU</div>
          <div className="bannerDesc">
            Worldwide shipping. We ship to over 100 countries and regions, right
            to your doorstep.
          </div>
        </div>
        <div className="bannerImg">
          <img src={dogPng} alt="headphone" />
        </div>
      </div>

      <div className="productsHeaders">
        <div>Tops & T-Shirts Clothing</div>
      </div>
      <Products type="Tshirt" />

      <div className="productsHeaders">
        <div>Pants & Leggings Clothing</div>
      </div>
      <Products type="BottomWear" />

      <div className="productsHeaders">
        <div>All Our Products</div>
        <div>→</div>
      </div>
      <Products />
    </div>
  );
}

export default Home;
