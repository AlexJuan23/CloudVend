<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Cloud Concessions</title>
    <!-- Styles -->
    <link href="{{ asset('css/styles.css') }}" rel="stylesheet">
</head>
<body>
  <div id='root'></div>

    <script src="{{ asset('js/index.js') }}"></script>
    <script src="https://js.braintreegateway.com/web/dropin/1.15.0/js/dropin.min.js"></script>

</body>
</html>
