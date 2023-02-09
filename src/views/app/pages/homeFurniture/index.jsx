import React from "react";
import Header from "../../../../layouts/utility/header/Header";
import Footer from "../../../../layouts/utility/footer/Footer";
import HomeFurnitureBanner from '../../../../assets/images/home-furniture-banner.webp';
import HomeFurnitureContent from '../../components/homeFurnitureContent';
import HomeFurnitureProducts from '../../components/homeFurnitureProducts';
import MetaTags from 'react-meta-tags';

const HomeFurniture = () => {

    return (
        <>
          <MetaTags>
            <title>Home Furniture :: 7Hill Furniture</title>
            <meta name="description" content="" />
          </MetaTags>
          <Header />
          <img src={HomeFurnitureBanner} alt="" className="img-fluid w-100" />
          <HomeFurnitureContent />
          <HomeFurnitureProducts />
          <Footer />
        </>
    );
}

export default HomeFurniture;