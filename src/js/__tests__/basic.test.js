
import getHealth from '../app';

test.each([
  ['topHealth', { name: 'Маг', health: 90 }, 'healthy'],
  ['middleHealth', { name: 'Маг', health: 23 }, 'wounded'],
  ['bottomHealth', { name: 'Маг', health: 12 }, 'critical'],
])('testing function with %s status', (__, value, result) => {
  expect(getHealth(value)).toBe(result);
});
