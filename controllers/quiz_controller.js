// GET pregunta

exports.question = function(req,res) {
	res.render('quizes/question', {pregunta: 'Capital de Italia ?'});
};
// GET Respuesta


exports.answer = function(req,res) {
	
	if (req.query.respuesta === 'Roma') {
	res.render('quizes/answer', {respuesta: 'Correcta'});
	} else {
	res.render('quizes/answer', {respuesta: 'Incorrecta'});           
	};
	
};