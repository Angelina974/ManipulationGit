document.addEventListener('DOMContentLoaded', () => {
  main();
// fait main
});


function greet(name) {
  console.log(`Bienvenue, ${name} !`);
}

function main() {
  const userName = 'Manon';
  greet(userName + ' est la bienvenue');
}
