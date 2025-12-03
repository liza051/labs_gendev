"use strict";

const fn = () => {
  const obj1 = { name: "Olga" };
  let obj2 = { name: "Ekaterina" };

  console.log(obj1, obj2)

  obj1.name = 'Victoria';
  obj2.name = 'Emma';

  console.log(obj1, obj2)
};

fn();

let createUser = (name, city) => {
    return {name, city}
}

console.log('Olga', 'Lviv')