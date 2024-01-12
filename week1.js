// Given an array of size N, find the majority element. The majority element is the element that appears more than floor(N/2) times.
//  You may assume that the array is non-empty and the majority element always exist in the array.

module.exports = { 
    //param A : array of integers
    //return an integer
       majorityElement : function(A){
           if(A.length<=1) {return A[0]}
           let threshold = Math.floor(A.length/2);
   
           let store = {};
           for (i=0; i<=A.length; i++) {
               let key = A[i]
       
               if(!store[key]){
                   store[key]=1
               } else {
                   store[key]=store[key]+1
               }
     
         if(store[key] >= threshold) {
                       let answer =  store[key]
                       return answer
                   }
           }
       }	
   };


//    Find the contiguous subarray within an array, A of length N which has the largest sum.

module.exports = { 
    //param A : array of integers
    //return an integer
       maxSubArray : function(A){
           let maxSoFar = A[0]
           let maxEndHere = 0;
           for (i=1; i<A.length; i++){
               maxEndHere = maxEndHere+A[i]
               if (maxSoFar <  maxEndHere) {
                   maxSoFar = maxEndHere
               } 
               if (maxEndHere<0){
                   maxEndHere = 0
               }
           }
           return maxSoFar
       }
   };
   