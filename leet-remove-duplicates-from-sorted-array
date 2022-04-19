/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
   var x=nums[0],n=1;
   for(var i=1;i<nums.length;i++) {
       if(x !== nums[i]) {
           nums[n] = nums[i]
           x = nums[i]
           n++;
       }
   }
    return n
};
