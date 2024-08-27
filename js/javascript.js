// Task 1

const getEvenNumbers = (arr) => {
  return arr.filter((num) => num % 2 === 0);
};

console.log(getEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// Task 2
const button = document.createElement("Button");
button.textContent = "Change Text";

button.addEventListener("click", () => {
  document.getElementById("MyText").textContent = "Hello, Check!";
});
document.body.appendChild(button);
