//compares and pushes values into completed array
function merge(sortRight, sortLeft) {
  var completedArray = [];
  while(sortLeft.length && sortRight.length) {
    if(sortLeft[0] < sortRight[0]) {
      completedArray.push(sortLeft.shift())
      } else if (sortLeft[0] > sortRight[0]) {
        completedArray.push(sortRight.shift())
      }
    }
    return completedArray.concat(sortRight).concat(sortLeft)
}
  mergeSort([8,1,4,5]);

//returns sorted array
function mergeSort(array) {
  if(array.length < 2) {
  return array
}

let splitArray = Math.floor(array.length/2);
let sortRight = array.slice(0, splitArray);
let sortLeft = array.slice(splitArray, array.length)
return merge(mergeSort(sortRight), mergeSort(sortLeft))
//splits and sorts and puts merges together until the arrays are sorted

}
  export default mergeSort;
