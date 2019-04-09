var app = angular.module('app');
app.directive('tree', function($templateCache) {
  return {
    template:$templateCache.get('tree'),
    restrict: 'E',
    replace: true,
    scope: {items: '=items'}
  };
});
app.directive('treeNode', function($templateCache,$compile) {    
  var link_function=function(scope,elem,attributes){
    if (scope.item.kids!=null && scope.item.kids.length > 0) {
        var children = $compile('<tree ng-if="!item.hideKids" items="item.kids"></tree>')(scope);
        elem.append(children);
    }
    /* move bind into
    elem.bind('dblclick',function(){ //'click'
      //elem.find('ul').toggleClass('hidden');
      Common.console_log('dblclick');
    }); 
    elem.bind('mouseenter',function(){ //'mouseleave'
      //scope.item.showAction=true;scope.$apply();//Refresh 
      scope.$apply(function(){
        $scope.item.showAction = true;
      })   
      //elem.find('span').first().removeClass('hidden');  
    });
    */  
  };
  var compile_function=function(telem,attrs){
    return link_function;
  };     
  return { 
    restrict: 'E',
    scope:{item:"=item"}, 
    //controller:'menusController', 
    template:$templateCache.get('node'),
    compile: compile_function
  };
});
app.controller('menusController', ['$scope','Menus','Menu','Common',
  function($scope,Menus,Menu,Common){
  $scope.initialize = function( ) {  
    $scope.refresh();
    $scope.cache={};
  }          
  $scope.refresh=function(){
    $scope.refresh_menus();
    $scope.hash=null; 
  }  
  $scope.refresh_menus=function(){
    Menus.query()
    .$promise.then(function(data){
      $scope.items=data;
      Common.console_log("Refreshed menus:",$scope.items);               
    }); 
    Common.console_log("Refreshing menus.");       
  }

  $scope.toggle_kids=function(item){
    if (item.hideKids === null) item.hideKids=false;
    //item.hideKids= (item.hideKids === true ? true: false);
    item.hideKids = !item.hideKids;
    if (item.kids) {
      item.expand= item.hideKids? '(+)':'(-)';
    } else {
      item.expand= '';      
    }
  }    
  $scope.new_item = function(item) {
    citem={pitem:item,type_id:$scope.default_type_id,show_form_task:true};
    item.kids = item.kids||[];
    item.kids.unshift(citem);    
    Common.console_log('new item:',citem);    
    Common.console_log('new item sibling:',item.kids);                                  
  };  
  $scope.edit_item = function(item) {
    item.show_form_task=true;          
    Common.console_log("edit_task");       
    Common.console_log($scope.item);              
  }; 
  $scope.hide_form = function(item) {
    if (item.pitem )
    {
      var pitem= item.pitem;             
      item.show_form_task=false; 
      Common.console_log("have parent"); 
      pitem.kids.shift(); 
      Common.console_log("parent kids"); 
      Common.console_log(pitem.kids);                                 
    } else {
      item.show_form_task=false; 
      Common.console_log("no parent");   
    }
  }
  $scope.expand_all = function(item) {
    if($scope.expanded === null ) $scope.expanded=true;
    $scope.expanded =!$scope.expanded;
    var index,item;
    for(index in $scope.items){
      item=$scope.items[index];
      if(item.kids)item.hideKids=$scope.expanded;
    }
  }
  $scope.create_item = function(item,pid) { 
    var item_data={name:item.name, url:item.url}; 
    //tname:item.tname,pid:pid,       
    Menus.create({pid:pid,menu:item_data})
    .$promise.then(function(data){ // Call succeeded
      if (data.error){
        Common.console_log(data.msg);  
        $().toastmessage('showErrorToast',data.msg);
        item.show_form_task=false;  
        pitem.kids.shift();
      } else {
        item.id=data.id;
        item.show_form_task=false;           
        Common.console_log("Creating item succeeded."); 
        Common.console_log(data);
        Common.console_log(item);              
      }              
    },function(error) { // Failed to call
      Common.console_log("Creating item failed."); 
      Common.console_log(error);          
    });
  }
  $scope.save_item = function(item) {
    // item can be item for new_task       
    if (item.name == null || item.name =='')return;    
    // Remove extra data
    var pid=null;
    if (item.pitem) pid=item.pitem.id;
    Common.console_log('Before save_task',item,pid);         
    //if (pid) delete item['pitem'];
    //if (item['kids'])delete item['kids']; 
    var item_data={
      name:item.name,//tname:item.tname,pid:pid,
      url:item.url};

    if (item.id){ //edit item
      Menu.update({id:item.id,menu:item_data})
      .$promise.then(function(data){
        Common.console_log("Run save_task/edit succeeded."); 
        item.show_form_task=false;            
      }); 
    } else { // new item
      $scope.create_item(item,pid);
    }
  };

  $scope.show_item = function(item) {
    path="/admin/menus/"+item.id;
    window.location=path;
  }  
  $scope.copy_item = function(item) {
    $scope.cache={item:item,copy:true}; 
    item.showAction=false; 
  } 
  $scope.move_item = function(item) {
    Common.console_log('Move:',item);
    $scope.cache={item:item,copy:false};
    item.showAction=false;      
  }  
  $scope.paste_item = function(pitem) {    
    if (!$scope.cache.item) return; 
    var citem=$scope.cache.item;        
    Common.console_log("pasted_item",$scope.cache.item);       
    if ($scope.cache.copy){ // copy by creating new
      var item={url:citem.url,name:citem.name,tname:citem.tname,};
      Common.console_log("copied_item",item);        
      pitem.kids = pitem.kids||[];
      pitem.kids.unshift(item);        
      $scope.create_item(item,pid);
      pitem.show_form_task=false;       
    } else { // move=update parent
      var item_data={pid:pitem.id};
      var item=$scope.cache.item;
      var id=item.id;
      Menu.update({id:id,menu:item_data})
      .$promise.then(function(data){
        Common.console_log("Item Moved."); 
        pitem.show_form_task=false; 
        //pitem.kids.unshift(citem); 
        // How to remove from previous
        $scope.refresh();
      });
      $scope.cache.item={};
    }
  }                             
}]);
