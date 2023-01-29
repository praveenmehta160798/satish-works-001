let tabBox = document.getElementsByClassName("tab-box");

for(var i = 0; i < tabBox.length; i++){
    tabBox[i].style.display = "none";
}

tabBox[0].style.display = "block";

let tab = document.getElementsByClassName("tab");

for(var i = 0; i < tab.length; i++){
    tab[i].setAttribute("onclick", `showTab(${i})`);
}


function showTab(indexNumber){
    for(var i = 0; i < tabBox.length; i++){
        tabBox[i].style.display = "none";
    }
    tabBox[indexNumber].style.display = "block";
}