$('img').hide();

function mostrarAmigos(){
    $.get('http://localhost:5000/amigos',function(data){
        console.log(data);
        $('img').show();
        $('#lista').empty();
        for (const amigo of data) {
            $('#lista').append(`<li>${amigo.name}</li>`)
        }
        // for (let i = 0; i<data.length; i++){
        //     var listItem = document.createElement('li');
        //     listItem.textContent = data[i].name;
        //     $('#lista').append(listItem);
        // }
        $('img').hide();
    })
}

function borrarInputs(){
    $('#input').val('');
    $('#inputDelete').val('');
}

$('#boton').click(function(){
    mostrarAmigos();
})

$('#search').click(function(){
    id = $('#input').val();
    $('#amigo').empty();
    $.get('http://localhost:5000/amigos/'+id, function(data){
        var amigo = document.createElement('span');
        amigo.textContent = data.name;
        $('#amigo').append(amigo);
    })
    borrarInputs();
})

$('#delete').click(function(){
    let idDelete = $('#inputDelete').val();
    console.log(idDelete);
    $.ajax({
        url: 'http://localhost:5000/amigos/'+idDelete,
        type: 'DELETE',
        success: ()=>{
            $('#success').text(`Amigo con ID ${idDelete} removido con Exito`);
            mostrarAmigos();    
        },
    })
    borrarInputs();
})