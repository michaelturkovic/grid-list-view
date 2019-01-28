var clickedBtn = document.getElementsByClassName('book-dropdown');
var footerBg = document.getElementsByClassName('book-likes');
var numberOfItems = document.getElementsByClassName('dropdown-menu').length;

// CHANGE VIEW GRID/LIST
function changeView() {
    let element = document.getElementById('view-icon');
    
    if(element.innerHTML === 'view_list') {
        element.innerHTML = 'view_comfy';
        document.getElementById('view').classList.replace('grid-view', 'list-view');

        for(let i=0; i < numberOfItems; i++){
            document.getElementById(`${'dropdown'+[i+1]}`).classList.replace('grid-dropdown', 'list-dropdown');  
        }
    } 
    else {
        element.innerHTML = 'view_list';
        document.getElementById('view').classList.replace('list-view', 'grid-view');

        for(let i=0; i < numberOfItems; i++){
            document.getElementById(`${'dropdown'+[i+1]}`).classList.replace('list-dropdown', 'grid-dropdown');
        }
    }
}

// DROPDOWN MENU
function toggleMenu(value){
    let clickedID = event.target.id;
    let isOpen = document.getElementById(value).classList.contains('show-menu');

    document.getElementById(value).classList.toggle('show-menu');

    for(let i=0; i < numberOfItems; i++) { 
        if(clickedID === `${'btn'+[i+1]}` && !isOpen) { 
            if(document.getElementById(value).classList.contains('grid-dropdown')) { 
                clickedBtn[i].style.backgroundColor = '#404040';
                clickedBtn[i].style.color = '#ffffff';
                footerBg[i].style.backgroundColor = '#0098C0';
                footerBg[i].style.color = '#ffffff';
            } else {
                clickedBtn[i].style.backgroundColor = '#404040';
                clickedBtn[i].style.color = '#ffffff';
            }
        } else {
            document.getElementById(`${'dropdown'+[i+1]}`).classList.remove('show-menu');
            clickedBtn[i].style.backgroundColor = null;
            clickedBtn[i].style.color = null;
            footerBg[i].style.backgroundColor = null;
            footerBg[i].style.color = null;
        }
    }
}

window.onclick = function(event) {
  if (!event.target.matches('.menu-btn')) {
    let dropdowns = document.getElementsByClassName("dropdown-menu");

    for (let i=0; i < dropdowns.length; i++) {
      if (dropdowns[i].classList.contains('show-menu')) {
            dropdowns[i].classList.remove('show-menu');

            clickedBtn[i].style.backgroundColor = null;
            clickedBtn[i].style.color = null;
            footerBg[i].style.backgroundColor = null;
            footerBg[i].style.color = null;
      } 
    }
  }
}
