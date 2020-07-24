import React, {Component} from 'react';

// https://openlayers.org/en/latest/doc/tutorials/bundle.html
// https://openlayers.org/en/latest/examples/geographic.html

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
            //   new OL.layer.Vector({
            //       source: new OL.source.Vector({
            //           features: [new OL.Feature(point)]
            //       }),
            //       style: new OL.style.Style({
            //           image: new OL.style.Circle({
            //               radius: 12,
            //               stroke: new OL.style.Stroke({
            //                 color: 'blue',
            //                 width: 1
            //               }),
            //               fill: new OL.style.Fill({
            //                 color: 'rgba(0, 0, 255, 0.1)'
            //               }),
            //           }),
                                                           
            //       })
            //   })
            ],
            view: new OL.View({
              center: OL.proj.fromLonLat(coordinates),
              zoom: 17
            })
        });

        let layer = new OL.layer.Vector({
            source: new OL.source.Vector({
                features: [
                    new OL.Feature({
                        geometry: new OL.geom.Point(OL.proj.fromLonLat(coordinates))
                    })
                ]
            }),
            style: new OL.style.Style({
                image: new OL.style.Circle({
                    radius: 12,
                    stroke: new OL.style.Stroke({
                    color: 'blue',
                    width: 1
                    }),
                    fill: new OL.style.Fill({
                    color: 'rgba(0, 0, 255, 0.1)'
                    }),
                }),
            })
        });
        map.addLayer(layer);
        const element = document.createElement('div');

        var popup = new OL.Overlay({
            element: element,
            positioning: 'bottom-center',
            stopEvent: false,
            offset: [0, -10],
            // autoPan: true,
            // autoPanAnimation: {
            //     duration: 250
            // }
 
          });
          map.addOverlay(popup);

          map.on('click', function(event) {
            let feature = map.getFeaturesAtPixel(event.pixel)[0];
            if (feature) {
              var coordinate = feature.getGeometry().getCoordinates();
              console.log('Coordinate');
              console.dir(coordinate);
              element.innerHTML = '<b>Hello world!</b><br />I am a popup.';
              popup.setPosition(coordinate);
            } else {
                popup.setPosition(undefined);
                element.blur();
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