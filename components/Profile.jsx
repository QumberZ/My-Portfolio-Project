import React, { Component } from "react"
import ReactRoundedImage from "react-rounded-image"
import Pic from '../src/assets/profilepic 2.jpg'

export default class Profile extends Component {
  render() {
    return (
      <div style={{ display: "flex" }}>
        <ReactRoundedImage image={Pic}  
          imageWidth="170"
          imageHeight="170"
          roundedSize="10"
          borderRadius="90"
          padding="59"
          />
        
      </div>
    )
  }
}