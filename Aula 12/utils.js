


/*
* Function cria uma tabela com o resultado
* @param array;
* @return tabela  
*/
function getTableRow(id, consumidor) {
    return `<tr>
    <td>${id}</td>
    <td>${consumidor}</td>

</tr>`;
}

function updateTable() {
    $('#table tbody').html('');
    $('#table').css('display', 'block');
    for (let index = 0; index < facturas.length; index++) {
        $('#conteudo-tabela').append(getTableRow(facturas[index].id, facturas[index].consumidor));
    }
}

function clearForm() {
    $("#firstName").val("");
    $("#artigo").val("");
    $("#extra").val("");
    }
    

