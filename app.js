const closeBtn = document.getElementById("close")
const farBtn = document.getElementById("far")
const container = document.querySelector(".container")
const closerList = ["closer1.jpg","closer2.jpg","closer3.jpg"]
const fartherList = ["back1.jpg","back2.jpg", "back3.jpg"]

let closerCount = 1;
let fartherCount = 1;

closeBtn.addEventListener("click", () => {
    
    container.innerHTML = ""
    let img = document.createElement("img")
    console.log(container)
    if(closerCount  < 4){
       
        img.src = `img/${closerList[closerCount - 1]}`
        closerCount += 1
        container.appendChild(img)
       
    }else{
        img.src = `img/Start.jpg`
        container.appendChild(img)
        closerCount = 1
    }
    
})


farBtn.addEventListener("click", () => {
    container.innerHTML = ""
    let img = document.createElement("img")
    console.log(container)
    if(fartherCount  < 4){
        img.src = `img/${fartherList[fartherCount - 1]}`
        fartherCount += 1
        container.appendChild(img)
       
    }else{
        img.src = `img/Start.jpg`
        container.appendChild(img)
        fartherCount = 1
    }
})

