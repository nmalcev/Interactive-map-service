import React, {Component} from 'react';

class DisplayFeature extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.mapRef = React.createRef();
    }

    componentDidMount() {
        const OL = ol; // eslint-disable-line no-undef
        const coordinates = this.props.feature.geometry?.coordinates || [];

        let map = new OL.Map({
            target: this.mapRef.current,
            layers: [
              new OL.layer.Tile({
                source: new OL.source.OSM()
              })
            ],
            view: new OL.View({
              center: OL.proj.fromLonLat(coordinates),
              zoom: 13
            })
          });
        console.log('MAP');
        console.dir(map);
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