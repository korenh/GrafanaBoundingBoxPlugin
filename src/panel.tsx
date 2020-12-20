import React, { PureComponent } from 'react';
import { PanelProps } from '@grafana/data';
import { SimpleOptions } from 'types';
const Annotation = require('react-image-annotation').Annotation;
const RectangleSelector = require('react-image-annotation/lib/selectors').RectangleSelector;

const Dot ={
  geometry:{
    type:RectangleSelector.TYPE,
    x:0,
    y:0,
    width: 50,
    height: 50,
  },
  data:{
    text:'korennn',
    id:'korennn'
  }
}

interface Props extends PanelProps<SimpleOptions> {}

export class Panel extends PureComponent<Props> {
  
  render() {
    return <div>
    <Annotation
    src="https://source.unsplash.com/random/800x600"
    annotations={[Dot]}
    value={{}}
    disableOverlay={true}
  /></div>;
  }
}

