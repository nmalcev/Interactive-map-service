const OL = window.ol; // eslint-disable-line no-undef
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
        let point = new OL.geom.Point(OL.proj.fromLonLat(this.coordinates));
        let map = new OL.Map({
            target: this.mapNode,
            layers: [
              new OL.layer.Tile({
                source: new OL.source.OSM()
              }),
            ],
            view: new OL.View({
              center: OL.proj.fromLonLat(this.coordinates),
              zoom: 17
            })
        });

        let layer = new OL.layer.Vector({
            source: new OL.source.Vector({
                features: [
                    new OL.Feature({
                        geometry: point
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

        let popup = new OL.Overlay({
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
        console.dir(OL);
        this.map = map;
    }

    destroy() {
        if (!this.map) return;

        this.map.setTarget(null);
        this.map = null;
    }
};
