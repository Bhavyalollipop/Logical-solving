/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    var zigzagset = [],numset = 0, i = 0, isRev = false,zizagstring = "";
    while(i < s.length) {
        if(isRev && numset < 0) {
            numset = 0;
            isRev = false;
            continue;
        }
        
        if(!isRev && numset === numRows) {
            numset = numRows - 1;
            isRev = true;
            
            continue;
        }
        var setL = zigzagset[numset]?.length || 0;
        if(!zigzagset[numset]) {
            zigzagset[numset] = [];
        }
       
        if(
            (numset === 0  || numset === (numRows - 1)) && setL % 2 != 0 
        ) {
            zigzagset[numset].push(" ");
            numset = isRev ? numset - 1 : numset + 1;
           continue;
        }
        console.log(numset)
        zigzagset[numset].push(s[i]);
        i++;
        numset = isRev ? numset - 1 : numset + 1;
    }
//    console.log(zigzagset);
    for(var j =0;j<zigzagset.length;j++) {
        zizagstring += zigzagset[j].join("");
    }
    return zizagstring
};
console.log(convert("PAYPALISHIRING",4));
