import React from "react";
import Header from "../../../../layouts/utility/header/Header";
import Footer from "../../../../layouts/utility/footer/Footer";
import OfficeTablesBanner from '../../../../assets/images/office-tables-banner.webp';
import OfficeTablesContent from '../../components/officeTablesContent';
import OfficeTablesLists from '../../components/officeTablesLists';
import MetaTags from 'react-meta-tags';

const OfficeTables = () => {

    return (
        <>
          <MetaTags>
            <title>Office Tables :: 7Hill Furniture</title>
            <meta name="description" content="" />
          </MetaTags>
          <Header />
          <img src={OfficeTablesBanner} alt="" className="img-fluid w-100" />
          <OfficeTablesContent />
          <OfficeTablesLists />
          <Footer />
        </>
    );
}

export default OfficeTables;