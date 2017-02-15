jQuery 1.6 has the new function prop()

$(selector).click(function(){
    //instead of:
    this.getAttribute('style');
    //do i use:
    $(this).prop('style');
    //or:
    $(this).attr('style');
})

Use prop() over attr() in the majority of cases.

Read checkbox checked status
var id="admin_settings" 
var dom = $('#'+id)
dom.prop('checked')
dom.attr('checked')
dom.attr('checked', true)
dom.prop('checked', true)
dom.attr('checked', 'checked')


Using jQuery > 1.6
<input type="checkbox" value="1" name="checkMeOut" id="checkMeOut" checked="checked" />
// traditional attr
$('#checkMeOut').attr('checked'); // "checked"
// new property method
$('#checkMeOut').prop('checked'); // true
Using the new property method:

if($('#checkMeOut').prop('checked')) {
    // something when checked
} else {
    // something else when not
}
