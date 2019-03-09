<?php
namespace App\Services;

class RemoteIotService {
    protected $token;
    protected $url;
    protected $client;

    /**
     * Construct an instance of the payment service
     *
     * @return void
     */
    public function __construct() {
      $this->url = 'https://remote-iot.com/portal/api/submitjob';
      $this->client = new \GuzzleHttp\Client(['base_uri' => $this->url]);
      $this->token = config('remoteiot.remote_iot_key');
    }

    /**
     * Send API post request to remote IOT servers to run vending script.
     * @method vendCandy
     * @return [type]    [description]
     */
    public function vendCandy() {
      $headers = [
          'Authorization' => 'Bearer ' . $this->token,
          'Content-type' => 'application/json'
      ];
      $data = [
        "JobName" => "motr runs",
        "UnitId" => "5C6ADD0C416572AF",
        "ExecuteTime" => "",
        "Script" => "",
        "Command" => "python /home/pi/dostuff/motor-test.py"
      ];
      $response = $this->client->post($this->url, ['headers' => $headers, 'json' => $data]);

      return $response;
    }
}
