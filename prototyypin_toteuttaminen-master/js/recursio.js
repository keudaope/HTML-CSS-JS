function sum(arr, n) {
    var yht = 0;
    for (var i = 0; i < n; i++) {
        yht += arr[i];
    }
    return yht;
  }

console.log(sum([2, 3, 4, 5], 3));
