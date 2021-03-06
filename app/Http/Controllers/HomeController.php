<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index(Request $request)
    {
        $this->authorize('gate-in-controller');

        $request->user()->authorizeRoles(['employee', 'admin']);
        return view('home');
    }

    public function hadSeen(Request $request)
    {
        dd('hadSeen');
        $user = new User();
        $user->name = time();
        $user->email = time();
        $user->password = bcrypt('123456');

        $user->save();
    }
}
