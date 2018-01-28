    function add_filter(self){
      var dom_id = self.prop('id');
      var dom_type = self.prop('id');
      var checked = self.prop('checked');
      var filter_id = dom_type + '_' + dom_id;
      if ( checked ) {
        var filter_area = $('#filters-selected .pull-left');
        var filter_label = self.parent().next().text();
        var filter = $("<div>", {id: filter_id, class: "filter-tag", text: filter_label });
        var remove = $("<img>", {src: "assets/x-circle.png", alt: "X circle"});
        filter.append(remove);

        filter.click(function(){
          self.prop('checked', false);
          $('#'+filter_id).remove();
          $('#search_form').submit();
        });
        filter_area.append(filter);
      } else {
        $('#'+filter_id).remove();
      }
    }
