angular.module('app').controller('DocumentController', function($scope, $location, DocumentService) {
  $scope.isNewDocument = false;

  function activate() {
    var document = DocumentService.currentDocument();
    if(document == null) $scope.isNewDocument = true;
    else $scope.document = document;
  }

  $scope.saveDocument = function() {
    var Document = DocumentService.Document();
    var document = new Document($scope.document);
    document.$save(function() {
      $location.path('/documents');
    });
  };

  $scope.toDocuments = function() {
    $location.path('/documents');
  };

  activate();
});