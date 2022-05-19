import {
  getHSCodeChild,
  searchHSCodeByName,
  searchHSCodeById,
  getAllHSCode,
  getHSCode,
} from '../src/index';

test('Top Level HS Code', () => {
  const hsCode = getHSCodeChild();
  hsCode.forEach(e => expect(e.parent).toEqual('TOTAL'));
});

test('Particular Level HSCode', () => {
  const parent = '95';
  const hsCode = getHSCodeChild(parent);
  hsCode.forEach(e => expect(e.parent).toEqual(parent));
});

test('Search HS Code By Name', () => {
  const hsCode = searchHSCodeByName('swings');
  expect(hsCode.length).toBeGreaterThan(0);
  hsCode.forEach(e => expect(e.description).toContain('swings'));
});

test('Search HS Code By Id', () => {
  const hsCode = searchHSCodeById('95');
  expect(hsCode.length).toBeGreaterThan(0);
  hsCode.forEach(e => expect(e.hscode).toContain('95'));
});

test('Get HS Code By Id', () => {
  const hsCode = getHSCode('01');
  expect(hsCode).not.toBeUndefined();
});

test('Get All HS Code', () => {
  const hsCode = getAllHSCode();
  expect(hsCode.length).toBeGreaterThan(0);
});
