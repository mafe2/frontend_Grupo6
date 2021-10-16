var downPdf = document.getElementById("renderPdf");

      downPdf.onclick = function() {
          html2canvas(document.body, {
              onrendered:function(canvas) {

                  var contentWidth = canvas.width;
                  var contentHeight = canvas.height;

                  // Una página de pdf muestra la altura del lienzo generado por la página html;
                  var pageHeight = contentWidth / 595.28 * 841.89;
                  
                  var leftHeight = contentHeight;
                  //desplazamiento de página pdf
                  var position = 0;
                  //El tamaño del papel a4 [595.28,841.89], el ancho y alto del lienzo generado por la página html en el pdf
                  var imgWidth = 555.28;
                  var imgHeight = 555.28/contentWidth * contentHeight;

                  var pageData = canvas.toDataURL('image/jpeg', 1.0);

                  var pdf = new jsPDF('', 'pt', 'a4');
                  //Hay dos alturas para distinguir, una es la altura real de la página html y la altura de la página que genera el pdf (841.89)
                  //Cuando el contenido no excede el rango mostrado en una página del pdf, no hay necesidad de paginación
                  if (leftHeight < pageHeight) {
                      pdf.addImage(pageData, 'JPEG', 20, 0, imgWidth, imgHeight );
                  } else {
                      while(leftHeight > 0) {
                          pdf.addImage(pageData, 'JPEG', 20, position, imgWidth, imgHeight)
                          leftHeight -= pageHeight;
                          position -= 841.89;
                          //Evite agregar páginas en blanco
                          if(leftHeight > 0) {
                              pdf.addPage();
                          }
                      }
                  }

                  pdf.save('content.pdf');
              }
          })
      }