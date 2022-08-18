class Nodo{

    info=0;
    ligaDer=null;
    ligaIzq=null;
}
export class ListaDoblementeLigada{

    INICIO=null;
    FIN=null;
 
    LISTA_CANVAS=null;
 
    constructor(listaCanvas) {
         this.LISTA_CANVAS = listaCanvas;
    }///////////////////////////////////////////

   isVacio(){
    if(this.INICIO==null)
       return true;
    else 
       return false;

  }///////////////////////////////////////////

  buscar(DATO){
   var encontrado=false;
   var	tmp=this.INICIO;

   while(tmp!=null){
    console.log(tmp.info);

       if(tmp.info==DATO){
           encontrado=true;
           break;
       }
       tmp=tmp.ligaDer;
   }
   
   return encontrado;
  }///////////////////////////////////////////

   inserta_inicio(DATO){

        if(this.INICIO==null){//Algoritmo Jorge

            var Q=new Nodo();
            Q.info=DATO;

            this.INICIO=Q;
            this.FIN=Q;
        }
        else{//Algoritmo cairo

            var P=this.INICIO;

            var Q=new Nodo();
            Q.info=DATO;
            Q.ligaDer=P;
            P.ligaIzq=Q;
            Q.ligaIzq=null;//Opcional no es necesario
            P=Q;

            this.INICIO=P;    
        }
        this.LISTA_CANVAS.inserta_inicio(this.INICIO);

    }///////////////////////////////////////////
    inserta_final(DATO){
        if(this.INICIO==null){
            throw new Error("LISTA VACIA");

        }else{
            var Q=new Nodo();
            Q.info=DATO;
            this.FIN.ligaDer=Q;
            Q.ligaIzq=this.FIN;
            this.FIN=Q;
        }
        this.LISTA_CANVAS.inserta_final(this.INICIO,this.FIN);
    }
    inserta_despues_X(DATO,x){
        if(this.INICIO==null){
            throw new Error("LISTA VACIA");
        }else{
            var Q=this.INICIO;
            while(Q.ligaDer!=null && Q.info!=x){
                Q=Q.ligaDer;
            }
            if(Q.info==this.FIN.info){
                this.inserta_final(DATO);
            }
            else{
                if(Q.info==x){
                    var P=new Nodo();
                    P.info=DATO;
                    var R=Q.ligaDer;
                    Q.ligaDer=P;
                    P.ligaIzq=Q;
                    P.ligaDer=R;
                    R.ligaIzq=P;  
                }
                else{
                    throw new Error("DATO NO SE ENCUENTRA EN LA LISTA");
                }
            }
        }
        this.LISTA_CANVAS.inserta_despues_X(this.INICIO,P);

    }
    insertar_antes_X(DATO,x){
        if(this.INICIO==null){
            throw new Error("LISTA VACIA");
        }
        else{
            var Q=this.INICIO;
            while(Q.ligaDer!=null && Q.info!=x){
                Q=Q.ligaDer;
            }
            if(Q==this.INICIO){
                this.inserta_inicio(DATO);
            }
            else{
                if(Q.info==x){
                    var P=new Nodo();
                    P.info=DATO;
                    var R=Q.ligaIzq;
                    R.ligaDer=P;
                    P.ligaIzq=R;
                    P.ligaDer=Q;
                    Q.ligaIzq=P;
                }
                else{
                    throw new Error("DATO NO SE ENCUENTRA EN LA LISTA");
                }
            }
        }
        this.LISTA_CANVAS.inserta_antes_X(this.INICIO,P);

    }
    eliminar_primer(){
        if(this.INICIO==null){
            throw new Error("LISTA VACIA");
        }
        else{
            this.INICIO=this.INICIO.ligaDer;
            this.INICIO.ligaIzq=null;
        }
        this.LISTA_CANVAS.elimina_inicio_post(this.INICIO);

    }
    eliminar_ultimo(){
        if(this.INICIO==null){
            throw new Error("LISTA VACIA");
        }
        else{
            this.FIN=this.FIN.ligaIzq;
            this.FIN.ligaDer=null;
        }
        this.LISTA_CANVAS.elimina_inicio_post(this.INICIO);

    }
    eliminar_X(x){
        if(this.INICIO==null){
            throw new Error("LISTA VACIA");

        }
        else{
            var Q=this.INICIO;
            var BAND=1;
            while(Q.ligaDer!=null && Q.info!=x){
                Q=Q.ligaDer;
                if(Q.ligaDer==null)BAND=0;
            }
            if(BAND==0){
                if(Q.info==this.FIN.info){
                    this.eliminar_ultimo();
                }
                else{
                    throw new Error(" DATO NO SE ENCUENTRA EN LA LISTA");
                }
            }
            else{
                if(Q.info==this.INICIO.info){  
                    this.eliminar_primer();
                }
                else{
                    var R;
                    var P;
                    R=Q.ligaIzq;
                    P=Q.ligaDer;
                    R.ligaDer=P;
                    P.ligaIzq=R;
                }

            }
        }
        this.LISTA_CANVAS.elimina_inicio_post(this.INICIO);

    }
    eliminar_antes_X(x){
        if(this.INICIO==null){
            throw new Error("LISTA VACIA");

        }
        else{
            if(this.INICIO.ligaDer.info==x){
                this.eliminar_primer();
            }
            else{
                var Q=this.INICIO;
                var BAND=1;
                while(Q.ligaDer!=null && Q.info!=x){
                    Q=Q.ligaDer;
                    if(Q.ligaDer==null)BAND=0;
                }
                if(BAND==0){
                    throw new Error(" DATO NO SE ENCUENTRA EN LA LISTA");
                }
                else{
                    var P=Q.ligaIzq.ligaIzq;
                    P.ligaDer=Q;
                    Q.ligaIzq=P;
                }   
            }
        }
        this.LISTA_CANVAS.elimina_inicio_post(this.INICIO);

    }
    eliminar_despues_X(x){
        if(this.INICIO==null){
            throw new Error("LISTA VACIA");

        }
        else{
            if(this.FIN.ligaIzq.info==x){
                this.eliminar_ultimo();
            }
            else{
                var Q=this.INICIO;
                var BAND=1;
                while(Q.ligaDer!=null && Q.info!=x){
                    Q=Q.ligaDer;
                    if(Q.ligaDer==null)BAND=0;
                }
                if(BAND==0){
                    throw new Error(" DATO NO SE ENCUENTRA EN LA LISTA");
                }
                else{
                    var P=Q.ligaDer.ligaDer;
                    Q.ligaDer=P;
                    P.ligaIzq=P;
                }   
            }
        }
        this.LISTA_CANVAS.elimina_inicio_post(this.INICIO);

    }

    dibujarNodosLogDer(){

        var P=this.INICIO;
        var cad="";
        while(P!=null){
            cad+=P.info+"::";
            P=P.ligaDer;
        }
        console.log(cad);

    }/////////////////////////////////////////////
    dibujarNodosLogIzq(){

        var P=this.FIN;
        var cad="";
        while(P!=null){
            cad+=P.info+"::";
            P=P.ligaIzq;
        }

        console.log(cad);
    }/////////////////////////////////////////////
    

    
} 