//Get Posts Section****************///////////////*/**/*/* */
let tbody=document.querySelector("table tbody");
let table=document.querySelector("table");
let reffreshBtn=document.getElementById("reffreshBtn");
fetch("https://jsonplaceholder.typicode.com/posts").then(resp=>resp.json()).then(function(json){
//for each****** since it is an array

json.forEach(function(ele,index){
    let row=document.createElement("tr");
    let td1=document.createElement("td");
    let td2=document.createElement("td");
    let p1=document.createElement("p");
    let p2=document.createElement("p");
    let h3=document.createElement("h3");
    let p3=document.createElement("p");
    
    p1.innerHTML=`<span>Post ID:</span> ${ele.id}`;
    p2.innerHTML=`<span>User ID:</span> ${ele.userId}`;
    td1.appendChild(p1);
    td1.appendChild(p2);
    
    h3.innerText=ele.title;
    p3.innerText=ele.body;
    td2.appendChild(h3);
    td2.appendChild(p3);
    
    row.appendChild(td1);
    row.appendChild(td2);
    
    tbody.appendChild(row);
});

//for each ends 
});
//end of fetch 

reffreshBtn.addEventListener('click',function(){
    table.removeChild(document.querySelector("table tbody"));
    let tbody1=document.createElement("tbody");
    fetch("https://jsonplaceholder.typicode.com/posts").then(resp=>resp.json()).then(function(json){
    console.log("refreshing");
    json.forEach(function(ele,index){
        let row=document.createElement("tr");
        let td1=document.createElement("td");
        let td2=document.createElement("td");
        let p1=document.createElement("p");
        let p2=document.createElement("p");
        let h3=document.createElement("h3");
        let p3=document.createElement("p");
        
        p1.innerHTML=`<span>Post ID:</span> ${ele.id}`;
        p2.innerHTML=`<span>User ID:</span> ${ele.userId}`;
        td1.appendChild(p1);
        td1.appendChild(p2);
        
        h3.innerText=ele.title;
        p3.innerText=ele.body;
        td2.appendChild(h3);
        td2.appendChild(p3);
        
        row.appendChild(td1);
        row.appendChild(td2);
        
        tbody1.appendChild(row);
    });//for each ends here
    table.appendChild(tbody1);
})
});

//Get Fetch ends here;

//////////////////////////////  Addig Element
let addForm=document.getElementById("add-posts");
let addBtn=document.getElementById("addBtn");
let showAddForm=false;
addForm.style.display="none";
addBtn.addEventListener('click',function(){
    showAddForm=!showAddForm;
    
    if(showAddForm){
        addForm.style.display="block";
        let btn = document.querySelector("#add-posts button");
        let userI = document.querySelector("#add-posts #userId");
        let titl = document.querySelector("#add-posts #title");
        let bod = document.querySelector("#add-posts #body");
        btn.addEventListener('click',function(){
            console.log("hi");
            if(userI.value!=""&&titl.value!=""&&bod.value!=""){
                fetch("https://jsonplaceholder.typicode.com/posts",{
                method:"POST",
                headers:{
                    "content-type":"application/json",
                    "access":"application/json"
                },
                body:JSON.stringify({
                    userId:userI.value,
                    title:titl.value,
                    body:bod.value
                })
            }).then(resp=>resp.json()).then(function(json){
                if(json.userId==userI.value&&json.body==bod.value&&json.title==titl.value){
                    let p= document.querySelector("#add-posts p");
                    p.innerHTML="Adding new post succeeded";
                    p.style.color="green";
                }
                else{
                    let p= document.querySelector("#add-posts p");
                    p.innerHTML="There was an error";
                    p.style.color="red";
                }
            }).catch(function(error){
                console.log(error);
            })
        }//end of IF
    })//end of envent listiner 
    
}
else{
    addForm.style.display="none";
}
})//finished edit form listenter 

//Edit Section ////////////////////////////////////
let editForm=document.getElementById("edit-posts");
let editBtn=document.getElementById("editBtn");
let showeditForm=false;
editForm.style.display="none";
editBtn.addEventListener('click',function(){
    showeditForm=!showeditForm;
    if(showeditForm){
        
        editForm.style.display="block";
        let btn = document.querySelector("#edit-posts button");
        let userI = document.querySelector("#edit-posts #userId");
        let titl = document.querySelector("#edit-posts #title");
        let bod = document.querySelector("#edit-posts #body");
        let ide = document.querySelector("#edit-posts #id");
        btn.addEventListener('click',function(){
            console.log("hi");
            if(userI.value!=""&&titl.value!=""&&bod.value!=""&&ide.value!=""){
                fetch(`https://jsonplaceholder.typicode.com/posts/${Number(ide.value)}`,{
                method:"PATCH",
                headers:{
                    "content-type":"application/json",
                    "access":"application/json"
                },
                body:JSON.stringify({
                    userId:userI.value,
                    title:titl.value,
                    body:bod.value
                })
            }).then(resp=>resp.json()).then(function(json){
                if(json.userId==userI.value&&json.body==bod.value&&json.title==titl.value&&json.id==ide.value){
                    let p= document.querySelector("#edit-posts p");
                    p.innerHTML="Changed data of id successfully";
                    p.style.color="green";
                }
                else{
                    let p= document.querySelector("#edit-posts p");
                    p.innerHTML="Changing data of id was not successful";
                    p.style.color="red";
                }
            }).catch(function(error){
                console.log(error);
            })}
        
    });
    //end of IF
    }
    else{
        editForm.style.display="none";
    }

})

