import { Injectable, inject } from '@angular/core';
import { Firestore, collection, getDocs, snapToData } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  firestore:Firestore = inject(Firestore);

 public async getfirebase() {
    const colref = collection(this.firestore, 'firebase data');
    const snap =await getDocs(colref);

    return snap.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
}));
}
}