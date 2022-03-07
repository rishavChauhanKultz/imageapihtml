
var value;
let o="popular";
let count=1;

lol(o,count)
function lol(value,count){
    console.log(count)
    fetch(`https://api.unsplash.com/search/photos?page=${count}&query=${value}&client_id=SUAbLNmGoAn-IuYdliG1IcjHNov0I8j0-CFymL8YVzA`).
then((d)=>d.json()).then((res)=> {
 photosApi(res.results)
})
}
let container = document.createElement("div")
let body = document.querySelector("body")
container.className = "container"
 body.append(container)
function photosApi(data){
 console.log(data)
  container.innerHTML=" "  
    
  data.map((e) => {
        // console.log(e)
         let box = document.createElement("div")
        box.className = "box"
       
            

            let img = document.createElement("img")
            img.src = e.links.download
            img.className = "photo"
            
            let desc = document.createElement("div")
            box.className = "desc"
            desc.innerText=e.alt_description
            
            container.append(box)
             box.append(img,desc)

        })
        
}



function getValueInput(){
    var myInput=document.getElementById("myInput").value
value=myInput
    console.log("hrer")
    myInput.value=""
    lol(value,count)
}


function prev(){
if(count>0){
    count--
}
lol(value,count)
}
function next(){
    count++
    lol(o,count)
    
    }

    photodiv(){
        console.log('here')
    }