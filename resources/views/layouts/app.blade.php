<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Sharkfist</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">
    </head>
    <body>
        @yield('content')
        @if(env("APP_ENV") === "production")
            <script src="/js/vendor.bundle.js"></script>
            <script src="/js/bundle.js"></script>
        @else
            <script src="http://localhost:8080/vendor.bundle.js"></script>
            <script src="http://localhost:8080/bundle.js"></script>
        @endif
    </body>
</html>
