let edit_popup = document.getElementsByClassName("edit-popup")[0];

function createRow() {
  const value = document
    .getElementsByClassName("form")[0]
    .getElementsByTagName("input")[0].value;

  const div = document.createElement("div");
  const divId = Math.random().toString();

  div.className = "row";

  div.id = divId;

  div.innerHTML = `
        
        <img class="check" src="./assets/circle-icon.png" alt="" onclick="check(${divId})">
        <img class="checked" src="./assets/right-icon.png" alt="" onclick="check(${divId})">

        <div class="task">${value}</div>
        
        <div class="button edit">
            <img src="./assets/edit-icon.png" alt="" onclick="displayUpdatePopup(${divId})" ">
        </div>
        <div class="button trash">
            <img src="./assets/trash-icon.png" alt="" onclick="deleteElement('rows', ${divId})">
        </div>
                
    `;

  document.getElementsByClassName("rows")[0].appendChild(div);
}

function check(id) {
  const row = document.getElementById(id);
  const check = row.getElementsByClassName("check")[0];
  const checked = row.getElementsByClassName("checked")[0];

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
  return (
    document.getElementById(id).getElementsByClassName("checked")[0].style
      .display === "block"
  );
}

function displayUpdatePopup(id) {
  if (selectedRow) return;
  selectedRow = id;
  const row = document.getElementById(id);
  row.style.backgroundColor = "#f28574";
  const value = row.getElementsByClassName("task")[0].textContent;
  const rowColor = isChecked(selectedRow) ? "#9783c9" : "#c3aaf0";
 
  displayPopup("form-placeholder", {
    title: "Update task",
    label: "New title",
    inputPlaceholder: `${value}`,
    btnText: "Edit",
    onClick: `editRow(${id})`,
  });
  const popup = document.getElementsByClassName("popup-container")[0];

  const closeBtn = popup.getElementsByClassName("close-btn")[0];

  const originalCloseBtnOnClick = closeBtn.onclick ? closeBtn.onclick : {};

  const closeFunction = () => {
    console.log("closeFunction");
    originalCloseBtnOnClick();
    row.style.backgroundColor = rowColor;
    selectedRow = "";
    return;
  };
  closeBtn.onclick = closeFunction;
}

function editRow(id) {
  const popup = document.getElementsByClassName("popup-container")[0];
  const input = popup.getElementsByTagName("input")[0];

  document.getElementById(id).getElementsByClassName("task")[0].textContent =
    input.value;
  const row = document.getElementById(id);

  row.style.backgroundColor = isChecked(selectedRow) ? "#9783c9" : "#c3aaf0";
  selectedRow = "";
}
