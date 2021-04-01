var pyramid = 7;
var col = Math.ceil((pyramid*2)/2);
var arr = {}
var count = 0;
var encount =2;
var jend = pyramid * 2;
for(var i =1;i<=pyramid;i++) {
  arr[i] = []
  count = 0;
  encount = 2;
  var j=1;
  var stp = col - (i-1);
    var enp = col + i;
  while(j<=jend) {   
    if(stp <= j && j <= col) {
      arr[i].push(i + count);
      count++;
    } else if(j > col && j < enp) {
      arr[i].push(arr[i][col - encount]);
      encount++;
    }
    else {
      arr[i].push("")
        }
    j++
 } }
  
  for(var k=1;k <= pyramid;k++) {
    var tr = '';
    for(var t=0;t< arr[k].length;t++) {
      tr =  " ".repeat(1) + (arr[k][t] ? arr[k][t] : " ".repeat(1)) + tr;
      
    }
    console.log(tr)
  }
  
  
  
 
