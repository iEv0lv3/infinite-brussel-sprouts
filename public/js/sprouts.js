// The on-click version
//
// $("#more-sprouts").click(function () {
//   $.get("/tweets.json?page=" + pageNumber, function(page) {
//     page.forEach(function (tweet){
//       $(".tweets").append("<li class=tweet> <div class=body>" +
//       tweet["text"] + "</div> <div class=user>" + tweet["username"]
//        + "</div> </li>");
//     });
//     pageNumber++;
//   });
// });

// The infinite scroll version

var pageNumber = 2;
$(window).scroll(function () {
   if ($(window).scrollTop() >= $(document).height() - $(window).height() - .5) {
     $.get("/tweets.json?page=" + pageNumber, function(page) {
       page.forEach(function (tweet){
         $(".tweets").append("<li class=tweet> <div class=body>" +
         tweet["text"] + "</div> <div class=user>" + tweet["username"]
          + "</div> </li>");
       });
       pageNumber++;
     });
   };
});
