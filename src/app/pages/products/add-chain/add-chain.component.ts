import { Component, OnInit } from "@angular/core";
import { Chain, CountryManufacture, Ring } from "../../../models/product-info.model";
import { Subscription } from "rxjs";
import { NgFor } from "@angular/common";
import { RouterOutlet, RouterLink, RouterLinkActive, Router, ActivatedRoute } from "@angular/router";
import { FormsModule, FormGroup, FormControl, Validator, Validators, ReactiveFormsModule } from "@angular/forms";
import { ChainService } from "../../../services/service-chain";


@Component({
  selector: "app-add-chain",
  standalone: true,
  imports: [RouterOutlet, FormsModule, ReactiveFormsModule, RouterLink, RouterLinkActive, NgFor],
  templateUrl: "./add-chain.component.html",
  styleUrl: "./add-chain.component.css",
})

export class AddChain implements OnInit {

  addForm: FormGroup | any ;
  edit: Chain | undefined;
  id: number | undefined;
  countries = CountryManufacture;
  enumKeys: any;
  private subscription: Subscription;

  constructor(
    private service: ChainService, 
    private router: Router,    
    private activatedRoute: ActivatedRoute) {
   
    this.enumKeys = Object.keys(this.countries);
    this.subscription = activatedRoute.params.subscribe(params=>this.id=params["id"]);    
  }

  ngOnInit(): void{

    const id = this.activatedRoute.snapshot.paramMap.get('id');    
    
    if(id){
      this.edit = this.service.findById(id);

      this.addForm = new FormGroup({
        "id": new FormControl(this.edit?.id),
        "name": new FormControl(this.edit?.name, [Validators.required, Validators.minLength(4)]),
        "price": new FormControl(this.edit?.price, [Validators.required, Validators.min(1), Validators.max(10000)]),
        "data_product": new FormControl(this.edit?.data_product),
        "is_new": new FormControl(false),
        "length_chain": new FormControl(this.edit?.length_chain, [Validators.required, Validators.min(15), Validators.max(80)]),
        "country": new FormControl(this.edit?.country),
        "in_stock": new FormControl(this.edit?.in_stock)
      });
    } else {
      const d = new Date().toLocaleString('ru-RU');
      this.addForm = new FormGroup({        
        "id": new FormControl(Math.floor((Math.random() * 10000) + 1)),
        "name": new FormControl("", [Validators.required, Validators.minLength(4)]),
        "price": new FormControl(0, [Validators.required, Validators.min(1), Validators.max(10000)]),
        "data_product": new FormControl(d),
        "is_new": new FormControl(true),
        "length_chain": new FormControl("0", [Validators.required, Validators.min(15), Validators.max(80)]),
        "country": new FormControl(),
        "in_stock": new FormControl()
      });
    }    
  }

  submit() {
    
    let entity: Chain = new Chain(
      this.addForm.controls['id'].value,
      this.addForm.controls['name'].value,
      this.addForm.controls['price'].value,
      this.addForm.controls['data_product'].value,
      this.addForm.controls['is_new'].value,
      this.addForm.controls['length_chain'].value
    );

    entity.country = this.addForm.controls['country'].value
    entity.in_stock = this.addForm.controls['in_stock'].value
    
    this.service.save(entity);

    console.log("submit", entity);

    this.addForm.markAsPristine();
    this.addForm.reset();

    this.router.navigate(["list-chain"]);    
  }
}
