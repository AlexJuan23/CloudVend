<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use App\Services\BraintreeService;
use App\Services\RemoteIotService;



class paymentController extends Controller
{

  protected $gateway;
  protected $machine;

  /**
   * Successful braintree statuses.
   * @var array
   */
  const TRANSACTIONSUCCESSSTATUSES = [
    'authorizing',
    'authorized',
    'settled',
    'settling',
    'submitted_for_settlement',
    'settlement_pending',
    'settlement_confirmed'
  ];

  public function __construct(BraintreeService $gateway, RemoteIotService $machine) {
    $this->gateway = $gateway->getBraintreeGateway();
    $this->machine = $machine;
  }

/**
 * Returns a braintree client token.
 * @method getClientToken
 * @return response         json token
 */
  public function getClientToken() {
    return response()
      ->json(
        [
          'token' => $this->gateway->ClientToken()->generate()
        ]
      );
  }

  /**
   * Return the vending machine.
   * @method DropinUI
   */
  public function vendingMachine() {
    return view('vendingmachine');

  }

  /**
   * Return the dropin ui view.
   * @method DropinUI
   */
  public function DropinUI() {
    return view('checkout');

  }

/**
 * Verify transaction then either return success and vend or retur error.
 * @method submitTransaction
 * @param  Request           $request the request object
 * @return response                     json transaction result
 */
  public function submitTransaction(Request $request) {

    $this->validate($request, [
    'amount' => 'required',
    'nonce' => 'required',
   ]);
   $result = $this->gateway->transaction()->sale([
       'amount' => $request->amount,
       'paymentMethodNonce' => $request->nonce,
       'options' => [
           'submitForSettlement' => true
       ]
   ]);
   if (in_array($result->transaction->status,self::TRANSACTIONSUCCESSSTATUSES)) {

     $success = 'Transaction successully submitted. Vending.';
   }
   else {
     $error = 'uh oh. horrible failure';
   }

   if ($result->success || !is_null($result->transaction)) {
     $this->machine->vendCandy();
     return response()->json(['transactionId' => $result->transaction->id,'success' => $success ], 201);

   }
   else {
       $errorString = "";
        return response()->json(['fail' => $error], 503);
   }

  }

/**
 * Method to test vending.
 * @method vendCandyTest
 * @return void
 */
  public function vendCandyTest() {
    $this->machine->vendCandy();
  }

}
