function swap(arr, x, y)
{
    let temp = arr[x];
    arr[x] = arr[y];
    arr[y] = temp;
}

function shuffle(arr, n)
{    
  arr.sort((a, b) => b - a);
 
  for(let i = 0; i < n - 1; i += 2){
    swap(arr, i, i + 1);
  }
}
 
let arr = [2, 1, 5, 3, 11, 7];
let n = arr.length;
const outArr = [];
 
shuffle(arr, n);

for(let i = 0; i < n; i++){
  outArr.push(arr[i]);
}
console.log(outArr);
