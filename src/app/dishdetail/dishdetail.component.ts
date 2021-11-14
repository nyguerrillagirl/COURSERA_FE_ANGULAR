import { Component, OnInit, ViewChild} from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { switchMap } from 'rxjs/operators';

import { Comment } from '../shared/comment';
import { MatSlider } from '@angular/material';

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {

  
  dish: Dish;
  dishIds: string[];
  prev: string;
  next: string;
  commentForm: FormGroup;
  customerComment: Comment;

  @ViewChild('cform') commentFormDirective;

  formErrors = {
    'author': '',
    'comment': '',
    'rating': ''
  }

  validationMessages = {
    'author' : {
      'required' : 'Comment author is required.',
      'minlength': 'Comment author name must be at least 2 characters long.',
      'maxlength': 'Comment author name must not exceed 100 characters.'
      },
    'comment': {
      'required': 'Comment is required.',
      'minlength': 'Comment is too short.',
      'maxlength': 'Comment field is limited to 200 characters.'
    },
    'rating': {
      'required': 'A rating for the dish is required.'
    }
  };

  constructor(private dishService: DishService,
    private route: ActivatedRoute,
    private location: Location,
    private fb: FormBuilder) { 
      this.createForm();
    }

  ngOnInit() {
    this.dishService.getDishIds()
      .subscribe((dishIds) => this.dishIds = dishIds);
    this.route.params
      .pipe(switchMap((params: Params) => this.dishService.getDish(params['id'])))
      .subscribe((dish) => {this.dish = dish; this.setPrevNext(dish.id);});
  }

  
  createForm() {
    this.commentForm = this.fb.group(
      {
        rating: [5, [Validators.required, Validators.pattern]],
        comment: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(200)]],
        author: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
        date: ''
      }
    );

    this.commentForm.valueChanges
      .subscribe(data => this.onValueChanged(data));
  }

  onValueChanged(data?: any) {
    if (!this.commentForm) { return; }

    const form = this.commentForm;
    for (const field in this.formErrors) {
      if (this.formErrors.hasOwnProperty(field)) {
        // clear previous error message (if any)
        this.formErrors[field] = '';
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];
          for (const key in control.errors) {
            if (control.errors.hasOwnProperty(key)) {
              this.formErrors[field] += messages[key] + ' ';
            }
          }
        }
      }
    }    
   }


  isFormNotValid() : boolean {
     return this.commentForm.status ==="INVALID";
  }
  setPrevNext(dishId: string) {
    const index = this.dishIds.indexOf(dishId);
    this.prev = this.dishIds[(this.dishIds.length + index - 1) % this.dishIds.length];
    this.next = this.dishIds[(this.dishIds.length + index + 1) % this.dishIds.length];
  }
  goBack() : void {
    this.location.back();
  }

  addCommentToList() {
    this.customerComment.author = this.commentForm.value['author'];
    this.customerComment.comment = this.commentForm.value['comment'];
    this.customerComment.rating = this.commentForm.value['rating'];  
    var date = new Date();
    this.customerComment.date = date.toISOString();
    this.dish['comments'].push(this.customerComment);

  }
  onSubmit() {
    this.customerComment = this.commentForm.value;
    console.log(this.customerComment);
    // process the form elements and enter into 
    this.addCommentToList();
    this.commentFormDirective.resetForm();
    // Explicitly setting all the values!
    this.commentForm.setValue( { 
      rating : 5,
      comment: '',
      author: '',
      date: ''});
    }
}
