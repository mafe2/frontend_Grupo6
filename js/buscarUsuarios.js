function buscarUsuario(){
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: true
      })
      
      swalWithBootstrapButtons.fire({
        title: 'Desea cerrar Sesión',
        text: "",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Si!',
        cancelButtonText: 'No, cancelar!',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            location.href='index.html'
          )
        } 
      })
    }

<script>
        $(function(){
            $("#cargar").click(function(){
                var endpoint="http://localhost:8080/usuario"
                $.get(endpoint,function(datos){
                    var i;
                    $("#cuerpotabla").html("")
                    for(i=0;i<datos.length;i++){
                        var linea=  `<tr><td>`+usuario.id+
                                    `</td><td>`+usuario.cedula+
                                    `</td><td>`+usuario.nombre+
                                    `</td><td>`+usuario.apellido+
                                    `</td><td>`+usuario.cargo+
                                    `</td><td>`+usuario.horario+
                                    `</td><td>`+usurario.diasLaborales+
                                    `</td><td>`+usurario.administrador+
                                    `</td></tr>`
                        console.log(linea)
                        $("#cuerpotabla").append(linea)
                    }    
                })
            })
        })

        $(function(){
            $("#buscar").click(function(){
                var id =$("#idusuario").val();
                var endpoint ="http://localhost:8080/usuario/"+cedula;
                $("#cuerpotabla").html("")
                $.get(endpoint,function(usuario){
                    var linea=  `<tr><td>`+usuario.id+
                                `</td><td>`+usuario.cedula+
                                `</td><td>`+usuario.nombre+
                                `</td><td>`+usuario.apellido+
                                `</td><td>`+usuario.cargo+
                                `</td><td>`+usuario.horario+
                                `</td><td>`+usurario.diasLaborales+
                                `</td><td>`+usurario.administrador+
                                `</td></tr>`
                    console.log(linea)
                    $("#cuerpotabla").append(linea)
                })
            })
        })
    </script>