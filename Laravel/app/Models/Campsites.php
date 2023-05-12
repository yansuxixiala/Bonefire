<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Campsites extends Model
{
    use HasFactory;

    protected $table = 'campsites';
    protected $primaryKey = 'id';
    protected $fillable = ['img', 'name', 'description'];
}
