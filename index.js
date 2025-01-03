const gtBtn = document.getElementById("get-btn");

gtBtn.addEventListener("click", async function() {
    const hex = document.getElementById("colorPicker").value.slice(1);
    const mode = document.getElementById("color-scheme").value;
    let url = `https://www.thecolorapi.com/scheme?hex=${hex}&mode=${mode}&count=5&format=json`;
    const colors = await fetchColors(url);
    updateColor(colors);
});

async function fetchColors(url) {
    let colorArr = [];
    const response = await fetch(url);
    const data = await response.json();
    for (let color of data.colors) {
        colorArr.push(color.hex.value);
    }
    return colorArr;
}

function updateColor(colorArray) {
    console.log(colorArray[3]);
    const color1 = document.getElementById("color1");
    const color2 = document.getElementById("color2");
    const color3 = document.getElementById("color3");
    const color4 = document.getElementById("color4");
    const color5 = document.getElementById("color5");
    color1.style.backgroundColor = colorArray[0];
    color2.style.backgroundColor = colorArray[1];
    color3.style.backgroundColor = colorArray[2];
    color4.style.backgroundColor = colorArray[3];
    color5.style.backgroundColor = colorArray[4];
    document.getElementById("HEX1").textContent = colorArray[0];
    document.getElementById("HEX2").textContent = colorArray[1];
    document.getElementById("HEX3").textContent = colorArray[2];
    document.getElementById("HEX4").textContent = colorArray[3];
    document.getElementById("HEX5").textContent = colorArray[4];
}