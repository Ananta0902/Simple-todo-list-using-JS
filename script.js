let ip=document.querySelector('input');
let btn=document.querySelector('button');
let ul=document.querySelector('ul');

btn.addEventListener("click",function(){
   let item=document.createElement("li");         //create new element
   item.innerText=ip.value;

   let delBtn=document.createElement("button");
       delBtn.innerText="delete";
       delBtn.classList.add("delete");

    item.appendChild(delBtn);
     ul.appendChild(item);                            //add on list
   ip.value="";                                //reset value  
});
ul.addEventListener("click",function(event){
if(event.target.nodeName=="BUTTON"){
    let listItem=event.target.parentElement;
    listItem.remove();
}
});

//this works only for existing element not new created elements
// let delBtns=document.querySelectorAll(".delete");
// for(delBtn of delBtns){
//     delBtn.addEventListener("click",function(){
//         let par=this.parentElement;
//         par.remove();
//     });
//     }
