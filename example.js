const h1 = document.getElementById("first")
const h1_2 = document.getElementById("second")
const inputForPhone = document.getElementById("for-phone-number")
let prevValue = ""
let toggle = false

h1_2.addEventListener("click", () => {
    h1.style.border = toggle ? "2px solid black" : ""
    h1.style.color = "green"

    h1.style.borderRadius = "5px"
    toggle = !toggle
})

function inputChanged() {
    if (inputForPhone.value.length > 13) {
        inputForPhone.value = prevValue
    } else {
        prevValue = inputForPhone.value
    }
}

