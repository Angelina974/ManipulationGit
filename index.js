/**
 * Greet a user by name.
 * @param {string} name - The user's name.
 */
function greet(name) {
  console.log(`Bienvenue, ${name} !`);
}

/**
 * Entry point of the app.
 */
function main() {
  const userName = 'David';
  greet(userName);
}

// Run the main function
main();