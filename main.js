const elem = document.getElementById("counter")
let count = 0

function add(e) {
    // e.preventDefault()
    count++
    console.log(count);
    elem.innerHTML = count
}