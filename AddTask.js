/*global $*/

$(document).ready(function() {
    $("#add-newtodo-button").click(function(){
        var description=$(this).find("addtask")
        var duedate=$(this).find("#duedate")
        var tiyum=$(this).find("#time")
        
$("tr").append("<td>"
    + description.val() + "</td>")
$("tr").append("<td>"
    + duedate.val() + "</td>")
$("tr").append("<td>"
    + tiyum.val() + "</td>")
    
    duedate.val("")
    description.val("")
    tiyum.val("")

    })
})