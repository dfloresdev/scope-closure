var hello = 'Hello';
let world = 'hello world';
const helloWorld = 'hello world!';

const anotherFunction = () => {
  console.log(hello);
  console.log(world);
  console.log(helloWorld);
};

anotherFunction();

// mala práctica
const helloWorld = () => {
  localVar = 'mala práctica';
};

helloWorld();

console.log(localVar);
