import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RatingsListComponent } from './components/rating-list/rating-list.component';
import { AddRatingComponent } from './components/add-rating/add-rating.component';
import { RatingDetailComponent } from './components/rating-detail/rating-detail.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'add-rating' },
    { path: 'rating-list', component: RatingsListComponent },
    { path: 'add-rating', component: AddRatingComponent },
    { path: 'edit-rating/:id', component: RatingDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
