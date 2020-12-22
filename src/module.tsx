import { PanelPlugin } from '@grafana/data';
import React, { PureComponent } from 'react';
import { PanelProps } from '@grafana/data';
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

      this.getMeta(this.props.data.series[0].fields[0].values.get(0).entityId)
      let data = this.props.data.series[0].fields[0].values.get(0);
      let list = [] as any
      let height = Number(this.state.height)
      let width = Number(this.state.width)
      for(let v in data.results){
        let box : {} = {}
        let comment = ''
        switch(data.algorithmName){
          case 'ocr':
            comment = data.results[v].detectionScore
            break
          case 'faces':
            comment = data.results[v].detectionScore
            break
          case 'object':
            comment = data.results[v].detectionScore
            break
          case 'logo':
            comment = data.results[v].detectionScore
            break
          default:
            comment = 'Detected'
        }
        let x1 = data.results[v].boundingBox.topLeft.x
        let y1 = data.results[v].boundingBox.topLeft.y
        let x2 = data.results[v].boundingBox.bottomRight.x
        let y2 = data.results[v].boundingBox.bottomRight.y
        box = {
          geometry:{
            type:RectangleSelector.TYPE,
            x: x1 / height * 100,
            y: y1 / width * 100,
            width: ((x2-x1) / width) * 100 ,
            height: ((y2-y1) / height) * 100
          },
          data:{
            text:comment,
            id:v
          }
        }
        list.push(box)
      }

      return <div>
      <Annotation
      src={data.entityId}
      annotations={list}
      value={{}}
      disableOverlay={true}
    /></div>;
    }
  }
  
export const plugin = new PanelPlugin(Panel);

interface Options {}