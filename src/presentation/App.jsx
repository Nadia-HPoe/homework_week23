import React from 'react';
import { Rate } from './Rate';
import ThemeBlue from './components/styles/rate-blue.module.scss';
import ThemeRed from './components/styles/rate-red.module.scss';
import ThemeGreen from './components/styles/rate-green.module.scss';
import ThemeBlack from './components/styles/rate-black.module.scss';

const rates = [
  { id: 1, title: 300, price: 300, speed: 10 },
  { id: 2, title: 450, price: 450, speed: 50 },
  { id: 3, title: 550, price: 550, speed: 100, showBestChoice: true },
  { id: 4, title: 1000, price: 1000, speed: 200 },
];

function App() {
  return (
    <div className="App">
      <Rate
        title={rates[0].title}
        price={rates[0].price}
        speed={rates[0].speed}
        theme={ThemeBlue}
      ></Rate>
      <Rate
        title={rates[1].title}
        price={rates[1].price}
        speed={rates[1].speed}
        theme={ThemeGreen}
      ></Rate>
      <Rate
        title={rates[2].title}
        price={rates[2].price}
        speed={rates[2].speed}
        theme={ThemeRed}
        showBestChoice={rates[2].showBestChoice}
      ></Rate>
      <Rate
        title={rates[3].title}
        price={rates[3].price}
        speed={rates[3].speed}
        theme={ThemeBlack}
      ></Rate>
    </div>
  );
}
export { App };
