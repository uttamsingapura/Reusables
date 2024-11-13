  if (a b) {
    console.log("GCD is " + a);
    return;
  }
  if (a === 0 || b === 0) {
    console.log("GCD is " + 0);
    return;
  }
  if (a === 1 || b === 1) {
    console.log("GCD is " + 1);
    return;
  }
  let gr = a > b ? a : b;
  let lr = a > b ? b : a;
  let gcd = 1;

  for (let i=2; i<=lr; i++) {
    if (gr % i === 0 && lr % i === 0) {
      gcd = i;
    }
  }

  console.log("GCD is " + gcd);
  return;

}
