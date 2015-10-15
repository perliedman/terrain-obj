#!/usr/bin/node

var TileSet = require('node-hgt').TileSet,
    proj4 = require('proj4'),
    hgt2obj = require('./'),
    proj = proj4(process.argv[7], proj4.WGS84),
    path = process.argv[2],
    tileSet = new TileSet(path),
    components = process.argv.slice(3, 7).map(function(a) { return parseFloat(a); }),
    sw = [components[1], components[0]],
    ne = [components[3], components[2]],
    bounds = [proj.inverse(sw), proj.inverse(ne)];

hgt2obj(process.stdout, proj, bounds, tileSet);
