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

import team1 from "assets/img/faces/avatar.jpg";
import team2 from "assets/img/faces/christian.jpg";
import team3 from "assets/img/faces/kendall.jpg";

const useStyles = makeStyles(styles);

const data = [
  {
  "companyname" : "Infocus Data Solutions",
  "clientname": "Shrihari",
  "Designation": "Founder",
  "Experience": "“Engagement with Modicum technologies is going strong with 1+ years now.Mobile application developers are very skilful, dedicated and are always enthusiastic to learn new things.We were able to deliver and exceed expectations with our clients every time.Very happy working with Nagaraj and team across multiple projects. Would recommend services from Modicum technologies. “",
  "image": require("./../../../assets/img/faces/testimonials.jpg") 
  },
  {
    "companyname" : "Flywheel Embedded Research Pvt Ltd ",
    "clientname": "Sharanbasava",
    "Designation": "Founder",
    "Experience": "“This has really been impressive work and we are amazed by short turnaround. In fact, we have got some very good reviews about the creative design as well. I am sure I would be very local about my feedback for your organization.",
    "image": require("./../../../assets/img/faces/flywheel.png") 

    
    },
    {
      "companyname" : "KVJ Soft ",
      "clientname": "Naveen",
      "Designation": "Founder",
      "Experience": "“My experience with Modicum Technologies has been amazing during the building of Prototype for couple of my customers. The support exhibited was beyond my expectations & the team with whom I had interaction had lot of patience to get the work done by working without any time constraints.”",
      "image": require("./../../../assets/img/faces/kvjsoft.png") 

      },
      {
        "companyname" : "Prayukti Software Technologies ",
        "clientname": "Jegannath",
        "Designation": "Founder",
        "Experience": "",
        "image": require("./../../../assets/img/faces/testimonials.jpg") 

        },
        {
          "companyname" : "Medhire Ltd ",
          "clientname": "Vickas Sharma",
          "Designation": "Co-Founder",
          "Experience": "“A pleasure to work with it. The project was actually delivered ahead of schedule. Regular scrum calls were clear and efficient. On budget and ahead of schedule. We will definitely work with them again.”",
          "image": require("./../../../assets/img/faces/testimonials.jpg") 

          },
          {
            "companyname" : "Funky Brand Pvt Ltd ",
            "clientname": " Prabhakar Patil",
            "Designation": "Founder",
            "Experience": "“Modicum Technologies has worked with us over the years on Web Designing and Mobile application development. The creative team is extremely talented, reliable and their passion is contagious.”",
            "image": require("./../../../assets/img/faces/testimonials.jpg") 

            },
            {
              "companyname" : "Squirrel Seva Softtech  ",
              "clientname": "Shivanand Hanji",
              "Designation": "Founder",
              "Experience": "",
              "image": require("./../../../assets/img/faces/testimonials.jpg") 

              },
              {
                "companyname" : "Event Bartending Pvt Ltd",
                "clientname": "  James Nicolas",
                "Designation": "Co-Founder",
                "Experience": "“Working with MODICUM was an absolute pleasure. We are extremely happy with the results of our app and you have built. The team manage to understand every minor detail and tweak without repetition or mistake. We will enjoy working together again in the near future.”",
                "image": require("./../../../assets/img/faces/testimonials.jpg") 

                },
                {
                  "companyname" : "SN INF Systems ",
                  "clientname": "Shivraj",
                  "Designation": " Co-Founder",
                  "Experience": "“I really appreciate the team’s effort. It has been a pleasure to see this project become a reality. My hope is that the website will then stand as a testament to all of the effort invested in it by so many people. Thank you again for all of your support and assistance.”",
                  "image": require("./../../../assets/img/faces/testimonials.jpg") 

                  },
]
export default function TeamSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      
      <h2 className={classes.title} style={{color:"#9a3d3d"}}>Here is our best Results </h2>
      <h4 className={classes.title}>Testimonials </h4>
      
      <div>
        <GridContainer>
        {data.map((item) => (
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={item.image} alt="..." className={imageClasses} style={{backgroundColor:"",height:"200px"}} />
              </GridItem>
              <h4 className={classes.cardTitle} style={{color:"#9a3d3d"}}>
                {item.companyname}
                <br />
                <small className={classes.smallTitle}>{item.clientname}</small><br></br>
                <small className={classes.smallTitle}>{item.Designation}</small>

              </h4>
              <CardBody>
                <p className={classes.description}>
                  {item.Experience}
                  {item.compdesc_1}
                  {item.compdesc_2}
                  {item.compdesc_3}
                
                </p>
              </CardBody>
             
            </Card>
          </GridItem>
             ))}
        </GridContainer>
      </div>
  
    </div>
  );
}
