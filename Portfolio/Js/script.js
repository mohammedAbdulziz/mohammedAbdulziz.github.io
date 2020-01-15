{
    //hero section
    let hi=document.querySelector('#hero .wrapper .welcoming .hi');
    setTimeout(()=>{
        hi.style.display="none";
    },4000)
    let name=document.querySelector('#hero .wrapper .welcoming .name');
    setTimeout(()=>{
        name.style.display="block";
    },4000)
    let nameList=document.querySelectorAll('#hero .wrapper .welcoming .name h2');
    setTimeout(()=>{
        nameList[0].style.display="block";
    },7000)
    setTimeout(()=>{
        nameList[0].style.display="none";
        nameList[1].style.display="block";
    },11000)
    setTimeout(()=>{
        nameList[1].style.display="none";
        nameList[2].style.display="block";
    },15000)
    //final 
    let final=document.querySelector('#hero .wrapper .final')
    let welcoming=document.querySelector('#hero .wrapper .welcoming')
    setTimeout(()=>{
        final.style.display="block";
        welcoming.style.display="none";
    },19000)
    //menu
    let mIcon=document.querySelector("#hero .wrapper .final .nav svg");
    let menu=document.querySelector('#hero .wrapper .final .nav .menu');
    let mList=document.querySelectorAll("#hero .wrapper .final .nav h3");
    let logo=document.querySelector("#hero .wrapper .final .logo embed");
    let mIconY=document.querySelectorAll('#hero .wrapper .final .nav svg .cls-1')
    let mIconW=document.querySelectorAll('#hero .wrapper .final .nav svg .cls-2')
    let check=false;
    let viewPort=window.matchMedia("(max-width:900px)");
    let viewPort2=window.matchMedia("(max-width:400px)");
    mIcon.addEventListener('click',function(){
        check=!check;
        if(check){
            mIcon.style.transform="rotate(45deg)";
            logo.style.left="70%"
            mList[0].style.width="300px"
            mList[1].style.width="300px"
            mList[2].style.width="300px"
            mList[3].style.width="300px"
            for(let e of mIconY){
                e.style.stroke="white"
            }
            for(let e of mIconW){
                e.style.stroke="#f7931e"
            }
            if(viewPort.matches){
                logo.style.left="50%"
                logo.style.display="none"
            }
            if(viewPort2.matches){
                mList[0].style.width="200px"
                mList[1].style.width="200px"
                mList[2].style.width="200px"
                mList[3].style.width="200px"
            }
        }
        else {
            mIcon.style.transform="rotate(0deg)";
            logo.style.left="50%"
            for(let e of mIconY){
                e.style.stroke="#f7931e"
            }
            for(let e of mIconW){
                e.style.stroke="white"
            }
            mList[0].style.width="0px"
            mList[1].style.width="0px"
            mList[2].style.width="0px"
            mList[3].style.width="0px"
            if(viewPort.matches){
                logo.style.display="block"
            }
        }
    })
    
}
{
    //about section
    let back=document.querySelector("#about .wrapper .back a")
    let about=document.querySelector('#about')
    back.addEventListener('click',function(){
        about.style.display="none"
    })
    let aboutLink=document.querySelectorAll("#hero .wrapper .final .nav h3 a");
    aboutLink[0].addEventListener('click',function(){
        about.style.display="block"
    })
    
    
    
}
{
    //resume section
    let bar=document.querySelectorAll("#resume .wrapper .container .contt div div");
    let perce=document.querySelectorAll("#resume .wrapper .container .contt div p");
    let resume=document.querySelector("#resume");
    let resumeLink=document.querySelectorAll("#hero .wrapper .final .nav h3 a");
    resumeLink[1].addEventListener("click",function(){
        resume.style.display="block";
        animate(0, 95);
        animate1(0, 75);
        animate2(0, 65);
        animate3(0, 55);
        setTimeout(function(){
            bar[0].style.width="100%";
            bar[1].style.width="100%";
            bar[2].style.width="100%";
            bar[3].style.width="100%";
        })
    })
    function animate(start, finish) {
        setTimeout(function () {
            perce[0].innerHTML=start + '%';
            start += 1;
            if (start <= finish) {
                animate(start, finish);
            } else {
                return;
            }
        }, 30);
    }    
    function animate1(start, finish) {
        setTimeout(function () {
            perce[1].textContent=start + '%';
            start += 1;
            if (start <= finish) {
                animate1(start, finish);
            } else {
                return;
            }
        }, 30);
    }    
    function animate2(start, finish) {
        setTimeout(function () {
            perce[2].textContent=start + '%';
            start += 1;
            if (start <= finish) {
                animate2(start, finish);
            } else {
                return;
            }
        }, 30);
    }    
    function animate3(start, finish) {
        setTimeout(function () {
            perce[3].textContent=start + '%';
            start += 1;
            if (start <= finish) {
                animate3(start, finish);
            } else {
                return;
            }
        }, 30);
    }  
    let back=document.querySelector("#resume .wrapper .back")
    back.addEventListener('click',function(){
        resume.style.display="none"
        setTimeout(function(){
            bar[0].style.width="0%";
            bar[1].style.width="0%";
            bar[2].style.width="0%";
            bar[3].style.width="0%";
        })
    })
    let aboutLink=document.querySelectorAll("#hero .wrapper .final .nav h3 a");
    aboutLink[1].addEventListener('click',function(){
        resume.style.display="block"
    })
}
{
    //services
    let services=document.querySelector("#services")
    let back=document.querySelector("#services .wrapper .back")
    back.addEventListener('click',function(){
        services.style.display="none"
    })
    let aboutLink=document.querySelectorAll("#hero .wrapper .final .nav h3 a");
    aboutLink[2].addEventListener('click',function(){
        services.style.display="block"
    })
}
{
    //conctact
    let contact=document.querySelector("#contact")
    let back=document.querySelector("#contact .wrapper .back")
    back.addEventListener('click',function(){
        contact.style.display="none"
    })
    let aboutLink=document.querySelectorAll("#hero .wrapper .final .nav h3 a");
    aboutLink[3].addEventListener('click',function(){
        contact.style.display="block"
    })
}