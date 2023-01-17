
function animateFrom(elem, direction) {
    direction = direction || 1;
    
    var x1 = 0,
        y1 = direction * 100;
    
    if(elem.classList.contains("gs_reveal_fromLeft")) {
      x1 = -100;
      y1 = 0;
    } else if (elem.classList.contains("gs_reveal_fromRight")) {
      x1 = 100;
      y1 = 0;
    }
    

    
    gsap.fromTo(elem, 
                {x: x1, y: y1, autoAlpha: 0}, 
       {
      duration: 3.25, 
      x: 0,
      y: 0, 
      autoAlpha: 1, 
      ease: "expo", 
      overwrite: "auto"
    });
  }
  
  function hide(elem) {
    gsap.set(elem, {autoAlpha: 0});
  }
  
  
  
  
  
  
  document.addEventListener("DOMContentLoaded", function() {
    gsap.registerPlugin(ScrollTrigger);
    
    gsap.utils.toArray(".gs_reveal").forEach(function(elem) {
      hide(elem); // assure that the element is hidden when scrolled into view
      
      ScrollTrigger.create({
        trigger: elem,
        markers: false,
        onEnter: function() { animateFrom(elem) }, 
        onEnterBack: function() { animateFrom(elem, -1) },
        onLeave: function() { hide(elem) } // assure that the element is hidden when scrolled into view
      });
    });
  });
