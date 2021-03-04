
import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import img from './../../../assets/img/faces/programming-concept-illustration-vector.jpg'
import { Avatar, CardMedia, Grid, Hidden } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        width: "100%",
        height:"150px"
        
        
      },
      details: {
        display: 'flex',
        flexDirection: 'column',
        width:"100%"
      },
     
      cover: {
        width: "150px",
        height:"100%",
        backgroundColor:"black"
      },
    
   
    }));
    

export default function TechCard() {
  const classes = useStyles();
  const theme = useTheme();
  const bull = <span className={classes.bullet}>•</span>;
  const data = [
      {
          "tech": "react JS",
          "techDescp" : "Website Development",
          "image":require("./../../../assets/img/faces/react-logo.png")
      },
      {
        "tech": "react Native",
        "techDescp" : "Mobile Application Development",
        "image": require("./../../../assets/img/faces/reactnativelogo.png")
    },
    {
        "tech": "Flutter",
        "techDescp" : "Website/Mobile Application Development ",
        "image": require("./../../../assets/img/faces/flutterlogo.png")
    },
   
    {
        "tech": "JAVA",
        "techDescp" : "Framework- Spring Boot",
        "image": require("./../../../assets/img/faces/spring-boot-logo.png")
    },
    {
        "tech": "NODE JS",
        "techDescp" : "Framework- Express JS",
        "image": require("./../../../assets/img/faces/nodejs.jpg")
    },
    {
        "tech": "Server- AWS",
        "techDescp" : "Server Maintanance & Hosting",
        "image": require("./../../../assets/img/faces/aws.png")
    },
    {
        "tech": "Database- MySql",
        "techDescp" : "Database Management System",
        "image": require("./../../../assets/img/faces/mysql.png")
    },
    {
        "tech": "Database- MangoDB",
        "techDescp" : "Database Management System",
        "image": require("./../../../assets/img/faces/mongodb.png")
    }
  ];
  return (
    <div style={{marginBottom:"10%",marginTop:"5%"}}>
    <h2 style={{textAlign:"left",marginLeft:"10%",fontWeight:"bold"}}>Technology Vision 2021: Leaders wanted </h2>
    <h4 style={{textAlign:"left",marginLeft:"10%",fontWeight:"bold"}}>Check out what programming languages, database systems, and platforms we use to complete projects for our tech.</h4>

    <Hidden only={["xs"]}>
      <Grid container spacing={2} style={{width:"100%"}}>
        {data.map((item) => (
          <div>
            <Grid
              item
              xs={12}
              lg={12}
              justifyContent="left"
              spacing={2}
              style={{ padding:"3%", width:"350px",marginLeft:"10%" }}
            >
                
                <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography>
            <b>{item.tech}</b>
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {item.techDescp}
          </Typography>
        </CardContent>
        
      </div>
      {/* <CardMedia
        className={classes.cover}
        image={item.image}
        title="Live from space album cover"
      /> */}
      <Avatar variant="square" className={classes.cover} src={item.image}/>
    </Card>

              
            </Grid>
          </div>
        ))}
      </Grid>
      </Hidden>
      
    <Hidden only={["lg","md","sm"]}>
      <Grid container spacing={2} style={{width:"100%"}}>
        {data.map((item) => (
          <div>
            <Grid
              item
              xs={12}
              lg={12}
              justifyContent="center"
              spacing={2}
              style={{ padding:"3%", width:"100%" }}
            >
                
                <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography>
            <b>{item.tech}</b>
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {item.techDescp}
          </Typography>
        </CardContent>
        
      </div>
      <CardMedia
        className={classes.cover}
        image={img}
        title="Live from space album cover"
      />
    </Card>

              
            </Grid>
          </div>
        ))}
      </Grid>
      </Hidden>
    </div>
  );
}
