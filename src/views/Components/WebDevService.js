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
import { Avatar, Typography } from "@material-ui/core";
import ServiceCard from "./Sections/ServiceTry.js";
import TechCard from "./Sections/TechCard.js";
import logo from './../../assets/img/faces/logo.png'
const useStyles = makeStyles(styles);

export default function WebDevelopment(props) {
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
      <Parallax image={require("assets/img/faces/service1.jpg")} >
      <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
            <GridItem >
               
           
                <h1  style={{color:"black",textAlign:"center",fontWeight:"bold",fontSize:"70px"}}>We provide a wide range of services</h1>
                <h3 style={{color:"black",textAlign:"center",fontWeight:"bold"}}>
                The development team of Modicum is equipped with proper human resources specialized in </h3>
                <h3 style={{color:"black",textAlign:"center",fontWeight:"bold"}}>
                different system development tasks. </h3>
                </GridItem>
              </div>
              
            </GridItem>
          </GridContainer>
        </div>
     
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
        <TopBar/>
            <Typography variant="h3" component="h3" style={{textAlign:"left",marginLeft:"10%",fontSize:"50px",fontWeight:"bold",color:"blueviolet"}}>FUTURE-READY </Typography>
            <Typography variant="h5" component="h5" style={{textAlign:"left",marginLeft:"10%",fontWeight:"bold",color:"black"}}>Ready To be Technical Patner in every Sectore</Typography>
        <TechCard/>
            <ServiceCard/>
        <Subscribe/>
      </div>
      <Footer />
    </div>
  );
}
