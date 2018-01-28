  <table class="table table-striped table-bordered table-condensed">
  <thead><tr>
    <th><%= tt('task')%></th>
  </tr></thead>
    <tr ng-repeat="item in items" ng-mouseenter="mouse_enter(item)" ng-mouseleave="mouse_leave(item)">
      <td>{{item.name}}
        <a class="btn btn-primary" ng-show="item.showDelete" ng-click="vote(item)"><%=tt('vote')%></a>     
        <a class="btn btn-primary" ng-show="item.showDelete" ng-click="add(item)"><%=tts('new child')%></a>
        <a class="btn btn-danger"  ng-show="item.showDelete" ng-click="exclude(item)"><%=tt('exclude')%></a>
        <a class="btn btn-danger"  ng-show="item.showDelete" ng-click="delete(item)"><%=tt('delete')%></a>
      </td> 
    </tr>
  </table>
