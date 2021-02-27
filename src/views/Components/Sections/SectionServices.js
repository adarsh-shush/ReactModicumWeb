import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

import team1 from "assets/img/faces/programming-concept-illustration-vector.jpg";
import team2 from "assets/img/faces/programming-concept-illustration-vector.jpg";
import team3 from "assets/img/faces/programming-concept-illustration-vector.jpg";

const useStyles = makeStyles(styles);

export default function SectionServices() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
    <h1>Technology vision 2021: We, the post-digital people</h1>
    <h3>Technologies We Use- </h3>
    <h3>React Js </h3>
    <h3>React Native </h3>
    <h3>Flutter </h3>
    <h3>Angular JS </h3>
    <h3>Javascript </h3>
    <h3>Java </h3>
    <h3> Node JS</h3>
    <h3> java </h3>
    <h3>Javascript </h3>
      <h2 className={classes.title}>Services Provided By Us...!!!</h2>
      <h2 className={classes.title}>End-to-end application services</h2>
      <h5 className={classes.title}>From the development of new applications, through modernization, management and maintenance, we cover all stages of the application lifecycle.</h5>
      <h2 style={{textAlign:"left",marginLeft:"10%",fontWeight:"bold",color:"black"}}>Intilligent platform</h2>

      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
         
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team1} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Website Development
                <br />
                <small className={classes.smallTitle}>Technologies Used: Angular, React Js, Flutter</small>
                <br />
                    <small className={classes.smallTitle}>Development done with Website- Desktop/Mobile View</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                                In today’s world of technology, it is essential for every business to have a website. A
                website acts as an excellent online marketing tool and platform for your business. It
                allows customers to learn about the type of products/services your business has to offer
                and how. We are an IT company based in Bangalore offering high-quality website
                development services to help your business go digital. We collaborate with you to
                understand your brand, goals and the requirements of your company before developing
                your website.
                </p>
              </CardBody>
              
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team2} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Mobile Application Development
                <br />
                    <small className={classes.smallTitle}>Technologies Used: Angular, React Native, Flutter</small>
                    <br />
                    <small className={classes.smallTitle}>Development done with Android And IOS</small>

              </h4>
              <CardBody>
                <p className={classes.description}>
                                Existing market competition requires a company to create one-of-a-kind software
                intended to meet their customers’ unique demands. Off-the-shelf software available is
                generally designed for the mass public as a solution to the many different needs of its
                users. These, however, may not fit-in exactly with your existing system and processes
                and may cause delays due to training requirements involved. This situation calls for
                unique custom software development, keeping in mind each company’s infrastructure,
                branding, implementation, and core business processes.
                </p>
              </CardBody>
              
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team3} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
               ERP SOFTWARES
                <br />
                <small className={classes.smallTitle}>Technologies Used: Angular, React Native, Flutter</small>
                <br />
                    <small className={classes.smallTitle}>  Development done with Android, IOS and Websites  </small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                            The mobile revolution is a game changer for many industries. It has opened up several
            new opportunities and ushered ease of doing business. In fact, embracing a mobile-first
            approach has benefited organizations by reducing wastage, increasing efficiency, and
            reducing lead time.
            We have skilled, innovative &amp; experienced iOS application developers who work
            towards developing apps that can deliver the desired results. We ensure maximum user
            engagement and customer satisfaction. Our team of experts make use of technologies
            such as React JS, React Native, Ionic, Java and Node JS to ensure powerful apps to
            help your enterprise establish a connection with customers.ople to be able to follow them outside the site.
                </p>
              </CardBody>
             
            </Card>
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
         
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team1} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                UI/UX Development
                <br />
                <small className={classes.smallTitle}>Technologies Used: Figma, Sketch, Adobe XD</small>
                <br />
                    <small className={classes.smallTitle}>Development done with Website- Desktop/Mobile View</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                                In today’s world of technology, it is essential for every business to have a website. A
                website acts as an excellent online marketing tool and platform for your business. It
                allows customers to learn about the type of products/services your business has to offer
                and how. We are an IT company based in Bangalore offering high-quality website
                development services to help your business go digital. We collaborate with you to
                understand your brand, goals and the requirements of your company before developing
                your website.
                </p>
              </CardBody>
              
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team2} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Software Hosting
                <br />
                    <small className={classes.smallTitle}>Technologies Used: AWS</small>
                    <br />
                    <small className={classes.smallTitle}>Development done with Android And IOS</small>

              </h4>
              <CardBody>
                <p className={classes.description}>
                                Existing market competition requires a company to create one-of-a-kind software
                intended to meet their customers’ unique demands. Off-the-shelf software available is
                generally designed for the mass public as a solution to the many different needs of its
                users. These, however, may not fit-in exactly with your existing system and processes
                and may cause delays due to training requirements involved. This situation calls for
                unique custom software development, keeping in mind each company’s infrastructure,
                branding, implementation, and core business processes.
                </p>
              </CardBody>
              
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team3} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
               Server Deployment
                <br />
                <small className={classes.smallTitle}>Technologies Used: ############</small>
                <br />
                    <small className={classes.smallTitle}>  Development done with Android, IOS and Websites  </small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                            The mobile revolution is a game changer for many industries. It has opened up several
            new opportunities and ushered ease of doing business. In fact, embracing a mobile-first
            approach has benefited organizations by reducing wastage, increasing efficiency, and
            reducing lead time.
            We have skilled, innovative &amp; experienced iOS application developers who work
            towards developing apps that can deliver the desired results. We ensure maximum user
            engagement and customer satisfaction. Our team of experts make use of technologies
            such as React JS, React Native, Ionic, Java and Node JS to ensure powerful apps to
            help your enterprise establish a connection with customers.ople to be able to follow them outside the site.
                </p>
              </CardBody>
             
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
