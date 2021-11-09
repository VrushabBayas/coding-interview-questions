// ip = [1,2,3,4,5,6];

// op = [2,4,6,8,10,12]
const array=[1,2,3,4,5,6];
let result=[];

//Impearative way
for (let index = 0; index < array.length; index++) {
  const element = array[index]*2;
  result.push(element);
}
// console.log('result: ', result);
//Declarative way

result=array.map(item=>item*2);


console.log('result: ', result);
console.log('array: ', array);