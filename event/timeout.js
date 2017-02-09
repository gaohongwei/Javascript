var hTimeout;
function start_process(event){
    //console.log(event);
    console.log('hTimeout:', hTimeout);
    console.log($('#try').prop('value'));
}
function wait_process(){
    if( hTimeout !== undefined ){
        clearTimeout(hTimeout);
        console.log('clearTimeout:', hTimeout);
    }
    hTimeout = setTimeout(start_process,500);

}
$('#try').keyup(wait_process)
