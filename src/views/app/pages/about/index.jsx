import React from "react";
import Header from "../../../../layouts/utility/header/Header";
import Footer from "../../../../layouts/utility/footer/Footer";
import AboutBanner from '../../../../assets/images/about-banner.webp';
import AboutSection from '../../components/aboutAbout';
import AboutVisionMission from '../../components/aboutVisionMission';
import AboutReasonsTab from '../../components/about5Reasons';
import AboutCertifications from '../../components/aboutCertification';
import MetaTags from 'react-meta-tags';

const AboutUs = () => {

    return (
        <>        
          <MetaTags>
            <title>About :: 7Hill Furniture</title>
            <meta name="description" content="" />
          </MetaTags>
          <Header />
          <img src={AboutBanner} alt="" className="img-fluid w-100" />
          <AboutSection />
          <AboutVisionMission />
          <AboutReasonsTab />
          <AboutCertifications />
          <Footer />
        </>
    );
}

export default AboutUs;