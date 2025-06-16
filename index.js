document.addEventListener('DOMContentLoaded', () => {
  main();

  console.log('test pre-commit');
  console.log('test erreur');
});


function greet(name) {
  console.log(`Bienvenue, ${name} !`);
}

function main() {
  const userName = 'Manon';
  greet(userName + ' est la bienvenue');
}
