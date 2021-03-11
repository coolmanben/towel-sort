
// You should implement your task here.

module.exports = function towelSort (matrix) {
  var newarray   = new Array();
  var resarray   = new Array();
  var temparray  = new Array();  
  for (var i = 0; i < newarray.length ; i++ ) {   
    temparray = newarray[i];
      for (var q = 0; q < temparray.length ; q++ ) {                   
        resarray.push( temparray[q] ) ;          
      } 
  }
  return resarray; 
}