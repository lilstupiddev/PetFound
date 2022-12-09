
// let menu = document.querySelector('.#first-menu');
// document.querySelector('.#first-menu').classList.add("active");
//   function myFunction() {
//     alert("4242");
//     menu.classList.add("active")
//     menu.classList.toggle("active");
//   }



// document.getElementById('last-button-img').onclick = function() {
//     document.getElementsByClassName('first-menu').classList.add('active');
//   }



//     function myFunction() {
//     document.getElementByClassName('first-menu').classList.add('active');
    
//   }



    // $('#last-button-img').click(function() {
    //     if(this.classList.contains('active')){
    //         $('.first-menu').removeClass("active");
    //     } else{
    //         $('.first-menu').addClass("active");
         
    //     }
       
    // });

    $("#last-button-img").on("click", function() {
      
        $('.first-menu').toggle("active");
        // if(this.classList.contains('active')){
        //     $('.first-menu').removeClass("active");
        // } else{
        //     $('.first-menu').addClass("active");
         
        // }
      });
 
      $(function(){
        wow = new WOW(
          {
          boxClass:     'wow',      // default
          animateClass: 'animated', // default
          offset:       0,          // default
          mobile:       false,       // default
          live:         true        // default
          }
                          )
        new WOW().init(); 
      });

      // wow = new WOW(
      //   {
      //   boxClass:     'wow',      // default
      //   animateClass: 'animated', // default
      //   offset:       0,          // default
      //   mobile:       false,       // default
      //   live:         true        // default
      //   }
      //                   )
      //   wow.init();