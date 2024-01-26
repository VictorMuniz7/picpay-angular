import { Component, inject } from '@angular/core';
import { FormsModule, Validators, ReactiveFormsModule, NonNullableFormBuilder } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { UsersService } from '../../services/users/users.service';
import { UserDTO } from '../../dtos/user-dto';
import { UserType } from '../../enums/user-type';



@Component({
  selector: 'app-create-user',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.scss'
})
export class CreateUserComponent {

  formBuilder = inject(NonNullableFormBuilder)
  userService = inject(UsersService)

  registeredUser: boolean = false
  successAnimation: boolean = false
  success: boolean = false

  userForm = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    document: ['',[Validators.required, Validators.pattern(/^[0-9]{11}$/)]],
    email: ['', [Validators.required, Validators.email]],
    userType: ['common' , Validators.required],
    balance: [0, [Validators.required, Validators.min(0)]],
    password: ['', [Validators.required, Validators.minLength(8)]],
  })

  get f(): any {
    return this.userForm.controls;
  }

  onSubmit(){
    if(this.userForm.invalid){
      return
    }

    let newUser: UserDTO = {
      firstName: this.userForm.value.firstName ?? '',
      lastName: this.userForm.value.lastName ?? '',
      document: this.userForm.value.document ?? '',
      email: this.userForm.value.email ?? '',
      userType: this.userForm.value.userType == 'common' ? UserType.COMMON : UserType.MERCHANT,
      balance: this.userForm.value.balance ?? 0,
      password: this.userForm.value.password ?? '',
    }

    this.userService.createUser(newUser).subscribe({
      next: data => {
        this.successAnimation = true
        setTimeout(() => {
        this.success = true
      }, 500); this.registeredUser = false},
      error: err => this.registeredUser = true
    })


  }

}
