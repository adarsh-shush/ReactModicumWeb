import { Button, Fab, Hidden, Typography } from '@material-ui/core'
import React from 'react'
import myimage from './../../../assets/img/examples/studio-1.jpg'
export default function Subscribe() {
  
   
        return (
        <Hidden smDown>
        <div style={{height:'243px',width:'100%',marginBottom:'91px',
        backgroundBlendMode:'darken',
        backgroundColor:'#9a3d3d',
        backgroundImage:``,
        marginLeft:"auto",
        marginRight:"auto",
        display:'flex',alignItems:'center',justifyContent:'space-around',gap:'20px',overflow:'auto'}}>
      <p style={{width:'40%',fontSize:'29px',lineHeight:1.31,color:"white"}}>
Would you like to start a project with us?

     <h5> Modicum is focusing exclusively in high quality and cost-effective software development and implementation services.</h5></p>


<Button variant="contained" color="secondary">+91-7022767486</Button>
<Button variant="contained" color="secondary" style={{color:"whitesmoke"}}>
<a href="https://api.whatsapp.com/send?phone=8073074480&text=Hi%20There%20Please%20Ping%20us%20for%20more%20information!!">WhatsApp Now</a> 
</Button>
     <div>
      
      <input placeholder='Enter Email...' style={{ width: '315px',
        margin:'0 25px',
        padding:'0 15px',
        height: '48px',
        borderRadius: '30px',
        backgroundColor: '#ffffff',outline:'none',border:'none'}}/>
      <Fab variant="extended"  color="secondary">
        
        subscribe
      </Fab>
      </div>
      
           </div>
           
           </Hidden>)
       
}
