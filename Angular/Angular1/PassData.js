
//  From Rails to Angular
  app.factory('tasksInitializer', function(){
    return <%= @obj.to_json.html_safe %>;
  });
