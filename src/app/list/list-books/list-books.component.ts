import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TestService } from 'src/app/_service/test.service';

@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.css']
})
export class ListBooksComponent implements OnInit {

  moviesForm:FormGroup;
  data:any;
  constructor(private testService:TestService) { }
  ngOnInit() {
    this.moviesForm= new FormGroup({
      movieReviewers: new FormControl('',Validators.required),
    })
  

  }
  async onSubmit()
  {
    if(this.moviesForm.invalid)
    {
      alert('Please Select The DropDown')
      return
    }
    let res=await this.testService.listrev(this.moviesForm.value['movieReviewers'])
    this.data=res['results']
    console.log("res",this.data);
     
  }

}
