const opcion = document.querySelector(".sel_regex")
const validacion = document.querySelector(".validacion");
opcion.addEventListener("input",(e)=>{
    
    validacion.value="";
        
})
        validacion.addEventListener("keypress",(e)=>{
            if(opcion.value=="1"){
                let str=validacion.value;
                let canti_str=validacion.value.length;
                if(/\d+[-]\d{1}$/.test(validacion.value)){    //aqui uso el keypress porque aparentemente este no puede leer el ultimo numero que se ingreso solo permite el keyup 
                    e.preventDefault()                        //(supongo que el key up lee el numero porque los numeros se registran cuando scas el dedo del teclado) asique en este
                }                                             //caso me sirve ya que siempre recibira un valor con 1 caracter menos y asi no me dejara introducir nada cuando ya este el formato
        
                if(str.slice(canti_str-2,canti_str-1)=="-" && str.slice(-1)=="-"){  //volver a validar poara qye no se repita 
                    validacion.value=validacion.value.slice(0,canti_str-1)
                }                   
        
                if(!/\d|[-]/.test(str.slice(-1))){                            
                    validacion.value=validacion.value.slice(0,canti_str-1)   //aqui debo controlar otra vez porque si mantengo pulsado pasa la barrera :(
                }
                if(str.charAt(0)=="-"){
                    validacion.value=validacion.value.slice(0,canti_str-1)  //validar que no tenga un guion al principio
                }
            } 
        })
        validacion.addEventListener("keyup",(e)=>{
            if(opcion.value=="1"){
                console.log("soy keyup")
                let str=validacion.value;
                let canti_str=validacion.value.length;
        
                if(str.charAt(0)=="-"){
                    validacion.value=validacion.value.slice(0,canti_str-1)  //validar que no tenga un guion al principio
                }
        
                if(str.slice(canti_str-2,canti_str-1)=="-" && str.slice(-1)=="-"){   //validar que no haya 2 guiones
                    validacion.value=validacion.value.slice(0,canti_str-1)
                }
            
                if(!/\d|[-]/.test(str.slice(-1))){                            //aqui si puedo evaluar el ultimo digito asique si puedo borrar el ultimo digito que ingreso
                    validacion.value=validacion.value.slice(0,canti_str-1)
                } 
            }
        })
        
