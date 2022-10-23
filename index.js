
            //FUNCTION FOR MENU ICON
          var show=0;
          function menu(){
             if(show==0){
                 document.querySelector("#barone").style.transform="rotate(135deg)";
                 document.querySelector("#barone").style.marginBottom="-1.5px";
                 document.querySelector("#bartwo").style.display="none";
                 document.querySelector("#barthree").style.transform="rotate(225deg)";
                 document.querySelector("#barthree").style.marginTop="-1.8px";
                 document.querySelector(".Menu").style.height="245px";
                 document.querySelector("#barone").style.backgroundColor="white";
                 document.querySelector("#barthree").style.backgroundColor="white";
                 document.querySelector(".wrap-icon").style.backgroundColor="rgb(212, 206, 116)";
                 document.querySelector(".menuicon").style.margin="5px 0 0 0";
                 show=1;
             }
             else if(show==1){
                document.querySelector("#barone").style.transform="rotate(0)";
                 document.querySelector("#barone").style.marginBottom="3px";
                 document.querySelector("#bartwo").style.display="block";
                 document.querySelector("#barthree").style.transform="rotate(0)";
                 document.querySelector("#barthree").style.marginTop="0px";
                 document.querySelector(".Menu").style.height="0";
                 document.querySelector(".Menu").style.border="none";
                 document.querySelector(".Menu").style.margin="0";
                 document.querySelector("#barone").style.backgroundColor="rgb(211, 178, 134)";
                 document.querySelector("#barthree").style.backgroundColor="rgb(211, 178, 134)";
                 //hiding certificates box
                 document.querySelector(".mycertificates").style.display="none";
                 document.querySelector(".viewcert").innerHTML="&#10010;";
                 document.querySelector(".wrap-icon").style.backgroundColor="rgba(255, 251, 251, 0.726)";
                  viewnav=0;
                 //hiding other activities box
                 document.querySelector(".mytuition").style.display="none";
                 document.querySelector(".otheract").innerHTML="&#10010";
                 document.querySelector(".menuicon").style.margin="0 ";
                 othershow=1;
                 show=0;
             }
          }

          //funtion for the contactwrap
          function contactfunc(){
                  document.querySelector(".contactus").style.display="block";
                  document.querySelector(".hiremebox").style.display="none";
                  document.querySelector("#hiremebtn").style.boxShadow="none";
                  document.querySelector("#contactusbtn").style.boxShadow="1px 1px 1px grey";
                  document.querySelector("#hiremebtn").style.color="black";
          }
          function hiremefunc(){
            document.querySelector(".hiremebox").style.display="block";
            document.querySelector(".contactus").style.display="none";
            document.querySelector("#hiremebtn").style.boxShadow="1px 1px 1px grey";
            document.querySelector("#contactusbtn").style.boxShadow="none";
            document.querySelector("#contactusbtn").style.color="black";
          }

          //function for view certificates nav
          var viewnav=0;
          function viewcertificatesnav(){
              if(viewnav==0){
                  document.querySelector(".mycertificates").style.display="block";
                  document.querySelector(".viewcert").innerHTML="&#8212";
                  document.querySelector(".Menu").style.height="fit-content";
                  viewnav=1;
              }
              else if(viewnav==1){
                document.querySelector(".mycertificates").style.display="none";
                document.querySelector(".viewcert").innerHTML="&#10010;";
                  viewnav=0;
              }
          }

          //function for hireme nav
          function hiremenav(){
              window.location="index.html#wrapcontact";
              document.querySelector(".hiremebox").style.display="block";
              document.querySelector(".contactus").style.display="none";
              document.querySelector("#hiremebtn").style.boxShadow="1px 1px 1px rgba(172, 79, 4, 0.849)";
              document.querySelector("#contactusbtn").style.boxShadow="none";
              document.querySelector("#hiremebtn").style.color="rgba(172, 79, 4, 0.849)";

              document.querySelector("#contactusbtn").style.color="black";

          }
          //function for contact me nav
          function contactmenav(){
            window.location="index.html#wrapcontact";
            document.querySelector(".contactus").style.display="block";
            document.querySelector(".hiremebox").style.display="none";
            document.querySelector("#hiremebtn").style.boxShadow="none";
            document.querySelector("#contactusbtn").style.boxShadow="1px 1px 1px rgba(17, 128, 136, 0.911)";
            document.querySelector("#contactusbtn").style.color="rgba(17, 128, 136, 0.911)";

            document.querySelector("#hiremebtn").style.color="black";
          }


          function requestproject(){
            window.location='requestproject.html';
          }
//Other Activities box
var othershow=1;
function otheractivities(){
    if(othershow==1){
        document.querySelector(".mytuition").style.display="block";
        document.querySelector(".otheract").innerHTML="&#8212";
        document.querySelector(".Menu").style.height="fit-content";
        othershow=0;
    }
    else if(othershow==0){
        document.querySelector(".mytuition").style.display="none";
        document.querySelector(".otheract").innerHTML="&#10010";
        othershow=1;
    }
}

//when clicking on my projects
var alert=1;
function alertprojects(){
    if(alert==1){
        document.querySelector(".alert").style.height="90px";
        document.querySelector(".alert").style.padding="5px";
        alert=0;
    }
    else if(alert==0){
        document.querySelector(".alert").style.height="0";
        document.querySelector(".alert").style.padding="0";
        alert=1;
    }
}

//onscroll function
window.onscroll=function(){
    myscroll()
};
function myscroll(){
    if(document.body.scrollTop>370 || document.documentElement.scrollTop>370){
        document.querySelector(".poet").style.opacity="1";
        document.querySelector(".arduino_programmer").style.opacity="1";
        document.querySelector(".web_developer").style.opacity="1";
        
        if(document.body.scrollTop>1200 || document.documentElement.scrollTop>1200){
            document.querySelector(".scroll-top").style.width="40px";
            document.querySelector(".scroll-top").style.height="40px";
        }
     
    }
    else{
        document.querySelector(".scroll-top").style.width="0";
        document.querySelector(".scroll-top").style.height="0";
     
    }
}
//about skills
var ab_skills=1;
function about_skills(){
    if(ab_skills==1){
        document.querySelector('.web-development-brief').style.display='block';
        document.querySelector('.poetry-brief').style.display='block';
        document.querySelector('.arduino-programming-brief').style.display='block';
        ab_skills=0;
    }
    else{
        document.querySelector('.web-development-brief').style.display='none';
        document.querySelector('.poetry-brief').style.display='none';
        document.querySelector('.arduino-programming-brief').style.display='none';
        ab_skills=1;
    }

}
//services list
var serv_list=1;
function service_List(){
    if(serv_list==1){
        document.querySelector('.services-list').style.display='flex';
        serv_list=0;
    }
    else{
        document.querySelector('.services-list').style.display='none';
        serv_list=1;
    }
}

//skills
var skill_show=1;
function skills(){
    if(skill_show==1){
        document.querySelector('.myprof_skills').style.display='flex';
        skill_show=0;
    }
    else{
        document.querySelector('.myprof_skills').style.display='none';
        skill_show=1;
    }
}
//images animation
let image=1;
function IMAGES(){
    if(image==1){
        image_in.src='electrician1.png';
        image=2;
    }
    else if(image==2){
        image_in.src='myphoto.png';
        image=3;
    }
    else if(image==3){
        image_in.src='20220924_072239.jpg';
        image=4;
    }
    else if(image==4){
        image_in.src='20221010_120358.jpg';
        image=5;
    }
    else if(image==5){
        image_in.src='20221007_135002.jpg';
        image=1;
    }
    setTimeout('IMAGES()',4000);
}
window.onload=IMAGES;