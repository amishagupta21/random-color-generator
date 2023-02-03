const containerNode = document.querySelector(".container")
for (let index = 0; index < 30; index++) {
    const colorContainerNode = document.createElement("div")
    colorContainerNode.classList.add("color-container")
    containerNode.append(colorContainerNode)
}
const colorContainerNodes=document.querySelectorAll(".color-container")
generateColor()
function generateColor(){
    colorContainerNodes.forEach((color)=>{
     const newColor=randomColor()
     color.style.backgroundColor="#"+newColor
     color.innerHTML="#"+ newColor
    })
}

function randomColor() {
    const char = "0123456789abcdef";
    const colorCodeLength = 6;
    let colorCode = "";
    for (let index = 0; index < colorCodeLength; index++) {
        const randomNum = Math.floor(Math.random() * char.length)
        colorCode +=char.substring(randomNum,randomNum+1)
    }
    return colorCode
}


