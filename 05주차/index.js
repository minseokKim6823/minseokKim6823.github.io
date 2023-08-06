document.addEventListener('DOMContentLoaded',function(){
    var links = document.querySelectorAll(".navbar a, footer a[href='#myPage']");
    links.forEach(function(link){
        link.addEventListener('click',function(event){
            var closestUL = this.closest('ul');
            var activeItems =closestUL.querySelectorAll('.active');
            activeItmes.forEach(function(item){
                item.classList.remove('active')
            });
            if(this.hash !==""){
                event.preventDefault();
                var targetElement =document.querySelector(hash);
                var targetOffsetTop =targetElement.offsetTop;

                smoothScrollTo(targetOffsetTop, 900);
                window.location.hash =hash;
            }
        })
    });