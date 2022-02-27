import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-facebook',
  templateUrl: './facebook.component.html',
  styleUrls: ['./facebook.component.scss']
})
export class FacebookComponent implements OnInit {


  ngOnInit(): void {
  }
  searchForm:FormGroup = new FormGroup({
    'search': new FormControl('', [Validators.required])
  })
  onSubmit(searchForm:FormGroup){

      console.log(searchForm.value);

  }
}
