<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Publisher extends Model
{
    //
    protected $fillable =
    [
        'name',
        'slug',
        'adddress',
        'email',
        'phone',
        'logo'

    ];

    public function books() : HasMany
    {
        return $this->hasMany(Book::class);
    }
}
