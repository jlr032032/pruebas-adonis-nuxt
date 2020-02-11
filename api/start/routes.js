'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

Route.post('/api/login/inbuilt', 'LoginController.inbuiltLogin')
Route.post('/api/login/redis', 'LoginController.redisLogin').middleware(['decryption','validator'])
Route.get('/api/login/requester', 'RequesterController.index')
Route.post('/api/signup', 'SignupController.signup')
Route.post('/api/logged', 'LoggedController.index').middleware(['auth'])
Route.post('/api/encrypt', 'SecurityController.encrypt')
Route.get('/api/multilanguage', 'MultilanguageController.index')
