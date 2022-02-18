let alarms = process.argv.slice(2);
// if there is no input, print proper message.
if (alarms.length === 0) {
  console.log('This program only accept digit(s) to set the alarm(s)! Try again.');
} else {
  // filter any input that is not digit.
  alarms = alarms.filter(x => !(/\D/.test(x)));
  for (const alarm of alarms) {
    setTimeout(() => {
      process.stdout.write('\x07\x07\x07\x07');
    },alarm * 1000);
  }
}






