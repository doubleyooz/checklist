let edit_popup = document.getElementsByClassName("edit-popup")[0];

var selectedRow = "";

function createRow() {
  const value = document
    .getElementsByClassName("form")[0]
    .getElementsByTagName("input")[0].value;

  const div = document.createElement("div");
  const divId = Math.random().toString();

  div.className = "row";

  div.id = divId;
  //var data = {text: value, id: divId};

  var data = [value.toString(), divId];

  data = JSON.stringify(data);

  div.innerHTML = `
        
        <img class="check" src="./assets/circle-icon.png" alt="" onclick="check(${divId})">
        <img class="checked" src="./assets/right-icon.png" alt="" onclick="check(${divId})">

        <div class="task">${value}</div>
        
        <div class="button edit">
            <img src="./assets/edit-icon.png" alt="" onclick="editRow(${divId})" ">
        </div>
        <div class="button trash">
            <img src="./assets/trash-icon.png" alt="" onclick="deleteElement('rows', ${divId})">
        </div>
                
    `;

  document.getElementsByClassName("rows")[0].appendChild(div);
}

function updateRow(id, text) {
  document.getElementById(id).getElementsByClassName("task")[0].textContent =
    text;
  //let print = document.getElementById(id).getElementsByClassName('task')[0].textContent;
  console.log(id);
}

function check(id) {
  var row = document.getElementById(id);
  var check = row.getElementsByClassName("check")[0];
  var checked = row.getElementsByClassName("checked")[0];
  console.log({ id, selectedRow });
  if (id === selectedRow) return;
  if (check.style.display === "none") {
    check.style.display = "block";
    checked.style.display = "none";
    if (selectedRow !== id) {
      row.style.backgroundColor = "#c3aaf0";
      row.style.transition = "background-color 0.4s";
    }
  } else {
    check.style.display = "none";
    checked.style.display = "block";

    if (selectedRow !== id) {
      row.style.backgroundColor = "#9783c9";
      row.style.transition = "background-color 0.4s";
    }
  }
}

function isChecked(id) {
  if (
    document.getElementById(id).getElementsByClassName("checked")[0].style
      .display === "block"
  ) {
    return true;
  } else {
    return false;
  }
}

function cancelPopup(str) {
  document.getElementsByClassName(str)[0].style.display = "none";
}

function editRow(id) {
  if (selectedRow) return;
  selectedRow = id;
  let row;
  row = document.getElementById(id);
  row.style.backgroundColor = "#f28574";

  //displayPopup('form-placeholder', {   title: 'Update task', label: 'New title', inputPlaceholder: '${value}', btnText: 'Edit', onClick: 'updateRow(${divId})'})
  const popup = document.getElementsByClassName("popup-container")[0];
  const value = popup
    .getElementsByTagName("input")[0].value;

  updateRow(id, value);

  if (isChecked(id)) {
    row.style.backgroundColor = "#9783c9";
    row.style.transition = "background-color 0.4s";
  } else {
    row.style.backgroundColor = "#c3aaf0";
    row.style.transition = "background-color 0.4s";
  }

  let finish = () => {
    selectedRow = "";
    cancelPopup("edit-popup");
  };

  if (selectedRow === "") {
    selectedRow = id;

    input.value = row.getElementsByClassName("task")[0].textContent;

    form.getElementsByClassName("btn")[0].onclick = function () {
      finish();
    };

    //'x' button
    form.getElementsByTagName("img")[0].onclick = function () {
      finish();
    };

    /*input.addEventListener('keyup', function(e){
            let key = e.which || e.keyCode;
            if (key == 13){            
                updateRow(id, input.value)
                row.style.backgroundColor = row_color;
                
            } 
        })*/
  } else {
    console.log({ selectedRow: selectedRow, id: id });
    row = document.getElementById(selectedRow);

    //create_popup.style.display = "none";
    //edit_popup.style.display = "flex";
    if (isChecked(selectedRow)) {
      row.style.backgroundColor = "#9783c9";
    } else {
      row.style.backgroundColor = "#c3aaf0";
    }
    selectedRow = id;
    row = document.getElementById(id);
    row.style.backgroundColor = "#f28574";

    input.value = row.getElementsByClassName("task")[0].textContent;

    popup.getElementsByClassName("btn")[0].onclick = function () {
      finish();
    };

    popup.getElementsByTagName("img")[0].onclick = function () {
      finish();
    };
  }
}
