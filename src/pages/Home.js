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
import dogPng from "../assets/dog.png";
import laptopPng from "../assets/Laptop.png";
import beautyPng from "../assets/sneakers.png";
import toysPng from "../assets/toys.png";
import kitchenAppliancePng from "../assets/kitchenAppliances.png";
import shoes1Png from "../assets/Shoes 1.png";
import shoes2Png from "../assets/Shoes 2.png";
import shoes3Png from "../assets/Shoes 3.png";
import shoes4Png from "../assets/Shoes 4.png";
import shoes5Png from "../assets/Shoes 5.png";
import shoes6Png from "../assets/Shoes 6.PNG";
import shoes7Png from "../assets/Shoes 7.png";
import tshirt1Png from "../assets/t-shirt1.png";
import tshirt2Png from "../assets/t-shirt2.png";
import tshirt3Png from "../assets/t-shirt3.png";
import tshirt4Png from "../assets/t-shirt4.png";
import shorts1Png from "../assets/shorts1.png";
import trousers1Png from "../assets/trousers1.png";


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
          <button className="heroButton">
            <div>Explore all Products</div>
            <span>➜</span>
          </button>
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
            <div>Computers and Accessories</div>
            <img width="400px" src={laptopPng} alt="profileDeals" />
          </div>
          <div className="categoryitemCard">
            <div>Sneakers and shoes</div>
            <img width="300px" src={beautyPng} alt="profileDeals" />
          </div>
          <div className="categoryitemCard">
            <div>kitchen Appliances</div>
            <img width="400px" src={kitchenAppliancePng} alt="profileDeals" />
          </div>
          <div className="categoryitemCard">
            <div>Toys and Games</div>
            <img width="300px" src={toysPng} alt="profileDeals" />
          </div>
        </div>
      </div>

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
        <div>Pick up where you left off</div>
      </div>
      <div className="productsContainer">
        <div className="productsItems">
          

          <div className="productsitemCard">
            <div className="productImg">
              <img height="250px" src={shoes7Png} alt="profileDeals" />
            </div>
            <div className="productBrand">Nike</div>
            <div className="productName">Nike Dunk High Retro series</div>
            <div className="productPrice">₹ 9,495.00</div>
          </div>

          <div className="productsitemCard">
            <div className="productImg">
              <img height="250px" src={shoes5Png} alt="profileDeals" />
            </div>
            <div className="productBrand">Nike</div>
            <div className="productName">Nike Victory 2 Proto Athletics Spikes</div>
            <div className="productPrice">₹ 16,995.00</div>
          </div>

          <div className="productsitemCard">
            <div className="productImg">
              <img height="250px" src={shoes3Png} alt="profileDeals" />
            </div>
            <div className="productBrand">Nike</div>
            <div className="productName">Nike Phantom GX 2 Elite SE</div>
            <div className="productPrice">₹ 23,795.00</div>
          </div>

          <div className="productsitemCard">
            <div className="productImg">
              <img height="250px" src={shoes4Png} alt="profileDeals" />
            </div>
            <div className="productBrand">Nike</div>
            <div className="productName">Nike Air Max Plus Man series</div>
            <div className="productPrice">₹ 15,995.00</div>
          </div>

          <div className="productsitemCard">
            <div className="productImg">
              <img height="250px" src={shoes2Png} alt="profileDeals" />
            </div>
            <div className="productBrand">Nike</div>
            <div className="productName">Nike SB Zoom Janoski OG+ series</div>
            <div className="productPrice">₹ 8,595.00</div>
          </div>

          <div className="productsitemCard">
            <div className="productImg">
              <img height="250px" src={shoes1Png} alt="profileDeals" />
            </div>
            <div className="productBrand">Nike</div>
            <div className="productName">Nike G.T cut 3 Episode series</div>
            <div className="productPrice">₹ 17,495.00</div>
          </div>
        </div>
      </div>

      <div className="productsHeaders">
        <div>Amazon Top Sellers</div>
        <div>See more →</div>
      </div>
      <div className="productsContainer">
        <div className="productsItems">
          <div className="productsitemCard">
            <div className="productImg">
              <img height="250px" src={tshirt1Png} alt="profileDeals" />
            </div>
            <div className="productBrand">Men's T-shirt</div>
            <div className="productName">Hawai Sportswear Men's T-shirt</div>
            <div className="productPrice">₹ 1,195.00</div>
          </div>

          <div className="productsitemCard">
            <div className="productImg">
              <img height="250px" src={tshirt2Png} alt="profileDeals" />
            </div>
            <div className="productBrand">Men's Long-Sleeve T-Shirt</div>
            <div className="productName">Nike Sportswear Premium Essentials</div>
            <div className="productPrice">₹ 2,695.00</div>
          </div>

          <div className="productsitemCard">
            <div className="productImg">
              <img height="250px" src={shorts1Png} alt="profileDeals" />
            </div>
            <div className="productBrand">Men's shorts</div>
            <div className="productName">Running division Men's shorts</div>
            <div className="productPrice">₹ 1,495.00</div>
          </div>

          <div className="productsitemCard">
            <div className="productImg">
              <img height="250px" src={tshirt3Png} alt="profileDeals" />
            </div>
            <div className="productBrand">Girl's Crop Top</div>
            <div className="productName">Hydrangeas/White Girls Crop Top</div>
            <div className="productPrice">₹ 1,995.00</div>
          </div>

          <div className="productsitemCard">
            <div className="productImg">
              <img height="250px" src={trousers1Png} alt="profileDeals" />
            </div>
            <div className="productBrand">Men's Carpenter Trousers</div>
            <div className="productName">Khaki/Khaki Colour Carpenter Trousers</div>
            <div className="productPrice">₹ 5,995.00</div>
          </div>

          <div className="productsitemCard">
            <div className="productImg">
              <img height="250px" src={tshirt4Png} alt="profileDeals" />
            </div>
            <div className="productBrand">Men's Neck Top Sweatshirt</div>
            <div className="productName">Men's Dri-FIT Fleece Fitness Crew-Neck Top</div>
            <div className="productPrice">₹ 2,495.00</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
