const fruits = () => {
  if (true) {
    var fruit1 = 'apple';
    var fruit2 = 'platano';
    var fruit3 = 'kiwi';
    let fruit4 = 'Salvaje';
    console.log(fruit4);
  }
  console.log(fruit1);
  console.log(fruit2);
  console.log(fruit3);
};

fruits();

///////////

let x = 1;
{
  let x = 2;
  console.log(x);
}
console.log(x);

var x = 1;
{
  var x = 2;
  console.log(x);
}
console.log(x);

////////////////////

const anotherFunction = () => {
  for (let i = 0; i < 10; i++) {
    setTimeout(() => {
      console.log(i);
    }, 1000);
  }
};

anotherFunction();
