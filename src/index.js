
// You should implement your task here.

module.exports = function towelSort (matrix) {
  var newarray   = new Array();
  var resarray   = new Array();
  var temparray  = new Array();  
  var q = 0 ;
  var sumel = 0;
  var sizearray = 0;
  for (var i = 0; i < newarray.length ; i++ ) {   
    temparray = newarray[i];
    if (sizearray == 0) {sizearray = (newarray.length + 1) *  (newarray.length + 1);}
    if (q == 0) {
      for ( ; q < temparray.length ; q++ ) {                   
        resarray.push( temparray[q] ) ;
        sumel++;
      } 
    }
    else {
      q = temparray.length - 1;
      for (  ; q >= 0 ; q-- ) {                   
        resarray.push( temparray[q] ) ;
        sumel++;
      }
      q++; 
    }     
  }
  if ( sumel != sizearray ) { resarray.length = resarray.length + 1; }
  return resarray; 
}