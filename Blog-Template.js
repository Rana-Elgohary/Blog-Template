function openMenu(){
    let openMenu = document.getElementById("openMenu")
    let header = document.querySelector("header")

    if(openMenu.style.display == "flex"){
        openMenu.style.display = "none" 
    }
    else {
        openMenu.style.display = "flex";
        openMenu.style.transition = "ease-in-out all 2s";
    }
    
    header.style.borderBottom == "none" ?
    header.style.borderBottom = "1px solid rgba(180, 180, 180, 0.458)" :
    header.style.borderBottom = "none"
}
function openMenu_categories(){
    let openMenu_categories = document.getElementById("openMenu-categories")
    let open_cat = document.getElementById("open-cat")

    openMenu_categories.style.display == "flex" ?
    openMenu_categories.style.display = "none" :
    openMenu_categories.style.display = "flex"

    open_cat.style.color == "black" ?
    open_cat.style.color = "rgb(118, 116, 116)" :
    open_cat.style.color = "black"
    
    open_cat.style.fontWeight == "bold" ?
    open_cat.style.fontWeight = "normal" :
    open_cat.style.fontWeight = "bold"
}