<?php
namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Database\Seeders\UserSeeder;
use Database\Seeders\AdminSeeder;
use Database\Seeders\BrandsTableSeeder;
use Database\Seeders\BannersTableSeeder;
use Database\Seeders\SectionsTableSeeder;
use Database\Seeders\RolePermissionSeeder;
use Database\Seeders\CategoriesTableSeeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(AdminSeeder::class);
        $this->call(BannersTableSeeder::class);
        $this->call(BrandsTableSeeder::class);
        $this->call(CategoriesTableSeeder::class);
        $this->call(RolePermissionSeeder::class);
        $this->call(SectionsTableSeeder::class);
        $this->call(UserSeeder::class);
    }
}
