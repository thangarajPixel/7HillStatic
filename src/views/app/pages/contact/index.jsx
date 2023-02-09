import React from "react";
import Header from "../../../../layouts/utility/header/Header";
import Footer from "../../../../layouts/utility/footer/Footer";
import ContactBanner from '../../../../assets/images/contact-banner.webp';
import ContactContent from '../../components/contactContent';
import MetaTags from 'react-meta-tags';

const ContactUs = () => {

    return (
        <>
          <MetaTags>
            <title>Contact Us :: 7Hill Furniture</title>
            <meta name="description" content="" />
          </MetaTags>
          <Header />
          <img src={ContactBanner} alt="" className="img-fluid w-100" />
          <ContactContent />
          <Footer />
        </>
    );
}

export default ContactUs;