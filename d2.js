// Given a read-only array of n + 1 integers between 1 and n, find one number that repeats in linear time using less than O(n) space and traversing the stream sequentially O(1) times.
// If there are multiple possible answers ( like in the sample case ), output any one, if there is no duplicate, output -1

module.exports = {
    //param A : array of integers
    //return an integer
    repeatedNumber: function (A) {
        let hash = {};
        for (let i = 0; i < A.length; i++) {
            let key = A[i]
            if (!hash.key) {
                hash.key = 1
            } else {
                return key
            }

        }
        return -1
    }
};

// Given a sorted array A consisting of duplicate elements.

// Your task is to remove all the duplicates and return the length of the sorted array of distinct elements consisting of all distinct elements present in A.

// Note: You need to update the elements of array A by removing all the duplicates

module.exports = { 
	//param A : array of integers
	//return an integer
	removeDuplicates : function(A){
        
        let newArr=[A[0]];
        let curr=A[0]
        for(i=1; i<A.length; i++) {
            if(A[i]!==curr) {
                newArr.push(A[i]);
                curr=A[i];
            } 
        }
        return newArr.length
        
        //alternative 
//      const setFromArr = new Set(A);
        // const newArray = Array.from(setFromArr);
        // return newArray.length
	}
};