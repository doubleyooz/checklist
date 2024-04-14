window.selectedRow = '';

window.deleteElement = (parentClass, childId) => {
    if(selectedRow === childId) return;
    const child = document.getElementById(childId)
    if(child) document.getElementsByClassName(parentClass)[0].removeChild(child);
    
}