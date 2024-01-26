import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Transaction } from '../../interfaces/transaction';
import { TransactionDto } from '../../dtos/transaction-dto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  private readonly baseUrl: string = 'http://localhost:8080/transactions'

  http =  inject(HttpClient)

  createTransaction(transactionInfo: TransactionDto): Observable<Transaction>{
    return this.http.post<Transaction>(this.baseUrl, transactionInfo)

  }
}
