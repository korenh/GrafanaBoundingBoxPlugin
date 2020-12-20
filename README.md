# React x Grafana

## Anotations Plugin

<img src="./src/img/logo.svg" width="200">

_To run Grafana with pressistant volume locally_

- docker run -d -p 3000:3000 --name=grafana -v /Users/korenhamra/Documents/Development/FrontEnd/ReactGrafana/plugins:/var/lib/grafana/plugins grafana/grafana

_Locate the build at the plugins directory_

- ./plugins

_Must restart container to see the plugin changes at grafana_

- docker restart grafana

_inside index file paste_

fullpath -> ./node_modules/react-image-annotation/es/index.js

export { default as defaultProps } from './components/defaultProps';
export { default as Annotation } from './components/Annotation';

_we do this so we can import Annotation from the module_


