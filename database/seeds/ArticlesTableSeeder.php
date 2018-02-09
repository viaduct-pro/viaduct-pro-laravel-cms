<?php

use Illuminate\Database\Seeder;

class ArticlesTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */

    public function run()
    {
        require_once 'vendor/fzaninotto/faker/src/autoload.php';
        $faker = \Faker\Factory::create();

//        \DB::table('articles')->delete();

        foreach (range(1, 50) as $index) {
            dump($faker->name);
            DB::table('articles')->insert([
                'name' => $faker->name,
                'description' => $faker->text($maxNbChars = 400),
                'slug' => $index,
                'autor_id' => 2
            ]);
        };
        
    }
}