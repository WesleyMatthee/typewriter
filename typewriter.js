//create a typewriter function to accept any string
//create an iterator delay
//Loop over the string to get the char
//use setTimeout to print the char with the delay
const typewriter = function(str) {
  let delay = 0
  for (const char of str) {
    setTimeout(() => process.stdout.write(char), delay += 50) 
  }
};

  


typewriter('hello there from lighthouse labs \n does this log on a new line?');



