import { Component, OnInit } from '@angular/core';


//which is used to import the Client side http request
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css'],
  
})
export class ApiComponent implements OnInit {
  title:string;
  country:string;
  imgurl:string ;
  data1:JSON;

  constructor(private httpClient:HttpClient) { }

  ngOnInit() {

    this.httpClient.get('http://www.omdbapi.com/?i=tt3896198&apikey=131728ac')
    //and then we have subcribe which is an ajax object 
    .subscribe(
      //in the parameter of the subscribe we data object we can this declare as an array or single object
      (data:any)=>{
        this.data1 = data;
       
      }
    )
  }
  doGET() {
    // we checking that the function is called or not 
    console.log("GET");
    // we had called the get of the url ('http://www.omdbapi.com/?i=tt3896198&apikey=131728ac') through
    // the below method
    this.httpClient.get('http://www.omdbapi.com/?i=tt3896198&apikey=131728ac')
    //and then we have subcribe which is an ajax object 
    .subscribe(
      //in the parameter of the subscribe we data object we can this declare as an array or single object
      (data:any)=>{
        this.data1 = data;
        //checking the data wether data has came 
        console.log(data)
        //geting the Title form the json and assign 
        this.title = data.Title;
          console.log(this.title);
          //this is used to get the country 
          this.country = data.Country;
          console.log(this.country);
          this.imgurl = data.Poster;
          console.log('i am working')
        if(data.length){
          
          this.country = data.country;
          
        }
      }
    )
    
  }

  doPOST() {
    console.log("POST");
  }

  doPUT() {
    console.log("PUT");
  }

  doDELETE() {
    console.log("DELETE");
  }

  doGETAsPromise() {
    console.log("GET AS PROMISE");
  }

  doGETAsPromiseError() {
    console.log("GET AS PROMISE ERROR");
  }

  doGETAsObservableError() {
    console.log("GET AS OBSERVABLE ERROR");
  }

  doGETWithHeaders() {
    console.log("GET WITH HEADERS");
  }

}
