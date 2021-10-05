<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;

class Roadtax extends Model
{
    use HasFactory;

    protected $table = 'roadtaxs';

    //protected $with = ['user'];
    public function user(){
        return $this->belongsTo(User::class, 'user_id', 'id');
    }

}
