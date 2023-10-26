import React from 'react';
import { Rate } from './Rate';
import ThemeBlue from './components/styles/rate-blue.module.scss';
import ThemeRed from './components/styles/rate-red.module.scss';
import ThemeGreen from './components/styles/rate-green.module.scss';
import ThemeBlack from './components/styles/rate-black.module.scss';

const rates = [
  { id: 1, title: 300, price: 300, speed: 10, theme: ThemeBlue },
  { id: 2, title: 450, price: 450, speed: 50, theme: ThemeGreen },
  {
    id: 3,
    title: 550,
    price: 550,
    speed: 100,
    theme: ThemeRed,
  },
  { id: 4, title: 1000, price: 1000, speed: 200, theme: ThemeBlack },
];

function App() {
  return (
    <div className="App">
      {rates.map((rate) => (
        <Rate
          key={rate.id}
          title={rate.title}
          price={rate.price}
          speed={rate.speed}
          theme={rate.theme}
        />
      ))}
    </div>
  );
}
export { App };
