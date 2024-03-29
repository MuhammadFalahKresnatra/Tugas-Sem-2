<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StoreProductRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        return [
            'name' => ['required'],
            //'slug' => ['required', 'unique:skills,slug,' . $this->skill->id],
            'deskripsi' => ['required'],
            'kategori' => ['required', 'min:3', 'max:20'],
            'harga'     => ['required', 'min:1', 'max:20'],
        ];
    }
}
