<?php

namespace App\Http\Controllers;

use App\Author;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use App\Services\BraintreeService;


class AuthorController extends Controller
{
  protected $gateway;

  public function __construct(BraintreeService $gateway)
    {
        $this->gateway = $gateway->getBraintreeGateway();
    }

    public function getClientToken() {
      return response()->json(['token' => $this->gateway->ClientToken()->generate()]);
    }

    public function showAllAuthors()
    {
        return response()->json(Author::all());
    }

    public function showOneAuthor($id)
    {
        return response()->json(Author::find($id));
    }

    public function create(Request $request)
    {
         $this->validate($request, [
         'name' => 'required',
         'email' => 'required|email|unique:users',
        ]);
        $author = Author::create($request->all());

        return response()->json($author, 201);
    }

    public function update($id, Request $request)
    {
        $author = Author::findOrFail($id);
        $author->update($request->all());

        return response()->json($author, 200);
    }

    public function delete($id)
    {
        Author::findOrFail($id)->delete();
        return response('Deleted Successfully', 200);
    }
}
