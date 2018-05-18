import { Component, OnInit } from '@angular/core';


//which is used to import the Client side http request
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  data1:JSON;
  num1 : number; 
  arrayOne(n: number): any[] {
    return Array(n);
  }
  constructor( private httpClient:HttpClient) { }
url:string = 'https://fml-sp1.herokuapp.com/api/feedbacks';
  ngOnInit() {

    this.httpClient.get('https://fml-sp1.herokuapp.com/api/feedbacks')
    //and then we have subcribe which is an ajax object 
    .subscribe(
      //in the parameter of the subscribe we data object we can this declare as an array or single object
      (data:any)=>{
        this.data1 = data;
        console.log("i am woeking")
        console.log(this.data1[0]);
        console.log(this.data1[0].MovieName);
        
        this.num1 = data.length;
      }
    )
  }
  box:string;
  onk(movie:string,desc:string,rat:string){
    console.log(movie,desc,rat);
    this.httpClient.post(this.url, {MovieName:movie,Description:desc,Rating:rat})
    .subscribe(res => console.log(res));
 this.httpClient.get('https://fml-sp1.herokuapp.com/api/feedbacks')
    //and then we have subcribe which is an ajax object 
    .subscribe(
      //in the parameter of the subscribe we data object we can this declare as an array or single object
      (data:any)=>{
        this.data1 = data;
        console.log("i am woeking")
        console.log(this.data1[0]);
        console.log(this.data1[0].MovieName);
        
        this.num1 = data.length;
      }
    )

  }  

}
