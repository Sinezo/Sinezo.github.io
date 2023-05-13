
//menu icon click
var menu = document.querySelector('#menu-icon');
var menu_status=1;
menu.addEventListener('click', function(){
    if(menu_status==1){
    document.querySelector('.bar1').style.transform='rotate(45deg)';
    document.querySelector('.bar2').style.transform='translate(-30px)';
    document.querySelector('.bar2').style.opacity='0';
    document.querySelector('.bar3').style.transform='rotate(-45deg)';

    document.querySelector('.bar1').style.margin='11px 0px 0 0';
    document.querySelector('.bar3').style.margin='-9.9px 0 0 0';
    menu_status=0;
    }
    else{

    document.querySelector('.bar1').style.transform='rotate(0)';
    document.querySelector('.bar2').style.transform='translate(0)';
    document.querySelector('.bar2').style.opacity='1';
    document.querySelector('.bar3').style.transform='rotate(0)';

    document.querySelector('.bar1').style.margin='0 0 3px 0';
    document.querySelector('.bar2').style.margin='0 0 3px 0';
    document.querySelector('.bar3').style.margin='0 0 3px 0';
    menu_status=1;
    }

});

//window scroll
window.onscroll=function(){
    scrolling();
};
function scrolling(){
    if(document.body.scrollTop > 0 || document.documentElement.scrollTop >0){
        document.querySelector('.nav-small-screen').style.backgroundColor='white';
        document.querySelector('.nav-small-screen').style.marginTop='-110px';
        document.querySelector('.nav-small-screen').style.position='fixed';
        document.querySelector('.nav-small-screen').style.boxShadow='1px 1px 3px lightgrey';
        document.querySelector('.phone').style.width='170px';
        document.querySelector('.phone').style.border='1px solid lightgrey';
        //document.querySelector('.web-name').style.fontSize="10px";
        //document.querySelector('.web-name').style.color='chocolate';
        

    }
    else{
        document.querySelector('.nav-small-screen').style.backgroundColor='unset';
        document.querySelector('.nav-small-screen').style.boxShadow='none';
        document.querySelector('.nav-small-screen').style.position='relative';
        document.querySelector('.nav-small-screen').style.marginTop='-70px';
        document.querySelector('.phone').style.width='0';
        document.querySelector('.phone').style.border='0';
        //document.querySelector('.web-name').style.fontSize="x-large";
        //document.querySelector('.web-name').style.color='black';
    }
}

