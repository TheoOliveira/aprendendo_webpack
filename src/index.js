import cow from './cow'

const message = 'ainda estou aprendendo!'
document.querySelector('#box').innerText = cow.say(`Weback é legal mas ${message}`)