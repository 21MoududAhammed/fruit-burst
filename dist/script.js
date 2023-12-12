function toggleBtn(e){
    const navLinks = document.getElementById('nav-links');
    const searchBox = document.getElementById('search-box');
    console.log(searchBox)
    console.log(navLinks)
    if(e.classList.contains('fa-bars')){
        e.classList.remove('fa-bars');
        e.classList.add('fa-xmark');
        navLinks.classList.remove('hidden');
        searchBox.classList.remove('hidden');

    }
    else{
        e.classList.remove('fa-xmark');
        e.classList.add('fa-bars');
        navLinks.classList.add('hidden');
        searchBox.classList.add('hidden');
    }
}