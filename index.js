document.addEventListener('DOMContentLoaded', () => {
  main();

});


function greet(name) {
  console.log(`Bienvenue, ${name} !`);
}

function main() {
  const userName = 'Manon';
  greet(userName + ' est la bienvenue');
}
