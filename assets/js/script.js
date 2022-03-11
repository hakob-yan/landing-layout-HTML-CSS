function up(event) {
    let scroll = window.pageYOffset
    console.log(scroll);
    window.scrollTo({ top: 0, behavior: "smooth" });

}
function head() {
    let top = window.pageYOffset;
    if (top) {
        di.style.height = "70px";
        di.style.borderBottom = "none";
        headn.style.backgroundColor = "#363b44";

    } else { di.style.height = "120px"; headn.style.backgroundColor = "rgba(46, 4, 4, 0)" }

}

function change(event) {


}
mobile.classList.toggle("mobile");
row.addEventListener('click', up);
mobile_button.addEventListener('click', (event) => {
    ev = event.target;
    let open = "https://img.icons8.com/color/48/000000/menu--v3.png";
    let close = "https://img.icons8.com/ios/50/000000/delete-sign--v3.png";
    if (ev.getAttribute('src') == open) {
        ev.setAttribute('src', close);
        mobile.classList.toggle("mobile");
    }
    else { ev.setAttribute('src', open); 
    mobile.classList.toggle("mobile"); }
});

window.addEventListener('scroll', head)