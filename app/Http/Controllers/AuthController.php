<?php

namespace App\Http\Controllers;

use App\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function register(Request $request){
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email',
            'password' => 'required|string|confirmed'
        ]);

        $user = new User();
        $user->name = $request->name;
        $user->email = $request->email;
        $user->password = bcrypt($request->password);

        if($user->save()){
            return response()->json([
                'message' => 'Користувача успішно створено',
                'status_code'=> 201
            ], 201);
        }else{
            return response()->json([
                'message' => 'Виникла помилка спробуйте ще раз',
                'status_code'=> 500
            ], 500);
        }
    }
    public function login(Request $request){
        $request->validate([
            'email' => 'required|string|max:255',
            'password' => 'required|string',
            'remember_me' => 'boolean'
        ]);

        if(!Auth::attempt(["email"=> $request->email, "password"=>$request->password])){
            return response()->json([
                'message' => 'Користувач не авторизований',
                'status_code'=> 401
            ], 401);
        }

        $user = $request->user();

        if($user->role == "administrator"){
            $tokenData = $user->createToken('Personal Access Token', ['do_anything']);
        }else{
            $tokenData = $user->createToken('Personal Access Token', ['can_create']);
        }

        $token = $tokenData->token;

        if($request->remember_me){
            $token->expires_at = Carbon::now()->addWeeks(1);
        }

        if($token->save()){
            return response()->json([
                "user"=>$user,
                "accessToken" =>$tokenData->accessToken,
                "token_type" => "Bearer",
                "token_scope"=>$tokenData->token->scopes[0],
                "expires_at"=>Carbon::parse($tokenData->token->expires_at)->toDateTimeString(),
                'status_code'=>200
            ], 200);

        } else{
            return response()->json([
                'message'=> "Сталася помилка. Спробуйте ще раз",
                'status_code'=>500
            ], 500);
        }
    }

    public function logout(Request $request){
        $request->user()->token()->rovoke();
        return response()->json([
            'message'=> "Logout successfully",
            'status_code'=> 200
        ],200);
    }
}
