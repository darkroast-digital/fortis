<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInitf5a857c9e4c52bed0abd021c7daaa7b8
{
    public static $files = array (
        'f485627b283286104bbc2461f512799f' => __DIR__ . '/..' . '/getkirby/toolkit/bootstrap.php',
        'fec9f9cdcb32da181d64dfa6a9d8347b' => __DIR__ . '/..' . '/getkirby/smartypants/smartypants.php',
        '4d43cb4a92fc9083dc76dd8887c0a0ef' => __DIR__ . '/../..' . '/composer.php',
    );

    public static $prefixLengthsPsr4 = array (
        'W' => 
        array (
            'Whoops\\' => 7,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Whoops\\' => 
        array (
            0 => __DIR__ . '/..' . '/filp/whoops/src/Whoops',
        ),
    );

    public static $prefixesPsr0 = array (
        'P' => 
        array (
            'ParsedownExtra' => 
            array (
                0 => __DIR__ . '/..' . '/erusev/parsedown-extra',
            ),
            'Parsedown' => 
            array (
                0 => __DIR__ . '/..' . '/erusev/parsedown',
            ),
        ),
    );

    public static $classMap = array (
        'EasyPeasyICS' => __DIR__ . '/..' . '/phpmailer/phpmailer/extras/EasyPeasyICS.php',
        'PHPMailer' => __DIR__ . '/..' . '/phpmailer/phpmailer/class.phpmailer.php',
        'PHPMailerOAuth' => __DIR__ . '/..' . '/phpmailer/phpmailer/class.phpmaileroauth.php',
        'PHPMailerOAuthGoogle' => __DIR__ . '/..' . '/phpmailer/phpmailer/class.phpmaileroauthgoogle.php',
        'POP3' => __DIR__ . '/..' . '/phpmailer/phpmailer/class.pop3.php',
        'SMTP' => __DIR__ . '/..' . '/phpmailer/phpmailer/class.smtp.php',
        'ntlm_sasl_client_class' => __DIR__ . '/..' . '/phpmailer/phpmailer/extras/ntlm_sasl_client.php',
        'phpmailerException' => __DIR__ . '/..' . '/phpmailer/phpmailer/class.phpmailer.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInitf5a857c9e4c52bed0abd021c7daaa7b8::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInitf5a857c9e4c52bed0abd021c7daaa7b8::$prefixDirsPsr4;
            $loader->prefixesPsr0 = ComposerStaticInitf5a857c9e4c52bed0abd021c7daaa7b8::$prefixesPsr0;
            $loader->classMap = ComposerStaticInitf5a857c9e4c52bed0abd021c7daaa7b8::$classMap;

        }, null, ClassLoader::class);
    }
}
