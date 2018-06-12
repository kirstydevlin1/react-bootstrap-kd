import React from 'react';
import PropTypes from 'prop-types';

import LocationDetails from './location-details';
import forecasts from '../data/forecast.json';
import ForecastSummaries from './forecast-summaries';

const App = props => (
  <div className="forecast">
    <LocationDetails
      city={props.location.city}
      country={props.location.country}
    />
    <ForecastSummaries forecasts={props.forecasts} />
  </div>
);

  <App location={location} />;

App.propTypes = {
  location: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
  }).isRequired,
  forecasts: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};


export default App;
