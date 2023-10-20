import React from 'react';
import './components/styles/rate.scss';

function Rate(props) {
  const { title, price, speed, showBestChoice } = props;
  const theme = props.theme;
  return (
    <div className={'card'}>
      <div className={'card-body ' + (showBestChoice ? 'selected' : '')}>
        <h4 className={{ theme } + 'titlestyle'}>Безлимитный {title}</h4>
        <p className={'textstyle'}>руб {price}/мес</p>
      </div>
      <div className="card-footer">
        <span className="card-price">до {speed} Мбит/сек</span>
        <p className="footer-text">Объем включеного трафика не ограничен</p>
      </div>
    </div>
  );
}
export { Rate };
