<?php

use App\Http\Controllers\Api\V1\OrderDetailController;
use App\Http\Controllers\Api\V1\PelangganController;
use App\Http\Controllers\Api\V1\ProductController;
use App\Http\Controllers\Api\V1\SkillController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::group(['prefix' => 'v1'], function() {
    Route::apiResource('skills', SkillController::class);
});

Route::group(['prefix' => 'v1'], function() {
    Route::apiResource('pelanggans', PelangganController::class);
});

Route::group(['prefix' => 'v1'], function() {
    Route::apiResource('products', ProductController::class);
});

Route::group(['prefix' => 'v1'], function() {
    Route::apiResource('orderdetails', OrderDetailController::class);
});