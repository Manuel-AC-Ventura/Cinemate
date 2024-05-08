<?php

namespace App\Http\Controllers;

use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class TmdbApiController extends Controller
{
    public function fetchMovies(){
        $url = 'https://api.themoviedb.org/3/movie/now_playing';

        try {
            $response = Http::withHeaders([
                'accept' => 'application/json',
                'Authorization' => 'Bearer ' . env('TMDB_KEY')
            ])->get($url, [
                'language' => 'pt-BR',
                'page' => 1
            ]);

            if ($response->successful()) {
                $movies = $response->json()['results'];
                return $movies;
            } else {
                return response()->json(['error' => 'Erro ao buscar filmes: ' . $response->status()]);
            }
        } catch (Exception $e) {
            return response()->json(['error' => 'Exceção capturada: ' . $e->getMessage()]);
        }
    }
}
