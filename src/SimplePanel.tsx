import React, { PureComponent } from 'react';
import { PanelProps } from '@grafana/data';
import { SimpleOptions } from 'types';
const img = require('react-picture-annotation')

interface Props extends PanelProps<SimpleOptions> {}

export class SimplePanel extends PureComponent<Props> {
  render() {
    return <div>
    <img.ReactPictureAnnotation
    image="https://source.unsplash.com/random/800x600"
    onSelect={()=>console.log('')}
    onChange={()=>console.log('')}
    width={400}
    height={400}
    annotationData={[{
      id:"id",  
      comment:"detected", 
      mark:{
        type:"RECT",                  
        x:100,
        y:100,
        width:300,
        height:100
      }
    }]}
  /></div>;
  }
}