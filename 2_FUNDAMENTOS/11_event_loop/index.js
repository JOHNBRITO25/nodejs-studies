function a() {
  console.log("Function a() executed");
}

function b() {
  console.log("Function b() executed");
}

function c() {
  console.log("Function c() executed");
  a();
  b();
}

c();
