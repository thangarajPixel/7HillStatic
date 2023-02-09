import React from "react";
import Header from "../../../../layouts/utility/header/Header";
import Footer from "../../../../layouts/utility/footer/Footer";
import WorkstationsBanner from '../../../../assets/images/workstations-banner.webp';
import ProductListingContentWorkstation from '../../components/productListingContentWorkstation';
import ProductListingWorkstation from '../../components/productListingWorkstation';
import OtherProductsScroll from '../../components/otherProductScroll';
import MetaTags from 'react-meta-tags';

const InstitutionalProducts = () => {

    return (
        <>
          <MetaTags>
            <title>Institutional Products :: 7Hill Furniture</title>
            <meta name="description" content="" />
          </MetaTags>
          <Header />
          <img src={WorkstationsBanner} alt="" className="img-fluid w-100" />
          <ProductListingContentWorkstation />
          <ProductListingWorkstation />
          <OtherProductsScroll />
          <Footer />
        </>
    );
}

export default InstitutionalProducts;