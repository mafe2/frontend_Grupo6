$(function(){$("#guardar").on("click",function(){
        //e.preventDefault();
        //var nombre=document.getElementsById("nombre").value();
        var id=$("#id").val();
        var fechahora=$("#datetime").val();
        var novedad=$("#Novedad").val();
        var observacion = $("#observacion").val();
        var endpoint = "http://localhost:8080/novedad";
        console.log("id: " + id +  " fechahora: " + fechahora + " novedad: " + novedad + " observacion: " + observacion);
    
        fetch(endpoint,{
            method:"POST",
            mode:"cors",
            cache:"no-cache",
            headers:{"Content-type":"application/json"},
            body:JSON.stringify({id,fechahora,novedad,observacion})
        }).then(alert("Novedad guardada correctamente"))
    })
})
