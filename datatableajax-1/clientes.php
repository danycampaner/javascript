<?php
    $arrayClientes = [
        [
            "Tiger Nixon",
            "System Architect",
            "Edinburgh",
            "5421",
            "2011/04/25",
            "$320,800"
          ],
          [
            "Garrett Winters",
            "Accountant",
            "Tokyo",
            "8422",
            "2011/07/25",
            "$170,750"
          ],
          [
            "Ashton Cox",
            "Junior Technical Author",
            "San Francisco",
            "1562",
            "2009/01/12",
            "$86,000"
          ]
    ];

    $retorno = new stdClass();
    $retorno->data = $arrayClientes;

    echo json_encode($retorno);

?>