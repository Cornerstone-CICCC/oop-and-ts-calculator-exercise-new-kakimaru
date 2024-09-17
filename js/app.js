class Calculator {
  constructor() {
    this.numInput1 = document.querySelector('#num1')
    this.operation = document.querySelector('#operation')
    this.numInput2 = document.querySelector('#num2')
    this.calculateBtn = document.querySelector('#calculateBtn')
    this.resultElement = document.querySelector('#result')

    this.calculateBtn.addEventListener('click', () => {
      // this.add()
      // this.subtract()
      // this.multiply()
      // this.divide()
      this.compute()
      this.numInput1.value = this.numInput2.value = ''
    })
  }

  compute() {
    const num1 = Number(this.numInput1.value.trim())
    const num2 = Number(this.numInput2.value.trim())

    let result = 0;
    switch (this.operation.value) {
      case 'add':
        result = num1 + num2
        break;
      case 'subtract':
        result = num1 - num2
        break;
      case 'multiply':
        result = num1 * num2
        break;
      case 'divide':
        result = num1 / num2
        break;
      default:
        this.resultElement.textContent = 'Please enter some number greater than or equal to 1'
        return;
    }

    this.resultElement.textContent = result;
  }

  // add() {
  //   if(this.operation.value === 'add') {
  //     const num1 = Number(this.numInput1.value.trim())
  //     const num2 = Number(this.numInput2.value.trim())
  //     this.result = num1 + num2;
  //     this.resultElement.textContent = this.result;
  //   }
  // }

  // subtract() {
  //   if(this.operation.value === 'subtract') {
  //     const num1 = Number(this.numInput1.value.trim())
  //     const num2 = Number(this.numInput2.value.trim())
  //     this.result = num1 - num2;
  //     this.resultElement.textContent = this.result;
  //   }
  // }

  // multiply() {
  //   if(this.operation.value === 'multiply') {
  //     const num1 = Number(this.numInput1.value.trim())
  //     const num2 = Number(this.numInput2.value.trim())
  //     this.result = num1 * num2
  //     this.resultElement.textContent = this.result;
  //   }
  // }

  // divide() {
  //   if(this.operation.value === 'divide') {
  //     const num1 = Number(this.numInput1.value.trim())
  //     const num2 = Number(this.numInput2.value.trim())
  //     this.result = num1 / num2
  //     this.resultElement.textContent = this.result;
  //   }
  // }


}

const myCalculator = new Calculator()
