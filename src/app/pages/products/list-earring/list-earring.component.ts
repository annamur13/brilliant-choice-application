import { Component, Output, EventEmitter, OnInit } from "@angular/core";
import { Earring } from "../../../models/product-info.model";
import { NgFor } from "@angular/common";
import { RouterOutlet, RouterLink, RouterLinkActive, Router} from "@angular/router";
import { FormsModule, ReactiveFormsModule} from "@angular/forms";
import { EarringService } from "../../../services/service-earring";


@Component({
  selector: "app-list-earring",
  standalone: true,
  imports: [RouterOutlet, FormsModule, ReactiveFormsModule, RouterLink, RouterLinkActive, NgFor],
  templateUrl: "./list-earring.component.html",
  styleUrl: "./list-earring.component.css",
})

export class ListEarring implements OnInit{
  
  constructor(
    private service: EarringService,
    private router: Router){}

  entities: Earring[] = [];  

  ngOnInit(): void {
    this.entities = this.service.load();
    console.log(this.entities);
  }

  toEditClick(id: number): void {
    this.router.navigate(['/add-earring', id]);
  }
  
  search(): void {
    this.service.load();
  }

  onDelete(id: number) {
    this.service.delete(id);
    this.search();
  }
}
