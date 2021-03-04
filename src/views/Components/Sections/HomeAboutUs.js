import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import SectionTabs from './SectionTabs';
import ImageSection from './HomeImageSection';
import { Hidden } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  title: {
    marginBottom: theme.spacing(4),
   
      borderBottom: "2px solid #9a3d3d",
      position: "absolute",
      top: "3%",
      left: "7%"
    
  },
  block: {
    marginBottom: theme.spacing(3),
  },
  halfLg: {
    [theme.breakpoints.up('lg')]: {
      maxWidth: theme.breakpoints.values['lg'] / 2
    }
  },
  firstBox: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    [theme.breakpoints.up('lg')]: {
      marginLeft: 'auto',
      paddingTop: theme.spacing(10),
      paddingBottom: theme.spacing(0),
      paddingRight: theme.spacing(6)
    }
  },
  fullHeightImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    objectFit: 'cover',
    height: '70%',
    width: '60%',
    marginTop:"10%"
  }
}));

export default function HomeAboutContent(props) {
  const classes = useStyles();

  const content = {
    'title': 'About Us',
    'paragraph1': 'Our software development solutions aim to magnify your digital experience by implementing innovative and inventive solutions for both small and large-scale businesses. Our key objective is to help companies to drive sales through the accomplishment of impactful online brand visibility, increased traffic, and prompt engagement with the target audience.',
    'paragraph2': 'We are a Bangalore based website software development company, specializing in custom app development, e-commerce website design & development, Website optimization, and ERP development. We’ve made it our mission to cultivate interactive digital experiences that excite and inspire.',
    'paragraph3': 'We have high coding standards, design with user in mind, and above all are transparent in our collaboration both with our teammates and clients. The combination of curiosity, drive, and respect makes us a special collection of professionals. ',
    'primary-action': 'Learn more',
    'subtitle': 'Web development',
    'paragraph4': 'In today’s world of technology, it is essential for every business to have a website. A website acts as an excellent online marketing tool and platform for your business. It allows customers to learn about the type of products/services your business has to offer and how. We are an IT company based in Bangalore offering high-quality website development services to help your business go digital. We collaborate with you to understand your brand, goals and the requirements of your company before developing your website',
    'subtitle_1': 'Mobile Application development',
    'paragraph5': 'Existing market competition requires a company to create one-of-a-kind software intended to meet their customers’ unique demands. Off-the-shelf software available is generally designed for the mass public as a solution to the many different needs of its users. These, however, may not fit-in exactly with your existing system and processes and may cause delays due to training requirements involved. This situation calls for unique custom software development, keeping in mind each company’s infrastructure, branding, implementation, and core business processes.',
    'subtitle_2': 'Coustom Software & Application development',
    'paragraph6': 'The mobile revolution is a game changer for many industries. It has opened up several new opportunities and ushered ease of doing business. In fact, embracing a mobile-first approach has benefited organizations by reducing wastage, increasing efficiency, and reducing lead time.',
    'primary-action': 'Learn more',
    
    ...props.content
  };
  

  return (
    <section>
      <Grid container>
        <Grid item xs={12} md={6}>
          <Box className={[classes.halfLg, classes.firstBox]}>
            <Container>
              <Hidden only={["xs"]}>
              <Typography variant="h3" className={classes.title} >{content['title']}</Typography>
              </Hidden>
              <Typography variant="h3" className={classes.title} >{content['title']}</Typography>

              <Typography variant="body1" color="textSecondary" paragraph={true} className={classes.block}>{content['paragraph1']}</Typography>

              <Typography variant="body1" color="textSecondary" paragraph={true} className={classes.block}>{content['paragraph2']}</Typography>

              <Typography variant="body1" color="textSecondary" paragraph={true} className={classes.block}>{content['paragraph3']}</Typography>
              <Box position="relative" width={"100%"}>
       
          </Box>
              {/* <Box>
                <Button variant="text" color="primary" endIcon={<ArrowRightAltIcon />} className={classes.primaryAction}>{content['primary-action']}</Button>
                
              </Box> */}
            </Container>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}  >
          <Box position="relative" height={"40%"}>
            <ImageSection/>
          </Box>
         
        </Grid>

      </Grid>
      <Grid container>
      <Grid item xs={12} md={6}  >
          <Box position="relative" height={"80%"}>
          <ImageSection/>
          </Box>
         
        </Grid>

        <Grid item xs={12} md={6}>
          <Box className={[classes.halfLg, classes.firstBox]}>
            <Container>
            {/* <Hidden only={["xs"]}>
              <Typography variant="h5"  >{content['subtitle']}</Typography>
              </Hidden> */}
              <Typography variant="h5" >{content['subtitle']}</Typography>
              <Typography variant="body1" color="textSecondary" paragraph={true} className={classes.block}>{content['paragraph4']}</Typography>
              <Typography variant="h5"  >{content['subtitle_1']}</Typography>
              <Typography variant="body1" color="textSecondary" paragraph={true} className={classes.block}>{content['paragraph5']}</Typography>
              <Typography variant="h5"  >{content['subtitle_2']}</Typography>
              <Typography variant="body1" color="textSecondary" paragraph={true} className={classes.block}>{content['paragraph6']}</Typography>
              <Box position="relative" width={"100%"}>
          
          </Box>
              {/* <Box>
                <Button variant="text" color="primary" endIcon={<ArrowRightAltIcon />} className={classes.primaryAction}>{content['primary-action']}</Button>
                
              </Box> */}
            </Container>
          </Box>
        </Grid>
        
      </Grid>
    </section>
  );
}