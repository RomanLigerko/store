<?php

namespace App\Http\Controllers;

use App\Order;
use App\Product;
use Illuminate\Contracts\Session\Session;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class BasketController extends Controller
{
    public function basket()
    {
        $orderId = session('orderId');
        if (!is_null($orderId)) {
            $products = DB::table('order_product')
                ->join('products', 'products.id', 'order_product.product_id')
                ->select('products.id','products.image', 'products.name', 'products.price', 'order_product.count as count')
                ->where('order_product.order_id', $orderId)
                ->get();

            return response()->json($products, 200);
        }

        return response()->json([

            'status_code' => 200
        ], 200);
    }

//    public function basketConfirm(Request $request)
//    {
//        $orderId = session( 'orderId');
//        if (is_null($orderId)){
//            return redirect()->route('index');
//        }
//        $order = Order::find($orderId);
//        $result = $order->saveOrder($request->name, $request->phone);
//
//        if($result){
//            session()->flash('success', 'Ваш заказ принят на обработку');
//        }else{
//            session()->flash('warning', 'Случилась ошибка');
//        }
//
//        return redirect()->route('index');
//    }

//    public function basketPlace()
//    {
//        $orderId = session('orderId');
//        if (is_null($orderId)){
//            return redirect()->route('index');
//        }
//        $order = Order::find($orderId);
//        return view('order',  compact('order'));
//    }

    public function basketAdd($productId)
    {

        $orderId = session('orderId');
        if (is_null($orderId)) {
            $order = Order::create();
            session(['orderId' => $order->id]);
        } else {
            $order = Order::find($orderId);
        }
        if ($order->products->contains($productId)) {
            $pivotRow = $order->products()->where('product_id', $productId)->first()->pivot;
            $pivotRow->count++;
            $pivotRow->update();
        } else {
            $order->products()->attach($productId);
        }
        if (!is_null($orderId)) {
            $products = DB::table('order_product')
                ->join('products', 'products.id', 'order_product.product_id')
                ->select('products.id', 'products.image', 'products.name', 'products.price', 'order_product.count as count')
                ->where('order_product.order_id', $orderId)
                ->get();
            //            dd($products);
            return response()->json($products, 200);
        }
        return response()->json([
            'error' => 'some error'
        ], 200);
    }

    public function basketRemove($productId)
    {
        $orderId = session('orderId');
        if (is_null($orderId)) {
            return redirect()->route('basket');
        }
        $order = Order::find($orderId);

        if ($order->products->contains($productId)) {
            $pivotRow = $order->products()->where('product_id', $productId)->first()->pivot;
            if ($pivotRow->count < 2) {
                $order->products()->detach($productId);
            } else {
                $pivotRow->count--;
                $pivotRow->update();
            }
        }
        if (!is_null($orderId)) {
            $products = DB::table('order_product')
                ->join('products', 'products.id', 'order_product.product_id')
                ->select('products.id', 'products.image', 'products.name', 'products.price', 'order_product.count as count')
                ->where('order_product.order_id', $orderId)
                ->get();
            //            dd($products);
            return response()->json($products, 200);
        }
        return response()->json([
            'message' => 'Щось пішло не так. Спробуйте знову',
            'status_code' => 500
        ], 500);
    }
}
