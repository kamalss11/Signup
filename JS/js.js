var fname = document.querySelector("#fn")
var lname = document.querySelector("#ln")
var phnum = document.querySelector("#ph")
var email = document.querySelector("#ema")
var password = document.querySelector("#pss")
var er = document.querySelector(".er")
var sbtn = document.querySelector("#sbt")
var form = document.querySelector("#form")

phnum.addEventListener("blur",function(){
    let ph = /\d[0-9]$/
    if(fname.value.length > 10){
        er.classList.add("active")
    }
    else if(!phnum.value.match(ph)){
        er.classList.add("active")
    }
    else{
        er.classList.remove("active")
    }
})

sbtn.addEventListener("click",function(e){
    e.preventDefault()
})