/**
 * add class active
 * https://stackoverflow.com/questions/72880348/adding-active-class-based-on-current-url
 */
 const current = window.location.href; // http://agenda.local/steuerung.html
 const pathname = window.location.pathname; // /steuerung.html
 const url = pathname.split('/').pop(); // steuerung.html
 const steuerung = 'steuerung.html';
 const team = 'team.html';

 document.querySelectorAll(".navbar-nav a.nav-link").forEach(function(elem){ 
     if(elem.href.includes(current)){
       elem.classList.add("active");
     }
 });
 // add active to gruppen.html if 'steuerung.html' oder 'team.html' 
 document.querySelectorAll(".group").forEach(function(elem){
    if(url == steuerung || url == team) {
      elem.classList.add('active');
    }
 });
