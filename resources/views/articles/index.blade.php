<!doctype html>
<html lang="{{app()->getLocale()}}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="csrf-token" content="{{csrf_token()}}">
    <script>
        window.Laravel = {csrfToken: '{{csrf_token()}}'}
    </script>
    <title>Larticles App</title>
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>
<body>
<div id="app">
    <navbar></navbar>
    <div class="container">
        <articles></articles>
    </div>
</div>
<script src="{{asset('js/app.js')}}"></script>
</body>
</html>
