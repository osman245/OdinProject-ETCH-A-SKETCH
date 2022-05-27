// //create a 16.x16 grid use flexbox...
// //have hover effects

// buttons is a node list. It looks and acts much like an array.

const squares = document.querySelectorAll(".square");

// we use the .forEach method to iterate through each button
squares.forEach((square) => {
  // and for each one we add a 'click' listener
  square.addEventListener("mouseover", (e) => {
    e.target.style.backgroundColor = "red";
  });

  // square.addEventListener("mouseout", (e) => {
  //   e.target.style.backgroundColor = "white";
  // });
});

const numSquares = document.getElementById("#numSquares");

numSquares.addEventListener("click", () => {
  let a = prompt(
    "Enter amount of number of squares per side for the new grid!"
  );
  alert("helo");
});
