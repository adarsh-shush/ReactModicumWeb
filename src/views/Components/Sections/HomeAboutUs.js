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
const useStyles = makeStyles((theme) => ({
  title: {
    marginBottom: theme.spacing(4),
   
      borderBottom: "2px solid #0004ff",
      position: "absolute",
      top: "4%",
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
    height: '100%',
    width: '90%',
    marginTop:"10%"
  }
}));

export default function HomeAboutContent(props) {
  const classes = useStyles();

  const content = {
    'title': 'About Us',
    'paragraph1': 'We are a small group of young professionals striving hard for the development of the organization. Modicum is a software services firm based in Bangalore. We have extensive experience in many diverse areas of software development.',
    'paragraph2': 'Our staff of professionals will work with a wide array of platforms, languages, and tools in the course of our various projects.We built our solutions by closely learning our potential clientele and their expectations from our product. We know how to analyze this information and customize our offering to changing market needs.',
    'paragraph3': 'Modicum Is Focusing exclusively in high quality and cost-effective software development and implementation services.',
    'primary-action': 'Learn more',
    ...props.content
  };
  

  return (
    <section>
      <Grid container>
        <Grid item xs={12} md={6}>
          <Box className={[classes.halfLg, classes.firstBox]}>
            <Container>
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
          <Box position="relative" height={"80%"}>
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
              <Typography variant="h3" className={classes.title}>{content['title']}</Typography>

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
        
      </Grid>
    </section>
  );
}