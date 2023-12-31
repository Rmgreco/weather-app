import React from 'react';
import { Card, CardContent, Typography, IconButton, capitalize } from '@mui/material';
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import Image from 'next/image';


export interface WeatherCardProps {
  name: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  weather: {
    main: string;
    description: string;
    icon: string;
  }[];
  wind: {
    speed: number,
    deg: number,
    gust: number
  },
  isFavorite: boolean;
  toggleFavorite: () => void;
}

const WeatherCard: React.FC<WeatherCardProps> = ({ name, main, weather, wind, isFavorite, toggleFavorite }) => {
  const { temp, temp_max, temp_min } = main;
  const { main: weatherMain, description, icon } = weather[0];
  const {speed} = wind;
  

  return (
    <Card id="weather-card">
      <CardContent>
        <Image src={`http://openweathermap.org/img/w/${icon}.png`} alt="Weather Icon" width={50} height={50}></Image>
        <Typography variant="h4" data-testeid="city_title">{name}</Typography>
        <Typography variant="h6">{(temp - 273.15).toFixed(1)}°C</Typography>
        <Typography  variant="subtitle1">Max temperature today : {(temp_max - 273.15).toFixed(1)}°C</Typography>
        <Typography variant="subtitle1">Min temperature today : {(temp_min - 273.15).toFixed(1)}°C</Typography>
        <Typography variant="subtitle1">{capitalize(description)}</Typography>
        <Typography variant="subtitle1">Wind speed: {speed}</Typography>
        <IconButton onClick={toggleFavorite} data-testid="favorite-button">
          {isFavorite ? <Favorite style={{ color: '#FF0000' }} /> : <FavoriteBorder />}
        </IconButton>
      </CardContent>
    </Card>
  );
};

export default WeatherCard;
