class Dog {
  constructor(breed = 'setter') {
    this.breed = breed
  }

  bark() {
    console.log(`${this.breed} says 'woof!'`)
  }
}

const fifi = new Dog('poodle')
fifi.bark()
