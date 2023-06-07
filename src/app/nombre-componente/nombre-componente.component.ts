import { Component } from '@angular/core';

@Component({
  selector: 'app-nombre-componente',
  templateUrl: './nombre-componente.component.html',
  styleUrls: ['./nombre-componente.component.css']
})
export class NombreComponenteComponent {
title="registro de usuarios";

//calculadora
numero1:number=0;
numero2:number=0;
resultado:number=0;


suma():void{

   this.resultado=this.numero1+this.numero2;
}









nombre="luis";
edad="19";
mensaje="edad correcta"
empresa="google";

habilitar=false;

//crear una propiedad
usuregistrado=false;

getresgis(){
  this.usuregistrado=false
}

//funcion
textoregis="no ha nadie";

//funcion
setusuario(event:Event){
  //alert("se ha registrado un usuario")

 // this.textoregis="el usuario esta en cuenta"
 if((<HTMLInputElement>event.target).value=="si"){
  this.textoregis="usu regis";
 }else{
  this.textoregis="no ha sido regis"
 }
}

cambiar(event:Event){
this.empresa=(<HTMLInputElement>event.target).value;
}

json=[
  {
    id:1,
    nombres:"alejandro",
    edades:22
  },
  {
    id:2,
    nombres:"lucas",
    edades:33
  }
]

getvalor(){
  if(this.edad>"19" && this.nombre == "luis"){
  this.mensaje;
  }
}

llamaempresa( value:String){
   
}


}
