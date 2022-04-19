/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
function sortedSum(a, ends = 1, sorta = [],ln) {
  
  var isifsort = true,dummy= ln -1,ai = 0,isLess = false;
  
  if(sorta[0] >= a) {
    sorta.splice(0, 0, a)
  }else if(sorta.length == 0 || sorta[ln - 1] <= a) {
    sorta.push(a);
  }else {
      
      var x=0;
      while(x < ln) {
         
          var d = Math.round(dummy/2);
          ai = isLess ? ai - d : ai + d;
          isLess = sorta[ai] > a
          if(!isLess) {
              dummy = dummy - d
            isifsort = true;
          } else { 
             dummy = d 
              isifsort = false;
          }
          ln = d;
          x = 0;
      }
    
     ai = isifsort ? ai + 1 : ai;
     sorta.splice((ai), 0, a)
       
  }
    return sorta
 }
    
var findMedianSortedArrays = function(nums1, nums2) {
    var n1 = nums1.length,n2 = nums2.length,i=0,sorttotal = n1 + n2;
    var ln = n1 > n2 ? n2 : n1;
    var arr1 =  nums1; 
    var arr2 = nums2;
    if(n1 < n2) {
        arr1 =  nums2; 
        arr2 = nums1;
    }
    while(i < ln) {
        arr1 = sortedSum(arr2[i],1,arr1,arr1.length);
        
        i++
    }
    var isEven = sorttotal % 2 === 0 ? true : false;
   
    if(isEven) {
        var a1 = Math.floor(sorttotal/2);
        var a2 = a1-1;
        return (arr1[a1]+arr1[a2])/2
    }
     
    return arr1[(sorttotal - 1)/2]
};
