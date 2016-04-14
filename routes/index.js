var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/helloworld', function(req, res) {
    res.render('helloworld', { title: 'Hello, World!' });
});

router.get('/visits', function(req, res) {
    var db = req.db;
    var collection = db.get('usercollection');
    collection.find({},{},function(e,docs){
        res.json(docs);
    });
});

router.get('/putup/:name',function(req,res){
	var db = req.db;
	var collection = db.get('usercollection');
	var nameParam = req.params.name;
	var idToDelete = "570edc372326ad0bdba497e1"
    collection.remove({ '_id' : idToDelete }, function(err) {
       // res.send((err === null) ? { msg: '' } : { msg:'error: ' + err });
    });
    collection.insert({'_id' : idToDelete, 'name' : nameParam} ,function(err,results){
		//res.send((err === null) ? {msg:''} : {msg:err});
	});
});



module.exports = router;
