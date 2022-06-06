let data=JSON.parse(localStorage.getItem("purchase"))
console.log(data)

append(data)
let wallet=JSON.parse(localStorage.getItem("remaining"))
let wall=document.getElementById("balance")
wall.innerHTML=null
wall.append(wallet)

function append(data){
    data.forEach(function(elem,index){

        let name=document.createElement("h3")
       name.innerText=elem.name

       let image=document.createElement("img")
       image.src=elem.image

       let price=document.createElement("p")
       price.innerText=elem.price

       let div=document.createElement("div")
       div.append(image,name,price)
     let body=document.querySelector("#purchased_vouchers")
       body.append(div)


    })
}