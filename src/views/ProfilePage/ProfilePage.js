import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import NavPills from "components/NavPills/NavPills.js";
import Parallax from "components/Parallax/Parallax.js";

import profile from "assets/img/faces/programming-concept-illustration-vector.jpg";

import studio1 from "assets/img/examples/studio-1.jpg";
import studio2 from "assets/img/examples/studio-2.jpg";
import studio3 from "assets/img/examples/studio-3.jpg";
import studio4 from "assets/img/examples/studio-4.jpg";
import studio5 from "assets/img/examples/studio-5.jpg";
import work1 from "assets/img/examples/olu-eletu.jpg";
import work2 from "assets/img/examples/clem-onojeghuo.jpg";
import work3 from "assets/img/examples/cynthia-del-rio.jpg";
import work4 from "assets/img/examples/mariya-georgieva.jpg";
import work5 from "assets/img/examples/clem-onojegaw.jpg";

import styles from "assets/jss/material-kit-react/views/profilePage.js";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles(styles);

const data = [
  {
  "companyname" : "BAR MAGICS",
  "compdesc_1" :"We understand that the society needs responsible and courteous bartenders for which we convey knowledge and values with hands on training and a space to polish their skills before stepping out into the world of bartending. ",
  "compdesc_2" :" ",
  "compdesc_3" :" ",
  "compcatogary" : "Bartending",
  "compimg" : "",
  "URL" : "http://www.barmagics.com/",
  "techUsed":"WordPress",
  },
  {
    "companyname" : "RUDHRA SOLAR",
    "compdesc_1" :" The eco-friendly products of RSAIPL shall not only go a long way in helping global efforts in conserving the environment but also helps customers contribute to green and clean technology.",
    "compdesc_2" :" ",
    "compdesc_3" :" ",
    "compcatogary" : "Solar Industry",
    "compimg" : " ",
    "URL" : "http://rudhrasolar.com/",
    "techUsed":"HTML5,CSS3,bootstrap 3 & 4,Javascript, and PHP",
  },
  {
    "companyname" : "RUDHRA LITE",
    "compdesc_1" :"Rudhra Lite is a young and innovative Lighting Company who has started manufacturing and marketing IP rated lighting systems which match the aesthetics and quality norms of the best lighting fixtures available in Indian markets.",
    "compdesc_2" :" ",
    "compdesc_3" :" ",
    "compcatogary" : " LED Lightings.",
    "compimg" : "",
    "URL" : " http://rudhralite.com/",
    "techUsed":"WordPress",
    },
    {
      "companyname" : "BAR MAGIC",
      "compdesc_1" :" We understand that the society needs responsible and courteous bartenders for which we convey knowledge and values with hands on training and a space to polish their skills before stepping out into the world of bartending.",
      "compdesc_2" :" ",
      "compdesc_3" :" ",
      "compcatogary" : "Bartending",
      "compimg" : " ",
      "URL" : " http://www.barmagics.com/",
      "techUsed":"WordPress",
    },
    {
      "companyname" : "PKMNC TRANSPORTS",
      "compdesc_1" :"We provide cab facilities for the companies which would like to hire a cab for the transportation facility of its employees. ",
      "compdesc_2" :" ",
      "compdesc_3" :" ",
      "compcatogary" : "Transport Industry",
      "compimg" : "",
      "URL" : "https://play.google.com/store/apps/details?id=com.pkcabservice",
      "techUsed":"Ionic 3, Angular 5 & 6, Typescript, Aws Lambda Function Using Java",
      },
      {
        "companyname" : "MEDHIRE",
        "compdesc_1" :" Medhire are established in 2018 are engaged in manufacturing a high-quality range of Hospital Accessories. All offered products are manufactured using high-quality resources",
        "compdesc_2" :" ",
        "compdesc_3" :" ",
        "compcatogary" : " Medical Equipment Suppliers.",
        "compimg" : " ",
        "URL" : "http://test.modicumtechnologies.com/",
        "techUsed":" Angular 5 & 6, Typescript, Aws Lambda Function Using Java.",
      },
      {
        "companyname" : "SN INFOSYSTEMS",
        "compdesc_1" :" Creative Software Development, Research & Development Team that spotlights on conveying arrangements utilizing the latest Innovation.",
        "compdesc_2" :" ",
        "compdesc_3" :" ",
        "compcatogary" : " Medical Equipment Suppliers.",
        "compimg" : " ",
        "URL" : "http://www.sninfosystems.modicumtechnologies.com",
        "techUsed":" HTML5,CSS3,Javascript, Jquery and PHP.",
      },
      {
        "companyname" : "AMRUTHA ACADEMY",
        "compdesc_1" :"It is an educational institution website which includes courses offered by the institution and on filling of application form.",
        "compdesc_2" :" ",
        "compdesc_3" :" ",
        "compcatogary" : "  Educational Institution.",
        "compimg" : " ",
        "URL" : "http://www.amruthaacademy.modicumtechnologies.com",
        "techUsed":"HTML5, CSS3, JavaScript, JQuery, PHP.",
      },
      {
        "companyname" : "CK INFRA EQUIPMENT PRIVATE LIMITED",
        "compdesc_1" :"Provides services such as Batching Plant Service, Concrete Pump Service, Boom Pump Service, Line Pump Service and Placing Boom Service in the industry.",
        "compdesc_2" :" ",
        "compdesc_3" :" ",
        "compcatogary" : " Infrastructure Service Provider",
        "compimg" : " ",
        "URL" : "http://www.modicumtechnologies.com/CK/",
        "techUsed":" WordPress",
      },
      {
        "companyname" : "FOCUS ADVANCE GEAR",
        "compdesc_1" :" To explore and provide Electrical and Electronics engineering solutions and Electricals Supporting products to meet client requirements as per our sales & services,",
        "compdesc_2" :" ",
        "compdesc_3" :" ",
        "compcatogary" : " Electrical and Electronics engineering solutions.",
        "compimg" : " ",
        "URL" : "http://www.modicumtechnologies.com/fas/",
        "techUsed":" WordPress",
      },
      {
        "companyname" : "iCHICKEN",
        "compdesc_1" :" This is an e-Commerce mobile application . It is a online meat ordering system. It overcomes the disadvantages of traditional queueing system. ",
        "compdesc_2" :" ",
        "compdesc_3" :" ",
        "compcatogary" : "e-Commerce Mobile application.",
        "compimg" : " ",
        "URL" : " IBROS Trading Pvt Ltd.",
        "techUsed":"Angular 2, ionic2, PHP, HTML, CSS, JavaScript",
      },
      {
        "companyname" : "USA TOURS & TRAVELS",
        "compdesc_1" :" Offering online booking of  travel services of the highest quality, combining our energy and enthusiasm, with our years of experience. ",
        "compdesc_2" :" ",
        "compdesc_3" :" ",
        "compcatogary" : "Travel Website.",
        "compimg" : " ",
        "URL" : "http://www.usatoursandtravels.modicumtechnologies.com",
        "techUsed":"HTML5,CSS3,Javascript, Jquery and PHP",
      },
    
]
export default function ProfilePage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  return (
    <div>
      {/* <Header
        color="transparent"
        brand="Material Kit React"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "white"
        }}
        {...rest}
      /> */}
       {data.map((item) => (
      <div className={classNames(classes.main, classes.mainRaised)} style={{marginBottom:"15%"}}>
        <div>
       
          <div className={classes.container} style={{marginBottom:"10%"}}>
         
            <GridContainer justify="center">
         
              <GridItem xs={12} sm={12} md={6}>

                <div className={classes.profile}>
                  <div>
                  
                    <img src={profile} alt="..." className={imageClasses} />
                  </div>
                  <div className={classes.name}>
                
                    <h3 className={classes.title}>{item.companyname}</h3>
                    <h6>Project Category : {item.compcatogary}</h6>
                    {/* <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-twitter"} />
                    </Button>
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-instagram"} />
                    </Button>
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-facebook"} />
                    </Button> */}
                  </div>
                </div>
              </GridItem>
          
            </GridContainer>
            {/* <div className={classes.description}>
              <p>
               ABOUT THE Company.{" "}
              </p>
            </div> */}
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                <NavPills
                  alignCenter
                  color="primary"
                  tabs={[
                    {
                      tabButton: "URL",
                      tabIcon: Camera,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                          
                          <Button
          href={item.URL}
          color="transparent"
         
          className={classes.navLink}
        >{item.URL}</Button>
                            {/* <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <img
                              alt="..."
                              src={work4}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={work5}
                              className={navImageClasses}
                            /> */}
                          </GridItem>
                        </GridContainer>
                      )
                    },
                    {
                      tabButton: "Technolgies Used",
                      tabIcon: Palette,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            <Typography>{item.techUsed}</Typography>
                            {/* <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <img
                              alt="..."
                              src={work4}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={work5}
                              className={navImageClasses}
                            /> */}
                          </GridItem>
                         
                        </GridContainer>
                      )
                    },
                    {
                      tabButton: "Description",
                      tabIcon: Favorite,
                      tabContent: (
                        <GridContainer justify="center">
                           
                          <GridItem xs={12} sm={12} md={6}  >
                          <Typography >{item.compdesc}</Typography>
                          <Typography>{item.compdesc_1}</Typography>
                          <Typography>{item.compdesc_2}</Typography>
                          <Typography>{item.compdesc_3}</Typography>

                            {/* <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <img
                              alt="..."
                              src={work4}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={work5}
                              className={navImageClasses}
                            /> */}
                          </GridItem>
                         
                        </GridContainer>
                      )
                    }
                  ]}
                />
              </GridItem>
            </GridContainer>
          </div>
     
        </div>
      </div>
   ))}
    </div>
  );
}
