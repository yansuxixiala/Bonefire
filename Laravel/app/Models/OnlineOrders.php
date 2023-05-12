<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OnlineOrders extends Model
{
    use HasFactory;

    protected $table = 'onlineorders'; // 資料庫中對應的表格名稱

    protected $fillable = [
        'name',
        'phone',
        'email',
        'date',
        'time',
        'partySize',
    ];

    // 可選：如果有其他關聯或方法，可以在這裡定義
}
