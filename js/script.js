/*
    HRvoid scriptsheet
*/ 
try
{
    let main = document.getElementById('main');
    let menu = document.getElementById('aside');
    let aside = document.querySelectorAll('#aside > a')
    
    var isActive = true; // default active
    
    /*
        menu open function : isActive enable
    */
    
    function menu_open(){
        menu.style.display = "block";
        main.style.gridTemplateColumns = "3fr 1fr";
        isActive = true;
    }
    /*
        menu close function : isActive disable
    */
    function menu_close(){
        menu.style.display = "none";
        main.style.gridTemplateColumns = "1fr";
        isActive = false;
    }
    
    /*
        menu button function : open & close
    */
    
    document.getElementById('menu_button').onclick = () => (isActive)? menu_close() : menu_open();
    
    /*
        menu anchor function : active
    */
    aside[0].classList.add('asideActive') // default
    
    aside.forEach(i => {
    
        i.onclick = () => {
        
            aside.forEach(o => o.classList.remove('asideActive'))

            i.classList.add('asideActive')  // active
        }    
    })

    /*
        menu anchor click function : close
        
        aside.forEach(a => a.onclick = function()
        {
            this.parentElement.classList.add('asideDisable')
            isActive = false;
        })
    */ 
}
catch(e)
{
    console.log(e);
}
// the end
