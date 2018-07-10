/*global $*/


$(document).ready(function(){
    $("td").on("click","input[type=checkbox]",
    function(){
        $(this).closest("td").toggleClass("donetodo")
    })
})