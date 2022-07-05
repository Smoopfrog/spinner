let symbolArray = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|'];
let delay = 100;
for (const symbol of symbolArray){
  setTimeout(() => {
    process.stdout.write(`\r${symbol}`);
  }, delay);
  delay += 200;
}
setTimeout(() => {
  process.stdout.write('\n');
}, delay)

