<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class TicketController extends Controller
{
    public function show(Request $request){
        $paymentData = $request->only(['id', 'title', 'cinema', 'seats', 'time', 'tickets', 'price']);

        return Inertia::render('Ticket', $paymentData);
    }
}
