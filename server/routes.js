const router = require('express').Router();
const controllers = require('./controllers');

router.get('/', controllers.root.get);

router.get('/questions/:page_id', controllers.questions.get);

router.put('questions/:question_id', controllers.questions.put);

router.post('questions/page_id', controllers.questions.post);

router.delete('questions/question_id', controllers.questions.delete);

router.get('/users/:user_id', controllers.questions.get);

router.put('users/:user_id', controllers.questions.put);

router.post('users', controllers.questions.post);

router.delete('users/user_id', controllers.questions.delete);

module.exports = router;
