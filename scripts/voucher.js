console.log("I am vocher")


let arrData=JSON.parse(localStorage.getItem("user"))
console.log(arrData)
let wallet=arrData[0].wallet
console.log(wallet)

let wal=document.getElementById("wallet_balance")
wal.innerHTML=null
wal.append(wallet)



async function main(){
let url=`https://masai-vouchers-api.herokuapp.com/api/vouchers`
let response=await fetch(url)
let data= await response.json()
console.log(data[0].vouchers)
append(data[0].vouchers)

}

function append(data){
    let voucher=document.querySelector(".voucher")
  
    data.forEach(function(elem,index){
       let name=document.createElement("h3")
       name.innerText=elem.name

       let image=document.createElement("img")
       image.src=elem.image

       let price=document.createElement("p")
       price.innerText=elem.price

       let btn=document.createElement("button")
       btn.innerText="Buy"
       btn.setAttribute("class","buy_voucher")
       
       btn.addEventListener("click",function(){

        if(wallet>elem.price){
            alert("Hurray! purchase successful")
            wallet=wallet-elem.price
            wal.innerHTML=null
            wal.append(wallet)

            addItem(elem,index)
            // window.location.reload()
        }

        else{
            alert( "Sorry! insufficient balance")
        }
       
    })


       
    

    //    console.log(name,image,price)

       let div=document.createElement("div")
       div.setAttribute("id","voucher_list")

       div.append(image,name,price,btn)
    //   let voucher=document.getElementsByClassName("voucher")
     
       voucher.append(div)


   })


    
}
  
let arr=JSON.parse(localStorage.getItem("purchase")) || []
function  addItem(elem,index){
 arr.push(elem)
 localStorage.setItem("purchase",JSON.stringify(arr))
}

   


main()