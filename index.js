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

        document.querySelector('.left-side-navigation').style.height='fit-content';
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

        document.querySelector('.left-side-navigation').style.height='0';
        menu_state=1;
    }
}

//PHOTOS
function PHOTO1(){
    document.querySelector('.photo-popup').style.display='block';
    let image=document.getElementById("popup_images").src="Screenshot_20230708_122240_Gallery.jpg";
    document.querySelector('.date').innerHTML='03/10/2022';
    document.querySelector('.place').innerHTML='Kwezi, Mthatha';
}
function PHOTO2(){
    let image=document.getElementById("popup_images").src="Screenshot_20230708_122223_Gallery.jpg";
    document.querySelector('.photo-popup').style.display='block';
    document.querySelector('.date').innerHTML='10/10/2022';
    document.querySelector('.place').innerHTML='lan Woods, Southridge Park, Mthatha';
}
function PHOTO3(){
    let image=document.getElementById("popup_images").src="1674935758660.jpg";
    document.querySelector('.photo-popup').style.display='block';
    document.querySelector('.date').innerHTML='03/08/2021';
    document.querySelector('.place').innerHTML='Beach, East London';
}
function PHOTO4(){
    let image=document.getElementById("popup_images").src="Screenshot_20230708_122240_Gallery.jpg";
    document.querySelector('.photo-popup').style.display='block';
    document.querySelector('.date').innerHTML='03/10/2022';
    document.querySelector('.place').innerHTML='Kwezi, Mthatha';
}
//close photos
function CLOSE_PHOTOS(){
    document.querySelector('.photo-popup').style.display='none';
}