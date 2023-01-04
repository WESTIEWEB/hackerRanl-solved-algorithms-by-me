/**
 * https://www.hackerrank.com/challenges/largest-permutation/problem
 * @param {*} k 
 * @param {*} arr 
 * @returns 
 */
function largestPermutation(k, arr) {
    // Write your code here
    let l = arr.length;
    for (let i = 0; i < l; i++) {
        let max_index = i;
        
        if( k > 0) {
            for( let j = i+1; j < l; j++) {
                if( arr[j] > arr[i]) {
                    max_index = j;
                }
                if (arr[i] < arr[max_index]) {
                    let indx = arr[max_index];
                    arr[max_index] = arr[i]
                    arr[i] = indx
                    k--
                }
            }
        } else break
    }
    return arr

}