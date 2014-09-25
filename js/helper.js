String.prototype.reverse = function() {
  var sAsArray = this.split("");
  var length = sAsArray.length-1;
  var endpoint = length/2;
  var temp;

  for(var i=0; i < endpoint; i++) {
    temp = sAsArray[i];
    sAsArray[i] = sAsArray[length-i];
    sAsArray[length-i] = temp;
  }

  return sAsArray.join('');
}