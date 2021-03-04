import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import logo from "./../../../assets/img/faces/logosymbolpng.png"
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "100%",
    margin:"10%"
  },
  
  expand: {

    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
      backgroundColor:"goldenrod"
    })
  },
  expandOpen: {
    // transform: "rotate(180deg)"
    backgroundColor:"blueviolet",
    color:"white"
  },
  avatar: {
    width:"100px",
    height:"100px"
  }
}));

export default function SectionAboutUs() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
      <>
       
    <Card className={classes.root}>
    <Typography variant="h2" component="h2" style={{textAlign:"center"}} >ABOUT US</Typography>
        <CardHeader
            avatar={
            <Avatar src={logo} aria-label="recipe" className={classes.avatar}>
                
            </Avatar>
            }
            
            title="Modicum Technologies"
            subheader="Rich In Software Development"
        />
      
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p" style={{fontSize:"20px"}}>
        Our software development solutions aim to magnify your digital experience by implementing innovative and inventive solutions for both small and large-scale businesses. Our key objective is to help companies to drive sales through the accomplishment of impactful online brand visibility, increased traffic, and prompt engagement with the target audience.
We are a Bangalore based website software development company, specializing in custom app development, e-commerce website design & development, Website optimization, and ERP development. We’ve made it our mission to cultivate interactive digital experiences that excite and inspire.

We have high coding standards, design with user in mind, and above all are transparent in our collaboration both with our teammates and clients. The combination of curiosity, drive, and respect makes us a special collection of professionals. 


        </Typography>
       
      </CardContent>
    
    </Card>

    </>
  );
}
