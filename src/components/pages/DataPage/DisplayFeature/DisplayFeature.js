import React, {Component} from 'react';
import MapWidget from './map';

class DisplayFeature extends Component {
    constructor(props) {
      super(props);
      this.state = {};
      this.mapRef = React.createRef();
    }

    componentDidMount() {
      const featureName = this.props.feature.properties.name.replace(/[^'\w\s\d]*/g, '');
      const coordinates = this.props.feature.geometry?.coordinates || [];

      this.mapWidget = new MapWidget(this.mapRef.current, coordinates, featureName);
    }

    componentWillUnmount() {
      this.mapWidget.destroy();
    }

    render() {
      return (
        <>
          <h4>{this.props.feature.properties.name}</h4>
          <div style={{width: '100%', height: '400px'}} ref={this.mapRef}></div>
        </>
      )
    }
}

export default DisplayFeature;