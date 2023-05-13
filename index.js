
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

