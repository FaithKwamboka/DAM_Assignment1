document.querySelector("#btn").addEventListener("click", message);
function message() {
    let input = document.querySelector("#input").value
    let generatedElement = document.createElement("p");
    generatedElement.innerText = `hello ${input} welcome to the bootcamp`
    document.querySelector('#demo').appendChild(generatedElement);
}