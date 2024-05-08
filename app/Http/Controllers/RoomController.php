<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class RoomController extends Controller
{
    public function show(Request $request)
    {
        $id = $request->input('id');
        $title = $request->input('title');
        $session = $request->input('session');
        $seats = $this->seatsGenerator(10, 8);

        return Inertia::render('Room', [
            'id' => $id,
            'title' => $title,
            'session' => $session,
            'seats' => $seats
        ]);
    }

    public function seatsGenerator($rows, $cols){
        $seats = [];
        for ($row = 1; $row <= $rows; $row++) {
            for ($col = 1; $col <= $cols; $col++) {
                $seats[] = [
                    'row' => $row,
                    'col' => $col,
                    'reserved' => rand(0, 1) === 1
                ];
            }
        }
        return ['room' => $seats];
    }
}
