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
| http://adonisjs.com/docs/4.0/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/backend-api/response', 'ResponseSimulatorController.index')
<<<<<<< HEAD

=======
Route.post('/backend-api/login', 'BackendLoginController.login').middleware(['decryption'])
>>>>>>> b4385c3df3d37133b66cf6dde4597fcfc99989e7
