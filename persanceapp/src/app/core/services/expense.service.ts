import { Injectable } from '@angular/core';
import { collection, Firestore, CollectionReference, DocumentData, collectionData, addDoc, doc, deleteDoc  } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Expense } from '../../shared/models/expense.model';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
  private expensesRef: CollectionReference<DocumentData>;
  
  constructor(private firestore: Firestore) {
    this.expensesRef = collection(this.firestore, 'expenses');
  }

  getExpenses(): Observable<Expense[]> {
    return collectionData(this.expensesRef, { idField: 'id' }) as Observable<Expense[]>
  }

  addExpense(expense: Expense) {
    return addDoc(this.expensesRef, expense);
  }

  deleteExpense(id: string) {
    const expenseDoc = doc(this.firestore, `expenses/${id}`);
    return deleteDoc(expenseDoc);
  }
}
