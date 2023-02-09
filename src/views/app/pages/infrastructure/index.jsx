import React from "react";
import Header from "../../../../layouts/utility/header/Header";
import Footer from "../../../../layouts/utility/footer/Footer";
import InfrastructureBanner from '../../../../assets/images/infrastructure-banner.webp';
import InfrastructureContent from '../../components/infrastructureContent';
import InfrastructureImages from '../../components/infrastructureImages';
import MetaTags from 'react-meta-tags';

const Infrastructure = () => {

    return (
        <>
          <MetaTags>
            <title>Infrastructure :: 7Hill Furniture</title>
            <meta name="description" content="" />
          </MetaTags>
          <Header />
          <img src={InfrastructureBanner} alt="" className="img-fluid w-100" />
          <InfrastructureContent />
          <InfrastructureImages />
          <Footer />
        </>
    );
}

export default Infrastructure;