// take input in alert

// have dual variable, set to false

// While counter is less than entered value

// check if divisible by both

// if true, dual true

// if counter divisible by both 3 and 5 print FizzBuzz

// else if not dual

//   if counter is divisible by 3 print Fizz

//   else if counter is divisible by 5 print Buzz

//   else log counter

// increment counter

function FizzBuzz(a) {
  var dual = false;

  var counter = 1;
  while (counter < a) {
    counter % 3 == 0 && counter % 5 == 0 ? (dual = true) : (dual = false);

    if (dual) {
      console.log('FizzBuzz');
    } else {
      if (counter % 3 == 0) {
        console.log('Fizz');
      } else if (counter % 5 == 0) {
        console.log('Buzz');
      } else console.log(counter);
    }
    counter++;
  }
}

FizzBuzz(103);
