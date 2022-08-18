class Nodo{

    info=0;
    liga=null;
}
export class Lista{
  
   INICIO=null;
   canvas=null;

   constructor(canvas) {
    this.canvas = canvas;
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
        if(tmp.info==DATO){
            encontrado=true;
            break;
        }
        tmp=tmp.liga;
    }
    
    return encontrado;
   }///////////////////////////////////////////
   inserta_inicio(DATO){

       var P=this.INICIO;
       var Q=new Nodo();
       Q.info=DATO;
       Q.liga=P;
       P=Q;

       this.INICIO=P;
   }///////////////////////////////////////////
   inserta_final(DATO){
        var P=this.INICIO;
        
        var T=P;
        while(T.liga!=null){
            T=T.liga; 
        }
        var Q=new Nodo();
        Q.info=DATO;
        Q.liga=null;
        T.liga=Q;
        
        this.INICIO=P;
    }/////////////////////////////////////////////
    dibujarNodosLog(){

        var	tmp=this.INICIO;
        var cad="";
        while(tmp!=null){
            cad+=tmp.info+"::";
            tmp=tmp.liga;
        }
        console.log(cad);
    }
    inserta_antes_X (DATO,X){
        var P=this.INICIO;
        
        var Q=P;
        var BAND=1;
        var T;
        while ( Q.info!=X && BAND==1 ){
            if(Q.liga!=null){
                T=Q;
                Q=Q.liga;
            }
            else{
                BAND=0;
            }
        }
        if(BAND==1){
            var X1=new Nodo();
            X1.info=DATO;
            if(P==Q){
                X1.liga=P;
                P=X1;
            }
            else{
                T.liga=X1;
                X1.liga=Q;
            }
        }
        else{

            throw new Error("EL NODO DADO COMO REFERENCIA NO SE ENCUENTRA EN LA LISTA");
        }
        
        this.INICIO=P;
    }


    inserta_despues_X(DATO,X){
        var P=this.INICIO;
        
        var Q=P;
        var BAND=1;
        var T;
        while ( Q.info!=X && BAND==1 ){
            if(Q.liga!=null){
                Q=Q.liga
            }
            else{
                BAND=0;
            }
        }
        if(BAND==1){
            var T=new Nodo();
            
            T.info=DATO;
            T.liga=Q.liga;
            Q.liga=T;
        }
        else{

            throw new Error("EL NODO DADO COMO REFERENCIA NO SE ENCUENTRA EN LA LISTA");
        }
        
        this.INICIO=P;
    }
    
    elimina_inicio(){
        let Q = this.INICIO;
        this.INICIO = Q.liga;
    } 
    //////////////////////////////////////////////////

    eliminar_ultimo_nodo(){
        if(this.INICIO.liga==null){
            this.INICIO=null;
        }
        else{
            var Q=this.INICIO;
            var T;
            while(Q.liga!=null){
                T=Q;
                Q=Q.liga;
            }
            T.liga=null;
        }
    }
    ///////////////////////////////////////////////
    eliminar_primer_nodo(){
        var Q=this.INICIO;
        this.INICIO=Q.liga;
    }

    eliminar_ultimo_nodo(){
        if(this.INICIO.liga==null){
            this.INICIO=null;
        }
        else{
            var Q=this.INICIO;
            var T;
            while(Q.liga!=null){
                T=Q;
                Q=Q.liga;
            }
            T.liga=null;
        }
    }

    eliminar_nodo_X(X){
        var Q=this.INICIO;
        var T;
        var BAND=1;
        while(Q.info!=X && BAND==1){
            if(Q.liga!=null){
                T=Q;
                Q=Q.liga;
            }
            else{
                BAND=0;
            }
        }
        if(BAND==0){
            throw new Error("EL NODO DADO COMO REFERENCIA NO SE ENCUENTRA EN LA LISTA");
        }
        else{
            if(this.INICIO==Q){
                this.INICIO=Q.liga;
            }
            else{
                T.liga=Q.liga;
            }   
        }
    }



    eliminar_antes_X(X){
        if(this.INICIO.info==X){
            throw new Error("NO EXISTE UN NODO QUE PRECEDA AL QUE CONTIENE X");
        }
        else{   
            var Q=this.INICIO;
            var T=this.INICIO;
            var BAND=1;
            var R;
            while(Q.info!=X && BAND==1){
                if(Q.liga!=null){
                    R=T;
                    T=Q;
                    Q=Q.liga;
                }
                else{
                    BAND=0;
                }
            }
            if(BAND==1){
                if(this.INICIO.liga==Q){
                    this.INICIO=Q;
                }
                else{
                    R.liga=Q;
                }
            }
            else{
              throw new Error("el nodo no se encuentra en la lista");
            }
        }
    }

    ////////////////////////////////////////////////////////////////

    eliminar_despues_X(X){
        var Q=this.INICIO;
        var T;
        var BAND=1;

        while(Q.info!=X && BAND==1){
            if(Q.liga!=null){
                Q=Q.liga;
            }
            else{  
                BAND=0;
             }
        }
        if(BAND==1){
            if(Q.liga!=null){
                T=Q.liga;
                Q.liga=T.liga;
            }
            else{
                throw new Error("NO EXISTE NODO POSTERIOR AL QUE CONTIENE X");
            }
        }
        else{

            throw new Error("EL NODO DADO COMO REFERENCIA NO SE ENCUENTRA EN LA LISTA");

        }
    }

    /////////////////////////////////////////////////////////////////////
    
    eliminar_ultimo_nodo(){
        if(this.INICIO.liga==null){
            this.INICIO=null;
        }
        else{
            var Q=this.INICIO;
            var T;
            while(Q.liga!=null){
                T=Q;
                Q=Q.liga;
            }
            T.liga=null;
        }
    }
    
       
    

    dibujarNodos(valor){

        var canvas=this.canvas;
        var ctx = canvas.getContext('2d');
        var	tmp=this.INICIO;
        
        var x=0;
        var y=0;
        var ctd=0;
        
        ctx.clearRect(0, 0, canvas.width, canvas.height);//limpia el canva 

        var nodo=null;

        while(tmp!=null){
            
            if(valor != undefined && tmp.info==valor){
                //Dibujar rectangulo
                ctx.beginPath();
                ctx.fillStyle = "#0aafff";//GRIS
                ctx.fillRect (x,y, 55,30);
                
                nodo={};
                nodo.x=x;
                nodo.y=y;
                nodo.width=55;
                nodo.height=30;
                nodo.info=tmp.info;

            }
            else{
             //Dibujar rectangulo
             ctx.beginPath();
             ctx.fillStyle = "rgb(230, 5, 230)";  //ROJO
             ctx.fillRect (x,y, 55,30);
            }    

            //texto
            ctx.fillStyle="white";
            ctx.font = '15px Arial';
            ctx.fillText(tmp.info,x+20,y+20);
            ctx.closePath();

            //Dibujar flecha
            //linea de la flecha
            ctx.beginPath();
            ctx.moveTo(x+55,y+15);
            ctx.lineTo(x+55+20,y+15);
            ctx.closePath();
            ctx.stroke();
            //cabeza de la flecha
            ctx.beginPath();
            ctx.fillStyle="white";
            ctx.moveTo(x+55+20,y+10);
            ctx.lineTo(x+55+20+5,y+15);
            ctx.lineTo(x+55+20,y+20);
            ctx.closePath();
            ctx.fill();

            x=80*++ctd;
            tmp=tmp.liga;
        }

        if(nodo!=null){

            setTimeout(function(){

                ctx.beginPath();
                ctx.fillStyle = "#1400ff";//ROJO
                ctx.fillRect (nodo.x,nodo.y,nodo.width,nodo.height);
    
                //texto
                ctx.fillStyle="white";
                ctx.font = '15px Arial';
                ctx.fillText(nodo.info,nodo.x+20,nodo.y+20);
                ctx.closePath();

            },2000);
           
        }
        
    }
}