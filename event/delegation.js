
dom.on( events [, selector ] [, data ], handler )
A selector string to filter the descendants of the selected elements that trigger the event. 

$('ul').on('click', 'li' ,start_process)

$('ul > li').on('click' ,start_process)
$('ul > li').click(start_process)
