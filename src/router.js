const express = require('express');
const multer = require('multer');
const multerConfig = require('./config/multer');

const PostsController = require('./controller/PostsController');
const UsersController = require('./controller/UsersController');
const ProfileController = require('./controller/ProfileController');
const SessionController = require('./controller/SessionController');

const routes = express.Router();

routes.post('/create', UsersController.create);
routes.get('/list', UsersController.list);

/**
 * o multer está fazendo o upload de um arquivo para o caminho /tmp/uploads 
 * onde os arquivos de images do blog ficarão salvos
 */
routes.post('/newPosts', multer(multerConfig).single('file'), PostsController.create);
routes.get('/listPosts', PostsController.list);

routes.get('/profile', ProfileController.list);
routes.post('/sessions', SessionController.create);

module.exports = routes;