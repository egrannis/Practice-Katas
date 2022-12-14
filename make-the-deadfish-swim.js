/* Write a simple parser that will parse and run Deadfish.

Deadfish has 4 commands, each 1 character long:

i increments the value (initially 0)
d decrements the value
s squares the value
o outputs the value into the return array
Invalid characters should be ignored.

parse("iiisdoso") => [ 8, 64 ]
*/


// Return the output array, and ignore all non-op characters
const parse = (data) => {

  let returnArr = [];
  let newVal = 0;

  for (let l of data) {
    if (l === 'i') {
      newVal += 1;
    }
    if (l === 'd') {
      newVal -= 1;
    }
    if (l === 's') {
      newVal = Math.pow(newVal, 2);
    }
    if (l === 'o') {
      returnArr.push(newVal);
    }
  }
  return returnArr;
};