
//FUNCTION FOR ALL THE BOXES
function elecmachines(){
    document.querySelector(".automation").style.display="none";
    document.querySelector(".elecmachines").style.display="block";
    document.querySelector(".elecmachines").style.height="block";
    document.querySelector(".elecmachines").style.padding="20px";
    document.querySelector(".webdev").style.display="none";
    document.querySelector(".elecwiring").style.display="none";

    document.querySelector(".machinesbtn").style.backgroundColor="rgb(77, 84, 143)";
    document.querySelector(".machinesbtn").style.color="white";

    document.querySelector(".webbtn").style.backgroundColor="white";
    document.querySelector(".webbtn").style.color="rgb(37, 141, 89)";
    document.querySelector(".elecwiringbtn").style.backgroundColor="white";
    document.querySelector(".elecwiringbtn").style.color="rgb(37, 141, 89)";
    document.querySelector(".autobtn").style.backgroundColor="white";
    document.querySelector(".autobtn").style.color="rgb(37, 141, 89)";

}
function automation(){
    document.querySelector(".automation").style.display="block";
    document.querySelector(".elecmachines").style.display="none";
    document.querySelector(".webdev").style.display="none";
    document.querySelector(".elecwiring").style.display="none";
    document.querySelector(".automation").style.height="fit-content";
    document.querySelector(".automation").style.padding="20px";

    document.querySelector(".autobtn").style.backgroundColor="rgb(181, 187, 238)";
    document.querySelector(".autobtn").style.color="white";

    document.querySelector(".webbtn").style.backgroundColor="white";
    document.querySelector(".webbtn").style.color="rgb(37, 141, 89)";
    document.querySelector(".elecwiringbtn").style.backgroundColor="white";
    document.querySelector(".elecwiringbtn").style.color="rgb(37, 141, 89)";
    document.querySelector(".machinesbtn").style.backgroundColor="white";
    document.querySelector(".machinesbtn").style.color="rgb(37, 141, 89)";

}
function elecwiring(){
    document.querySelector(".automation").style.display="none";
    document.querySelector(".elecmachines").style.display="none";
    document.querySelector(".elecwiring").style.display="block";
    document.querySelector(".webdev").style.display="none";

    document.querySelector(".elecwiringbtn").style.backgroundColor="rgb(179, 106, 47)";
    document.querySelector(".elecwiringbtn").style.color="white";

    document.querySelector(".autobtn").style.backgroundColor="white";
    document.querySelector(".autobtn").style.color="rgb(37, 141, 89)";
    document.querySelector(".webbtn").style.backgroundColor="white";
    document.querySelector(".webbtn").style.color="rgb(37, 141, 89)";
    document.querySelector(".machinesbtn").style.backgroundColor="white";
    document.querySelector(".machinesbtn").style.color="rgb(37, 141, 89)";
}
function webdev(){
    document.querySelector(".automation").style.display="none";
    document.querySelector(".elecmachines").style.display="none";
    document.querySelector(".elecwiring").style.display="none";
    document.querySelector(".webdev").style.display="block";

    document.querySelector(".webbtn").style.backgroundColor="orange";
    document.querySelector(".webbtn").style.color="white";

    document.querySelector(".autobtn").style.backgroundColor="white";
    document.querySelector(".autobtn").style.color="rgb(37, 141, 89)";
    document.querySelector(".elecwiringbtn").style.backgroundColor="white";
    document.querySelector(".elecwiringbtn").style.color="rgb(37, 141, 89)";
    document.querySelector(".machinesbtn").style.backgroundColor="white";
    document.querySelector(".machinesbtn").style.color="rgb(37, 141, 89)";
    
}
//REQUEST PROJECT AFTER CLICKING SEND REQUEST
//on automation
function automationclick(){
    let NAME = document.querySelector("#nameauto").value;
    let EMAIL = document.querySelector("#emailauto").value;
    let PHONE = document.querySelector("#phoneauto").value;
    let PROJECTNAME = document.querySelector("#projectauto").value;
    let DESCRIPTION = document.querySelector("#descriptionauto").value;
    if(NAME!="" && EMAIL!="" && PHONE!="" && PROJECTNAME!="" && DESCRIPTION!=""){
        document.querySelector(".automation").innerHTML="Request sent. &#10004";
        document.querySelector(".automation").style.color="white";
    }
    else if(NAME=="" || EMAIL=="" || PHONE=="" || PROJECTNAME=="" || DESCRIPTION==""){
        document.querySelector(".autocomment1").innerHTML="*";
        document.querySelector(".autocomment2").innerHTML="*";
        document.querySelector(".autocomment3").innerHTML="*";
        document.querySelector(".autocomment4").innerHTML="*";
        document.querySelector(".autocomment5").innerHTML="*";
    }
}

//on electricalmachines
function elecmachinesclick(){
    let NAME = document.querySelector("#namemachines").value;
    let EMAIL = document.querySelector("#emailmachines").value;
    let PHONE = document.querySelector("#phonemachines").value;
    let PROJECTNAME = document.querySelector("#projectmachines").value;
    let DESCRIPTION = document.querySelector("#descriptionmachines").value;
    if(NAME!="" && EMAIL!="" && PHONE!="" && PROJECTNAME!="" && DESCRIPTION!=""){
        document.querySelector(".elecmachines").innerHTML="Request sent. &#10004";
        document.querySelector(".elecmachines").style.color="white";
    }
    else if(NAME=="" || EMAIL=="" || PHONE=="" || PROJECTNAME=="" || DESCRIPTION==""){
        document.querySelector(".machinescomment1").innerHTML="*";
        document.querySelector(".machinescomment2").innerHTML="*";
        document.querySelector(".machinescomment3").innerHTML="*";
        document.querySelector(".machinescomment4").innerHTML="*";
        document.querySelector(".machinescomment5").innerHTML="*";
    }
}

//on electricalmachines
function wiringclick(){
    let NAME = document.querySelector("#namewiring").value;
    let EMAIL = document.querySelector("#emailwiring").value;
    let PHONE = document.querySelector("#phonewiring").value;
    let PROJECTNAME = document.querySelector("#projectwiring").value;
    let DESCRIPTION = document.querySelector("#descriptionwiring").value;
    if(NAME!="" && EMAIL!="" && PHONE!="" && PROJECTNAME!="" && DESCRIPTION!=""){
        document.querySelector(".elecwiring").innerHTML="Request sent. &#10004";
        document.querySelector(".elecwiring").style.color="white";
    }
    else if(NAME=="" || EMAIL=="" || PHONE=="" || PROJECTNAME=="" || DESCRIPTION==""){
        document.querySelector(".wiringcomment1").innerHTML="*";
        document.querySelector(".wiringcomment2").innerHTML="*";
        document.querySelector(".wiringcomment3").innerHTML="*";
        document.querySelector(".wiringcomment4").innerHTML="*";
        document.querySelector(".wiringcomment5").innerHTML="*";
    }
}

//on electricalmachines
function webdevclick(){
    let NAME = document.querySelector("#namewebdev").value;
    let EMAIL = document.querySelector("#emailwebdev").value;
    let PHONE = document.querySelector("#phonewebdev").value;
    let PROJECTNAME = document.querySelector("#projectwebdev").value;
    let DESCRIPTION = document.querySelector("#descriptionwebdev").value;
    if(NAME!="" && EMAIL!="" && PHONE!="" && PROJECTNAME!="" && DESCRIPTION!=""){
        document.querySelector(".webdev").innerHTML="Request sent. &#10004";
        document.querySelector(".webdev").style.color="white";
    }
    else if(NAME=="" || EMAIL=="" || PHONE=="" || PROJECTNAME=="" || DESCRIPTION==""){
        document.querySelector(".webdevcomment1").innerHTML="*";
        document.querySelector(".webdevcomment2").innerHTML="*";
        document.querySelector(".webdevcomment3").innerHTML="*";
        document.querySelector(".webdevcomment4").innerHTML="*";
        document.querySelector(".webdevcomment5").innerHTML="*";
    }
}