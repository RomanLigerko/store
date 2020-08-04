<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


Route::resource('categories', 'CategoryController');
Route::resource('products', 'ProductController');

Route::get('/basket', 'BasketController@basket')->name('basket');
Route::post('/basket/add/{id}', 'BasketController@basketAdd')->name('basket-add');
Route::post('/basket/remove/{id}', 'BasketController@basketRemove')->name('basket-remove');

Route::get('/{category}', 'MainController@category');
Route::get('/{category}/{product}', 'MainController@product');


//Route::get('/basket/place', 'BasketController@basketPlace')->name('basket-place');
//Route::post('/basket/remove/{id}', 'BasketController@basketRemove')->name('basket-remove');
//Route::post('/basket/confirm', 'BasketController@basketConfirm')->name('basket-confirm');
