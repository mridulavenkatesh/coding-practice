const searchQuarduplets = (arr, targetSum) => {
    const quarduplets = [];
    arr.sort((a, b) => a - b);
    for(let i = 0; i < arr.length - 3; i++){
        for(let j = i + 1; j < arr.length - 2; j++){
            let left = j + 1;
            let right = arr.length - 1;
            while(left < right) {
                const sum = arr[i] + arr[j] + arr[left] + arr[right];
                if(sum === targetSum) {
                    quarduplets.push([arr[i], arr[j], arr[left], arr[right]]);
                    while(arr[left] === arr[left + 1]) left++; //skip duplicates
                    while(arr[right] === arr[right] - 1) right--; //skip duplicates
                    left++;
                    right--;
                } else if(sum < targetSum){
                    left++;
                } else {
                    right--;
                }
            }
            while(arr[j] === arr[j + 1]) j++;
        }
        while(arr[i] === arr[i + 1]) i++;
    }
    return quarduplets;
}

console.log(searchQuarduplets([4, 1, 2, -1, 1, -3], 1));
console.log(searchQuarduplets([2, 0, -1, 1, -2, 2], 2));