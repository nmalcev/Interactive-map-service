import React, {Component} from 'react';
import MapWidget from './map';
import './DisplayFeature.scss';

class DisplayFeature extends Component {
    constructor(props) {
      super(props);
      this.state = {};
      this.mapRef = React.createRef();
    }

    componentDidMount() {
      const featureName = this.props.feature.properties.name.replace(/[`<>/\\\n\r"]*/g, '');
      const coordinates = this.props.feature.geometry?.coordinates || [];

      this.mapWidget = new MapWidget(this.mapRef.current, coordinates, featureName);
    }

    componentWillUnmount() {
      this.mapWidget.destroy();
    }

    render() {
      return (
        <div className="DisplayFeature" ref={this.mapRef}></div>
      )
    }
}

export default DisplayFeature;