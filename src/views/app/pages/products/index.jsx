import React from "react";
import Header from "../../../../layouts/utility/header/Header";
import Footer from "../../../../layouts/utility/footer/Footer";
import ProductListingBanner from '../../../../assets/images/product-listing-banner.webp';
import ProductListingContent from '../../components/productListingContent';
import ProductListing from '../../components/productListing';
import OtherProductsScroll from '../../components/otherProductScroll';
import MetaTags from 'react-meta-tags';

const Products = () => {

    return (
        <>
          <MetaTags>
            <title>Products :: 7Hill Furniture</title>
            <meta name="description" content="" />
          </MetaTags>
          <Header />
          <img src={ProductListingBanner} alt="" className="img-fluid w-100" />
          <ProductListingContent />
          <ProductListing />
          <OtherProductsScroll />
          <Footer />
        </>
    );
}

export default Products;