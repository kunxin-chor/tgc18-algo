

// 1. define the base case (similiar to the loop sentinel)
// 2. what is the recursive step (similiar to the repeated part in the for loop)
// 3. shrink the problem size for the next recursive call (must make sure eventually we reach the base case)

// find the sum of an array given an array of numbers
// base case - we reach the last index in the array
//           - if the array is empty

function sumOfArray(arr, currentIndex) {
    // check if that we exceeded the last index
    if (currentIndex == arr.length) {
        return 0;
    } else {
        return arr[currentIndex] + sumOfArray(arr, currentIndex+1);
    }

}
const arr =[4,6,8,10]
sumOfArray(arr,0)
/*
arr = [4,6,8,10]

sumOfArray(arr, 0)
=> return arr[0] + sumOfArray(arr, 1)
=> return 4 + sumOfArray(arr,1)
               => return arr[1] + sumOfArray(arr, 2)
               => return 6 + sumOfArray(arr, 2)
                             => return 8 + sumOfArray(arr, 3)
                                            => return 10 + sumOfArray(arr, 4)
                                                           => return 0
                                            => return 10
                             => return 8 + 10
                             => return 18
              => return 6 + 18
              => return 24
=> return 4 + 24
=> return 28
*/

function sumOfArrayV2(arr) {
    if (arr.length == 0) {
        return 0;
    } else {
        return arr[0] + sumOfArrayV2(arr.slice(1));
    }
}


/*
sumOfArrayV2([4,6,8,10])
=> return 4 + sumOfArrayV2([6,8,10]);
              => return 6 + sumOfArrayV2([8, 10])
                            => return 8 + sumOfArrayV2([10])
                                          => return 10 + sumOfArrayV2([]);
                                                         => return 0
                                          => return 10
                            => return 8 + 10
                            => return 18
              => return 6 + 18
              => return 24
=> return 4 + 24
=> return 28
*/
 


*/