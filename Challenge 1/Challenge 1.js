const primaryPhone = 'O748105141'
const secondaryPhone = '0219131568'

const numberOne = parseInt(primaryPhone)
const numberTwo = parseInt(secondaryPhone)

const primaryValid = Number.isInteger(numberOne)
const secondaryValid = Number.isInteger(numberTwo)

console.log('Primary phone is valid numerical string:', primaryValid)
console.log('Secondary phone is valid numerical string:', secondaryValid)