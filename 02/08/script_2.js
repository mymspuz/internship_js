let a = 2;

let x = 1 + (a *= 2); // прежде всего выполниться 'a = a * 2', а затем 'x = 1 + 4'. В результате 'a = 4', 'x = 5'