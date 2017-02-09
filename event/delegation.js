Events bubble
The majority of browser events propagate from the deepest, 
innermost element (the event target) to the body and the document element. 

dom.on( events [, selector ] [, data ], handler )
A selector string to filter the descendants of the selected elements that trigger the event. 
If selector is omitted or is null, the event handler is referred to as direct or directly-bound. 

$('ul').on('click', 'li' ,start_process)

$('ul > li').on('click' ,start_process)
$('ul > li').click(start_process)
