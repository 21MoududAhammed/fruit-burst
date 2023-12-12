function toggleBtn(e){
    const navLinks = document.getElementById('nav-links')
    console.log(navLinks)
    if(e.classList.contains('fa-bars')){
        e.classList.remove('fa-bars');
        e.classList.add('fa-xmark');
        navLinks.classList.remove('hidden');

    }
    else{
        e.classList.remove('fa-xmark');
        e.classList.add('fa-bars');
        navLinks.classList.add('hidden');
    }
}