
// You should implement your task here.

module.exports = function towelSort (matrix) { 
  var resarray  = new Array();
  if ( matrix == undefined ) { return resarray }
  for (var i = 0; i < matrix.length ; i++ ) {        
    if (i % 2) {              
      resarray.push( matrix[i].reverse() ) ;       
    }
    else {
      resarray.push( matrix[i] ) ;
    }     
  }
  return resarray.flat(); 
}