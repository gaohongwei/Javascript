/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var Event={
    addHandler:function(element,action,handler)
    {
        if(element.addEventListener){
            element.addEventListener(action, handler,false);
        }
        else if(element.attachEvent){
            element.attachEvent(action, handler,false);            
        }
        else {
            element['on'+action]=handler;
        }        
    },
    removeHandler:function(element,action,handler)
    {
        if(element.removeEventListener){
            element.removeEventListener(action, handler,false);
        }
        else if(element.attachEvent){
            element.detachEvent(action, handler,false);            
        }
        else {
            element['on'+action]=null;
        }        
    },
    getEvent:function(event){
        return event||window.event;
    },   
    getId:function(event){
        event=this.getEvent(event);
        return event.target.id;
    },
    getType:function(event){
        event=this.getEvent(event);        
        return event.type;
    }    
};
function f()
{
    var id=Event.getId(event);
    var type=Event.getType(event);    
    console.log(type +' on '+id);
    
}
Event.addHandler(document,'click',f);
