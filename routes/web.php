<?php
use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->get('/',['uses' => 'paymentController@VendingMachine']);
$router->get('/shipping/snack',['uses' => 'paymentController@VendingMachine']);
$router->get('/shipping/mystery',['uses' => 'paymentController@VendingMachine']);




$router->group(['prefix' => 'api'], function () use ($router) {

  $router->get('payment/client/token',  ['uses' => 'paymentController@getClientToken']);

  $router->get('machine/vend',  ['uses' => 'paymentController@vendCandyTest']);

  $router->post('payment/transaction', ['uses' => 'paymentController@submitTransaction']);

  $router->get('payment/dropin',['uses' => 'paymentController@DropinUI']);
  

  $router->get('authors',  ['uses' => 'AuthorController@showAllAuthors']);

  $router->get('authors/{id}', ['uses' => 'AuthorController@showOneAuthor']);

  $router->post('authors', ['uses' => 'AuthorController@create']);

  $router->delete('authors/{id}', ['uses' => 'AuthorController@delete']);

  $router->put('authors/{id}', ['uses' => 'AuthorController@update']);
});
