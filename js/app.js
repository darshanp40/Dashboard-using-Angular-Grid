/*global angular, arrTileConfigs, TileConfig, Tile, oGridConfig*/
/*
File: app.js
This file contains the application code of the dashboard
*/
var DashboardApp = angular.module("DashboardApp", ['ngSanitize', 'ui.grid']);

//controller for the tiles
DashboardApp.controller('tileController', ["$scope", "$sce", function ($scope, $sce) {
    var tileConfig = arrTileConfigs[0],
        iCount,
        tileObject,
        tileHTML = '';

    for (iCount = 0; iCount < tileConfig.length; iCount++) {
        tileObject = new TileConfig(tileConfig[iCount]);
        tileHTML += (new Tile(tileConfig[iCount])).tileHTML;
    }
    $scope.tileHTML = (function () {
        return $sce.trustAsHtml(tileHTML);
    })();
}]);

//controller for the grid
DashboardApp.controller('gridController', ["$scope", function ($scope) {
    var gridConfig = oGridConfig.dashboardGrid;
    $scope.gridOptions = {};
    $scope.gridOptions.columnDefs = gridConfig.arrColumnConfig;
    $scope.gridOptions.data = gridConfig.data;
}]);