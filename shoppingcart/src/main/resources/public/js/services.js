angular.module('app.services', []).factory('Item', function($resource) {
  return $resource('/api/v1/items/:id', { id: '@id' }, {
    update: {
      method: 'PUT'
    }
  });
}).service('popupService',function($window){
    this.showPopup=function(message){
        return $window.confirm(message);
    }
});
