import { put, call } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { incrementAsync } from 'store/sagas';

test('incrementAsync Saga test', () => {
  const generateFn = incrementAsync();
  expect(generateFn.next().value).toEqual(call(delay, 1000));
  expect(generateFn.next().value).toEqual(put({ type: 'INCREMENT' }));
  expect(generateFn.next()).toEqual({ done: true, value: undefined });
});
