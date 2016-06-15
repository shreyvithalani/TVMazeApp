var superagent = require('superagent');

module.exports = function (app) {
	app.get('/api', function (req, res) {

		console.log(req.query.name)
		superagent
			.get('http://api.tvmaze.com/search/shows?q=' + req.query.name)
			.end(function (err, result) {
				res.json(result.body);
				
			})

	});

	app.get('/api/shows/:id',function (req,res) {
		superagent
				.get('http://api.tvmaze.com/shows/' + req.params.id + '?embed=cast')
				.end(function (err, result) {
					res.json(result.body);

				})

	})
};
