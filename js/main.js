 var siteName=document.getElementById('siteName')
 var urlName=document.getElementById('urlName')
var btnSubmit=document.getElementById('btnSubmit')
var sitesArr=[]

if(localStorage.getItem('bookmarks') !=null ){
    sitesArr= JSON.parse(localStorage.getItem('bookmarks') )
    display ()
    clear ()
}

btnSubmit.addEventListener('click',submitBtn)
urlName.addEventListener('keyup',validateUrl)

function submitBtn (){
   var siteObject ={
nameSite:siteName.value,
nameUrl:urlName.value,
   }

var pattern = /^(http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/i;
var  url=document.getElementById('urlName').value;
var  name=document.getElementById('siteName').value;

if (pattern.test(url) && name.length>4  ){

sitesArr.unshift(siteObject)
} else {
  alert("Invalid URL or bookmark name is incorrect ");
}

display()
clear ()

localStorage.setItem('bookmarks',JSON.stringify( sitesArr))

}






function display (){
    var box=``
    for(i=0;i<sitesArr.length;i++){
         box+=`
        <tr>
        <td>${i+1}</td>

        <td>${sitesArr[i].nameSite}</td>
       
<td><a href="${sitesArr[i].nameUrl}"  target="_blank" class="btn btn-danger fw-semibold fs-6 px-2 py-1">
<i class="fa-solid fa-eye pe-2"></i>
VISIT</a></td>

    
        <td><button onclick="deleteItem (${i})"  class="btn btn-danger fw-semibold fs-6 px-2 py-1">
        <i class="fa-solid fa-trash-can"></i>
        DELETE</button>
        </td>
    
    </tr>
        
        `
    }
document.getElementById('show').innerHTML= box

}

function clear (){
    siteName.value=''
    urlName.value=''

}

function deleteItem (index){
sitesArr.splice(index,1)
display()

}

function openWebsite(u) {
   
    location.assign(u);
  console.log(u)
  }




  function validateUrl() {
    var  url=document.getElementById('urlName').value;
 var urlName=document.getElementById('urlName')

    var pattern = /^(http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/i;

    if (pattern.test(url)) {
    //   alert("Valid URL");
    urlName.classList.remove('input')
    

    urlName.classList.add('valid-input')
    } else {
    //   alert("Invalid URL");
      urlName.classList.add('input')

    }
}