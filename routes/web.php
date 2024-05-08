<?php

use App\Http\Controllers\TmdbApiController;
use App\Http\Controllers\MovieController;
use App\Http\Controllers\RoomController;
use App\Http\Controllers\PaymentController;
use App\Http\Controllers\TicketController;
use Illuminate\Foundation\Application;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/', function(){
    $movies = new TmdbApiController();

    return Inertia::render('Home', [
        'movies' => $movies->fetchMovies()
    ]);
});

Route::get('/movie/{id}', [MovieController::class, 'show']);
Route::post('/room', [RoomController::class, 'show']);
Route::post('/payment', [PaymentController::class, 'show']);
Route::post('/ticket', [TicketController::class, 'show']);

Route::fallback(function () {
    return Inertia::render('NotFound');
});

require __DIR__.'/auth.php';
