function SelectArea(selectList){
    if (selectList.value == "area1") {
        document.getElementById("sectionOne").style.visibility = "visible";
        document.getElementById("sectionOne").style.display = "block";
        document.getElementById("sectionTwo").style.visibility = "hidden";
        document.getElementById("sectionTwo").style.display = "none";
    }//end if
    else if (selectList.value == "area2"){
        document.getElementById("sectionOne").style.visibility = "hidden";
        document.getElementById("sectionOne").style.display = "none";
        document.getElementById("sectionTwo").style.visibility = "visible";
        document.getElementById("sectionTwo").style.display = "block";
    }//end if else
    else {
        document.getElementById("sectionOne").style.visibility = "hidden";
        document.getElementById("sectionOne").style.display = "none";
        document.getElementById("sectionTwo").style.visibility = "hidden";
        document.getElementById("sectionTwo").style.display = "none";
    }//end else
    
}//end SelectArea
