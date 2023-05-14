
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
/* window.onscroll=function(){
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

*/

//FREQUENTLY ASKED QUESTIONS
//question1
var menu = document.querySelector('.quest1');
var ans1_status=1; 
menu.addEventListener('click', function(){
    if(ans1_status==1){
        document.querySelector('.ans1').style.display='none';
    ans1_status=0;
    }
    else{
        document.querySelector('.ans1').style.display='block';
    ans1_status=1;
    }

});

//question2
var menu = document.querySelector('.quest2');
var ans2_status=1; 
menu.addEventListener('click', function(){
    if(ans2_status==1){
        document.querySelector('.ans2').style.display='block';
    ans2_status=0;
    }
    else{
        document.querySelector('.ans2').style.display='none';
    ans2_status=1;
    }

});

//question3
var menu = document.querySelector('.quest3');
var ans3_status=1; 
menu.addEventListener('click', function(){
    if(ans3_status==1){
        document.querySelector('.ans3').style.display='block';
    ans3_status=0;
    }
    else{
        document.querySelector('.ans3').style.display='none';
    ans3_status=1;
    }

});

//question4
var menu = document.querySelector('.quest4');
var ans4_status=1; 
menu.addEventListener('click', function(){
    if(ans4_status==1){
        document.querySelector('.ans4').style.display='block';
    ans4_status=0;
    }
    else{
        document.querySelector('.ans4').style.display='none';
    ans2_status=1;
    }

});

//question5
var menu = document.querySelector('.quest5');
var ans5_status=1; 
menu.addEventListener('click', function(){
    if(ans5_status==1){
        document.querySelector('.ans5').style.display='block';
    ans5_status=0;
    }
    else{
        document.querySelector('.ans5').style.display='none';
    ans5_status=1;
    }

});

//question6
var menu = document.querySelector('.quest6');
var ans6_status=1; 
menu.addEventListener('click', function(){
    if(ans6_status==1){
        document.querySelector('.ans6').style.display='block';
    ans6_status=0;
    }
    else{
        document.querySelector('.ans6').style.display='none';
    ans2_status=6;
    }

});