var router = require('express').Router(),
	path = require('path'),
	fs   = require('fs'),
	xml  = require('xml');

function showIndexPage(req, res) {
	res.sendFile(path.join(__dirname + '/views/test.html'));
}
function getNotgoodAgriLand(req, res) {
	res.sendFile(path.join(__dirname + '/data/notgood_agri_land.json'));
}
function getMiddleAgriLand(req, res) {
	res.sendFile(path.join(__dirname + '/data/middle_agri_land.json'));
}
function getGoodAgriLand(req, res) {
	res.sendFile(path.join(__dirname + '/data/good_agri_land.json'));
}
function getAgriLandProductive(req, res) {
	var prod_level = req.params['value']; 
	res.sendFile(path.join(__dirname + '/data/agriprod-lv' + prod_level + '.json'));
}
function getAirPollutionData(req, res) {
	res.sendFile(path.join(__dirname + '/data/air.json'));
}

router.get('/', showIndexPage);
router.get('/data/agri_land/notgood', getNotgoodAgriLand);
router.get('/data/agri_land/middle', getMiddleAgriLand);
router.get('/data/agri_land/good', getGoodAgriLand);
router.get('/data/agri_productive/level/:value', getAgriLandProductive);
router.get('/data/air_pollution', getAirPollutionData);


module.exports = router;