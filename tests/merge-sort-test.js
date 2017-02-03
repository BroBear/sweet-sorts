import { expect } from 'chai';
import mergeSort from '../scripts/merge-sort';

describe('mergeSort', () => {

  it('returns an array', ()=> {
    expect(Array.isArray(mergeSort([]))).to.be.true;

  });

  it('should get the length of the unsorted array', () => {
    let letters = ['s','u','h'];
    expect(letters.length).to.equal(3);
  });
  it('should return an array that is sorted correctly', () => {
    let nums = mergeSort([8,1,4,5]);
    expect(nums).to.deep.equal([1,4,5,8])
  });

  it('should return an array of strings alphabetically', ()=> {
    let letters = mergeSort(["d", "b", "a", "c"]);
    expect(letters).to.deep.equal(["a", "b", "c", "d"])
  });

});
