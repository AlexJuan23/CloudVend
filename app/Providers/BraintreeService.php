<?php
namespace App\Services;
use Braintree\Gateway;
class BraintreeService {
    protected $gateway;
    /**
     * Construct an instance of the payment service
     *
     * @return void
     */
    public function __construct() {
      $this->gateway = new Gateway([
        'environment' => config('braintree.bt_environment'),
        'merchantId'  => config('braintree.bt_merchant_id'),
        'publicKey'   => config('braintree.bt_public_key'),
        'privateKey'  => config('braintree.bt_private_key'),
      ]);
    }
    /**
     * Return an instance of the braintree gateway.
     * @method getBraintreeGateway
     * @return mixed              object
     */
    public function getBraintreeGateway() {
        return $this->gateway;
    }
}
