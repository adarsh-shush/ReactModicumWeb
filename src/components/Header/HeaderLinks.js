/*eslint-disable*/
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        
        <Button
          href="/"
          color="transparent"
         
          className={classes.navLink}
        >
          <CloudDownload className={classes.icons} />Home
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="/about/modicumtechnologies"
          color="transparent"
         
          className={classes.navLink}
        >
          <CloudDownload className={classes.icons} />About Us
        </Button>
      </ListItem>
      {/* <ListItem className={classes.listItem}>
        <Button
          href=""
          color="transparent"
         
          className={classes.navLink}
        >
          <CloudDownload className={classes.icons} />Services
        </Button>
      </ListItem> */}
      <ListItem className={classes.listItem}>
        
        <CustomDropdown
          noLiPadding
          buttonText="Services"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={Apps}
          dropdownList={[
            <Link to="/Services/WebDevelopment/modicumtechnologies" className={classes.dropdownLink}>
              Website Development
            </Link>,
           <Link to="/Services/WebDevelopment/modicumtechnologies" className={classes.dropdownLink}>
          Mobile App Development
         </Link>,
             <Link to="/Services/WebDevelopment/modicumtechnologies" className={classes.dropdownLink}>
             Server Deployment
           </Link>,
            <Link to="/Services/WebDevelopment/modicumtechnologies" className={classes.dropdownLink}>
            UX/UI designing
          </Link>,
           <Link to="/Services/WebDevelopment/modicumtechnologies" className={classes.dropdownLink}>
           Softwares Hosting 
         </Link>,
          <Link to="/Services/WebDevelopment/modicumtechnologies" className={classes.dropdownLink}>
          ERP Applications
        </Link>
          ]}
          
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="/Portfolio/modicumtechnologies"
          color="transparent"
         
          className={classes.navLink}
        >
          <CloudDownload className={classes.icons} />Portfolio
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="/Contactuson/modicumtechnologies"
          color="transparent"
         
          className={classes.navLink}
        >
          <CloudDownload className={classes.icons} />Contact Us
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        {/*<Tooltip title="Delete">
          <IconButton aria-label="Delete">
            <DeleteIcon />
          </IconButton>
        </Tooltip>*/}
        <Tooltip
          id="instagram-twitter"
          title="Follow us on twitter"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href="https://twitter.com/CreativeTim?ref=creativetim"
           
            color="transparent"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-twitter"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-facebook"
          title="Follow us on facebook"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.facebook.com/CreativeTim?ref=creativetim"
           
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-facebook"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-tooltip"
          title="Follow us on instagram"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.instagram.com/CreativeTimOfficial?ref=creativetim"
           
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-instagram"} />
          </Button>
        </Tooltip>
      </ListItem>
    </List>
  );
}
