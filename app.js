const result = document.getElementById("result");
const submit = document.getElementById("submit");

function binary(e) {
  e.preventDefault();

  const number = document.getElementById("number").value;

  if (number === "") {
    alert("Please enter a number");
  } else if (number < 0) {
    alert("Please enter your positive number");
  } else {
    result.style.visibility = "visible";
  }

  // converting
  binaryNumber = Number(number).toString(2);

  result.innerHTML = binaryNumber;
}
submit.addEventListener("click", binary);

console.log("working");
