import { Component, inject } from '@angular/core';
import { FormsModule, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TransactionDto } from '../../dtos/transaction-dto';
import { TransactionService } from '../../services/transaction/transaction.service';

@Component({
  selector: 'app-create-transaction',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, FormsModule, ReactiveFormsModule],
  templateUrl: './create-transaction.component.html',
  styleUrl: './create-transaction.component.scss'
})
export class CreateTransactionComponent {

  formBuilder = inject(NonNullableFormBuilder)
  transactionService = inject(TransactionService)

  errorMessage: string = ''
  successAnimation: boolean = false
  success: boolean = false

  transactionForm = this.formBuilder.group({
    senderId: [0, Validators.required],
    receiverId: [0, Validators.required],
    value: [0, [Validators.required, Validators.min(1)]],
  })

  get f(): any {
    return this.transactionForm.controls;
  }

  onSubmit(){
    if(this.transactionForm.invalid){
      console.log('invalido')
      return
    }

    let newTransaction: TransactionDto = {
      senderId: this.transactionForm.value.senderId ?? 0,
      receiverId: this.transactionForm.value.receiverId ?? 0,
      value: this.transactionForm.value.value ?? 0
    }

    this.transactionService.createTransaction(newTransaction).subscribe({
      next: data => {
        this.successAnimation = true
        setTimeout(() => {
        this.success = true
      }, 500); this.errorMessage = ''},
      error: err => this.errorMessage = err.error.message
    })

  }

}
