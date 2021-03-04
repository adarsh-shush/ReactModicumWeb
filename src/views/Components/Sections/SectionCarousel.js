import React from "react";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const styles = {
  root: {
    position: "relative",
    
  },
  slide: {
    padding: 15,
    Height: "80%",
    width:"80%",
    color: "#fff"
  },
  slide1: {
    // backgroundColor: "#FEA900"
  },
  slide2: {
    // backgroundColor: "#B3DC4A"
  },
  slide3: {
    // backgroundColor: "#6AC0FF"
  }
};

class DemoAutoPlay extends React.Component {
  state = {
    index: 0
  };

  handleChangeIndex = (index) => {
    this.setState({
      index
    });
  };

  render() {
    const { index } = this.state;

    return (
      <div style={styles.root}>
        <AutoPlaySwipeableViews
          index={index}
          onChangeIndex={this.handleChangeIndex}
        >
          <div style={Object.assign({}, styles.slide, styles.slide1)}>
           <h1 style={{fontWeight:"bold",fontSize:"100px", color:"black",width:"80%",height:"80%"}}>  We Built Softwares</h1><br></br>
            <h3 style={{fontWeight:"bold",fontSize:"50px",textAlign:'center',color:"black"}}>Innovative | Top Quality | On Time</h3>
          </div>
          <div style={Object.assign({}, styles.slide, styles.slide2)}>
          <h1 style={{fontWeight:"bold",fontSize:"100px",color:"black"}}>  We Deliver Unique Creative Design</h1>
          <h3 style={{fontWeight:"bold",fontSize:"50px",textAlign:'center',color:"black"}}> Think | Design | Execute</h3>

          </div>
          <div style={Object.assign({}, styles.slide, styles.slide3)}>
          <h1 style={{fontWeight:"bold",fontSize:"100px",color:"black"}}>   We Create Custom Application </h1>
          <h3 style={{fontWeight:"bold",fontSize:"50px",textAlign:'center',color:"black"}}>  Analyze | Code | Develop</h3>

          </div>
        </AutoPlaySwipeableViews>
      </div>
    );
  }
}

export default DemoAutoPlay;
