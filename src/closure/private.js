const person = () => {
  let namePerson = 'David';
  return {
    getName: () => {
      return namePerson;
    },
    setName: name => {
      namePerson = name;
    }
  };
};

const newPerson = person();
console.log(newPerson.getName());
newPerson.setName('Mako');
console.log(newPerson.getName());
