function check(id){
    
    var row = document.getElementById(id);
    var check = row.getElementsByClassName('check')[0];
    var checked = row.getElementsByClassName('checked')[0];
    
    
    if(check.style.display === "none"){
        check.style.display = "block"
        checked.style.display = "none";
        row.style.backgroundColor = "#c3aaf0"
        row.style.transition = "background-color 0.4s"
    }
    else{
        check.style.display = "none"
        checked.style.display = "block";
        row.style.backgroundColor = "#9783c9"
        row.style.transition = "background-color 0.4s"
    }   
   
}

function createRow(){
    
    var value = document.getElementsByClassName('task-title')[0]
    .getElementsByTagName('input')[0].value;
   
    const div = document.createElement('div');
    var div_id = Math.random().toString()

    div.className = 'row';

    
    div.id = div_id.toString();
  
    div.innerHTML = `
        
        <img class="check" src="./assets/circle-icon.png" alt="" onclick="check(${div_id.toString()})">
        <img class="checked" src="./assets/right-icon.png" alt="" onclick="check(${div_id.toString()})">

        <div class="task">${value}</div>
        
        <div class="button edit">
            <img src="./assets/edit-icon.png" alt="">
        </div>
        <div class="button trash">
            <img src="./assets/trash-icon.png" alt="" onclick="RemoveRow(${div_id.toString()})">
        </div>
            

        
    `;
  
    document.getElementsByClassName('rows')[0].appendChild(div);
}

function RemoveRow(id){
    var row = document.getElementById(id)

    document.getElementsByClassName('rows')[0].removeChild(row);
      

}

function CancelPopup(){
    document.getElementsByClassName('form-popup')[0].style.display = "none";
}

function DisplayPopup(){
    document.getElementsByClassName('form-popup')[0].style.display = "flex";
    console.log("Abriu o popup")
}