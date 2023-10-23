import React from 'react';
import './components/styles/rate.scss';

function Rate(props) {
  const { title, price, speed, theme, showBestChoice } = props;

  return (
    <div className={'card-body ' + (showBestChoice ? 'selected' : '')}>
      <h4 className={theme.titlestyle}>Безлимитный {title}</h4>
      <p className={theme.textstyle}>руб {price}/мес</p>
      <span className="card-price">до {speed} Мбит/сек</span>
      <p className="footer-text">Объем включеного трафика не ограничен</p>
    </div>
  );
}
export { Rate };
