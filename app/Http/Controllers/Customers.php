<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Customer;

class Customers extends Controller
{
    public function index(Request $request)
    {
        return Customer::all();
    }

    public function create(Request $request)
    {
        $input = $request->all();
        $record = new Customer();
        foreach ($record->getFillable() as $fillable) {
            if (!empty($input[$fillable])){
                if($fillable == 'skills'){
                    $record->{$fillable} = json_encode($input[$fillable]);
                }
                else
                    $record->{$fillable} = $input[$fillable];
            }
        }
        if ($record->save()) {

            return response()->json(['success' => 'Customer created successfully.', 'customer' => $record], 402);
        }
        return response()->json(['error' => 'something went wrong!'], 401);
    }

    public function update(Request $request, $id)
    {
        $input = $request->all();
        $record = Customer::find($id);
        foreach ($record->getFillable() as $fillable) {
            if (!empty($input[$fillable])){
                if($fillable == 'skills'){
                    $record->{$fillable} = json_encode($input[$fillable]);
                }
                else
                    $record->{$fillable} = $input[$fillable];
            }
        }
        if ($record->save()) {

            return response()->json(['success' => 'Customer updated successfully.', 'customer' => $record], 402);
        }
        return response()->json(['error' => 'something went wrong!'], 401);
    }
    public function delete($id)
    {
        $record = Customer::find($id);
        if ($record) {
            if ($record->delete())
                return response()->json(['success' => 'deleted successfully.'], 402);
        }
        return response()->json(['error' => 'Root Name not found.'], 401);
    }
}
