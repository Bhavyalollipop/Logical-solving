/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    var n = nums.length
    for(var i = 0; i<n;i++) {
        for(var j = i+1; j<n;j++) {
            if(nums[i] !== nums[j]) continue;
            if(Math.abs(i- j) <= k) return true
        }
    }
    return false
};
