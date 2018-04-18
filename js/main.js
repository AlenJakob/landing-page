
var menu = document.querySelectorAll("#nav-links a");
var btn = document.getElementById("toggle");
var navbar = document.getElementById("navbar")
btn.onclick = function() {

navbar.classList.toggle("menu-goes-up")

    if(navbar.classList.contains("menu-goes-up")){
    btn.classList.add("tgl-btn")

    }else{
        btn.classList.remove("tgl-btn")
    }

}






for(var i=0; i<menu.length;i++){
    menu[i].addEventListener("mouseover",function(){

        this.classList.add("orange")

    })
    menu[i].addEventListener("mouseout",function(){
        this.classList.remove("orange")

    });
}


$(window).scroll(function() {
    var height = $(window).scrollTop();
    var nav = document.querySelector("#navbar");
    if(height  > 130) {

        nav.classList.add("change")
    }else{
        nav.classList.remove("change")
    }
});

