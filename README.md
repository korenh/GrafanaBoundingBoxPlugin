# React x Grafana

## BoundingBox Plugin

<img src="./src/img/logo.svg" width="180">

_To run Grafana with pressistant volume locally_

```bash
docker run -d -p 3000:3000 --name=grafana -v /Users/korenhamra/Documents/Development/FrontEnd/ReactGrafana/plugins:/var/lib/grafana/plugins grafana/grafana
```

_Locate the build at the plugins directory_

```bash
./plugins
```

_Must restart container to see the plugin changes at grafana_

```bash
docker restart grafana
```

_inside index file paste_

./node_modules/react-image-annotation/es/index.js

Copy Paste in file 

```javascript
export { default as defaultProps } from './components/defaultProps';
export { default as Annotation } from './components/Annotation';
```

