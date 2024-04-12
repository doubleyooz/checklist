function displayPopup(parentIdentifier, {title, label, inputPlaceholder, btnText, onClick}) {
    const parentElement = document.getElementsByClassName(parentIdentifier)[0];
   
  
    const divId = Math.random().toString()

    const form = `
    <div class='popup-container'>
        <div class='header'>   
            <span class='title'>${title}</span>   
            <img src="https://image.freepik.com/free-icon/delete-button_318-85849.jpg" class="close-btn" alt=""  onClick="deleteElement('${parentIdentifier}', '${divId}')">
        </div>

        <div class='form'>
            <span class='label'> ${label}: </span>
            <input type='text' placeholder="${inputPlaceholder}" name='task' required>
        </div>
        <button type='submit' class='btn' onClick="${onClick}(); deleteElement('${parentIdentifier}', '${divId}') ">${btnText}</button>
    </div>`

    const div = document.createElement('div');
   
    div.id = divId.toString();
    div.innerHTML = form;

    parentElement.appendChild(div);

}