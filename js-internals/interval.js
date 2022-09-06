console.log('first');
console.log('second');
/* setInterval(()=> {
    console.log('third');
}, 1500) */
let seconds = 0;
/* setInterval(() => {
    console.log(seconds++);
}, 1000); */

const intervalId =  setInterval(() => {
    // console.log(seconds++); // prefix - increse value after this line
    console.log(++seconds); // postfix - increse value in this line
    if(seconds === 10) {
        clearInterval(intervalId);
    }
}, 500);
console.log('fourth');
console.log('fifth');