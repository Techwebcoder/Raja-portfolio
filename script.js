//toggle iccon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
console.log(menuIcon);

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}




//scroll section
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header bav a');


window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            // active navbar link
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nava a[href*=' + + ']').classList.add('active');
            });

            // active sections for animation on scroll
            sec.classList.add('show-animate');
        }
        // if want to use animation that repeats on scroll use this
        else{
            sec.classList.remove('show-animate');
        }
    });

    //sticky header
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    // remove toggle icon and navbar when click navbar links (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    // animation fotter on scroll 
    let footer = document.querySelector('footer');

    footer.classList.toggle('show-animate', this.innerHeight + this.screenY >= document.scrollingElement.scrollHeight);
}
const handleSubmit = (event) => {
    event.preventDefault();
    alert("Thanks for sending me a message successfully!");
    event.target.reset();
};
function hireme() {
    alert("Thanks for giving me a oppertunity!")
}
function letstalk() {
    prompt("Contact Me by using my instagram");
    alert("Thanks for giving me the time to talk!");
}