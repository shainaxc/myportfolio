import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";
import profilePic5 from "../../img/profile5.jpg";
import profilePic6 from "../../img/profile6.jpg";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
      <div className="t-heading">
      <center>
    <span>Member: </span>
    <span>EUSEBIO, ANGELO J.</span>
   
    </center>
  <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
  <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
  
  </div>
    },
    {
      img: profilePic2,
      review:
      <div className="t-heading">
      <center>
    <span>Member: </span>
    <span>ARCEO, JOHN CARLO L.</span>
   
    </center>
  <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
  <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
  
  </div>
    },
    {
      img: profilePic3,
      review:
      <div className="t-heading">
      <center>
    <span>Member: </span>
    <span>MURGUIA, DHAN KERBEY P.</span>
   
    </center>
  <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
  <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
  
  </div>
    },
    {
      img: profilePic4,
      review:
      <div className="t-heading">
      <center>
    <span>Member: </span>
    <span>TANECO, JOPEL P.
</span>
   
    </center>
  <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
  <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
  
  </div>
    },
    
    {
      img: profilePic5,
      review:
      <div className="t-heading">
      <center>
    <span>Member: </span>
    <span>SALVANIA, IVAN KRISH SJ. </span>
   
    </center>
  <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
  <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
  
  </div>
    },
    {
      img: profilePic6,
      review:
      <div className="t-heading">
        <center>
      <span>Member: </span>
      <span>CRUZ, NAOMI ANDREA P.</span>
     
      </center>
    <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
    <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
    
    </div>
    
    },
    
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>THE</span>
        <span>   TEAM</span>
        <span>  EMBER..</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
