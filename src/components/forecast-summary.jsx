import react from 'react';

const ForecastSummary = props => (
  <div className="forecast-summary">
    {
      props.forecasts.map(forecast => (
        <ForecastSummary
          key={forecast.date}
          date={props.date}
          temperature={props.temperature.max}
          description={props.description}
          icon={props.icon}
        />
      ))
    }
    </div>
);

export default ForecastSummary;
