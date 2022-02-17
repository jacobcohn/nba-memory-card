import shuffle from '../components/utils/shuffle';

test('shuffle returns array with correct length and correct elements', () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8];
  const shuffledArray = shuffle(array);
  expect(shuffledArray.sort()).toEqual(array.sort());
});
