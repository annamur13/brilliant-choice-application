import { Component, Output, EventEmitter, OnInit } from "@angular/core";
import { Chain } from "../../../models/product-info.model";
import { NgFor } from "@angular/common";
import { RouterOutlet, RouterLink, RouterLinkActive, Router} from "@angular/router";
import { FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ChainService } from "../../../services/service-chain";


@Component({
  selector: "app-list-chain",
  standalone: true,
  imports: [RouterOutlet, FormsModule, ReactiveFormsModule, RouterLink, RouterLinkActive, NgFor],
  templateUrl: "./list-chain.component.html",
  styleUrl: "./list-chain.component.css",
})

export class ListChain implements OnInit{
  
  constructor(
    private service: ChainService,
    private router: Router){}

  entities: Chain[] = [];  

  ngOnInit(): void {
    this.entities = this.service.load();
    console.log(this.entities);
  }

  toEditClick(id: number): void {
    this.router.navigate(['/add-chain', id]);
  }
  
  search(): void {
    this.service.load();
  }

  onDelete(id: number) {
    this.service.delete(id);
    this.search();
  }
}
