const shortestWindowSort = arr => {
    let low = 0;
    let high = arr.length - 1;
    //find the first element's index breaking sort order from the beginning
    while(low < arr.length - 1 && arr[low] <= arr[low + 1]) low++;
    if (low === arr.length - 1) { // if the array is sorted
        return 0;
      }
    //find the first element's index breaking sort order from the end
    while(high > 0 && arr[high] >= arr[high - 1]) high--;
    //we now have the subarray starting from arr[low] to arr[high]
    //but there could be a value that is smaller than arr[low] and larger than arr[high] in the whole array
    //thus, we need to find the element that is smaller than arr[low] and the element larger than arr[high]
    //the low and high indices will be changed to reflect the new smallest and largest
    //so the new subarray will span across arr[low] to arr[high]
    //high - low + 1 will be the new length
    let subArrayMax = -Infinity; // to find the max value we need to start with the smallest value for comparison
    let subArrayMin = Infinity; // to find the min value we need to start with the largest value for comparison
    //map over the subarray to find the min and max in the subarray
    for(let i = low; i < high - 1; i++){
        subArrayMax = Math.max(subArrayMax, arr[i]);
        subArrayMin = Math.min(subArrayMin, arr[i]);
    }
    //extend the subarray to include any number which is bigger than the minimum of the subarray
    while(low > 0 && arr[low - 1] > subArrayMin) low--;
    //extend the subarray to include any number which is smaller than the maximum of the subarray
    while(high < arr.length && arr[high] < subArrayMax) high++;
    //we now have the indices low and high to reflect the new subarray
    console.log("shortest unsorted array = ", arr.splice(low, high - 1));
    //return the length
    return high - low + 1;
}

console.log(shortestWindowSort([1, 2, 5, 3, 7, 10, 9, 12]));
console.log(shortestWindowSort([1, 3, 2, 0, -1, 7, 10]));
console.log(shortestWindowSort([1, 2, 3]));
console.log(shortestWindowSort([3, 2, 1]));