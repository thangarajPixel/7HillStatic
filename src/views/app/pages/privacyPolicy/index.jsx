import React from "react";
import Header from "../../../../layouts/utility/header/Header";
import Footer from "../../../../layouts/utility/footer/Footer";
import PolicyBanner from '../../../../assets/images/policy-banner.webp';
import PrivacyPolicyContent from '../../components/privacyPolicyContent';
import MetaTags from 'react-meta-tags';

const PrivacyPolicy = () => {

    return (
        <>
          <MetaTags>
            <title>Privacy Policy :: 7Hill Furniture</title>
            <meta name="description" content="" />
          </MetaTags>
          <Header />
          <img src={PolicyBanner} alt="" className="img-fluid w-100" />
          <PrivacyPolicyContent />
          <Footer />
        </>
    );
}

export default PrivacyPolicy;