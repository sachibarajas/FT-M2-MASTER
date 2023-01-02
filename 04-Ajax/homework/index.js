$('#boton').click(()=>{
    var listaAmigos = $('#lista');
    listaAmigos.empty();
    $.get('http://localhost:5000/amigos', (data)=>{
        for(let i=0; i<data.length;i++){
            listaAmigos.append(`<li>${data[i].name}</li>`);
            
        }
    })
});

$('#search').click(()=>{
    var id = $('#input').val();
    $('#amigo').empty();
    $.get(`http://localhost:5000/amigos/${id}`, (data)=>{
        var datos = data;
        console.log(datos)
        $('#amigo').text(`${data.name}`)
        if(!data){
            $('#amigo').text(`Amigo no existe`)
        }
    })
});

$('#delete').click(()=>{
    var id = $('#inputDelete').val();
    $.ajax({
        url: `http://localhost:5000/amigos/${id}`,
        type: 'DELETE',
        success: ()=>{
            $('#success').text('Amigo Borrado con Exito')
            var listaAmigos = $('#lista');
            listaAmigos.empty();
            $.get('http://localhost:5000/amigos', (data)=>{
                for(let i=0; i<data.length;i++){
                    listaAmigos.append(`<li>${data[i].name}</li>`);
                    
                }
            })
        }
    })
});