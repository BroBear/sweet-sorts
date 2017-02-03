const insertionSort = (values) => {
  debugger;
let length = values.length;
for(let i = 0; i < length; i++){
  let temporary = values[i];
  for(let j = i-1; j>=0 && (values[j] > temporary); j--) {
    values[j + 1] = values[j];
    console.log(values[j])
    values[j]=temporary;
    }
  }
    return values
}


  export default insertionSort;
