import React from "react";
import Header from "../../../../layouts/utility/header/Header";
import Footer from "../../../../layouts/utility/footer/Footer";
import DealersBanner from '../../../../assets/images/dealers-banner.webp';
import DealersSection from '../../components/dealersContent';
import DealerIcons from '../../components/dealerIcons';
import MetaTags from 'react-meta-tags';

const Dealers = () => {

    return (
        <>
          <MetaTags>
            <title>Dealers :: 7Hill Furniture</title>
            <meta name="description" content="" />
          </MetaTags>
          <Header />
          <img src={DealersBanner} alt="" className="img-fluid w-100" />
          <DealersSection />
          <DealerIcons />
          <Footer />
        </>
    );
}

export default Dealers;