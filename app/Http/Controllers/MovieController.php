<?php

namespace App\Http\Controllers;

use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Inertia\Inertia;

class MovieController extends Controller
{
    public function show(Request $request)
    {
        $movie = $this->fetchMovieDetails($request->id);
        $trailer = $this->fetchMovieTrailer($request->id);
        $director = $this->fetchDirector($request->id);
        $credits = $this->fetchCredits($request->id);
        $sessions = $this->getMovieSessions();

        return Inertia::render('Movie', [
            'movie' => $movie,
            'trailer' => $trailer,
            'director' => $director,
            'credits' => $credits,
            'sessions'=> $sessions
        ]);
    }

    public function fetchMovieDetails($id)
    {
        $url = 'https://api.themoviedb.org/3/movie/'.$id;
        
        try {
            $response = Http::withHeaders([
                'accept' => 'application/json',
                'Authorization' => 'Bearer ' . env('TMDB_KEY')
            ])->get($url, [
                'language' => 'pt-BR'
            ]);

            if ($response->successful()) {
                $movie = $response->json();
                return $movie;
            } else {
                return response()->json(['error' => 'Erro ao buscar filmes: ' . $response->status()]);
            }
        } catch (Exception $e) {
            return response()->json(['error' => 'Exceção capturada: ' . $e->getMessage()]);
        }
    }

    public function fetchMovieTrailer($id)
    {
        $url = 'https://api.themoviedb.org/3/movie/'.$id.'/videos';
        
        try {
            $response = Http::withHeaders([
                'accept' => 'application/json',
                'Authorization' => 'Bearer ' . env('TMDB_KEY')
            ])->get($url, [
                'language' => 'pt-BR'
            ]);

            if ($response->successful()) {
                $videos = $response->json()['results'];
                // Filtrar para encontrar o trailer
                foreach ($videos as $video) {
                    if ($video['type'] === 'Trailer') {
                        return $video;
                    }
                }
                return response()->json(['message' => 'Trailer não encontrado']);
            } else {
                return response()->json(['error' => 'Erro ao buscar trailer: ' . $response->status()]);
            }
        } catch (Exception $e) {
            return response()->json(['error' => 'Exceção capturada: ' . $e->getMessage()]);
        }
    }

    public function fetchDirector($id)
    {
        $url = 'https://api.themoviedb.org/3/movie/'.$id.'/credits';
        
        try {
            $response = Http::withHeaders([
                'accept' => 'application/json',
                'Authorization' => 'Bearer ' . env('TMDB_KEY')
            ])->get($url);

            if ($response->successful()) {
                $credits = $response->json()['crew'];
                $director = null;
                
                foreach ($credits as $member) {
                    if ($member['job'] === 'Director') {
                        $director = $member;
                        break;
                    }
                }
                
                return $director;
            } else {
                return response()->json(['error' => 'Erro ao buscar diretor: ' . $response->status()]);
            }
        } catch (Exception $e) {
            return response()->json(['error' => 'Exceção capturada: ' . $e->getMessage()]);
        }
    }

    public function fetchCredits($id)
    {
        $url = 'https://api.themoviedb.org/3/movie/'.$id.'/credits';
        
        try {
            $response = Http::withHeaders([
                'accept' => 'application/json',
                'Authorization' => 'Bearer ' . env('TMDB_KEY')
            ])->get($url);

            if ($response->successful()) {
                $credits = $response->json();
                return $credits;
            } else {
                return response()->json(['error' => 'Erro ao buscar créditos: ' . $response->status()]);
            }
        } catch (Exception $e) {
            return response()->json(['error' => 'Exceção capturada: ' . $e->getMessage()]);
        }
    }

    public function getMovieSessions()
    {
        try{
            $path = public_path('movie_sessions.json');
            $json = json_decode(file_get_contents($path), true);

            return $json;
        }catch(Exception $e){
            return response()->json(['error' => 'Exceção capturada: ' . $e->getMessage()]);
        }
    }
}
