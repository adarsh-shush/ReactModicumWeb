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
const useStyles = makeStyles(styles);

export default function AboutUs(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        
        brand="Modicum Technologies"
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <Parallax image={require("assets/img/bg4.jpg")} >
      <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
            <GridItem >
                <SectionCarousel />
           
                <h1 className={classes.title}>We are Software Experts</h1>
                <h3 className={classes.subtitle}>
                  We develop Softwares like Websites mobil apps And erp Softwares
                </h3>
                </GridItem>
              </div>
              
            </GridItem>
          </GridContainer>
        </div>
     
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
     <TopBar/>
      <SectionAboutUs/>
    <HowItWorks/>
      {/* <SectionTabs /> */}
   
         {/* <SectionAboutUsPills /> */}
        
        
      <AboutUsSectionTabs/>
        <Content/>
        <TeamSection/>
        <Subscribe/>

        
      
        
        {/* <SectionExamples /> */}
        
      </div>
      <Footer />
    </div>
  );
}
