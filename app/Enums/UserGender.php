<?php

namespace App\Enums;

enum UserGender : string
{

    case MALE= "Laki-Laki";
    case FEMALE = "Perempuan";




    public static function options() : array
    {
        return collect(self::cases())->map(fn($item)=>[
            'value' => $item->value,
            'label' => $item->name,
        ])->values()->toArray();
    }

}
