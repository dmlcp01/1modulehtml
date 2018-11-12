

// A $( document ).ready() block.
$(document).ready(function () {
    console.log("ready!");

    
    $("#target").click(function() {
        $('h1').css('color','orange');
        $('.conteudo').html(getImage('https://thumbs.web.sapo.io/?epic=ODE17CZdGi3wO0JVGLPXv4H9vFXbamBM1+mJOmZvo2zqiKqLiiIaBgynMzZFfCZnqCFDtA/Pq9UQyZBB26l6VUXJCLGza7bQJiaQ5cRGIliSjxU=&W=800&H=0&delay_optim=1', "Ola"));
    });
    $('#btn1').click(function() {
        $('h1').css('color','orange');
        $('.conteudo').html(getTable()); // outra maneira de alterar o html, tal e qual como se fizesse o getElementbyID(conteudo).innerHTML ...etc
    });
});

function getImage(srcImage,altImage) {
    
    return `<img src="${srcImage}" alt="$(altImage)">`;
}


function getTable() {
    return `<table style="width:100%">
    <tr>
      <th>Firstname</th>
      <th>Lastname</th> 
      <th>Age</th>
    </tr>
    <tr>
      <td>Jill</td>
      <td>Smith</td> 
      <td>50</td>
    </tr>
    <tr>
      <td>Eve</td>
      <td>Jackson</td> 
      <td>94</td>
    </tr>
  </table>`;
}

