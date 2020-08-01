function check(){
    var check = document.getElementsByClassName('check')[0];
    var checked = document.getElementsByClassName('checked')[0]
    
    if(check.style.display === "none"){
        check.style.display = "block"
        checked.style.display = "none";
    }
    else{
        check.style.display = "none"
        checked.style.display = "block";
    }
    
   
}