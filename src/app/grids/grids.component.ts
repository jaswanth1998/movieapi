import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-grids',
  templateUrl: './grids.component.html',
  styleUrls: ['./grids.component.css']
})
export class GridsComponent implements OnInit {

  
  id : number;


  count : number;
   


  title:string;
  overview:string;
  id1:string;
  link:string;
  data1:string;
  country:string;




   movies = [];
   num1 : number; 
  arrayOne(n: number): any[] {
    return Array(n);
  }

  constructor(private httpClient:HttpClient) { }

  ngOnInit() {

    this.httpClient.get('https://api.themoviedb.org/3/movie/now_playing?api_key=3f0a291b35d827d21951f5dec2a2505c&language=en-US&page=1')
    .subscribe(
      (data:any)=>{
        this.data1 = data;
       //this.link =  "https://image.tmdb.org/t/p/w500";
       //this.data2 = this.link + data.results[3].poster_path;
        this.num1 = data.results.length;
        console.log(this.num1);
      }
    )
  }
  onclick(event) {
    console.log(event.target.id);

    this.id = event.target.id;
    
    this.movies.push(this.id);
    
    console.log(this.movies);

    this.count= this.movies.length;


  }

  removeItem(event) {

    this.movies.splice(event.target.id, 1);

    this.count= this.movies.length;


}

}
