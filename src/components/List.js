import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
   color:"white"
  },
}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

export default function ERPList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <List>
        <ListItem button>
                  <ListItemText primary="•	Hospital, Clinic and Lab Management System" />
                  
        </ListItem>
        <ListItem >
                  <ListItemText primary="•	Inventory" />
                  
        </ListItem>
        <ListItem button>
                  <ListItemText primary="•	Purchasing " />
                  
        </ListItem>
        <ListItem >
                  <ListItemText primary="•	Quality Management Solutions" />
                  
        </ListItem>
        <ListItem button>
                  <ListItemText primary="•	CRM" />
                  
        </ListItem>
       
       
      </List>
    </div>
  );
}
