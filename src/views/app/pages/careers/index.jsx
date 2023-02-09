import React from "react";
import Header from "../../../../layouts/utility/header/Header";
import Footer from "../../../../layouts/utility/footer/Footer";
import CareersBanner from '../../../../assets/images/careers-banner.webp';
import CareerContent from '../../components/careerContent';
import MetaTags from 'react-meta-tags';

const Careers = () => {

    return (
        <>
          <MetaTags>
            <title>Careers :: 7Hill Furniture</title>
            <meta name="description" content="" />
          </MetaTags>
          <Header />
          <img src={CareersBanner} alt="" className="img-fluid w-100" />
          <CareerContent />
          <Footer />
        </>
    );
}

export default Careers;