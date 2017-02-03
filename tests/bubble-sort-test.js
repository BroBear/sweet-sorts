import { expect } from 'chai';
import bubbleSort from '../scripts/bubble-sort'

describe('bubbleSort', () => {

  it('returns an array', ()=> {
    expect(Array.isArray(bubbleSort([]))).to.be.true;
  });

  it('expect to get the length of the array ', ()=> {
    let nums = ([8,1,4,5]);

    expect(nums.length).to.equal(4)
  });

  it('should return an array that is sorted correctly', () => {
    let nums = bubbleSort([8,1,4,5]);
    expect(nums).to.deep.equal([1,4,5,8])
  });

  it('should return an array of strings alphabetically', ()=> {
    let letters = bubbleSort(["d", "b", "a", "c"]);
    expect(letters).to.deep.equal(["a", "b", "c", "d"])
  })

})
