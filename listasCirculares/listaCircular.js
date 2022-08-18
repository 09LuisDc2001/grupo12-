class Nodo{
    info = 0;
    liga = null;
}

export class listaCircularLigada{

   inicio = null;
   canvas=null;

   constructor(canvas) {
    this.canvas = canvas;
   }


    isVacio(){
        if(this.inicio== null){
            return true;
        }

        else return false;
    }

    buscar(DATO){
       var encontrado=false;
       if(this.inicio.info==DATO){
            encontrado=true;
       }
       var	tmp=this.inicio.liga;
       while(tmp!=this.inicio){
           if(tmp.info==DATO){
               encontrado=true;
               break;
           }
           tmp=tmp.liga;
       }
       
       return encontrado;
    }

    ver(){
        if(this.isVacio()==true){
            console.log("vacio");
        }
        else{
            var cad ="";
            var P=this.inicio;
                
                var F=P;
                
                if(F.liga==P){//1
                    
                    cad +=P.info + "::";
                    cad += P.liga.info;
                    
                }
                else{//2 o mas
                
                    while(F.liga!=P){
                        cad += F.info + "::";
                        F=F.liga;
                    }    
                    cad += F.info + "::";
                    cad += F.liga.info;
                }
                
                console.log(cad);
            }
            
        
        
    }//////////////////////////////////////////////////
    inserta_final(DATO){
       if(this.inicio==null){
           
              var P =this.inicio;
              
              var Q =new Nodo();
              Q.info=DATO;
              Q.liga=Q;
              P=Q;
              
            
       }
       else{
          
           var P=this.inicio;
        
           var T=P;
            while(T.liga!=P){//ultimo nodo
               T=T.liga; 
            }
            var Q=new Nodo();
            Q.info=DATO;
           
            T.liga=Q;
            
            Q.liga=P;
            
         
          
       } 
       this.inicio=P;
       
       
    }//////////////////////////////////////////////////////////
    inserta_inicio(DATO){
        if(this.inicio== null){//vacio
            var P=this.inicio;
              
              var Q=new Nodo();
              Q.info=DATO;
              Q.liga=Q;
              P=Q;
              
              
        }
        else{//no vacio
           
            var P=this.inicio;
        
            var Q=new Nodo();
            Q.info=DATO;
            
            var F=P;//buscar el ultimo
            while(F.liga!=P){
                F=F.liga;
            }
            F.liga=Q;
            Q.liga=P;
            P=Q;
            
                   
        }
        this.inicio = P;
       
    }//////////////////////////////////////////////////////////////////////
    inserta_antes_X ( DATO, X){
        var P =this.inicio;
        
        var Q=P;
        var  BAND=1;
        var T;
        while ( Q.info !=X && BAND==1 ){
            if(Q.liga!=P){//<-------OJO
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
                
                /////////////////////////////
                var U=P;
                while(U.liga!=P){//llegar al ultimo;
                    
                    U=U.liga;
                }
                ////////////////////////////
                
                X1.liga=P;
                P=X1;
                
                ////////////////////////////   
                U.liga=P;
                ////////////////////////////
            }
            else{
                T.liga=X1;
                X1.liga=Q;
            }
        }
        else{
            console.log("EL NODO DADO COMO REFERENCIA NO SE ENCUENTRA EN LA LISTA");
        }
        
        this.inicio=P;
    }//////////////////////////////////////////////////////////////////////
    inserta_despues_X(DATO, X){
        var P=this.inicio;
        
        var Q=P;
        var BAND=1;
        while ( Q.info!=X && BAND==1 ){
            if(Q.liga!=P){//////<-------OJO
                Q=Q.liga;
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
            console.log("EL NODO DADO COMO REFERENCIA NO SE ENCUENTRA EN LA LISTA");
        }
        
        this.inicio=P;
    }//////////////////////////////////////////////////////////////////////
	eliminar_primer_nodo(){
        var Q=this.inicio;
        var P=Q;
        if(Q.liga==Q){
            this.inicio=null;
        }
        else{
            while(P.liga!=Q){
                P=P.liga;
            }
            this.inicio=Q.liga;
            P.liga=this.inicio;

        }
    }
    eliminar_ultimo_nodo(){
        
        var Q=this.inicio;
        var P=Q;
        if(Q.liga==Q){
            this.inicio=null;
        }
        else{
            while(P.liga!=this.inicio){
                Q=P;
                P=P.liga;
            }
            Q.liga=this.inicio;
        }
    }
    eliminar_nodo_X(X){
        var Q=this.inicio;
        var T=Q;
        var BAND=1;
        while(Q.info!=X && BAND==1){
            if(Q.liga!=this.inicio){
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
            if(this.inicio==Q){
                this.eliminar_primer_nodo();
            }
            else{
                T.liga=Q.liga;
            }           
        }              
    }
    eliminar_antes_X(X){
        var Q=this.inicio;
        var T=Q;
        var R=Q;
        var BAND=1;
        while(Q.info!=X && BAND==1){
            if(Q.liga!=this.inicio){
                R=T;
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
            if(this.inicio.info==X){
                this.eliminar_ultimo_nodo()
            }
            else{
                if(this.inicio.liga.info==X){
                    this.eliminar_primer_nodo();
                }
                else{
                    T.liga=Q;
                }
            }
        }
    }
    eliminar_despues_X(X){
        var Q=this.inicio;
        var T;
        var BAND=1;
        while(Q.info!=X && BAND==1){
            if(Q.liga!=this.inicio){
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
            if(Q.liga==this.inicio){
                this.eliminar_primer_nodo();               
            }
            else{
                T=Q.liga;
                Q.liga=T.liga;
            }
        }       

    }
    dibujarNodosLog(){
        var P=this.inicio;
        var cad="";
        if(P!=null){
            var F=P;
            
            if(F.liga==P){//1
                cad=P.info+"::";
                cad=cad+P.liga.info;
                
            }
            else{//2 o mas
            
                while(F.liga!=P){
                    cad=cad+F.info+"::";
                    F=F.liga;
                }    
                cad=cad+F.info+"::";
                cad=cad+F.liga.info;
            }
        }
        console.log(cad);
        return cad;
    }

    dibujarNodos(valor){

        var canvas=this.canvas;
        var ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);//limpia el canva 


        var	tmp=this.inicio;
        var x=0;
        var y=0;
        var ctd=0;	
        var nodo = null;
        ////////////
        //para el caso de dibujar el primero con fecha circular
        var cont=0;	
        ////////////////////////////////////////////////////////

        while(tmp!=null){//dibuja toda la lista

            if(valor != undefined && tmp.info==valor){
                //Dibujar rectangulo
                ctx.beginPath();
                ctx.fillStyle = "rgb(125,125,125)";//GRIS
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
            ctx.fillStyle = "rgb(255,255,255)";
            ctx.fillRect (x,y, 55,30);
            }


            //texto
            ctx.fillStyle="black";
            ctx.font = '15px Arial';
            ctx.fillText(tmp.info,x+20,y+20);
            ctx.closePath();
            ctx.strokeStyle = "#FFFFFF";
            if(tmp.liga==this.inicio){ /// EL FINAL TIENE QUE DIBUJAR HACIA EL PRIMERO
                ////////////////CASO DEL PRIMERO:

                if(cont==0){

                    //FLECHA QUE VA A LA DERECHA 
                    ctx.beginPath();
                    ctx.moveTo(x+55,y+15);
                    ctx.lineTo(x+55+20,y+15);
                    ctx.closePath();
                    ctx.stroke();
                    //FLECHA QUE BAJA
                    ctx.beginPath();
                    ctx.moveTo(x+55+20,y+15);
                    ctx.lineTo(x+55+20,y+55);
                    ctx.closePath();
                    ctx.stroke();
                    //FLECHA QUE A LA IZQUIERDA
                    ctx.beginPath();
                    ctx.moveTo(x+55+20,y+55);
                    ctx.lineTo(x+26,y+55);
                    ctx.closePath();
                    ctx.stroke();
                    ///////////////////////////////////////////////////////////////////////////////////
                    //Dibujar flecha
                    //linea de la flecha
                    ctx.beginPath();
                    ///flecha que mira para abajo
                    ctx.moveTo(x+27,y+30);
                    ctx.lineTo(x+27,y+30+25);
                    ///fecha que va hacia la izquierda
                    ctx.moveTo(x+27,y+55);
                    ctx.lineTo(x+27-x,y+30+25);
                    ///fecha que va para arriba
                    ctx.moveTo(x+27-x,y+55);
                    ctx.lineTo(x+27-x,y+30-1);
                    /////////////////////////////
                    ctx.closePath();
                    ctx.stroke();
                    //cabeza de la flecha
                    ctx.beginPath();
                    ctx.fillStyle="white";
                    ctx.moveTo(x+27-x-5,y+35);
                    ctx.lineTo(x+27-x+5,y+35);
                    ctx.lineTo(x+27-x,y+35-5);
                    ctx.closePath();
                    ctx.fill();

                }

                //Dibujar flecha
                //linea de la flecha
                ctx.beginPath();
                ///flecha que mira para abajo
                ctx.moveTo(x+27,y+30);
                ctx.lineTo(x+27,y+30+25);
                ///fecha que va hacia la izquierda
                ctx.moveTo(x+27,y+55);
                ctx.lineTo(x+27-x,y+30+25);
                ///fecha que va para arriba
                ctx.moveTo(x+27-x,y+55);
                ctx.lineTo(x+27-x,y+30-1-y);
                /////////////////////////////
                ctx.closePath();
                ctx.stroke();
                //cabeza de la flecha
                ctx.beginPath();
                ctx.fillStyle="white";
                ctx.moveTo(x+27-x-5,y+35-y);
                ctx.lineTo(x+27-x+5,y+35-y);
                ctx.lineTo(x+27-x,y+35-5-y);
                ctx.closePath();
                ctx.fill();
    
            }else{
                if(x>canvas.width-150){//para que baje si supera el limite 
                    //Dibujar flecha
                    //FLECHA QUE VA A LA DERECHA 
                    ctx.beginPath();
                    ctx.moveTo(x+55,y+15);
                    ctx.lineTo(x+55+20,y+15);
                    ctx.closePath();
                    ctx.stroke();
                    //FLECHA QUE BAJA
                    ctx.beginPath();
                    ctx.moveTo(x+55+20,y+15);
                    ctx.lineTo(x+55+20,y+40);
                    ctx.closePath();
                    ctx.stroke();
                    ///fecha que va hacia la izquierda
                    ctx.moveTo(x+55+20,y+40);
                    ctx.lineTo(x+27-x+80,y+40);
                    ///fecha que va para abajo
                    ctx.moveTo(x+107-x,y+40);
                    ctx.lineTo(x+107-x,y+50);
                    /////////////////////////////
                    ctx.closePath();
                    ctx.stroke();
                    //cabeza de la flecha
                    ctx.beginPath();
                    ctx.fillStyle="white";
                    ctx.moveTo(x+107-x-5,y+45);
                    ctx.lineTo(x+107-x+5,y+45);
                    ctx.lineTo(x+107-x,y+45+5);
                    ctx.closePath();
                    ctx.fill();
    
                }else{
                    ///////////CASO NORMAL 
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

                }
                
            }

            ////////////////////////////////////////////////////////////
            if(x>canvas.width-150){ // para que baje si supera el limite 
                ctd=1;
                x=80;
                y=y+50;
            }
            else{
                x=80*++ctd;
            }

            if(tmp.liga==this.inicio){
                break;
            }
            tmp=tmp.liga;
            cont++;
        }

        if(nodo!=null){

            setTimeout(function(){

                ctx.beginPath();
                ctx.fillStyle = "rgb(255,255,255)";
                ctx.fillRect (nodo.x,nodo.y,nodo.width,nodo.height);
    
                //texto
                ctx.fillStyle="black";
                ctx.font = '15px Arial';
                ctx.fillText(nodo.info,nodo.x+20,nodo.y+20);
                ctx.closePath();

            },1000);
           
        }
        
    }

   

}


