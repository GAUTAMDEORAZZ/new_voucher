console.log("i am main java script")

document.getElementById("form").addEventListener("submit",getData)


// let arrData=JSON.parse(localStorage.getItem("user")) || []
let arrData= []


function getData(){
    event.preventDefault();
objData={
    name:form.name.value,
    email:form.email.value,
    address:form.address.value,
    wallet:form.amount.value,
}

arrData.push(objData)
console.log(arrData)
localStorage.setItem("user",JSON.stringify(arrData))
window.location.reload()


}