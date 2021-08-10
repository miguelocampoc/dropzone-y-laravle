Dropzone.autoDiscover = false;

document.addEventListener('DOMContentLoaded', () => {
  
  const dropzoneUpload = new Dropzone('#dropzoneUpload', {
        autoProcessQueue: false,
        maxFilesize: 2,
        parallelUploads: 20,
        maxFiles: 20,
        url: "/dropzone/upload",
        dictDefaultMessage: 'Sube aquí tu archivo',
        acceptedFiles: ".png,.jpg,.jpeg,.gif,.bmp",
        addRemoveLinks: true,
        dictRemoveFile: 'Borrar Archivo',
    
        headers: {
                'X-CSRF-TOKEN': document.querySelector('meta[name=csrf-token]').content
            },
            init: function() {
              
              this.on("queuecomplete", function () {
            this.options.autoProcessQueue = false;
              });
   
              this.on("processing", function () {
                  this.options.autoProcessQueue = true;
                });
                this.on("addedfile", function(file) { 
                  file.previewElement.classList.add('dz-complete');
                  });
              $("#registrar").click(function(e){
                e.preventDefault();
               dropzoneDevJobs.processQueue();
               Swal.fire({
                   icon: 'success',
                   title: 'Su ha archivo ha sido subido',
                   timer: 2000
        
              }).then(function() {
              location.href="/tienda/administrador";
                });       
               
              }); 
            
            },
            success: function(file, response) {
                console.log(response);
               

            },
            error: function(file, response) {
                    Swal.fire({
                   icon: 'error',
                   title: 'Ops',
                   html:
                   '<span style="color:white"> Ops! Ha ocurrido un error </span>,'
                    })
                

            },
    
  });

});