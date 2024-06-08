import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  name:string[]=["Dev","Ram"];

 number:number[]=[1,2,3];
 a :string ='Radha';
 b:number=22;
 c:any='anand-20';
Object1:Array<any>=[{name:'Yashna',age:'24'},{firstname:'Shadhvik',last:'20'}];



  
stringDisplay():void{
  console.log(this.a);
}
StringParameterDisplay(param:string) :void{
  console.log(param);
}
Push(){
  console.log(this.number)
  this.number.push(10);
  console.log(this.number);
}
Pop(){
  console.log(this.name);
  this.name.pop();
  console.log(this.name);
}





}

