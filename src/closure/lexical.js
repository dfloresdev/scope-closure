const buildCount = i => {
  let count = i;
  const displayCount = () => {
    debugger;
    console.log(count++);
  };
  return displayCount;
};

const myCount = buildCount(1);

myCount();
myCount();
myCount();
