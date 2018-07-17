var $form = $('form#test-form'),
  url = 'https://script.google.com/macros/s/AKfycbxxwv-pmJnY41mdrgAkORjvjrV7CGvAifDi1T6LQY_ahF46f3Bl/exec'

  $('#submit-form').on('click', function(e) {
// //  e.preventDefault();
//   var jqxhr = $.ajax({
//     url: url,
    // method: "GET",
//     dataType: "json",
//     data: $form.serializeObject()
//   }).success(
//     // do something
//   );
// })
// $('#submit-form').on('click', function (e) {
  alert("called");
     e.preventDefault();
     var jqxhr = $.ajax({
         url: url,
         method: "GET",
         data: $form.serialize()
         }).then(function (e) {
              alert("Success!");
           });
     });
