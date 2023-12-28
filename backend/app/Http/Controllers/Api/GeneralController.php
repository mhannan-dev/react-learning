<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use Modules\Product\Entities\Brand;
use App\Http\Controllers\Controller;
use Modules\Product\Entities\Category;

class GeneralController extends Controller
{
    public function getCategory()
    {
        $items = Category::get();
        return response()->json([
            'status' => 'success',
            'items' => $items
        ]);
    }
    
    public function getBrand()
    {
        $items = Brand::get();
        return response()->json([
            'status' => 'success',
            'items' => $items
        ]);
    }
}
