import { Component, OnInit} from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.css'
})

export class NotFoundComponent implements OnInit {

  title = '404';
  
  constructor(private router: Router){}

  goHome() {
    this.router.navigate([""]);
  }

  ngOnInit(): void {
    console.log('OnInit. 404');    
  }
}
