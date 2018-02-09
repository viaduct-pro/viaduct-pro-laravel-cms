<?php

namespace App\Models;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class Article extends Authenticatable
{
    protected $table = 'articles';

    public static function save_data($id, $data) {
        $item = IcoItems::findOrNew($id);
        $item->name = array_get($data, 'name');
        $item->description = array_get($data, 'description');
        $item->slug = array_get($data, 'slug');
        $item->links = array_get($data, 'links');
        $item->user_id = \Auth::id();

        $item->save();
        $coin_name = array_get($data, 'coins');
        $coin = Coin::where(['value' => $coin_name])->orWhere(['name' => $coin_name])->first();
//        if (!$coin) {
//            $coin = new Coin;
//            $coin->name = $coin_name;
//            $coin->value = $coin_name;
//            $coin->symbol = $coin_name;
//            $coin->type = 'custom';
//            $coin->save();
//        }
//        foreach(array_get($data, 'coins', []) as $coin) {
        if($coin){
            $item->coins()->attach($coin->id);
        }
//        }

        return $item->id;

    }
}
