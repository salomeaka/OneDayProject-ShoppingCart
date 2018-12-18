angular.module('app.controllers', []).controller('ItemListController', function($scope, $state, popupService, $window, Item) {
  $scope.items = Item.query(); //fetch all items. Issues a GET to /api/vi/items

  /*$scope.deleteShipwreck = function(shipwreck) { // Delete a Shipwreck. Issues a DELETE to /api/v1/shipwrecks/:id
    if (popupService.showPopup('Really delete this?')) {
      shipwreck.$delete(function() {
        $scope.shipwrecks = Shipwreck.query();
        $state.go('shipwrecks');
      });
    }
  };*/
}).controller('ItemViewController', function($scope, $stateParams, Item) {
  $scope.item = Item.get({ id: $stateParams.id }); //Get a single item.Issues a GET to /api/v1/items/:id
}).controller('ItemCreateController', function($scope, $state, $stateParams, Item) {
  $scope.item = new Item();  //create new item instance. Properties will be set via ng-model on UI

  $scope.addItem = function() { //create a new item. Issues a POST to /api/v1/items
    $scope.item.$save(function() {
      $state.go('items'); // on success go back to the list i.e. items state.
    });
  };
}).controller('ItemEditController', function($scope, $state, $stateParams, Item) {
  $scope.updateShipwreck = function() { //Update the edited item. Issues a PUT to /api/v1/items/:id
    $scope.item.$update(function() {
      $state.go('items'); // on success go back to the list i.e. items state.
    });
  };

  $scope.loadItem = function() { //Issues a GET request to /api/v1/items/:id to get an item to update
    $scope.item = Item.get({ id: $stateParams.id });
  };

  $scope.loadItem(); // Load an item which can be edited on UI
});
