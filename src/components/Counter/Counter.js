import React from 'react';
import { Button } from 'antd';
import classNames from 'classnames/bind';
import styles from './Counter.scss';

const cx = classNames.bind(styles);

const Counter = props => {
  const isNegative = props.number < 0;
  return (
    <div className={cx('counter-wrapper')}>
      <h1
        className={cx('number', {
          'negative-number': isNegative,
        })}
      >
        {props.number}
      </h1>
      <p>Increment or decrement after 1 seconds</p>
      <Button onClick={props.onIncrementAsync} type="primary" ghost>
        +1
      </Button>
      <Button onClick={props.onDecrementAsync} type="danger" ghost>
        -1
      </Button>
    </div>
  );
};

export default Counter;
