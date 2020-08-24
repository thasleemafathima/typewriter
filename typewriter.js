const sentence = "hello there from lighthouse labs\n";
let count = 1;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, count*50); 
  count++;
}





