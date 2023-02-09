import React from "react";
import Header from "../../../../layouts/utility/header/Header";
import Footer from "../../../../layouts/utility/footer/Footer";
import OurTeamBanner from '../../../../assets/images/team-banner1.jpg';
import CeoMessage from '../../components/ceoMessage';
import GmMessage from '../../components/gmMessage';
import OurTeams from '../../components/ourTeams';
import MetaTags from 'react-meta-tags';

const OurTeam = () => {

    return (
        <>
          <MetaTags>
            <title>Our Team :: 7Hill Furniture</title>
            <meta name="description" content="" />
          </MetaTags>
          <Header />
          <img src={OurTeamBanner} alt="" className="img-fluid w-100" />
          <CeoMessage />
          <GmMessage />
          <OurTeams />
          <Footer />
        </>
    );
}

export default OurTeam;