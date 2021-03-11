
// You should implement your task here.

module.exports = function towelSort (matrix) {
  var newarray   = new Array();
  var resarray   = new Array();
  var temparray  = new Array();  
  var q = 0 ; 
  for (var i = 0; i < newarray.length ; i++ ) {   
    temparray = newarray[i];
    if (q == 0) {
      for ( ; q < temparray.length ; q++ ) {                   
        resarray.push( temparray[q] ) ;  
      } 
    }
    else {
      q--;
      for (  ; q > 0 ; q-- ) {                   
          resarray.push( temparray[q] ) ;  
      } 
    }     
  }
  return resarray; 
}