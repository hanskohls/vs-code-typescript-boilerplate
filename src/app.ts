class SimpleDemo {
  constructor(public message: string) {
    this.message = message;
  }
}

const message: string = 'This is to show how to setup VSCode with Typescript';
const demo = new SimpleDemo(message);
console.log(demo.message);
