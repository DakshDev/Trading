let box1 = document.querySelector('#main-box #main-1')
let box2 = document.querySelector('#main-box #main-2')
let box3 = document.querySelector('#main-box #main-3')

let child1 = box1.children;
let child2 = box2.children;
let child3 = box3.children;

//one
for(let a = 0; a < child1.length; a++){
    child1[a].style.backgroundColor = '#1a1e27';
    child1[a].style.padding = '5px';
}
//two
for(let b = 0; b < child2.length; b++){
    child2[b].style.backgroundColor = '#1a1e27';
    child2[b].style.padding = '5px';
}
//three
for(let c = 0; c < child3.length; c++){
    child3[c].style.backgroundColor = '#1a1e27';
    child3[c].style.padding = '5px';
}


let svg = document.getElementsByTagName('svg');

for (let i = 0; i < svg.length; i++){
    let parentSvg = svg[i].parentElement;
    parentSvg.style.width = 'auto';
    parentSvg.style.height = 'auto';
    parentSvg.style.boxSizing = 'content-box';
    parentSvg.style.overflow = 'hidden';
    parentSvg.style.padding = '3px';
    // parentSvg.style.border = '1px solid red';
    parentSvg.style.display = 'flex';
    parentSvg.style.alignItems = 'center';

    parentSvg.onmouseenter=function(){       
        parentSvg.style.backgroundColor = '#11141b';


        parentSvg.onmouseleave=function(){
         parentSvg.style.backgroundColor = 'transparent';
        }
    }

}


function timeFun(){
    let makeDate = new Date()

    let year = makeDate.getFullYear();
    let month = makeDate.getMonth();
    let date = makeDate.getDate();
    let hour = makeDate.getHours();
    let minute = makeDate.getMinutes();
    let second = makeDate.getSeconds();

    if(month == 0){
        month = 'jan';
    }
    else if(month == 1){
        month = 'Feb';
    }
    else if(month == 2){
        month = 'Mar';
    }
    else if(month == 3){
        month = 'Apr';
    }
    else if(month == 4){
        month = 'May';
    }
    else if(month == 5){
        month = 'Jun';
    }
    else if(month == 6){
        month = 'Jul';
    }
    else if(month == 7){
        month = 'Aug';
    }
    else if(month == 8){
        month = 'Sep';
    }
    else if(month == 9){
        month = 'Oct';
    }
    else if(month == 10){
        month = 'Nov';
    }else{
        month = 'Dec'
    }

    let putDate = document.getElementById('date');
    putDate.style.backgroundColor = '#26825d';
    let firstChild = putDate.firstElementChild;
    let pfirstChild = firstChild.firstElementChild;
    let pSeconfChild = firstChild.lastElementChild;


    pfirstChild.innerHTML = date +' '+ month +" ";
    pSeconfChild.innerHTML = hour +':'+ minute +':'+ second;


}let interval = setInterval(timeFun,100)




let darkMode = document.getElementById('dark-light');
let parentDark = darkMode.parentElement;
parentDark.onclick=function(){

        let child = darkMode.firstElementChild;
        child.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-toggle-on" viewBox="0 0 16 16"><path d="M5 3a5 5 0 0 0 0 10h6a5 5 0 0 0 0-10H5zm6 9a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"/></svg>';

        //one
        for(let a = 0; a < child1.length; a++){
            child1[a].style.backgroundColor = 'lightgray';
            child1[a].style.padding = '5px';
        }
        //two
        for(let b = 0; b < child2.length; b++){
            child2[b].style.backgroundColor = 'lightgray';
            child2[b].style.padding = '5px';
        }
        //three
        for(let c = 0; c < child3.length; c++){
            child3[c].style.backgroundColor = 'lightgray';
            child3[c].style.padding = '5px';
        }

        document.body.style.backgroundColor = 'white'




        parentDark.onclick=function(){
                child.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-toggle-off" viewBox="0 0 16 16"><path d="M11 4a4 4 0 0 1 0 8H8a4.992 4.992 0 0 0 2-4 4.992 4.992 0 0 0-2-4h3zm-6 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zM0 8a5 5 0 0 0 5 5h6a5 5 0 0 0 0-10H5a5 5 0 0 0-5 5z"/></svg>';
        
                //one
                for(let a = 0; a < child1.length; a++){
                    child1[a].style.backgroundColor = '#1a1e27';
                    child1[a].style.padding = '5px';
                }
                //two
                for(let b = 0; b < child2.length; b++){
                    child2[b].style.backgroundColor = '#1a1e27';
                    child2[b].style.padding = '5px';
                }
                //three
                for(let c = 0; c < child3.length; c++){
                    child3[c].style.backgroundColor = '#1a1e27';
                    child3[c].style.padding = '5px';
                }
            
                document.body.style.backgroundColor = '#11141b'

                parentDark.onclick=function(){
                        alert('Only two times change the mode so please refresh the page to change lightmode!');
                        parentDark.onclick=function(){
                            alert('Refresh the page')
                        }
                    }
            }
}




    let random = Math.trunc(Math.random() * 10 ) + 70 ;
    let ramElm = document.getElementsByClassName('random');
    for(let ram = 0; ram < ramElm.length; ram++){
        ramElm[ram].innerHTML = random;
    }


let alert1 = document.getElementsByTagName('button');

for(let alrt = 0; alrt < alert1.length; alrt++){
    alert1[alrt].onclick=function(){
        alert('WebSite is Not Working !')
    }
}



let clickBar = document.getElementById('click-bar');
let change = document.getElementById('main-1');
let bodyClick = document.getElementById('blur');

clickBar.onclick=function(){

    

    if(change.style.left == '0px'|| bodyClick.style.display == 'block'){
        change.style.left = '-100%';
        bodyClick.style.display = 'none'
    }
    else{
        change.style.left = '0px';
        bodyClick.style.display = 'block'
    }

}

bodyClick.onclick=function(){
    change.style.left = '-100%';
    bodyClick.style.display = 'none';
}
