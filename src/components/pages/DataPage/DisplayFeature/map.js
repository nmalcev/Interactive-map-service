import {Map, View, Feature, Overlay} from 'ol/index';
import {Point} from 'ol/geom';
import {fromLonLat} from 'ol/proj';
import {Vector as VectorLayer, Tile as TileLayer} from 'ol/layer';
import {OSM, Vector as VectorSource} from 'ol/source';
import {Style, Circle, Fill, Stroke} from 'ol/style';
import 'ol/ol.css';


// https://openlayers.org/en/latest/doc/tutorials/bundle.html
// https://openlayers.org/en/latest/examples/geographic.html


export default class {
    constructor(mapNode, coordinates, placeName) {
        this.mapNode = mapNode;
        this.coordinates = coordinates;
        this.placeName = placeName;
        this.render();
    }

    render() {
        let point = new Point(fromLonLat(this.coordinates));
        let map = new Map({
            target: this.mapNode,
            layers: [
              new TileLayer({
                source: new OSM()
              }),
            ],
            view: new View({
              center: fromLonLat(this.coordinates),
              zoom: 17
            })
        });

        let layer = new VectorLayer({
            source: new VectorSource({
                features: [
                    new Feature({
                        geometry: point
                    })
                ]
            }),
            style: new Style({
                image: new Circle({
                    radius: 12,
                    stroke: new Stroke({
                        color: 'blue',
                        width: 1
                    }),
                    fill: new Fill({
                        color: 'rgba(0, 0, 255, 0.1)'
                    }),
                }),
            })
        });
        map.addLayer(layer);
        const element = document.createElement('div');

        let popup = new Overlay({
            element: element,
            positioning: 'bottom-center',
            stopEvent: false,
            offset: [0, -20],
        });
        map.addOverlay(popup);

        map.on('click', (event) => {
            let feature = map.getFeaturesAtPixel(event.pixel)[0];
            if (feature) {
                let coordinate = feature.getGeometry().getCoordinates();
                console.log('Coordinate');
                console.dir(coordinate);
                element.innerHTML = `<span style="background:#fff;padding:5px;">${this.placeName}</span>`;
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
        this.map = map;
    }

    destroy() {
        if (!this.map) return;

        this.map.setTarget(null);
        this.map = null;
    }
};
