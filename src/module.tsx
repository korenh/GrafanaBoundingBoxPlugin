import { PanelPlugin , PanelProps } from '@grafana/data';
import React, { PureComponent } from 'react';
const Annotation = require('react-image-annotation').Annotation;
const RectangleSelector = require('react-image-annotation/lib/selectors').RectangleSelector;

export class Panel extends PureComponent<PanelProps<Options>> {

  state={
    height:Number,
    width:Number
  }

  getMeta(url: string){   
    var img = new Image();
    img.src = url
    img.onload = () => {
        this.setState({height:img.height , width:img.width})
    };
  }
  
    render() {

      // *Pay attention to your data structure* //

      let data = this.props.data.series[0].fields[0].values.get(0); 
      this.getMeta(data.ImageURL) 
      let list = [] as any
      let height = Number(this.state.height)
      let width = Number(this.state.width)
      for(let v in data){
        let box : {} = {}
        let x1 = data.topLeft.x
        let y1 = data.topLeft.y
        let x2 = data.bottomRight.x
        let y2 = data.bottomRight.y
        box = {
          geometry:{
            type:RectangleSelector.TYPE,
            x: x1 / height * 100,
            y: y1 / width * 100,
            width: ((x2-x1) / width) * 100 ,
            height: ((y2-y1) / height) * 100
          },
          data:{
            text:data.name,
            id:data.id
          }
        }
        list.push(box)
      }

      return <div>
      <Annotation
      src={data.ImageURL}
      annotations={list}
      value={{}}
      disableOverlay={true}
    /></div>;
    }
  }
  
export const plugin = new PanelPlugin(Panel);

interface Options {}