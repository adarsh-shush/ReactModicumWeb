import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles((theme) => ({
  switchOrder1: {
    [theme.breakpoints.up('md')]: {
      order: 1,
    }
  },
  switchOrder0: {
    [theme.breakpoints.up('md')]: {
      textAlign: 'right',
      order: 0,
    }
  },
  stepContainer: {
    marginBottom: theme.spacing(4)
  },
  media: {
    height: '256px',
  },
}));

export default function HowItWorks(props) {
    const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
    setTimeout(function() {
      setCardAnimation("");
    }, 700);
  const classes = useStyles();
  
  const content = {
    '02_header': 'Ethics Process',
    '02_description': 'Modicum Technologies Pvt. Ltd. is a leading provider of cutting-edge technologies and services, offering scalable solutions for companies of all sizes. Founded by a group of friends who started by scribbling their ideas on a piece of paper, today we offer smart, innovative services.',
    'image1': 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    'step1': 'Who Are We',
    'step1-desc': 'Modicum Technologies Pvt. Ltd. is a leading provider of cutting-edge technologies and services, offering scalable solutions for companies of all sizes. Founded by a group of friends who started by scribbling their ideas on a piece of paper, today we offer smart, innovative services.',
    'image2': 'https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80',
    'step2': 'Our Mission',
    'step2-desc': 'Our Mission is to achieve the reputation of quality, high standard & reliable solution and service Provider Company in the ICT industry.',
    'image3': 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80',
    'step3': 'Our Vision',
    'step3-desc': 'Our Vision is to strive to become an entity in technology based corporate solutions, capable of demanding unconditional response from the targeted niche. We also believe that for our scope of improvisation – sky is the limit and we are always ready to take our achievements to the next level. We are growing and would always like to remain on the growing streak.',
    ...props.content
  };

  return (
    <section>
      <Container maxWidth="sm" className={classes[cardAnimaton]}>
        <Box pt={8} textAlign="center">
          <Typography variant="h4" component="h2" gutterBottom={true}>{content['02_header']}</Typography>
          <Typography variant="subtitle1" color="textSecondary">{content['02_description']}</Typography>
        </Box>
      </Container>
      <Container maxWidth="md">
        <Box pt={8} pb={10}>
          <Grid container spacing={6} className={classes.stepContainer}>
            <Grid item xs={12} md={6}>
              <Card>
                <CardActionArea href="#">
                  <CardMedia className={classes.media} image={content['image1']} />
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box display="flex" height="100%">
                <Box my="auto">
                  <Typography variant="h2" component="h3">01</Typography>
                  <Typography variant="h4" component="h2" gutterBottom={true}>{content['step1']}</Typography>
                  <Typography variant="body1" color="textSecondary" paragraph={true}>{content['step1-desc']}</Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
          <Grid container spacing={6} className={classes.stepContainer}>
            <Grid item xs={12} md={6} className={classes.switchOrder1}>
              <Card>
                <CardActionArea href="#">
                  <CardMedia className={classes.media} image={content['image2']} />
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={12} md={6} className={classes.switchOrder0}>
              <Box display="flex" height="100%">
                <Box my="auto">
                  <Typography variant="h2" component="h3">02</Typography>
                  <Typography variant="h4" component="h2" gutterBottom={true}>{content['step2']}</Typography>
                  <Typography variant="body1" color="textSecondary" paragraph={true}>{content['step2-desc']}</Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
          <Grid container spacing={6}>
            <Grid item xs={12} md={6}>
              <Card>
                <CardActionArea href="#">
                  <CardMedia className={classes.media} image={content['image3']} />
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box display="flex" height="100%">
                <Box my="auto">
                  <Typography variant="h2" component="h3">03</Typography>
                  <Typography variant="h4" component="h2" gutterBottom={true}>{content['step3']}</Typography>
                  <Typography variant="body1" color="textSecondary" paragraph={true}>{content['step3-desc']}</Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </section>
  );
}