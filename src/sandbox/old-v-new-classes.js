class OldSyntax {
    constructor() {
      this.name = "bob";
    }
  }  
  
  const oldSyntax = new OldSyntax();
  console.log(oldSyntax);
  
  // -------
  
  class NewSyntax {
    name = 'Sharky';
    getGreeting = () => {
      return `My name is ${this.name}.`;
    }
  }
  
  const newSyntax = new NewSyntax();
  console.log(newSyntax.getGreeting());