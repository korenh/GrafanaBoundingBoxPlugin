import { PanelPlugin } from '@grafana/data';
import { SimpleOptions } from './types';
import React, { PureComponent } from 'react';
import { PanelProps } from '@grafana/data';
const Annotation = require('react-image-annotation').Annotation;
const RectangleSelector = require('react-image-annotation/lib/selectors').RectangleSelector;

export class Panel extends PureComponent<PanelProps> {
  
    render() {
      return <div>
      <Annotation
      src="https://source.unsplash.com/random/800x600"
      annotations={[{
        "geometry":{
          "type":RectangleSelector.TYPE,
          "x":0,
          "y":0,
          "width": 50,
          "height": 50,
        },
        "data":{
          "text":"korenk",
          "id":"korenk"
        }
      }]}
      value={{}}
      disableOverlay={true}
    /></div>;
    }
  }
  
  
export const plugin = new PanelPlugin<SimpleOptions>(Panel);
