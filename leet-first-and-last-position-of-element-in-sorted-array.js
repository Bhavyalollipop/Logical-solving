/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    var x = [-1,-1],isAvailable = false;
   for(var i = 0;i < nums.length;i++) {
       var n = nums[i]
       if(n !== target && isAvailable) break;
       if(n !== target) continue;
       if(isAvailable && n === target) x[1] = i;
       if(!isAvailable) {
           isAvailable = true;
           x = [i,i];
       }
   }  
    return x
};
