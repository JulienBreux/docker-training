<?php

require "../vendor/autoload.php";

$logger = new \Monolog\Logger("log");
$logger->pushHandler(new \Monolog\Handler\ErrorLogHandler());

$logger->info("Request to index.php");

phpinfo();
