import { expect } from 'chai';
import insertionSort from '../scripts/insertion-sort';

describe('insertionSort', () => {

  it('returns an array', ()=> {
    expect(Array.isArray(insertionSort([]))).to.be.true;

  });

  it('should get the length of the unsorted array', () => {
    let letters = ['s','u','h'];
    expect(letters.length).to.equal(3);
  });
  it('should return an array that is sorted correctly', () => {
    let nums = insertionSort([8,1,4,5]);
    expect(nums).to.deep.equal([1,4,5,8])
  });

  it('should return an array of strings alphabetically', ()=> {
    let letters = insertionSort(["d", "b", "a", "c"]);
    expect(letters).to.deep.equal(["a", "b", "c", "d"])
  });

});
