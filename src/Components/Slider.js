import React from "react";
import { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useNavigate } from "react-router";
import { collection, getDocs, query, orderBy, limit } from "firebase/firestore";
import { db } from "../firebase.config";
import Spinner from "./Spinner";

function Slider() {
  const [loading, setLoading] = useState(true);
  const [listings, setListings] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchListings = async () => {
      const listingsRef = collection(db, "listings");
      const q = query(listingsRef, orderBy("timestamp", "desc"), limit(5));
      const querySnap = await getDocs(q);

      let listings = [];

      querySnap.forEach((doc) => {
        return listings.push({
          id: doc.id,
          data: doc.data(),
        });
      });
      setListings(listings);
      setLoading(false);
    };
    fetchListings();
  }, []);
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  if (loading) {
    return <Spinner />;
  }
  return (
    listings && (
      <>
        <p className="exploreHeading">Recommended</p>
        <Carousel
          swipeable={false}
          draggable={false}
          showDots={true}
          responsive={responsive}
          infinite={true}
          className="owl-carousel owl-theme skill-slider"
        >
          {listings.map(({ data, id }) => (
            <>
              <img
                key={id}
                onClick={() => navigate(`/category/${data.type}/${id}`)}
                src={data.imgUrls[0]}
                style={{ height: "100%", width: "100%" }}
                alt="HouseImg"
              />
              <p className="swiperSlideText">{data.name}</p>
              <p className="swiperSlidePrice">
                ${data.offer ? data.discountedPrice : data.regularPrice}{" "}
                {data.type === "rent" && "/ month"}
              </p>
            </>
          ))}
        </Carousel>
      </>
    )
  );
}

export default Slider;
