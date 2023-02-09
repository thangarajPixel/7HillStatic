import {useState} from "react";
import { Link, useLocation } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Logo from '../../../assets/images/logo.png';
import HomeFurniture from '../../../assets/images/menu-home-furniture.jpg';
import HomeInstitutionalFurniture from '../../../assets/images/menu-institutional-furniture.jpg';
import "./style.css";
import { TfiEmail } from 'react-icons/tfi';
import { FiPhone } from 'react-icons/fi';

const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
};

const Header = () => {

    const location = useLocation();
    const { pathname } = location;
    const splitLocation = pathname.split("/");

    const [isActive, setActive] = useState("false");
    const [isActive1, setActive1] = useState("false");
    const [isActive2, setActive2] = useState("false");

    const ToggleClass = () => { setActive(!isActive); };
    const ToggleClass1 = () => { setActive1(!isActive1); };
    const ToggleClass2 = () => { setActive2(!isActive2); };

    return (
        <>
        <header> 
            <Container>
                <Row>
                    <Col>
                        <nav id='cssmenu'>
                            <div className="logo">
                                <Link to="/" >
                                    <img src={Logo} alt=""/>
                                </Link>
                            </div>                    
                                <ul className="header-top">
                                    <li>
                                        <Link rel="noopener noreferrer" onClick={() => openInNewTab('tel:+918881381388')} ><FiPhone />&nbsp; +91 88813 81388</Link>
                                    </li>
                                    <li>
                                        <Link rel="noopener noreferrer" onClick={() => openInNewTab('mailto:info@7hillfurniture.com')} ><TfiEmail />&nbsp; info@7hillfurniture.com</Link>
                                    </li>
                                </ul>                        
                                <div id="head-mobile"></div>
                                <div className={isActive ? "button" : "menu-opened button"} onClick={ToggleClass}></div>
                                <ul className={isActive ? "main-nav" : "open main-nav"}>
                                    <li className={splitLocation[1] === "" ? "active" : ""}><Link to="/" >Home</Link></li>
                                    <li  className={splitLocation[1] === "home-furniture" ? "active has-sub" : "has-sub"}><span className={isActive1 ? "submenu-button" : "submenu-opened submenu-button"} onClick={ToggleClass1}></span><Link to="/home-furniture" >Products</Link>
                                    <ul className={isActive1 ? "closeed" : "open"}>
                                        <Container>
                                            <Row>
                                                <Col xs={12} sm={12} md={12} lg={6}>
                                                    <h5><Link to="/home-furniture" >Home Furniture</Link></h5>   
                                                        <Row className="g-0">
                                                            <Col xs={12} sm={12} md={12} lg={4}>
                                                                <ul>
                                                                    <li><Link to="/home-furniture">Sofa</Link></li>
                                                                    <li><Link to="/home-furniture">Cot</Link></li>
                                                                    <li><Link to="/home-furniture">Center Table</Link></li>
                                                                    <li><Link to="/home-furniture">Night Stand</Link></li>
                                                                </ul>
                                                            </Col>
                                                            <Col xs={12} sm={12} md={12} lg={4}>
                                                                <ul>
                                                                    <li><Link to="/home-furniture" className="pointer-events-none">Dining Tables</Link></li>
                                                                    <li><Link to="/home-furniture" className="pointer-events-none">Dining Chairs</Link></li>                                                        
                                                                    <li><Link to="/home-furniture" className="pointer-events-none">Side Table</Link></li>
                                                                    <li><Link to="/home-furniture" className="pointer-events-none">Center Table</Link></li>
                                                                </ul>
                                                            </Col>
                                                            <Col xs={12} sm={12} md={12} lg={4}>
                                                                <ul>
                                                                    <li><Link to="/home-furniture" className="pointer-events-none">Cupboards</Link></li>
                                                                    <li><Link to="/home-furniture" className="pointer-events-none">TV Units</Link></li>                                                        
                                                                    <li><Link to="/home-furniture" className="pointer-events-none">Shoe Racks</Link></li>
                                                                    <li><Link to="/home-furniture" className="pointer-events-none">Pooja Mandapam</Link></li>
                                                                </ul>
                                                            </Col>
                                                        </Row>     
                                                    {/* <h5><Link to="/institutional-furniture" >Institutional Furniture</Link></h5>
                                                    <ul>
                                                        <li><strong>For Offices</strong>
                                                            <Link to="/institutional-furniture/office-tables" >Office Tables</Link>
                                                            <Link to="/institutional-furniture/office-tables" >Office Seating</Link>
                                                            <Link to="/institutional-furniture/office-tables" >Office Sofas</Link>
                                                        </li>
                                                        <li><strong>For Schools</strong>
                                                            <Link to="/home-furniture" >Student Bench</Link>
                                                            <Link to="/home-furniture" >Teacher Table</Link>
                                                            <Link to="/home-furniture" >Hostel Bed</Link>
                                                            <Link to="/home-furniture" >Steel Storages</Link>
                                                            <Link to="/home-furniture" >Filing Racks</Link>
                                                            <Link to="/home-furniture" >File Cabinet</Link>
                                                        </li>
                                                        <li><strong>For Labs & Hospitals</strong>
                                                            <Link to="/home-furniture" >Hospital Bed</Link>
                                                            <Link to="/home-furniture" >Wheel Chairs</Link>
                                                            <Link to="/home-furniture" >Metal Pedestal</Link>
                                                            <Link to="/home-furniture" >Laboratory furniture</Link>
                                                            <Link to="/home-furniture" >Compactors</Link>
                                                        </li>
                                                    </ul>*/}
                                                </Col>
                                                <Col xs={12} sm={12} md={12} lg={3}>
                                                    <div className="furniture-menu">
                                                        <img src={HomeFurniture} alt="" className="img-fluid" />
                                                        <div className="furniture-menu-hover">
                                                            Home Furniture
                                                            <Link to="/home-furniture" >View Collection</Link>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col xs={12} sm={12} md={12} lg={3}>
                                                    <div className="furniture-menu">
                                                        <img src={HomeInstitutionalFurniture} alt="" className="img-fluid" />
                                                        <div className="furniture-menu-hover">
                                                            Institutional Furniture
                                                            {/* <Link to="/institutional-furniture/" >View Collection</Link> */}
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </ul>
                                    </li>                        
                                    <li className={splitLocation[1] === "about" || splitLocation[1] === "our-team"? "active has-sub single" : "has-sub single"}><span className={isActive2 ? "submenu-button" : "submenu-opened submenu-button"} onClick={ToggleClass2}></span><Link to="/about" >About Us</Link>
                                        <ul className={isActive2 ? "closeed" : "open"}>
                                            <li className={splitLocation[1] === "about" ? "active" : ""}><Link to="/about" >Company Overview</Link></li>
                                            <li className={splitLocation[1] === "our-team" ? "active" : ""}><Link to="/our-team" >Our Team</Link></li>
                                        </ul>
                                    </li>
                                    <li className={splitLocation[1] === "dealers" ? "active" : ""}><Link to="/dealers" >Dealers</Link></li>
                                    <li className={splitLocation[1] === "infrastructure" ? "active" : ""}><Link to="/infrastructure" >Infrastructure</Link></li>
                                    <li className={splitLocation[1] === "careers" ? "active" : ""}><Link to="/careers" >Careers</Link></li>
                                    <li className={splitLocation[1] === "contact" ? "active" : ""}><Link to="/contact" >Contact Us</Link></li> 
                                </ul>
                        </nav>
                    </Col>
                </Row>
            </Container>
        </header>
        <div className={isActive ? "headerbackdrop" : "active headerbackdrop"}></div>
        </>
    );
}

export default Header;
