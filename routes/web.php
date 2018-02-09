<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::group(['prefix' => 'admin', 'middleware' => ['auth', 'admin']], function () {

    Route::get('/', ['as' => 'admin', 'uses' => 'Admin\DashboardController@index']);

    Route::group(['prefix' => 'users'], function () {
        Route::get('/', ['as' => 'users', 'uses' => 'Admin\UserController@index']);
        Route::get('/data', ['as' => 'user-data', 'uses' => 'Admin\UserController@anyData']);
        Route::get('user/{id?}', ['as' => 'user-edit', 'uses' => 'Admin\UserController@getUser']);
        Route::post('user/{id?}', ['as' => 'user-edit', 'uses' => 'Admin\UserController@getUserSave']);
        Route::get('user/{id}/delete', ['as' => 'user-delete', 'uses' => 'Admin\UserController@deleteUser']);
        Route::post('user/{id}/image/upload', ['as' => 'user-image-upload', 'uses' => 'Admin\UserController@uploadUserImage']);
    });


    Route::group(['prefix' => 'articles'], function () {
        Route::get('/', ['as' => 'articles', 'uses' => 'Admin\ArticleController@index']);
        Route::get('/data', ['as' => 'articles-data', 'uses' => 'Admin\ArticleController@anyData']);
        Route::get('article/{id?}', ['as' => 'article-edit', 'uses' => 'Admin\ArticleController@getUser']);
        Route::post('article/{id?}', ['as' => 'article-edit', 'uses' => 'Admin\ArticleController@getUserSave']);
        Route::get('article/{id}/delete', ['as' => 'article-delete', 'uses' => 'Admin\ArticleController@deleteUser']);
        Route::post('article/{id}/image/upload', ['as' => 'article-image-upload', 'uses' => 'Admin\ArticleController@uploadUserImage']);
    });
});
