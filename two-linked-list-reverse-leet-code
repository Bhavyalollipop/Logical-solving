var addTwoNumbers = function(l1, l2) {
        var head1 = l1.val;
    var head2 = l2.val;
    var cf=0,add=0;
    var arr = [];
    while(head1 != null || head2 != null) {
        var val1 = head1 || 0;
        var val2 = head2 || 0;
        var sum = `${val1 + val2 + cf}`.split("");
        add = sum[0];
        cf=0;
        if(sum.length > 1) {
            cf = parseInt(sum[0]);
            add = parseInt(sum[1]);
        }
        arr.push(add);
      
        l1 = l1?.next;
        l2 = l2?.next;
        head1 = l1?.val;
        head2 = l2?.val;
    }
    if(cf !=0) {
        arr.push(cf);
    }
    return arr.reverse().reduce((acc, curr) => {
          if (acc == null) {
            acc = new ListNode(curr);

          } else {
            acc = new ListNode(curr, acc);
          }
          return acc;
    }, null);
};
