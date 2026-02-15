import { faker } from "https://esm.sh/@faker-js/faker";

let fs = require("fs");

let peoples = [];

for (let i = 0; i <= 10; i++) {
  let people = {};
  people.name = faker.name.findName();
  people.email = faker.internet.email();
  people.address = {
    city: faker.address.city(),
    country: faker.address.country(),
    lat: faker.address.latitude(),
    long: faker.address.longitude(),
  };
  peoples.push(people);
}

console.log(peoples);
