<?php

namespace App\Http\Controllers;

use App\Category;
use App\Product;
use Illuminate\Http\Request;

class MainController extends Controller
{
    public function category($code){

        $products = Category::where('code', $code)->first()->products;
//        dd($products);
        return response()->json($products, 200);
    }
    public function product($category, $code=null){
//        dd($category);
        $product = Product::where('code', $code)->first();
        return response()->json($product, 200);
    }
}
