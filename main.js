$(document).ready(function() {
    $('#botao-add').on('click', function(e) {
        e.preventDefault();
        const novaTarefa = $('#nova-tarefa').val();
        if (novaTarefa !== '') {
            const novoItem = $('<li></li>').text(novaTarefa);
            novoItem.on('click', function() {
                $(this).toggleClass('tarefa-concluida');
            });
            $('#lista-tarefas').append(novoItem);
            $('#nova-tarefa').val('');
        }
    });
});