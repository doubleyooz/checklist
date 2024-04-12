window.deleteElement = (parentClass, childId) => {
    const child = document.getElementById(childId)
    if(child) document.getElementsByClassName(parentClass)[0].removeChild(child);
    
}