/* 
1. The user can press b and it should beep right away
2. The user can input any number from 1 to 9 and it should
    immediately output "setting timer for x seconds...", and
    beep after that number of seconds has passed
3. The user can use ctrl + c to exit the program, at which point the
    program should say "Thanks for using me, ciao!" before terminating
*/

const { stdin } = require('process');

stdin.setRawMode(true);
stdin.setEncoding('utf8');

stdin.on('data',(key) => {

  if (key === 'b') {
    process.stdout.write('\x07');
  }
  if (/[0-9]/.test(key)) {
    process.stdout.write(`setting timer for ${key} seconds...\n`);
    setTimeout(() => {
      process.stdout.write('\x07\x07\x07\x07');
    },Number(key) * 1000);
  }
  if (key === '\u0003') {
    console.log("Thanks for using me, ciao!");
    process.exit();
  }

})





