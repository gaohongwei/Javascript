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

