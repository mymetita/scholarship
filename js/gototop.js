// Go to top
window.onscroll = function() {scrollFunction()};
      function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
              document.getElementById("myBtn").style.display = "block";}
        else {
              document.getElementById("myBtn").style.display = "none";}
      }

      // When the user clicks on the button, scroll to the top of the document
      function topFunction() {
          document.body.scrollTop = 0; // For Safari
          document.documentElement.scrollTop = 0;} // For Chrome, Firefox, IE and Opera

//Filter
function toggleAndChangeText() {
     $('#divToToggle').toggle();
     if ($('#divToToggle').css('display') == 'none') {
          $('#aTag').html('<i class="fa fa-angle-down" aria-hidden="true"></i> ทุนกู้ยืม');
     }
     else {
          $('#aTag').html('<i class="fa fa-angle-up" aria-hidden="true"></i>&nbsp;ทุนกู้ยืม');
     }
}