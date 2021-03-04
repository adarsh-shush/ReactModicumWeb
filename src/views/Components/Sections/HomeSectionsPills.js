import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Schedule from "@material-ui/icons/Schedule";
import List from "@material-ui/icons/List";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import NavPills from "components/NavPills/NavPills.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/pillsStyle.js";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles(styles);

export default function HomeSectionPills() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div id="navigation-pills_about">
        <h3><b>WHY CHOOSE US...??</b></h3>
          <GridContainer>
        
            <GridItem xs={12} sm={12} md={12} lg={12}>
              <NavPills
                color="primary"
                tabs={[
                  {
                    tabButton: "User Friendly Experience",
                    tabIcon: Dashboard,
                    tabContent: (
                      <span>
                        <p>
                        We deliver a website which is compactable to all kind devices with a smooth browser experience. Our web developer main focus is on client success through the user, search engine friendly.
                        </p>
                        <br />
                        <p>
                          Dramatically visualize customer directed convergence
                          without revolutionary ROI. Collaboratively
                          administrate empowered markets via plug-and-play
                          networks. Dynamically procrastinate B2C users after
                          installed base benefits.
                        </p>
                        <br />
                        <p>
                          Dramatically visualize customer directed convergence
                          without revolutionary ROI. Collaboratively
                          administrate empowered markets via plug-and-play
                          networks. Dynamically procrastinate B2C users after
                          installed base benefits.
                        </p>
                      </span>
                    )
                  },
                  {
                    tabButton: "Affordable Pricing",
                    tabIcon: Schedule,
                    tabContent: (
                      <span>
                        <p>
                        We provide cost-effective solutions to our clients based on business requirements and budget.Our focus is to build a long term relationship with the client who year after year put their trust with us.
                        </p>
                        <br />
                        <p>
                          Dramatically maintain clicks-and-mortar solutions
                          without functional solutions. Dramatically visualize
                          customer directed convergence without revolutionary
                          ROI. Collaboratively administrate empowered markets
                          via plug-and-play networks. Dynamically procrastinate
                          B2C users after installed base benefits.
                        </p>
                      </span>
                    )
                  },
                  {
                    tabButton: "Promote Brand Awareness",
                    tabIcon: List,
                    tabContent: (
                      <span>
                        <p>
                        Modicum ensures that your brands meet all the mobility specifications. The android or iOS mobile application that we design will correctly fit any
                        business model. 
                        </p>
                        <br />
                        <p>
                          Dramatically visualize customer directed convergence
                          without revolutionary ROI. Collaboratively
                          administrate empowered markets via plug-and-play
                          networks. Dynamically procrastinate B2C users after
                          installed base benefits.
                        </p>
                        <br />
                        <p>
                          Dramatically visualize customer directed convergence
                          without revolutionary ROI. Collaboratively
                          administrate empowered markets via plug-and-play
                          networks. Dynamically procrastinate B2C users after
                          installed base benefits.
                        </p>
                      </span>
                    )
                  },
                  {
                    tabButton: "Affordable Pricing",
                    tabIcon: Schedule,
                    tabContent: (
                      <span>
                        <p>
                        We provide cost-effective solutions to our clients based on business requirements and budget.Our focus is to build a long term relationship with the client who year after year put their trust with us.
                        </p>
                        <br />
                        <p>
                          Dramatically maintain clicks-and-mortar solutions
                          without functional solutions. Dramatically visualize
                          customer directed convergence without revolutionary
                          ROI. Collaboratively administrate empowered markets
                          via plug-and-play networks. Dynamically procrastinate
                          B2C users after installed base benefits.
                        </p>
                      </span>
                    )
                  },
                ]}
              />
            </GridItem>
           
        

            <GridItem xs={12} sm={12} md={6} lg={6}>
              <NavPills
                color="rose"
                horizontal={{
                  tabsGrid: { xs: 12, sm: 4, md: 4 },
                  contentGrid: { xs: 8, sm: 8, md: 8 }
                }}
                tabs={[
                  {
                    tabButton: "Discover",
                    tabIcon: Dashboard,
                    tabContent: (
                      <span>
                        <p>
                        Through intensive design research and strategic analysis. We identify your business issues,priorities and objectives discover inspires and guides design and deliver.
                        </p>
                        <br />
                        {/* <p>
                          Dramatically visualize customer directed convergence
                          without revolutionary ROI. Collaboratively
                          administrate empowered markets via plug-and-play
                          networks. Dynamically procrastinate B2C users after
                          installed base benefits.
                        </p>
                        <br />
                        <p>
                          Dramatically visualize customer directed convergence
                          without revolutionary ROI. Collaboratively
                          administrate empowered markets via plug-and-play
                          networks. Dynamically procrastinate B2C users after
                          installed base benefits.
                        </p> */}
                      </span>
                    )
                  },
                  {
                    tabButton: "Define",
                    tabIcon: Schedule,
                    tabContent: (
                      <span>
                        <p>
                        The beginning of the project we spend the time understanding your business needs and defining your objectives form this preliminary research we put together the project scope document that all stakeholders agree and commit to.
                        </p>
                        <br />
                        {/* <p>
                          Dramatically maintain clicks-and-mortar solutions
                          without functional solutions. Dramatically visualize
                          customer directed convergence without revolutionary
                          ROI. Collaboratively administrate empowered markets
                          via plug-and-play networks. Dynamically procrastinate
                          B2C users after installed base benefits.
                        </p> */}
                      </span>
                    )
                  },
                  {
                    tabButton: "Design",
                    tabIcon: Schedule,
                    tabContent: (
                      <span>
                        <p>
                        Here is where we produce a range of design approaches and concepts to more fully address the clients challange. The concept are reviewed,tested,refined and crafted into a focused design direction.
                        </p>
                        <br />
                        {/* <p>
                          Dramatically maintain clicks-and-mortar solutions
                          without functional solutions. Dramatically visualize
                          customer directed convergence without revolutionary
                          ROI. Collaboratively administrate empowered markets
                          via plug-and-play networks. Dynamically procrastinate
                          B2C users after installed base benefits.
                        </p> */}
                      </span>
                    )
                  },
                 
                ]}
              />
            </GridItem>
          
            <GridItem xs={12} sm={12} md={6} lg={6}>
            
              <NavPills
                color="rose"
                horizontal={{
                  tabsGrid: { xs: 12, sm: 4, md: 4 },
                  contentGrid: { xs: 8, sm: 8, md: 8 }
                }}
                tabs={[
                 
                  {
                    tabButton: "Develop",
                    tabIcon: Schedule,
                    tabContent: (
                      <span>
                        <p>
                        Here is where we produce a range of design approaches and concepts to more fully address the clients challange. The concept are reviewed,tested,refined and crafted into a focused design direction.
                        </p>
                        <br />
                        {/* <p>
                          Dramatically maintain clicks-and-mortar solutions
                          without functional solutions. Dramatically visualize
                          customer directed convergence without revolutionary
                          ROI. Collaboratively administrate empowered markets
                          via plug-and-play networks. Dynamically procrastinate
                          B2C users after installed base benefits.
                        </p> */}
                      </span>
                    )
                  },
                  {
                    tabButton: "Deploy",
                    tabIcon: Schedule,
                    tabContent: (
                      <span>
                        <p>
                        We are experts at bringing synergy between aesthetic design and strong coding by combinning the inter face,content and graphics with the underlying system frame.
                        </p>
                        <br />
                        {/* <p>
                          Dramatically maintain clicks-and-mortar solutions
                          without functional solutions. Dramatically visualize
                          customer directed convergence without revolutionary
                          ROI. Collaboratively administrate empowered markets
                          via plug-and-play networks. Dynamically procrastinate
                          B2C users after installed base benefits.
                        </p> */}
                      </span>
                    )
                  },
                  {
                    tabButton: "Deliver",
                    tabIcon: Schedule,
                    tabContent: (
                      <span>
                        <p>
                        In this phase we specify document and deliver project details to the client for implementation or we get involved directly in the production process both guarantee the accurate translation of ideas into reality.
                        </p>
                        <br />
                        {/* <p>
                          Dramatically maintain clicks-and-mortar solutions
                          without functional solutions. Dramatically visualize
                          customer directed convergence without revolutionary
                          ROI. Collaboratively administrate empowered markets
                          via plug-and-play networks. Dynamically procrastinate
                          B2C users after installed base benefits.
                        </p> */}
                      </span>
                    )
                  }
                ]}
              />
            </GridItem>
      
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
