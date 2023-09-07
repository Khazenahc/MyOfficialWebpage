const darkMode = $(".go-dark")
const button = $("button")

button.on("click", function(){
  darkMode.toggleClass("dark-mode")
})
  

/*general styling*/

  $('.margin').css({
     'margin-bottom': '45px'
   });

  $('body').css({
     'font': 'Garamond, serif',
     'line-height': '1.8',
     'color': 'f5f6f7',
     'padding':'25px',
     'background-color': 'white',
     'color': 'dark-grey'
    }); 

 
  $('*').css({
    'box-sizing': 'border-box'
    });
  
  $('.Myavatar').css({
      'display': 'flex',
      'align-items': 'center'
    });

/*containers & page sections*/  

  $('.bg-1, .bg-4').css({
     'background-color': 'hsla(0, 100%, 30%, 0.3)', 
     'color': '111111',
     'position': 'relative'
   });

  $('.bg-2').css({
     'background-color': '#d3d3d3', 
     'color': '555555'
   });

  $('.bg-3').css({
     'background-color': '#fofffo', 
     'color': '000000'
   });

  $('.container-fluid').css({
     'padding-top': '70px', 
     'padding-bottom': '70px'
   });

/*all paragraph styling*/

  $('p').css({
     'font-size': '20px'
    });

  $('.p-1, .p-2, .p-3').css({
      'padding': '10px',
      'font-weight': 'bold'
    });

  $('.p-1, .p-3').css({
       'border':'5px #d3d3d3',
       'border-style':'outset'
   }); 

  $('.p-4').css({
      'display': 'flex',
      'font-weight': 'bold'
  });

/*Images in section three*/

  $('.img-thumbnail, .img-thumbnail2, .img-thumbnail3').css({
     'float': 'left'
   });

  $('.img-thumbnail, .img-thumbnail2').css({
     'display': 'flex'
   });

  $('.img-thumbnail2, .img-thumbnail3').css({
     'padding': '20px'
   });

  $('.img-thumbnail').css({
     'transform': 'rotate(-10deg)'
   });

   $('.img-thumbnail3').css({
     'transform': 'rotate(5deg)'
   });
  

  
