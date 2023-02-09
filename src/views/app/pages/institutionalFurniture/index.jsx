import React from "react";
import Header from "../../../../layouts/utility/header/Header";
import Footer from "../../../../layouts/utility/footer/Footer";
import InstitutionalFurnitureBanner from '../../../../assets/images/institutional-furniture-banner.webp';
import InstitutionalFurnitureContent from '../../components/institutionalFurnitureContent';
import InstitutionalFurnitureTabs from '../../components/institutionalFurnitureTabs';
import HomeCTA from '../../components/homeCTA';
import HomeBlog from '../../components/homeBlog';
import MetaTags from 'react-meta-tags';

const InstitutionalFurniture = () => {

    return (
        <>
          <MetaTags>
            <title>Institutional Furniture :: 7Hill Furniture</title>
            <meta name="description" content="" />
          </MetaTags>
          <Header />
          <img src={InstitutionalFurnitureBanner} alt="" className="img-fluid w-100" />
          <InstitutionalFurnitureContent />
          <InstitutionalFurnitureTabs />
          <HomeCTA />
          <HomeBlog />
          <Footer />
        </>
    );
}

export default InstitutionalFurniture;