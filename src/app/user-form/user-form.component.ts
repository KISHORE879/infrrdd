import { Component} from '@angular/core';
//import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-form',
  templateUrl:'./user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  arr=[];
  mySubmit(data: any){
    this.arr=data;
    console.log(this.arr)
   
    
    
    // console.log(Object.entries(data))
    // var result=JSON.stringify(data);
    // console.log(result)
    // console.log(typeof data)
    // var result=JSON.stringify(data);//object to json data(string)
    // 
    // var x=JSON.parse(result)//string to objects
   //console.log(Object.entries(x))//convering array
   
  }
  

}
