<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Campsites;

class CampsitesController extends Controller
{
    public function getCampsiteInfo()
    {
        $campsites = Campsites::all();
        return response()->json($campsites, 200,[],JSON_UNESCAPED_UNICODE);
    }
}
