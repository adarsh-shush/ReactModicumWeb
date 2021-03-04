import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

import ApartmentIcon from '@material-ui/icons/Apartment';

const useStyles = makeStyles((theme) => ({
  section: {
    backgroundImage: 'url("nereus-assets/img/bg/pattern1.png")',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  iconWrapper: {
    backgroundColor: "goldenrod"
  },
}));

export default function Features(props) {
  const classes = useStyles();

  const content = {
    'badge': 'Services',
    'header-p1': 'Software Support for all types of buisnesses ',
    'header-p2': '',
    'description': '',    
    'col1-header': 'Web Designing',
    'col1-desc': 'Our Web designing services will enable you to reach out to our customers across the globe in your own personalized way.',
    'col2-header': 'Website Development',
    'col2-desc': 'From image sliders to custom content elements and contact forms, Incubator theme is guaranteed to display properly on all major devices.',
    'col3-header': 'Mobile Application Development',
    'col3-desc': 'Modicum Technologies offers various web services with high quality,user friendly,customizable and affordable prices.',
    'col4-header': 'ERP Softwares/ Application Development',
    'col4-desc': ' Our proficient mobile application developers build excellent mobile application architecture which makes your app living magic.',
    'col5-header': 'Desktop Application Development',
    'col5-desc': 'We offer platform-specific and cross-platform desktop app development services to help you turn a solid software idea into a market sensation.',
    'col6-header': 'E-Commerce Services',
    'col6-desc': 'Increase your product sales,get them online today by developing an ecommerce website,this is large impact on your business.',
    // 'col7-header': 'Yoga Retread',
    // 'col7-desc': '',
    // 'col6-header': 'Yoga Workshops',
    // 'col6-desc': '',
    // 'col7-header': 'Yoga Retread',
    // 'col7-desc': '',
    ...props.content
  };

  return (
    <section className={classes.section}>
      <Container maxWidth="lg">
        <Box py={6}>
          <Box textAlign="center" mb={9}>
            <Container maxWidth="sm">
              <Typography variant="overline" color="textSecondary">{content['badge']}</Typography>
              <Typography variant="h3" component="h2" gutterBottom={true}>
                <Typography variant="h3" component="span" color="goldenrod">{content['header-p1']} </Typography><br></br>
                <Typography variant="h3" component="span">{content['header-p2']}</Typography>
              </Typography>
              <Typography variant="subtitle1" color="textSecondary" paragraph={true}>{content['description']}</Typography>
            </Container>
          </Box>
          <Grid container spacing={6}>
            <Grid item xs={12} sm={6} md={4}>
              <Box display="flex">
                <Box pr={5}>
                  <Avatar variant="rounded" className={classes.iconWrapper}>
                    <ApartmentIcon />
                  </Avatar>
                </Box>
                <div>
                  <Typography variant="h6" component="h3" gutterBottom={true}>{content['col1-header']}</Typography>
                  <Typography variant="body2" component="p" color="textSecondary">{content['col1-desc']}</Typography>
                </div>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box display="flex">
                <Box pr={5}>
                  <Avatar variant="rounded" className={classes.iconWrapper}>
                    <ApartmentIcon />
                  </Avatar>
                </Box>
                <div>
                  <Typography variant="h6" component="h3" gutterBottom={true}>{content['col2-header']}</Typography>
                  <Typography variant="body2" component="p" color="textSecondary">{content['col2-desc']}</Typography>
                </div>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box display="flex">
                <Box pr={5}>
                  <Avatar variant="rounded" className={classes.iconWrapper}>
                    <ApartmentIcon />
                  </Avatar>
                </Box>
                <div>
                  <Typography variant="h6" component="h3" gutterBottom={true}>{content['col3-header']}</Typography>
                  <Typography variant="body2" component="p" color="textSecondary">{content['col3-desc']}</Typography>
                </div>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box display="flex">
                <Box pr={5}>
                  <Avatar variant="rounded" className={classes.iconWrapper}>
                    <ApartmentIcon />
                  </Avatar>
                </Box>
                <div>
                  <Typography variant="h6" component="h3" gutterBottom={true}>{content['col4-header']}</Typography>
                  <Typography variant="body2" component="p" color="textSecondary">{content['col4-desc']}</Typography>
                </div>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box display="flex">
                <Box pr={5}>
                  <Avatar variant="rounded" className={classes.iconWrapper}>
                    <ApartmentIcon />
                  </Avatar>
                </Box>
                <div>
                  <Typography variant="h6" component="h3" gutterBottom={true}>{content['col5-header']}</Typography>
                  <Typography variant="body2" component="p" color="textSecondary">{content['col5-desc']}</Typography>
                </div>
              </Box>
            </Grid>
           <Grid item xs={12} sm={6} md={4}>
              <Box display="flex">
                <Box pr={5}>
                  <Avatar variant="rounded" className={classes.iconWrapper}>
                    <ApartmentIcon />
                  </Avatar>
                </Box>
                <div>
                  <Typography variant="h6" component="h3" gutterBottom={true}>{content['col6-header']}</Typography>
                  <Typography variant="body2" component="p" color="textSecondary">{content['col6-desc']}</Typography>
                </div>
              </Box>
            </Grid>
             {/* <Grid item xs={12} sm={6} md={4}>
              <Box display="flex">
                <Box pr={5}>
                  <Avatar variant="rounded" className={classes.iconWrapper}>
                    <ApartmentIcon />
                  </Avatar>
                </Box>
                <div>
                  <Typography variant="h6" component="h3" gutterBottom={true}>{content['col7-header']}</Typography>
                  <Typography variant="body2" component="p" color="textSecondary">{content['col7-desc']}</Typography>
                </div>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box display="flex">
                <Box pr={5}>
                  <Avatar variant="rounded" className={classes.iconWrapper}>
                    <ApartmentIcon />
                  </Avatar>
                </Box>
                <div>
                  <Typography variant="h6" component="h3" gutterBottom={true}>{content['col7-header']}</Typography>
                  <Typography variant="body2" component="p" color="textSecondary">{content['col7-desc']}</Typography>
                </div>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box display="flex">
                <Box pr={5}>
                  <Avatar variant="rounded" className={classes.iconWrapper}>
                    <ApartmentIcon />
                  </Avatar>
                </Box>
                <div>
                  <Typography variant="h6" component="h3" gutterBottom={true}>{content['col7-header']}</Typography>
                  <Typography variant="body2" component="p" color="textSecondary">{content['col7-desc']}</Typography>
                </div>
              </Box>
            </Grid> */}
          </Grid>
        </Box>
      </Container>
    </section>
  );
}