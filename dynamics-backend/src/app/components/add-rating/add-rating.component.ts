import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from './../../service/crud.service';
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-add-rating',
  templateUrl: './add-rating.component.html',
  styleUrls: ['./add-rating.component.css']
})
export class AddRatingComponent implements OnInit {
 
  ratingForm: FormGroup;
 
  constructor(
      public formBuilder: FormBuilder,
      private router: Router,
      private ngZone: NgZone,
      private crudService: CrudService
  ) 
  { 
      this.ratingForm = this.formBuilder.group({
          name: [''],
          price: [''],
          description: ['']
      })
  }

  ngOnInit() { }

  onSubmit(): any {
      this.crudService.AddRating(this.ratingForm.value)
      .subscribe(() => {
          console.log('Data added successfully!')
          this.ngZone.run(() => this.router.navigateByUrl('/ratings-list'))
      }, (err) => {
          console.log(err);
      });
  }
}
