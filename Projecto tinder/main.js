var livros = [];
var n = 0;

/** 
* Function ready chama a funcao getBook onload;
**/
$(document).ready(function () {
    getBook();
});

/** 
* Function getBook acede à Api;
* @param acede à API que retorna objecto Json; 
* @return [titulo, autor, imagem, descricao];
**/
function getBook() {
    $.ajax({
        type: "GET",
        url: 'https://www.googleapis.com/books/v1/volumes?q=ola&maxResults=15' + '&startIndex=' + n,
        success: function (result) {
            for (let i = 0; i < result.items.length; i++) {
                let element = {};
                element.title = result.items[i].volumeInfo.title;
                element.author = result.items[i].volumeInfo.authors;
                if (result.items[i].volumeInfo.imageLinks !== undefined){
                    element.image = result.items[i].volumeInfo.imageLinks.thumbnail;
                }
                else{
                    element.image = '';
                }
                element.description = result.items[i].volumeInfo.description;
                element.link = result.items[i].volumeInfo.infoLink;
                element.likes = 0;
                element.dislikes = 0;
                livros.push(element);
                n += 15;
            }
            getInfo();
        }
    });
}


/** 
* Function getInfo altera HTML atraves de Jquerry;
* @param []; 
* @return atributos do objecto aplicados aos id do HTML;
incrementa
*/
let index = 0;
function getInfo() {
    $("#title").text(livros[index].title);
    $("#author").text(livros[index].author);
    $("#image").attr("src", livros[index].image);
    $("#description").text(livros[index].description);
    index++;
}


/** 
* Function countLikes corre a funcao getBook on click; 
* @param [{}]
* @return [{}] e conta likes;
**/
function countLikes() {
    livros[index - 1].likes++;
    getInfo();
    updateTable();
    getMoreBooks();
}
/** 
* Function countDislikes corre a funcao getBook on click;
* @return numero;
**/
function countDislikes() {
    livros[index - 1].dislikes++;
    getInfo();
    getMoreBooks();
};

/** 
* Function cria tabela com gostos e desgostos;
* @return tabela;
**/
function getTableRow(title, author) {
    return `<tr>
    <td>${(title)}</td>
    <td>${author}</td>
</tr>`;
};

function updateTable() {
    $('#resultado').html("");
    for (let i = 0; i < livros.length; i++) {
        const element = livros[i];
        if (element.likes > 0) {
            $('#resultado').append(getTableRow(element.title, element.author));
        }
    }
}

function getMoreBooks() {
    if ((index + 12) % 15 === 0) {
        console.log("vai buscar mais");
        getBook();
    }
}
