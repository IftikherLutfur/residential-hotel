import GoogleMapReact from 'google-map-react';
import { googleAPIKey } from './googleAPI';
const AnyReactComponent = ({ text }) => <div>{text}</div>;

const GoogleMap = () => {

    const defaultProps = {
        center: {
            lat: 24.9048,
            lng: 91.8600
        },
        zoom: 11
    }

    return (
        <div>
      <h1 className='text-3xl text-center font-bold my-10'>Our Location</h1>
            <div style={{ height: '500px', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: googleAPIKey }}
                    defaultCenter={defaultProps.center}
                    defaultZoom={defaultProps.zoom}
                >
                    <AnyReactComponent
                        lat={defaultProps.center.lat}
                        lng={defaultProps.center.lng}
                        text="My Marker"
                    />
                </GoogleMapReact>
            </div>

        </div>
    );
};

export default GoogleMap;