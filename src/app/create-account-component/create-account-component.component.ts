import { Component, inject } from '@angular/core';
import { Auth, createUserWithEmailAndPassword } from "@angular/fire/auth";
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-create-account-component',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-account-component.component.html',
  styleUrl: './create-account-component.component.css'
})
export class CreateAccountComponentComponent {
  auth = inject(Auth);
  usernameCreate = '';
  passwordCreate = '';
  createAccount(){
    createUserWithEmailAndPassword(this.auth, this.usernameCreate, this.passwordCreate)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      console.log(user);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
      // ..
    });
  }
  
}
