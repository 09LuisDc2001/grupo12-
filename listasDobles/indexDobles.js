import {ListaDoblementeLigada} from './listaDoble.js';
import {bootbox_prompt,bootbox_alert} from '../utils/dialog.js';
import { ListaDoblementeLigadaCanvas } from './listaCanvas.js';
import { audios } from '../sound/audio.js';

let lista=null;
let listaCanvas=null;
const audio = new audios();

export async function insertar_al_inicio(){
    
    if(lista==null){
        var canvas=document.getElementById('tutorial3');

        listaCanvas=new ListaDoblementeLigadaCanvas(canvas);
        lista=new ListaDoblementeLigada(listaCanvas);	
    }
    
    var DATO = await bootbox_prompt("ingrese valor de nodo");
    if(DATO==null || DATO.trim()=="")
        return;


    try{
        

        DATO=DATO.trim();
        if(lista.buscar(DATO)==true)
        throw new Error("EL NODO YA SE INGRESO");

        lista.inserta_inicio(DATO);
        
        console.log("recorrido derecha");
        lista.dibujarNodosLogDer();
        console.log("recorrido izquierda");	
        lista.dibujarNodosLogIzq();	
        audio.crea.play();

    
    }catch(e){
        console.log(e);
        audio.fail.play();
        await bootbox_alert(e.message);
    }
}////////////////////////////////////////////////////////




export async function insertar_al_final(){
    
    if(lista==null){
        var canvas=document.getElementById('tutorial3');

        listaCanvas=new ListaDoblementeLigadaCanvas(canvas);
        lista=new ListaDoblementeLigada(canvas);	
    }
    
    var DATO = await bootbox_prompt("ingrese valor de nodo");
    if(DATO==null || DATO.trim()=="")
        return;

    try{

        if(lista.buscar(DATO)==true)
        throw new Error("EL NODO YA SE INGRESO");

        DATO=DATO.trim();
        
        lista.inserta_final(DATO);
        
        console.log("recorrido derecha");
        lista.dibujarNodosLogDer();
        console.log("recorrido izquierda");	
        lista.dibujarNodosLogIzq();	
        audio.crea.play();
    
    }catch(e){
        console.log(e);
        audio.fail.play();
        await bootbox_alert(e.message);
    }
}////////////////////////////////////////////////////////






export async function insertar_antes_x(){
    var canvas=document.getElementById('tutorial3'); 
    if(lista==null){

        listaCanvas=new ListaDoblementeLigadaCanvas(canvas);
        lista=new ListaDoblementeLigada(canvas);		
    }
    
    try{

        if(lista.isVacio()==true){//la lista esta vacia
            throw new Error("LA LISTA ESTA VACIA");
        }
       
        var DATO = await bootbox_prompt("ingrese valor de DATO");
        if(DATO==null || DATO.trim()=="")
                return;
                
        if(lista.buscar(DATO)==true)
            throw new Error("EL NODO YA SE INGRESO");
    
        DATO=DATO.trim();
        
        var X = await bootbox_prompt("ingrese valor de X");
        if(X==null || DATO.trim()=="")
                return;
        
        X=X.trim();
        lista.insertar_antes_X(DATO,X);
        console.log("recorrido derecha");
        lista.dibujarNodosLogDer();
        console.log("recorrido izquierda");	
        lista.dibujarNodosLogIzq();
        audio.crea.play();

    }catch(e){
        console.log(e);
        audio.fail.play();
        await bootbox_alert(e.message);
    }

}/////////////////////////////////////////////////////////





export async function insertar_despues_x(){
    var canvas=document.getElementById('tutorial3'); 
    if(lista==null){

       listaCanvas=new ListaDoblementeLigadaCanvas(canvas);
       lista=new ListaDoblementeLigada(canvas);		
    }
    
    try{

        if(lista.isVacio()==true){//la lista esta vacia
            throw new Error("LA LISTA ESTA VACIA");
        }
       
        var DATO = await bootbox_prompt("ingrese valor de DATO");
        if(DATO==null || DATO.trim()=="")
                return;
               
        if(lista.buscar(DATO)==true)
            throw new Error("EL NODO YA SE INGRESO");
    
        DATO=DATO.trim();
        
        var X = await bootbox_prompt("ingrese valor de X");
        if(X==null || DATO.trim()=="")
                return;
        
        X=X.trim();
        lista.inserta_despues_X(DATO,X);
        console.log("recorrido derecha");
        lista.dibujarNodosLogDer();
        console.log("recorrido izquierda");	
        lista.dibujarNodosLogIzq();
        audio.crea.play();


    }catch(e){
        console.log(e);
        audio.fail.play();
        await bootbox_alert(e.message);
    }

}/////////////////////////////////////////////////////////





export async function eliminar_primer_nodo(){
    var canvas=document.getElementById('tutorial3'); 
    if(lista==null){
        listaCanvas=new ListaDoblementeLigadaCanvas(canvas);
        lista=new ListaDoblementeLigada(canvas);		
    }

    try{
        
        if(lista.isVacio()==true){//la lista esta vacia
            throw new Error("LA LISTA ESTA VACIA");
        }
       

        await lista.eliminar_primer();
        console.log("recorrido derecha");
        lista.dibujarNodosLogDer();
        console.log("recorrido izquierda");	
        lista.dibujarNodosLogIzq();
        audio.elimina.play();

        await bootbox_alert("NODO ELIMINADOS SATISFACTORIAMENTE");
    
    }catch(e){
        console.log(e);
        audio.fail.play();
        await bootbox_alert(e.message);
    }
}/////////////////////////////////////////////////////////









export async function eliminar_ultimo_nodo(){
    var canvas=document.getElementById('tutorial3'); 
    if(lista==null){
        listaCanvas=new ListaDoblementeLigadaCanvas(canvas);
        lista=new ListaDoblementeLigada(canvas);		
    }

    try{
        
        if(lista.isVacio()==true){//la lista esta vacia
            throw new Error("LA LISTA ESTA VACIA");
        }
   

        await lista.eliminar_ultimo();
        console.log("recorrido derecha");
        lista.dibujarNodosLogDer();
        console.log("recorrido izquierda");	
        lista.dibujarNodosLogIzq();
        audio.elimina.play();

        await bootbox_alert("NODO ELIMINADOS SATISFACTORIAMENTE");
    
    }catch(e){
        console.log(e);
        audio.fail.play();
        await bootbox_alert(e.message);
    }
}/////////////////////////////////////////////////////////








export async function eliminar_nodo_X(){
    var canvas=document.getElementById('tutorial3'); 
    if(lista==null){
        listaCanvas=new ListaDoblementeLigadaCanvas(canvas);
        lista=new ListaDoblementeLigada(canvas);		
    }

    try{
        
        if(lista.isVacio()==true){//la lista esta vacia
            throw new Error("LA LISTA ESTA VACIA");
        }

        var X = await bootbox_prompt("ingrese el valor de X");
        if(X== null || X.trim() == ""){
            return ;
        }
      

        await lista.eliminar_X(X);
        console.log("recorrido derecha");
        lista.dibujarNodosLogDer();
        console.log("recorrido izquierda");	
        lista.dibujarNodosLogIzq();
        audio.elimina.play();

        await bootbox_alert("NODO ELIMINADOS SATISFACTORIAMENTE");
    
    }catch(e){
        console.log(e);
        audio.fail.play();
        await bootbox_alert(e.message);
    }
}/////////////////////////////////////////////////////////








export async function eliminar_antes_NodoX(){
    var canvas=document.getElementById('tutorial3'); 
    if(lista==null){
        listaCanvas=new ListaDoblementeLigadaCanvas(canvas);
        lista=new ListaDoblementeLigada(canvas);		
    }

    try{
        
        if(lista.isVacio()==true){//la lista esta vacia
            throw new Error("LA LISTA ESTA VACIA");
        }

        var X = await bootbox_prompt("ingrese el valor de X");
        if(X== null || X.trim() == ""){
            return ;
        }
     

        await lista.eliminar_antes_X(X);
        console.log("recorrido derecha");
        lista.dibujarNodosLogDer();
        console.log("recorrido izquierda");	
        lista.dibujarNodosLogIzq();
        audio.elimina.play();

        await bootbox_alert("NODO ELIMINADOS SATISFACTORIAMENTE");
    
    }catch(e){
        console.log(e);
        audio.fail.play();
        await bootbox_alert(e.message);
    }

}/////////////////////////////////////////////////////////








export async function eliminar_despues_NodoX(){
    var canvas=document.getElementById('tutorial3'); 
    if(lista==null){
        listaCanvas=new ListaDoblementeLigadaCanvas(canvas);
        lista=new ListaDoblementeLigada(canvas);		
    }

    try{
        
        if(lista.isVacio()==true){//la lista esta vacia
            throw new Error("LA LISTA ESTA VACIA");
        }

        var X = await bootbox_prompt("ingrese el valor de X");
        if(X== null || X.trim() == ""){
            return ;
        }
       

        await lista.eliminar_despues_X(X);
        console.log("recorrido derecha");
        lista.dibujarNodosLogDer();
        console.log("recorrido izquierda");	
        lista.dibujarNodosLogIzq();
        audio.elimina.play();

        await bootbox_alert("NODO ELIMINADOS SATISFACTORIAMENTE");
    
    }catch(e){
        console.log(e);
        audio.fail.play();
        await bootbox_alert(e.message);
    }
}/////////////////////////////////////////////////////////