const initMenu = () => {
    const ulPrincipal = document.createElement('ul');
    document.querySelector("#menubar").append(ulPrincipal);
    
    menuEntries.forEach((element, index) => {
        console.log(element.name)
        console.log(index);
        const liPrincipal = document.createElement('li');
        liPrincipal.id = 'liPrincipal' + index;
        liPrincipal.texcontent = element.name;
        ulPrincipal.append(liPrincipal);
    });
}




export { initMenu };