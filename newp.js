const navBarLinks = document.getElementsByClassName('navbar-links')[0]
var togglebtn = document.getElementsByClassName('toggle-buttons')[0]

togglebtn.addEventListener('click', () =>{
    navBarLinks.classList.toggle('active')
    togglebtn.classList.toggle( 'open')
    togglebtn.classList.toggle('hidden')
})


var acc = document.getElementsByClassName('accordion');
var i;
for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener('click', function() {
        this.classList.toggle('active');
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;

        } else {
            panel.style.maxHeight = panel.scrollHeight + 'px';

        }
    });
}