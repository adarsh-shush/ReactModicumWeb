import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";

import Parallax from "components/Parallax/Parallax.js";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.js";


import styles from "assets/jss/material-kit-react/views/components.js";
import HomeAboutContent from "./Components/Sections/HomeAboutUs.js";
import Features from "./Components/Sections/HomeServices.js";
import SectionCarousel from "./Components/Sections/SectionCarousel.js";
import SectionCompletedExamples from "./Components/Sections/SectionCompletedExamples.js";
import SectionLogin from "./Components/Sections/SectionLogin.js";
import SectionPills from "./Components/Sections/SectionPills.js";
import Team from "./Components/Sections/Testimonials.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import SectionAboutUs from "./Components/Sections/SectionAboutUs.js";
import SectionAboutUsPills from "./Components/Sections/SectionAboutUsPills.js";
import SectionTabs from "./Components/Sections/SectionTabs.js";
import HowItWorks from "./Components/Sections/SectionVision.js";
import AboutUsSectionTabs from "./Components/Sections/SectionTabsAboutUs.js";
import Content from "./Components/Sections/WhyChooseUs.js";
import Subscribe from "./Components/Sections/Subsribe.js";
import TopBar from "./Components/Sections/TopStyleBar.js";
import TeamSection from './LandingPage/Sections/TeamSection';
import ProfilePage from "./ProfilePage/ProfilePage.js";
import LoginPage from "./LoginPage/LoginPage.js";
import { Avatar } from "@material-ui/core";
import logo from './../assets/img/faces/logo.png'

const useStyles = makeStyles(styles);

export default function Requestquote(props) {
    
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
     <Header
      
      leftLinks={ <Avatar variant="square" src={logo} style={{width:"50%",height:"30%"}} />}
      // brand="Modicum Technologies"
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
     <Parallax image={require("assets/img/faces/request2.jpg")} >
      <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
            <GridItem >
               
           
                <h1 className={classes.title} style={{color:"orangered"}}>Request Quote</h1>
                <h3 className={classes.subtitle} style={{color:"black",fontWeight:"bold"}}>
                Drop US a Mail below
                </h3>
                </GridItem>
              </div>
              
            </GridItem>
          </GridContainer>
        </div>
     
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
    <TopBar/>
    <LoginPage/>
    <Subscribe/>
      </div>
      <Footer />
    </div>
  );
}
