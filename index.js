const container = document.getElementById("container")
const colorContainer = document.getElementById("color-container")
const hexContainer = document.getElementById("hex-container")
const colorInput = document.getElementById("color-input")
const colorBtnDesk = document.getElementById("color-btn-desk")
const colorBtnMob = document.getElementById("color-btn-mob")
const copyBtn = document.getElementById("copy-btn")
const modal = document.getElementById("myModal");
const span = document.getElementsByClassName("close")[0];
const list = document.querySelector('#list');
let colorArr = ""
let color = "9357b6"

colorInput.addEventListener("input", (e) => {
    color = e.target.value.slice(1)
})

function showColors() {
    listItem = list.value;
    fetch(`https://www.thecolorapi.com/scheme?hex=${color}&mode=${listItem}&count=5`)
    .then(res => res.json())
    .then(data => {
        let colorHtml = ``
        let hexHtml = ``
        colorArr = ""
        data.colors.map(color => {
            colorArr += color.hex.value
            colorHtml += `
                <div style="background-color:${color.hex.value};" id="color">
                </div>
                `
            hexHtml += `
                <div >
                    <p class="hex-p">${color.hex.value}</p>
                </div>`
        })
        copyBtn.style.display = "block"
        colorContainer.innerHTML = colorHtml
        hexContainer.innerHTML = hexHtml
    })
}

colorBtnDesk.addEventListener("click", showColors)
colorBtnMob.addEventListener("click", showColors)
list.addEventListener("click", showColors)


copyBtn.addEventListener("click", () => {
    copyToClipboard()
    modal.style.display = "block";
    setTimeout(() => modal.style.display = "none", 1000)
    // navigator.clipboard.writeText(colorArr)
})

function copyToClipboard() {
    var dummy = document.createElement("textarea");
    document.body.appendChild(dummy);
    dummy.value = colorArr;
    dummy.select();
    document.execCommand("copy");
    // navigator.clipboard.writeText(colorArr)
    document.body.removeChild(dummy);
}













