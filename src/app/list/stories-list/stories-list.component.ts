import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TestService } from 'src/app/_service/test.service';

@Component({
  selector: 'app-stories-list',
  templateUrl: './stories-list.component.html',
  styleUrls: ['./stories-list.component.css']
})
export class StoriesListComponent implements OnInit {
  storiesForm:FormGroup;
  data:any
  constructor( public testService:TestService) { }
    
  ngOnInit(): void {
    this.storiesForm= new FormGroup({
      section: new FormControl('',Validators.required),
    })
  }
  listData=['arts', 'automobiles', 'books', 
  'business', 'fashion', 'food', 'health', 'home', 'insider', 
  'magazine', 'movies', 'nyregion', 'obituaries', 'opinion', 
  'politics', 'realestate', 'science', 'sports', 'sundayreview', 'technology',
  'theater', 't-magazine', 'travel', 'upshot', 'us', 'world']
  async onSubmit()
  {
    if(this.storiesForm.invalid)
    {
      alert('Please Select The DropDown')
      return
    }
      console.log(this.storiesForm.value['section']);
      let res=await this.testService.listStories(this.storiesForm.value['section'])
      this.data=res['results']
      console.log("res",this.data);
  }

}
