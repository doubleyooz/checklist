function check(id){
    
    var row = document.getElementById(id);
    var check = row.getElementsByClassName('check')[0];
    var checked = row.getElementsByClassName('checked')[0];
    
    
    if(check.style.display === "none"){
        check.style.display = "block"
        checked.style.display = "none";
        row.style.backgroundColor = "#c3aaf0"
    }
    else{
        check.style.display = "none"
        checked.style.display = "block";
        row.style.backgroundColor = "#9783c9"
    }   
   
}

function createRow(){
    const div = document.createElement('div');
    var div_id = Math.random().toString()

    div.className = 'row';

    
    div.id = div_id.toString();
  
    div.innerHTML = `
        
        <img class="check" src="./assets/circle-icon.png" alt="" onclick="check(${div_id.toString()})">
        <img class="checked" src="./assets/right-icon.png" alt="" onclick="check(${div_id.toString()})">

        <div class="task">Fazer um programa hoje</div>
        
        <div class="button edit">
            <img src="./assets/edit-icon.png" alt="">
        </div>
        <div class="button trash">
            <img src="./assets/trash-icon.png" alt="">
        </div>
            

        
    `;
  
    document.getElementsByClassName('rows')[0].appendChild(div);
}
