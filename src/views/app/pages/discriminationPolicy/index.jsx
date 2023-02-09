import React from "react";
import Header from "../../../../layouts/utility/header/Header";
import Footer from "../../../../layouts/utility/footer/Footer";
import PolicyBanner from '../../../../assets/images/policy-banner.webp';
import DiscriminationPolicyContent from '../../components/discriminationPolicyContent';
import MetaTags from 'react-meta-tags';

const DiscriminationPolicy = () => {

    return (
        <>
          <MetaTags>
            <title>Discrimination Policy :: 7Hill Furniture</title>
            <meta name="description" content="" />
          </MetaTags>
          <Header />
          <img src={PolicyBanner} alt="" className="img-fluid w-100" />
          <DiscriminationPolicyContent />
          <Footer />
        </>
    );
}

export default DiscriminationPolicy;