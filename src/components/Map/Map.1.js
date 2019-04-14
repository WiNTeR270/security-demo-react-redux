import React, { Component } from "react";
import './Map.scss';
import * as ol from 'openlayers';
const superagent = require('superagent');
const DEFAULT_ZOOM = 10;
class Map extends Component {
  constructor(props) {
    super(props);
    this.olmap = new ol.Map({
      target: null,
      layers: [
        new ol.layer.Tile({
          source: new ol.source.XYZ({ 
            url : 'https://{a-c}.tiles.mapbox.com/v3/mapbox.blue-marble-topo-jul/{z}/{x}/{y}.png',
          })
        })
      ],
      view: new ol.View({
        center: ol.proj.transform(
          [-98, 35], // default lat/lon
          'EPSG:4326',         // source projection (CURVED sphere or ellipsoid of reference)
          'EPSG:3857'),
        zoom: DEFAULT_ZOOM
      })
    });
  }

  updateMap() {
    const {searchResult} = this.props;
    const coords = (searchResult) ? [searchResult.longitude, searchResult.latitude] : [0,0];
    const center = ol.proj.transform(
      coords, // default lat/lon
      'EPSG:4326',         // source projection (CURVED sphere or ellipsoid of reference)
      'EPSG:3857');        // destination projection (FLAT PROJECTION Spherical Mercator)  (Google/Bing/OpenStreetMap))


    this.olmap.getView().setCenter(center);
    this.olmap.getView().setZoom(DEFAULT_ZOOM);
  }

  componentDidMount() {
    //  cannot do this in constructor because it has to wait until the DOM has loaded and component is mounted to link to ID
    this.olmap.setTarget("map");  
    //  listen to the view move ending event so that mouse interaction with moving can be tracked in local state
    this.olmap.on("moveend", () => {
      let center = this.olmap.getView().getCenter();
      let zoom = this.olmap.getView().getZoom();
      this.setState({ center, zoom });
    });
  }

  shouldComponentUpdate(nextProps, nextState) {
    let center = this.olmap.getView().getCenter();
    let zoom = this.olmap.getView().getZoom();

    //  if the search result is first received, update the map
    if(this.props.searchResult && nextProps.searchResult) {
      return true;
    }

    if(this.props.searchResult.latitude !== nextProps.searchResult.latitude ||
      this.props.search.result.longitude !== nextProps.searchResult.longitude) {
        console.log("Latitude or Longitude updated based on search results, updating map");
        return true;
    }

    return true;
  }

  render() {
    console.log('map render update');
    this.updateMap(); 
    return (
      <div id="map" className="security-map"/>
    );
  }
}

export default Map;
