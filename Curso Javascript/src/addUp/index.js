const input = document.getElementById("number");
const actionButton = document.getElementById("actionButton");
const result = document.getElementById("result");

actionButton.addEventListener("click", ()=>addUp(input))

function addUp(input){
    let number = input.value
    let count=0
    for(let i=1; i <= number;i++){
        count+=i
    }
    render(count)
}
function render(count){
    result.style.fontSize = "1.25rem"
    result.style.fontWeight="bold"
    result.textContent = count
}
