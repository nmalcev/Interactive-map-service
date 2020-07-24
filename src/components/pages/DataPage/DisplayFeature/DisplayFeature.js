import React, {Component} from 'react';

// https://openlayers.org/en/latest/doc/tutorials/bundle.html

class DisplayFeature extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.mapRef = React.createRef();
    }

    componentDidMount() {
        const OL = ol; // eslint-disable-line no-undef
        const coordinates = this.props.feature.geometry?.coordinates || [];

        /*
        import {useGeographic} from 'ol/proj';
import {Map, View, Feature, Overlay} from 'ol/index';
import {Point} from 'ol/geom';
import {Vector as VectorLayer, Tile as TileLayer} from 'ol/layer';
import {OSM, Vector as VectorSource} from 'ol/source';
import {Style, Circle, Fill} from 'ol/style';
        */
        let point = new OL.geom.Point(OL.proj.fromLonLat(coordinates));

        console.log('Point');
        console.dir(point);
        let map = new OL.Map({
            target: this.mapRef.current,
            layers: [
              new OL.layer.Tile({
                source: new OL.source.OSM()
              }),
              new OL.layer.Vector({
                  source: new OL.source.Vector({
                      features: [new OL.Feature(point)]
                  }),
                  style: new OL.style.Style({
                      image: new OL.style.Circle({
                          radius: 9,
                          fill: new OL.style.Fill({color: 'red'})
                      })                
                  })
              })
            ],
            view: new OL.View({
              center: OL.proj.fromLonLat(coordinates),
              zoom: 17
            })
          });

          map.on('click', function(event) {
            let feature = map.getFeaturesAtPixel(event.pixel)[0];
            if (feature) {
              var coordinate = feature.getGeometry().getCoordinates();
              console.log('Coordinate');
              console.dir(coordinate);
              
            }
          });
          
          map.on('pointermove', function(event) {
            if (map.hasFeatureAtPixel(event.pixel)) {
              map.getViewport().style.cursor = 'pointer';
            } else {
              map.getViewport().style.cursor = 'inherit';
            }
          });
        console.log('MAP');
        console.dir(map);
        console.dir(OL);
    }

    render() {
        return (
            <>
                <h4>MAP</h4>
                <div style={{width: '100%', height: '400px'}} ref={this.mapRef}></div>
            </>
        )
    }
}

export default DisplayFeature;