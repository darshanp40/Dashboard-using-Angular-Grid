/*exported Tile, TileConfig*/
/*
File: constructors.js
This file contains all the constructors for different components inside the dashboard
*/

//function: this constructor returns a tile object with its HTML chunk
//@parameter: tileObject: object which is invoking this constructor
function Tile(tileObject) {
    this.tileHTML = '<div class="col-lg-3 col-md-6">' +
                           '<div class="panel {{panelType}}">' +
                               '<div class="panel-heading">' +
                                   '<div class="row">' +
                                       '<div class="col-xs-3">' +
                                           '<i class="fa {{tileIcon}} fa-5x"></i>' +
                                       '</div>' +
                                       '<div class="col-xs-9 text-right">' +
                                           '<div class="huge">{{tileData}}</div>' +
                                           '<div>{{tileFooter}}</div>' +
                                       '</div>' +
                                   '</div>' +
                               '</div>' +
                               '<a href="#">' +
                                   '<div class="panel-footer">' +
                                       '<span class="pull-left">View Details</span>' +
                                       '<span class="pull-right"><i class="fa fa-arrow-circle-right"></i></span>' +
                                       '<div class="clearfix"></div>' +
                                   '</div>' +
                               '</a>' +
                           '</div>' +
                       '</div>';
    this.tileHTML = this.tileHTML.replace("{{panelType}}", tileObject.panelType);
    this.tileHTML = this.tileHTML.replace("{{tileIcon}}", tileObject.tileIcon);
    this.tileHTML = this.tileHTML.replace("{{tileData}}", tileObject.tileData);
    this.tileHTML = this.tileHTML.replace("{{tileFooter}}", tileObject.tileFooter);
    return this;
}

//function: this constructor returns a tile config with its tile properties
//@parameter: tileObject: object which is invoking this constructor
function TileConfig(tileObject) {
    this.panelType = tileObject.panelType;
    this.tileIcon = tileObject.tileIcon;
    this.tileData = tileObject.tileData;
    this.tileFooter = tileObject.tileFooter;
    return this;
}

