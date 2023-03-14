<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StorePelangganRequest extends FormRequest
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
            'name' => ['required', 'min:3', 'max:20'],
            //'slug' => ['required', 'unique:skills,slug,' . $this->skill->id],
            'alamat' => ['required', 'min:3', 'max:20'],
            'telp'   => ['required', Rule::unique('pelanggans')->ignore($this->pelanggan)]
        ];
    }
}
