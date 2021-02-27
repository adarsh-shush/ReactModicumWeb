import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Avatar, Card, CardMedia, Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  primaryAction: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      marginRight: theme.spacing(0),
      marginBottom: theme.spacing(2),
    }
  },
}));

export default function AboutUsSectionTabs(props) {
    
  const classes = useStyles();

  const content = {
    'header': 'OUR HISTORY',
    'description': 'We are a small group of young professionals striving hard for the development of the organization. Modicum is a software services firm based in Bangalore. We have extensive experience in many diverse areas of software development. Our staff of professionals will work with a wide array of platforms, languages, and tools in the course of our various projects.We built our solutions by closely learning our potential clientele and their expectations from our product. We know how to analyze this information and customize our offering to changing market needs.',
    // 'primary-action': '',
    // 'secondary-action': 'Read more',
    ...props.content
  };

  return (
    <section>
      <Container maxWidth="md">
        <Box py={8} textAlign="center">
          <Typography variant="h3" component="h2" gutterBottom={true}>{content['header']}</Typography>
          <Typography variant="h6" color="textSecondary" paragraph={true}>{content['description']}</Typography>
          <Box mt={4}>
            {/* <Button variant="contained" color="primary" className={classes.primaryAction}>{content['primary-action']}</Button>
            <Button color="secondary">{content['secondary-action']}</Button> */}
             <Avatar alt="Remy Sharp" src="" variant="square" style={{width:"100%"}} />
            
          </Box>
        </Box>

      </Container>
    </section>
  );
}