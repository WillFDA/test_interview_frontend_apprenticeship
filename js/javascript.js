// Task 1

const getEvenNumbers = (arr) => {
  return arr.filter((num) => num % 2 === 0);
};

console.log(getEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// Task 2

const button = document.createElement("Button");
button.textContent = "Change Text";

const text = document.createElement("p");
text.id = "MyText";
text.textContent = "Click the button to change me!";

button.addEventListener("click", () => {
  document.getElementById("MyText").textContent = "Hello, Check!";
});

document.body.appendChild(button);
document.body.appendChild(text);

// Task 3

const ul = document.createElement("ul");
fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => response.json())
  .then((data) =>
    data.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item.title;
      ul.appendChild(li);
    })
  );

document.body.appendChild(ul);
