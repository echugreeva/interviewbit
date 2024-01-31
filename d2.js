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

// Given a linked list A, swap every two adjacent nodes and return its head.

// NOTE: Your algorithm should use only constant space. You may not modify the values in the list; only nodes themselves can be changed.

// Definition for singly-linked list.
//    function Node(data){
//      this.data = data
//      this.next = null
//    }

module.exports = {
    //param A : head node of linked list
    //return the head node in the linked list
    swapPairs: function (A) {
         if (A===null) {
        return A
    }
    
    if (A.next===null){
        return A
    }
       let current = A
       let newHead = A.next
       let prev=null;
       
        while (current !== null && current.next !== null) {
            const first = current;
            const second = current.next;

            // Swapping
            first.next = first.next.next; //second.next
            second.next = first; //curr
            
            if(prev){
                prev.next = second
            }
            
            prev = first;
            current = first.next
            

            // Move to the next pair
        
        }

        return newHead;

    }
};

// Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

// Definition for a  binary tree node
//    function TreeNode(data){
//      this.data = data
//      this.left = null
//      this.right = null
//    }

module.exports = { 
    //param A : root node of tree
    //return a array of array of integers
       levelOrder : function(A){
           
           if (A==null){
               return
           }
           let ar = [];
           let q = [A]
           while(q[0]){
               let length = q.length;
               let row = [];
               for (let i=0; i<length; i++){
                   let curr = q.shift();
                   row.push(curr.data);
                    if (curr.left) q.push(curr.left)
                   if (curr.right) q.push(curr.right)
               }
               ar.push(row)
           }
           return ar
       }
       
   };