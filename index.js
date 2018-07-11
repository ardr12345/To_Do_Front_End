/*global $*/


$(document).ready(function(){
    $("tr").on("click","input[type=checkbox]",
    function(){
        $(this).closest("td").toggleClass("donetodo")
    })
})


