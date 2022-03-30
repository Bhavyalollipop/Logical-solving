var longestCommonPrefix = function(strs) {
    var smallstr = 200, a= 0,longp,longcmprefix="",cmprefix="";
    while(a < smallstr) {
        if(a!=0 && longcmprefix == "") {
            break;
        }
        longp = 0;
         for(var i=0;i<strs.length;i++) {
             if(a == 0 && smallstr > strs[i].length) {
                 smallstr = strs[i].length
             }
             if(i === 0) {
                 cmprefix += strs[i][a] || ""
             } else if(cmprefix == strs[i].slice(0,a+1)) {
                 longp++;
             }
             if(longp == strs.length - 1) {
                longcmprefix = cmprefix
             }
             
         }
        a++;
    }
    return longcmprefix
};

console.log(longestCommonPrefix(["flower","flow","flight"]))
