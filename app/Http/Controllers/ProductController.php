<?php

namespace App\Http\Controllers;

use App\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $products = DB::table('products')
            ->join('categories', 'categories.id', 'products.category_id')
            ->select('products.*', 'categories.code as category_code' )
            ->get();
//        dd($products);
        return response()->json($products, 200);
    }


    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
//        d($request->all());
        $request->validate([
            'name' => 'required|min:3',
            'code' => 'required',
            'image' => 'required|image|mimes:jpeg,jpg,png'
        ]);

        $product = new Product();
        $product->name = $request->name;
        $product->code = $request->code;
        $product->category_id = $request->category_id;
        $product->price = $request->price;
        $product->description = $request->description;
//        $category->image = $request->;
        $path = $request->file('image')->store('categories_images');
        $product->image = $path;
        if($product->save()){
            return response()->json($product, 200);
        }else{
            return response()->json([
                'message' => 'Щось пішло не так. Спробуйте знову',
                'status_code' => 500
            ], 500);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Product $product)
    {
        $request->validate([
            'name' => 'required|min:3',
        ]);

        $product->name = $request->name;
        $product->code = $request->code;
        $product->category_id = $request->category_id;
        $product->price = $request->price;
        $product->description = $request->description;
        $oldPath = $product->image;
        if($request->hasFile('image')){
            $request->validate([
                'image' => 'image|mimes:jpeg,png,jpg',
            ]);
            $path = $request->file('image')->store('categories_images');
            $product->image = $path;

            Storage::delete($oldPath);
        }
        if($product->save()){
            return response()->json($product, 200);
        }else{
            Storage::delete($path);
            return response()->json([
                'message' => 'Error',
                'status'=> 500,
            ],500);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Product $product)
    {
        if($product->delete()){

            Storage::delete($product->image);
            return response()->json([
                'message' => 'Продуки успішно видалено',
                'status_code' => 200,
            ], 200);
        }else{
            return response()->json([
                'message' => 'Щось пішло не так. Спробуйте ще раз',
                'status_code' => 500,
            ], 500);
        }
    }
}
