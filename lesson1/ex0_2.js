let arr  = ['Ronen','Avi','Ronit','Ehud','Itamar'];
let result = arr.filter(name => name.length > 4).map(name => name.length).reduce((x,y) => x+y);

console.log(result);