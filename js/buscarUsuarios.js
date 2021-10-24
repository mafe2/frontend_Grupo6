$(async function(){$("#cargar").click(async function () {
    var endpoint = "http://localhost:8080/usuario";
    var endpointN = "http://localhost:8080/novedad/";
    var linea;
    const response = await fetch(endpoint);
    const datos = await response.json();
    var i;
    var j;
    console.log('datos');
    console.log(datos);
    $("#cuerpotabla").html("");
    if(datos==null){
            console.log("No hay usuarios registrados");
            return;
    }
    else{
        
        for (i = 0; i < datos.length; i++) {
                linea +=  `<sidebar>
                            <fieldset>
                            <table><legend>Informe de funcionario: <b>`;
                console.log('pase por aqui' + i)
                linea += datos[i].nombre + ` `+ datos[i].apellido + `</b></legend>`+
                            `<tr><td></td><td style="color:white">1</td></tr>`+
                        `<tr><td><b>Id Usuario:` + `</b></td>`+
                            `<td>`+ datos[i].id +  `</td></tr>`+
                        `<tr><td><b>Nombre de Usuario: </b></td>` +
                            `<td>`+ datos[i].nombreUsuario +  `</td></tr>`+
                        `<tr><td><b>Cedula:</b></td>` + `</b></td>`+ 
                            `<td>`+datos[i].cedula +`</td></tr>`+
                        `<tr><td><b>Cargo:</b></td>`+
                            `<td>` + datos[i].cargo + `</td></tr>`+
                        `<tr><td><b>Dias Laborales:</b></td>` +
                            `<td>`;                 
                linea +=datos[i].diasLaborales;
                linea += `</td></tr>` + 
                            `<tr><td><b>Horario:</b></td>`+ 
                                `<td>`+ datos[i].horario + `</td></tr>` +
                            `<tr><td style="color:white">1</td>
                                <td style="color:white">1</td></tr>
                            <tr><td style="color:white">1</td>
                                <td style="color:white"></td></tr>
                                </table>
                              </fieldset>
                            </sidebar>`;
                console.log('datos usuario '+i);
                console.log(datos[0]); 
                linea+= `<aside id="asideinfo">
                                <fieldset>
                                <table id="tablaInfo">
                                <legend>Info.</legend>`;
                console.log('datos['+ i+'].id');
                console.log(datos[i].id); 
                console.log('endpointN+datos[i].id');
                console.log(endpointN+datos[i].id);      
                let endpointid=  endpointN+datos[i].id;
                let novs_response = await fetch(endpointid);
                let novs = await novs_response.json();
                console.log('novs usuario '+ i);
                console.log(novs);
                if(novs==null){
                        console.log("hola vacio novedades");
                        /*return;*/
                }
                else{
                    if ((Array.from(novs)).length ==0){
                            linea+= `<tr><td><b>Fecha y hora:</b></td>`
                            linea+=     `<td>`+ novs.fecha_hora + `</td></tr>
                                    <tr><td><b>Novedad:</b></td>`+
                                        `<td>`+ novs.novedad+ `</td></tr>
                                    <tr><td><b>observacion:</b></td>` +
                                        `<td>`+ novs.observacion + `</td></tr>`;
                    }
                    else{
                            for (j = 0; j < novs.length; j++) {
                                linea+= `<tr><td><b>Fecha y hora:</b></td>`
                                linea+=     `<td>`+ novs[j].fecha_hora + `</td></tr>
                                          <tr><td><b>Novedad:</b></td>`
                                              `<td>`+ novs[j].novedad+ `</td></tr>
                                          <tr><td><b>observacion:</b></td>` +
                                              `<td>`+ novs[j].observacion + `</td></tr>`;
                            }
                    }

                }
                linea+=         `</table>
                            </fieldset>
                        </aside>`;
                console.log('datos usuario ' + i + ' novedades usuario ' + i);
                console.log(linea);
        }
            
    }
    console.log(linea);
    $("#cuerpotabla").append(linea);
    });        
});


$(function(){$("#buscar").click(function () {
    var id = $("#idusuario").val();
    var endpoint = "http://localhost:8080/usuario/" + id;
    var endpointN = "http://localhost:8080/novedad/" + id;
    var j;
    $("#cuerpotabla").html("");
    $.get(endpoint, function (datos) {
        
        console.log('datos');
        console.log(datos);
        if(datos==null){
          console.log("El usuario con id: " + id + " no existe")
        }
        else{
          var linea = `<sidebar>
                              <fieldset>
                                  <table><legend>Informe de funcionario: <b>`;
          linea += datos.nombre + ` `+ datos.apellido + `</b></legend>`+
                          `<tr><td></td><td style="color:white">1</td></tr>`+
                      `<tr><td><b>Id Usuario:` + `</b></td>`+
                          `<td>`+ datos.id +  `</td></tr>`+
                      `<tr><td><b>Nombre de Usuario: </b></td>` +
                          `<td>`+ datos.nombreUsuario +  `</td></tr>`+
                      `<tr><td><b>Cedula:</b></td>` + `</b></td>`+ 
                          `<td>`+datos.cedula +`</td></tr>`+
                      `<tr><td><b>Cargo:</b></td>`+
                          `<td>` + datos.cargo + `</td></tr>`+
                      `<tr><td><b>Dias Laborales:</b></td>` +
                          `<td>`;
          linea += datos.diasLaborales;                
              /*for (dia in usuario.diasLaborales) {
                      linea += dia + `,`;
              }*/
          linea+=     `</td></tr>` + 
                      `<tr><td><b>Horario:</b></td>`+ 
                          `<td>`+ datos.horario + `</td></tr>` +
                      `<tr><td style="color:white">1</td>
                          <td style="color:white">1</td></tr>
                      <tr><td style="color:white">1</td>
                          <td style="color:white"></td></tr>
                          </table>
                        </fieldset>
                      </sidebar>`;
          /*console.log('datos');
          console.log(linea);*/
          linea+= `<aside id="asideinfo">
                              <fieldset>
                              <table id="tablaInfo">
                              <legend>Info.</legend>`;
          $.get(endpointN, function (novs) {
            console.log(novs);
            if(novs==null){
              console.log("El usuario con id: " + id + " no tiene novedades registradas")
            }
            else{
                if ((Array.from(novs)).length ==0){
                linea+= `<tr><td><b>Fecha y hora:</b></td>`
                linea+=     `<td>`+ novs.fecha_hora + `</td>
                                    <tr><td><b>Novedad:</b></td>`+
                                        `<td>`+ novs.novedad+ `</td>
                                    <tr><td><b>observacion:</b></td>` +
                                        `<td>`+ novs.observacion + `</td>`;
                /*console.log('datos + info una novedad')
                console.log(linea)*/
                }
                else{
                  for (j= 0; j < novs.length; j++) {
                    linea+= `<tr><td><b>Fecha y hora:</b></td>`
                    linea+=     `<td>`+ novs[j].fecha_hora + `</td>
                            <tr><td><b>Novedad:</b></td>`+
                                `<td>`+ novs[j].novedad+ `</td>
                            <tr><td><b>observacion:</b></td>` +
                                `<td>`+ novs[j].observacion + `</td>`;
                    /*console.log('datos + info mas de una novedad')              
                    console.log(linea)*/
                  }
                }
              }
            linea+=     `</table>
                    </fieldset>
                  </aside>`;
            console.log('datos + info cierre(table fieldset aside)')   
            console.log(linea);
            $("#cuerpotabla").append(linea);
            linea ="";
            
          })
        }   
    });
  });
});