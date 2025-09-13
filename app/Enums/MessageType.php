<?php

namespace App\Enums;

enum MessageType: string
{

    case CREATED = "Berhasil menambahkan";
    case UPDATED = "Berhasil memperbaharui";
    case DELETED = "Berhasil memghapus";
    case ERROR = "Terjadi Kesalahan, silahkan coba lagi nanti ";

    public function message(string $enity='', ?string $error=null):string
    {

        if($this===MessageType::ERROR && $error)
        {
            return "{$this->value} {$error}";
        }

        return "{$this->value} {$enity}";

    }



    public static function options(): array
    {
        return collect(self::cases())->map(fn($item) => [
            'value' => $item->value,
            'label' => $item->name,
        ])->values()->toArray();
    }

}
