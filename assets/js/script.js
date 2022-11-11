$(document).ready(function(){
    $(".card-pod")
        .css("cursor", "pointer")
        .click(
          function(){
        window.open($(this).find("a").attr("href"), "_blank");
        return false;
          }
        )
        .hover(
          function(){
        $(this).css("background", "grey");
          },
          function(){
        $(this).css("background", "");
          }
        );
    });