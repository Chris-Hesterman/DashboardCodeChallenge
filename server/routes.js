const router = require('express').Router();
const controllers = require('./controllers');

router.get('/questions/:page_id', controllers.questions.get);

router.put('/questions/:question_id', controllers.questions.put);

router.post('/questions/:page_id', controllers.questions.post);

router.delete('/questions/:question_id', controllers.questions.delete);

router.get('/users/:user_id', controllers.users.get);

router.put('/users/:user_id', controllers.users.put);

router.post('/users', controllers.users.post);

router.delete('/users/:user_id', controllers.users.delete);

module.exports = router;
