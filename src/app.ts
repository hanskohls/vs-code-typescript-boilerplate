class SimpleDemo {
  constructor(public message: string) {
    this.message = message;
  }
}

var demo = new SimpleDemo('This is to show how to setup VSCode with Typescript');
console.log(demo.message)