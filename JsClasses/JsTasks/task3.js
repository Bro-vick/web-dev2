/*  
    Create a function that take in an array of numbers "sortArray(arr)" and sorts it.
    Problem - Given an array of integers, sort the array.
    const arr = [8, 20, -2, 4, -6]
    sortArray(arr) => Should return [-6, -2, 4, 8, 20]
*/
let swapped;
function sortArray(arr){
    do{
        swapped = false;
        for(let i = 0; i < arr.length - 1; i++){
            if(arr[i] > arr[i + 1]){
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
    }while(swapped)
    return arr;
}

const arra = [8, 20, -2, 4, -6]
console.log(sortArray(arra))