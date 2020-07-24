import axios from 'axios';

const ENDPOINT = 'https://photon.komoot.de/api/';

export default function(query){
    return axios.get(`${ENDPOINT}?q=${encodeURIComponent(query)}&limit=7`).
        then(response => {
            return response.data.features.map((feature, index) => {
                feature.id = `${feature.properties?.osm_id || ''}+${index}`;
                return feature;
            });
        });
};