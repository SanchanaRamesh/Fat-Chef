import React, { Component } from 'react'

export default class Listex extends Component {
  render() {
      const cars =["nano","brezza","scorpio","i20"];
      const listcar = cars.map((i)=>i);
    return (

      <div>{listcar}</div>
    )
  }
}
