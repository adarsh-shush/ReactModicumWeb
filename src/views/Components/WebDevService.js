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


import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import SectionCarousel from "./Sections/SectionCarousel.js";
import Subscribe from "./Sections/Subsribe.js";
import TopBar from "./Sections/TopStyleBar.js";
import { Typography } from "@material-ui/core";
import SectionServices from "./Sections/SectionServices.js";
const useStyles = makeStyles(styles);

export default function WebDevelopment(props) {
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
            <Typography variant="h3" component="h3" style={{textAlign:"left",marginLeft:"10%",fontSize:"50px",fontWeight:"bold",color:"blueviolet"}}>FUTURE-READY APPLICATIONS</Typography>
            <Typography variant="h5" component="h5" style={{textAlign:"left",marginLeft:"10%",fontWeight:"bold",color:"black"}}>Ready To be Technical Patner in every Sectore</Typography>
            <SectionServices/>
        <Subscribe/>
      </div>
      <Footer />
    </div>
  );
}
