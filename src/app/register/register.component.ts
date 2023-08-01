import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import {FormGroup,FormControl,FormBuilder,Validators} from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  // column:any;

  // registerForm : FormGroup;
  // constructor(private fb : FormBuilder){
  //   this.column=[];
  // }
  // ngOnInit() {
  //   this.registerForm = this.fb.group({
  //     firstName : ["" , [Validators.required , Validators.minLength(3)]],
  //     lastName : ["", [Validators.required , Validators.minLength(3)]],
  //     gender : ["", [Validators.required]],
  //     state : ["", [Validators.required]]
  //   })
  // }

  // public onClickregister(){
  //   this.column.push(this.registerForm.value);
  //   let fName=this.registerForm.get('firstName').value;
  //   console.log("first name is:"+fName);
  //   let lName=this.registerForm.get('lastName').value;
  //   console.log("last name is:"+lName);
  //   let gender=this.registerForm.get('gender').value;
  //   console.log("Gender is:"+gender);
  //   let state=this.registerForm.get('state').value;
  //   console.log("State is:"+state);

  // }
  // onClickClear()
  // {
  //   this.registerForm.reset();
  // }
  // oneditclick(){

  // }
  // ondeleteclick(index:number){
  //   this.column.splice(index,1);
  //   }
}
