import { Component, OnInit } from '@angular/core';
import { CrudService } from './../../service/crud.service';
 
@Component({
    selector: 'app-ratings-list',
    templateUrl: './ratings-list.component.html',
    styleUrls: ['./ratings-list.component.scss']
})
 
export class RatingsListComponent implements OnInit {
   
    Ratings:any = [];
 
    constructor(private crudService: CrudService) { }
 
    ngOnInit(): void {
        this.crudService.GetRatings().subscribe(res => {
            console.log(res)
            this.Ratings =res;
        });    
    }
 
    delete(id:any, i:any) {
        console.log(id);
        if(window.confirm('Do you want to go ahead?')) {
            this.crudService.deleteRating(id).subscribe((res) => {
                this.Ratings.splice(i, 1);
            })
        }
    }
}