const helloWorld = () => {
  // var with local scope
  const hello = 'hello world';
};

// ámbito léxico
var scope = 'i am global';

const functionScope = () => {
  var scope = 'i am just local';
  console.log(scope);
};
functionScope();
console.log(scope);
