import React, { Component } from "react";
import './Map.scss';
import * as ol from 'openlayers';

const superagent = require('superagent');
const DEFAULT_ZOOM = 5;
class Map extends Component {
  constructor(props) {
    super(props);
    this.featureLayer = new ol.layer.Vector ({
      source: new ol.source.Vector ({
        features: []
      }),
      style: new ol.style.Style ({
        image: new ol.style.Icon({
          src: 'https://img.icons8.com/ultraviolet/40/000000/marker.png'
        })
      })
    });
    this.olmap = new ol.Map({
      target: null,
      layers: [
        new ol.layer.Tile({
          source: new ol.source.XYZ({ 
            url : 'https://{a-c}.tiles.mapbox.com/v3/mapbox.blue-marble-topo-jul/{z}/{x}/{y}.png',
          })
        }),
        this.featureLayer
      ],
      view: new ol.View({
        center: [0,0],
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

    const feature = new ol.Feature(new ol.geom.Point(center));
    this.featureLayer.getSource().clear();
    if(searchResult) this.featureLayer.getSource().addFeature(feature);
    this.olmap.getOverlays().clear() 
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

    console.log('shoudl component update?');
    //  if the search result is first received, update the map
    if(!this.props.searchResult && nextProps.searchResult) {
      return true;
    }

    if(this.props.searchResult && nextProps.searchResult &&
      (this.props.searchResult.latitude !== nextProps.searchResult.latitude ||
      this.props.searchResult.longitude !== nextProps.searchResult.longitude)) {
        return true;
    }

    return false;
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
