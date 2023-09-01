import { Component, OnInit, NgZone } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CrudService } from './../../service/crud.service';
import { FormGroup, FormBuilder } from "@angular/forms";
 
@Component({
    selector: 'app-rating-detail',
    templateUrl: './rating-detail.component.html',
    styleUrls: ['./rating-detail.component.scss']
})
 
export class RatingDetailComponent implements OnInit {
 
    getId: any;
    updateForm: FormGroup;
   
    constructor(
        public formBuilder: FormBuilder,
        private router: Router,
        private ngZone: NgZone,
        private activatedRoute: ActivatedRoute,
        private crudService: CrudService
    ) {
        this.getId = this.activatedRoute.snapshot.paramMap.get('id');
        this.crudService.GetRating(this.getId).subscribe(res => {
            this.updateForm.setValue({
                name: res['name'],
                price: res['price'],
                description: res['description']
            });
        });
 
        this.updateForm = this.formBuilder.group({
            name: [''],
            price: [''],
            description: ['']
        })
    }
 
    ngOnInit() { }
 
    onUpdate(): any {
        this.crudService.updateRating(this.getId, this.updateForm.value)
        .subscribe(() => {
            console.log('Data updated successfully!')
            this.ngZone.run(() => this.router.navigateByUrl('/ratings-list'))
        }, (err) => {
            console.log(err);
        });
    }
}