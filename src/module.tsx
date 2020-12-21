import { PanelPlugin } from '@grafana/data';
import React, { PureComponent } from 'react';
import { PanelProps } from '@grafana/data';
const Annotation = require('react-image-annotation').Annotation;
const RectangleSelector = require('react-image-annotation/lib/selectors').RectangleSelector;


export class Panel extends PureComponent<PanelProps<SimpleOptions>> {
  
    render() {

      //From your panel data match the annotations to the right format
      console.log(this.props.data) 

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
          "text":"koreno",
          "id":"koreno"
        }
      }]}
      value={{}}
      disableOverlay={true}
    /></div>;
    }
  }
  
  
export const plugin = new PanelPlugin(Panel);

export interface SimpleOptions {
  text: string;
  showSeriesCount: boolean;
  seriesCountSize: 'sm' | 'md' | 'lg';
}