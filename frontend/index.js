function createRow(){
    
    var value = document.getElementsByClassName('task-title')[0]
    .getElementsByTagName('input')[0].value;
   
    const div = document.createElement('div');
    var div_id = Math.random().toString()

    div.className = 'row';

    
    div.id = div_id.toString();
    //var data = {text: value, id: div_id};

    var data = [value.toString(), div_id]

    data = JSON.stringify(data)
  
    div.innerHTML = `
        
        <img class="check" src="./assets/circle-icon.png" alt="" onclick="check(${div_id.toString()})">
        <img class="checked" src="./assets/right-icon.png" alt="" onclick="check(${div_id.toString()})">

        <div class="task">${value}</div>
        
        <div class="button edit">
            <img src="./assets/edit-icon.png" alt="" onclick="DisplayPopup('edit-popup', ${div_id.toString()})">
        </div>
        <div class="button trash">
            <img src="./assets/trash-icon.png" alt="" onclick="DeleteRow(${div_id.toString()})">
        </div>
            

        
    `;
  
    document.getElementsByClassName('rows')[0].appendChild(div);
}


function UpdateRow(id, text){
    document.getElementById(id).getElementsByClassName('task')[0].textContent = text;
    let print = document.getElementById(id).getElementsByClassName('task')[0].textContent;
    console.log(print, ' ', id )
    

}

function DeleteRow(id){
    var row = document.getElementById(id)

    document.getElementsByClassName('rows')[0].removeChild(row);
      

}

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



function CancelPopup(str){
    document.getElementsByClassName(str)[0].style.display = "none";
    
}

function EditPopup(id){    
    let popup = document.getElementsByClassName('edit-popup')[0]

    let input = popup.getElementsByTagName('input')[0];

    let row = document.getElementById(id);    
    let row_color = row.style.backgroundColor;
    
    
    document.getElementsByClassName('form-popup')[0].style.display = "none";
    popup.style.display = "flex";

    row.style.backgroundColor = '#f28574'

    
    input.value = row.getElementsByClassName('task')[0].textContent;

    popup.getElementsByClassName('btn')[0].onclick = function (){ UpdateRow(id, input.value) };
    
    popup.getElementsByTagName('img')[0].onclick = function () {
        CancelPopup('edit-popup')
    }

    input.addEventListener('keyup', function(e){
        let key = e.which || e.keyCode;
        if (key == 13){            
            UpdateRow(id, input.value)
            row.style.backgroundColor = row_color;
            
        } 
    })


   
}



function DisplayPopup(str, id){    
    if(str === 'form-popup'){
        document.getElementsByClassName('form-popup')[0].style.display = "flex";
        document.getElementsByClassName('edit-popup')[0].style.display = "none";
    } else if(str === 'edit-popup'){       
        if(id !== null){
           
            EditPopup(id);           
          
          
        }
       

    

    } else {
        
    }
    
}