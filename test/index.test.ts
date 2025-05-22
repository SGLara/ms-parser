import { ms } from '../src/index.js';

test('parses single durations', () => {
  expect(ms('1m')).toBe(60000);
  expect(ms('1.5d')).toBe(129600000);
  expect(ms('1.5h')).toBe(5400000);
});

test('parses combined durations', () => {
  expect(ms('1h30m')).toBe(5400000);
  expect(ms('2m15s')).toBe(135000);
  expect(ms('1.5d1h30m')).toBe(129600000 + 5400000);
});

test('invalid input returns NaN', () => {
  expect(ms('abc')).toBeNaN();
  // @ts-expect-error
  expect(ms(1234)).toBeNaN();
  // @ts-expect-error
  expect(ms(1234.5678)).toBeNaN();
  // @ts-expect-error
  expect(ms(null)).toBeNaN();
  // @ts-expect-error
  expect(ms(undefined)).toBeNaN();
  // @ts-expect-error
  expect(ms({})).toBeNaN();
  // @ts-expect-error
  expect(ms([])).toBeNaN();
  // @ts-expect-error
  expect(ms(true)).toBeNaN();
  // @ts-expect-error
  expect(ms(false)).toBeNaN();
  // @ts-expect-error
  expect(ms(() => {})).toBeNaN();
  // @ts-expect-error
  expect(ms(Symbol('test'))).toBeNaN();
  // @ts-expect-error
  expect(ms(new Date())).toBeNaN();
});
