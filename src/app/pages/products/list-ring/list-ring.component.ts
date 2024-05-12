import { Component, Output, EventEmitter, OnInit } from "@angular/core";
import { Ring } from "../../../models/product-info.model";
import { NgFor } from "@angular/common";
import { RouterOutlet, RouterLink, RouterLinkActive, Router} from "@angular/router";
import { FormsModule, ReactiveFormsModule} from "@angular/forms";
import { RingService } from "../../../services/service-ring";


@Component({
  selector: "app-list-ring",
  standalone: true,
  imports: [RouterOutlet, FormsModule, ReactiveFormsModule, RouterLink, RouterLinkActive, NgFor],
  templateUrl: "./list-ring.component.html",
  styleUrl: "./list-ring.component.css",
})

export class ListRing implements OnInit{
  
  constructor(
    private service: RingService,
    private router: Router){}

  entities: Ring[] = [];  

  ngOnInit(): void {
    this.entities = this.service.load();
    console.log(this.entities);
  }

  toEditClick(id: number): void {
    this.router.navigate(['/add-ring', id]);
  }
  
  search(): void {
    this.service.load();
  }

  onDelete(id: number) {
    this.service.delete(id);
    this.search();
  }
}
