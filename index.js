//MENU ONCLICK
let menu_state=1;
function MENU(){
    if(menu_state==1){
        document.querySelector('.bar1').style.transform='rotate(45deg)';
        document.querySelector('.bar1').style.marginTop='-30px';
        document.querySelector('.bar1').style.opacity='0';
        document.querySelector('.bar2').style.transform='rotate(45deg)';
        document.querySelector('.bar2').style.marginTop='6px';
        document.querySelector('.bar3').style.transform='rotate(-45deg)';
        document.querySelector('.bar3').style.marginTop='-6.9px';

        document.querySelector('.left-side-navigation').style.width='100%';
        menu_state=0;
    }
    else{
        document.querySelector('.bar1').style.marginTop='0';
        document.querySelector('.bar1').style.opacity='1';
        document.querySelector('.bar1').style.transform='rotate(0deg)';
        document.querySelector('.bar2').style.transform='rotate(0deg)';
        document.querySelector('.bar2').style.marginTop='0';
        document.querySelector('.bar3').style.transform='rotate(0deg)';
        document.querySelector('.bar3').style.marginTop='0';

        document.querySelector('.left-side-navigation').style.width='0';
        menu_state=1;
    }
}

//REGISTER BUTTON
let register_state=1;
function REGISTER(){
    if(register_state==1){
       document.querySelector('.register').style.top='50px';
       document.querySelector('.register').style.height='fit-content';
       register_state=0;
    }
    else{
        document.querySelector('.register').style.top='500px';
        document.querySelector('.register').style.height='0';
       register_state=1;
    }
}