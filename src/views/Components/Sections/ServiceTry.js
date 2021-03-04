import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import { Avatar, Button, ButtonGroup, Hidden } from '@material-ui/core';
// import ProductRating from './Rating';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import img from './../../../assets/img/faces/img6.jpg'
import pngimg_1 from './../../../assets/img/faces/pngimg5.png'
import pngimg_2 from './../../../assets/img/faces/pngimg1.png'
import pngimg_3 from './../../../assets/img/faces/pngimg3.png'
import pngimg_4 from './../../../assets/img/faces/pngimg6.png'
import pngimg_5 from './../../../assets/img/faces/pngimg5.png'
import pngimg_6 from './../../../assets/img/faces/pngimg7.png'
import pngimg_7 from './../../../assets/img/faces/pngimg8.png'
import img_1 from './../../../assets/img/faces/bulb_1.jpg'

import img_2 from './../../../assets/img/faces/img3.jpg'
import hospital from './../../../assets/img/faces/hosptl1.png'
import GridItem from 'components/Grid/GridItem';
import SectionCarousel from './SectionCarousel';
import ERPList from 'components/List';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    maxheight:"100%",
    flexGrow: 1,
    // backgroundImage: `url(${img})`,
    height:'100%',
    maxWidth:"100%",
    backgroundRepeat:"no-repeat"
  },
  paper_1: {
    padding: theme.spacing(2),
    maxheight:"100%",
    flexGrow: 1,
    backgroundImage: `url(${pngimg_2})`,
    height:'100%',maxWidth:"100%",backgroundRepeat:"no-repeat",
  },
  
  paper_2: {
    padding: theme.spacing(2),
    maxheight:"100%",
    
    // backgroundImage: `url(${pngimg_4})`,
    // height:'100%',maxWidth:"100%",backgroundRepeat:"no-repeat"
  },
  image: {
    width: 128,
    height: 128,
  },
  paper_3: {
    padding: theme.spacing(2),
    maxheight:"100%",
    flexGrow: 1,
    backgroundImage: `url(${pngimg_6})`,
    height:'100%',maxWidth:"100%",backgroundRepeat:"no-repeat"
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

export default function ServiceCard() {
  const classes = useStyles();
    
  return (
    <div className={classes.root}>
    
      <Paper className={classes.paper} elevation={10}  style={{marginBottom:"20px"}}>
        <Grid container spacing={2} md={10} lg={10} style={{backgroundColor:"#5cbf63"}}>
        <GridItem lg={7} md={7} xs={12}>
            <Typography style={{color:"black", fontSize:"40px",textAlign:"left"}}>WEBSITE DEVELOPMENT</Typography>
            <Typography style={{color:"black",textAlign:"left"}}>In today’s world of technology, it is essential for every business to have a website. A website acts as an excellent online marketing tool and platform for your business. It allows customers to learn about the type of products/services your business has to offer and how. We are an IT company based in Bangalore offering high-quality website development services to help your business go digital. We collaborate with you to understand your brand, goals and the requirements of your company before developing your website.</Typography>
            <Typography style={{color:"black",textAlign:"left"}}>We have successfully completed several website development projects for businesses in India, UK and Russia. We use popular platforms, keeping up with latest technologies and best practices to deliver high-class results. Our website development services span across all genres like e-commerce, small business websites, large business websites, brand websites, mobile websites, and portals.</Typography>
            <Typography style={{color:"black",textAlign:"left"}}>Furthermore, to render the best solution for our clients, we provide post-implementation support once the website is up and running.</Typography>


        </GridItem>
        {/* <GridItem lg={4}>
           
        </GridItem> */}
        <GridItem lg={5} md={5} xs={12}>
           <Avatar variant="square" src={pngimg_1} style={{marginLeft:"10%",width:"100%",height:"100%"}}></Avatar>
        </GridItem>
         
        </Grid>
      </Paper>

      <Hidden only={["xs"]}>

      <Paper className={classes.paper_1} elevation={10} md={10} lg={10} style={{marginBottom:"20px",backgroundColor:"blueviolet",marginLeft:"15%"}}>
    
         
        <Grid container spacing={2}  style={{}}>
        <GridItem lg={4} md={4} xs={12}>
            </GridItem>
          
            <GridItem lg={8} md={8} xs={12}>
            <Typography style={{color:"whitesmoke", fontSize:"40px",textAlign:"left"}}>MOBILE Application DEVELOPMENT</Typography>
          <Typography style={{color:"whitesmoke",textAlign:"left"}}>The mobile revolution is a game changer for many industries. It has opened up several new opportunities and ushered ease of doing business. In fact, embracing a mobile-first approach has benefited organizations by reducing wastage, increasing efficiency, and reducing lead time.</Typography>
          <Typography style={{color:"whitesmoke",textAlign:"left"}}>We have skilled, innovative & experienced iOS application developers who work towards developing apps that can deliver the desired results. We ensure maximum user engagement and customer satisfaction. Our team of experts make use of technologies such as React JS, React Native, Ionic, Java and Node JS to ensure powerful apps to help your enterprise establish a connection with customers.</Typography>
            <Typography style={{color:"whitesmoke",textAlign:"left"}}>We develop iOS and Android apps with varying levels of complexities for all possible domains; Business and Entertainment, Educational, Social Networking, Health, Travel and others. We utilize agile methodology to craft and customize an iOS and Android app totally based on your requirements and needs.</Typography>
  
                </GridItem>
         </Grid>
      
      </Paper>
</Hidden>
<Hidden only={["lg","md"]}>
      <Paper className={classes.paper_1} elevation={10} md={10} lg={10} style={{marginBottom:"20px",backgroundColor:"blueviolet"}}>
    
         
        <Grid container spacing={2}  style={{}}>
        <GridItem lg={4} md={4} xs={12}>
            </GridItem>
          
            <GridItem lg={8} md={8} xs={12}>
            <Typography style={{color:"whitesmoke", fontSize:"40px",textAlign:"left"}}>MOBILE Application DEVELOPMENT</Typography>
          <Typography style={{color:"whitesmoke",textAlign:"left"}}>The mobile revolution is a game changer for many industries. It has opened up several new opportunities and ushered ease of doing business. In fact, embracing a mobile-first approach has benefited organizations by reducing wastage, increasing efficiency, and reducing lead time.</Typography>
          <Typography style={{color:"whitesmoke",textAlign:"left"}}>We have skilled, innovative & experienced iOS application developers who work towards developing apps that can deliver the desired results. We ensure maximum user engagement and customer satisfaction. Our team of experts make use of technologies such as React JS, React Native, Ionic, Java and Node JS to ensure powerful apps to help your enterprise establish a connection with customers.</Typography>
            <Typography style={{color:"whitesmoke",textAlign:"left"}}>We develop iOS and Android apps with varying levels of complexities for all possible domains; Business and Entertainment, Educational, Social Networking, Health, Travel and others. We utilize agile methodology to craft and customize an iOS and Android app totally based on your requirements and needs.</Typography>
  
                </GridItem>
         </Grid>
      
      </Paper>
      </Hidden>
      <Paper className={classes.paper_2} elevation={10}  style={{marginBottom:"20px"}}>
      <Grid container spacing={2} md={10} lg={10} style={{backgroundColor:"#fff176"}}>
        <GridItem lg={8} md={8} xs={12} >
        <Typography style={{color:"black", fontSize:"40px",textAlign:"left"}}>Custome software development</Typography>
          <Typography style={{color:"black",textAlign:"left"}}>Existing market competition requires a company to create one-of-a-kind software intended to meet their customers’ unique demands. Off-the-shelf software available is generally designed for the mass public as a solution to the many different needs of its users. These, however, may not fit-in exactly with your existing system and processes and may cause delays due to training requirements involved. This situation calls for unique custom software development, keeping in mind each company’s infrastructure, branding, implementation, and core business processes.</Typography>
            <Typography style={{color:"black",textAlign:"left"}}>We make every effort possible to understand your business. We construct a detailed blueprint of the custom software you need and design the best & most-suited solutions for your business. We maintain a holistic balance between customization and user-friendliness. Rigorous testing and post-implementation support is part of our package to ensure that your custom software development requirements are fully met. We can design, develop, integrate and test custom software across multiple systems and platforms.</Typography>
            <Typography style={{color:"black",textAlign:"left"}}>We create secure and effective solutions that are a snug fit to your existing systems and processes, so that you spend less time in the orientation and more time in the upward movement. With our comprehensive custom software development solutions, you can do away with any secondary applications for various micro processes.</Typography>

  
        </GridItem>

        {/* <GridItem lg={4} md={4} xs={12}>
        <Avatar variant="square" src={pngimg_5} style={{width:"100%",height:"100%"}}></Avatar>

        </GridItem> */}

        <GridItem lg={4} md={4} xs={12}>
        <Avatar variant="square" src={pngimg_4} style={{width:"100%",height:"100%"}}></Avatar>

        </GridItem>
     
         
        </Grid>
      </Paper>

      


     
      <Hidden only={["xs"]}>
      <Paper className={classes.paper_3} elevation={10} md={10} lg={10} style={{marginBottom:"20px",marginLeft:"15%"}}>
        <Grid container spacing={2}  style={{backgroundColor:"#f6721d"}}>
        <GridItem lg={3} md={3} xs={12}>
        <Avatar variant="square" src={pngimg_7} style={{width:"100%",height:"100%"}}></Avatar>

            </GridItem>
            {/* <GridItem lg={4} md={4} xs={12}>
            </GridItem> */}
            <GridItem lg={6} md={6} xs={12}>
            <Typography style={{color:"whitesmoke", fontSize:"40px",textAlign:"left"}}>ERP Softwares and Application development</Typography>
          <Typography style={{color:"whitesmoke",textAlign:"left"}}>Modicum Technologies Pvt Ltd is an all-rounder adaptive software company that provides an on premise solution to the enterprises. The software offers customizable and fully featured modules to various industries. It will handle all the major and minor business aspects for you. </Typography>
            <Typography style={{color:"whitesmoke",textAlign:"left"}}>It offers different affordable license pricing based on users and features. It is known to provide fast and detailed results to make your business manageable and productive.</Typography>
         
                </GridItem>

                 <GridItem lg={3} md={3} xs={12}>
                 <Typography style={{color:"whitesmoke",textAlign:"left"}}>Main Features: </Typography>
            <ERPList/>
            </GridItem>
         </Grid>
      </Paper>
      </Hidden>
      <Hidden only={["lg","md"]}>
      <Paper className={classes.paper_3} elevation={10}  style={{marginBottom:"20px",backgroundColor:"blueviolet"}}>
        <Grid container spacing={2}  style={{}}>
        <GridItem lg={3} md={3} xs={12}>
        <Avatar variant="square" src={pngimg_7} style={{width:"100%",height:"100%"}}></Avatar>

            </GridItem>
            {/* <GridItem lg={4} md={4} xs={12}>
            </GridItem> */}
            <GridItem lg={6} md={6} xs={12}>
            <Typography style={{color:"whitesmoke", fontSize:"40px",textAlign:"left"}}>ERP Softwares and Application development</Typography>
          <Typography style={{color:"whitesmoke",textAlign:"left"}}>Modicum Technologies Pvt Ltd is an all-rounder adaptive software company that provides an on premise solution to the enterprises. The software offers customizable and fully featured modules to various industries. It will handle all the major and minor business aspects for you. </Typography>
            <Typography style={{color:"whitesmoke",textAlign:"left"}}>It offers different affordable license pricing based on users and features. It is known to provide fast and detailed results to make your business manageable and productive.</Typography>
         
                </GridItem>

                 <GridItem lg={3} md={3} xs={12}>
                 <Typography style={{color:"whitesmoke",textAlign:"left"}}>Main Features: </Typography>
            <ERPList/>
            </GridItem>
         </Grid>
      </Paper>
 </Hidden>

 <Paper className={classes.paper_2} elevation={10}  style={{marginBottom:"20px"}}>
      <Grid container spacing={2} md={10} lg={10} style={{backgroundColor:"#72e660"}}>
        <GridItem lg={8} md={8} xs={12} >
        <Typography style={{color:"black", fontSize:"40px",textAlign:"left"}}>Hospital Management System</Typography>
          <Typography style={{color:"black",textAlign:"left"}}>Modicum is a hospital management software with an integrated information system design to manage the administrative, financial, and clinical aspects of a hospital.</Typography>
            <Typography style={{color:"black",textAlign:"left"}}>This encompasses paper-based information processing as well as the data processing system. Managing patient flow effectively is a real-time requirement. We have made this tricky process simple.</Typography>
            <Typography style={{color:"black",textAlign:"left"}}>Reduces waiting time and enhances patient care by providing staff with accurate and timely patient information. All-in-one hospital or clinic management system that comes with integrated modules such as Appointment, Billing, OPD, IPD, Inventory, Pharmacy, Laboratory, Radiology, etc. modules.</Typography>

  
        </GridItem>

        {/* <GridItem lg={4} md={4} xs={12}>
        <Avatar variant="square" src={pngimg_5} style={{width:"100%",height:"100%"}}></Avatar>

        </GridItem> */}

        <GridItem lg={4} md={4} xs={12}>
        <Avatar variant="square" src={hospital} style={{width:"100%",height:"100%"}}></Avatar>

        </GridItem>
     
         
        </Grid>
      </Paper>

    </div>
  );
}
