<?php

return function($site, $pages, $page) {
    $form = uniform('contact-form', [
        'required' => [
            'name'  => '',
            '_from' => 'email',
            'subject' => '',
            'phone' => ''
        ],
        'actions' => [
            [
                '_action' => 'email',
                'to'      => 'info@fortisgroup.ca',
                'sender'  => 'info@fortisgroup.ca',
                'subject' => 'New message from the contact form on Fortis Group'
            ]
        ]
    ]);

    return compact('form');
};