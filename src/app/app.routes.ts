import { Routes } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { MainPageComponent } from './pages/main-page/main-page.component';

import { AddRing } from './pages/products/add-ring/add-ring.component';
import { ListRing } from './pages/products/list-ring/list-ring.component';

import { AddChain } from './pages/products/add-chain/add-chain.component';
import { ListChain } from './pages/products/list-chain/list-chain.component';

import { AddEarring } from './pages/products/add-earring/add-earring.component';
import { ListEarring } from './pages/products/list-earring/list-earring.component';

export const routes: Routes = [
  //{ path: '', redirectTo: '/main', pathMatch: 'full' },
  
  { path: 'main', component: MainPageComponent },
    
  { path: 'add-ring/:id', component: AddRing },
  { path: 'add-ring', component: AddRing },
  { path: 'list-ring', component: ListRing },
  
  { path: 'add-chain/:id', component: AddChain },
  { path: 'add-chain', component: AddChain },
  { path: 'list-chain', component: ListChain },

  { path: 'add-earring/:id', component: AddEarring },
  { path: 'add-earring', component: AddEarring },
  { path: 'list-earring', component: ListEarring },
  
  { path: '**', component: MainPageComponent},  
  //{ path: '**', component: NotFoundComponent }
];
