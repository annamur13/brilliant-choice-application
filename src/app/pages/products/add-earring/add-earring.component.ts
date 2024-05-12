import { Component, OnInit } from "@angular/core";
import { CountryManufacture, Earring } from "../../../models/product-info.model";
import { Subscription } from "rxjs";
import { NgFor } from "@angular/common";
import { RouterOutlet, RouterLink, RouterLinkActive, Router, ActivatedRoute } from "@angular/router";
import { FormsModule, FormGroup, FormControl, Validator, Validators, ReactiveFormsModule } from "@angular/forms";
import { EarringService } from "../../../services/service-earring";


@Component({
  selector: "app-add-earring",
  standalone: true,
  imports: [RouterOutlet, FormsModule, ReactiveFormsModule, RouterLink, RouterLinkActive, NgFor],
  templateUrl: "./add-earring.component.html",
  styleUrl: "./add-earring.component.css",
})

export class AddEarring implements OnInit {

  addForm: FormGroup | any ;
  edit: Earring | undefined;
  id: number | undefined;
  countries = CountryManufacture;
  enumKeys: any;
  materials: Array<string> = ["Агат", "Апатит", "Гранат", "Кварц", "Лазурит", "Малахит", "Бриллиант", "Фианит"];
  private subscription: Subscription;

  constructor(
    private service: EarringService, 
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
        "weight_earring": new FormControl(this.edit?.weight_earring, [Validators.required, Validators.min(1), Validators.max(500)]),
        "country": new FormControl(this.edit?.country),
        "material_earring": new FormControl(this.edit?.material_earring),
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
        "weight_earring": new FormControl("0", [Validators.required, Validators.min(1), Validators.max(500)]),
        "country": new FormControl(),
        "material_earring": new FormControl(),
        "in_stock": new FormControl()
      });
    }    
  }

  submit() {
    
    let entity: Earring = new Earring (
      this.addForm.controls['id'].value,
      this.addForm.controls['name'].value,
      this.addForm.controls['price'].value,
      this.addForm.controls['data_product'].value,
      this.addForm.controls['is_new'].value,
      this.addForm.controls['weight_earring'].value,
      this.addForm.controls['material_earring'].value
    );

    entity.country = this.addForm.controls['country'].value
    entity.in_stock = this.addForm.controls['in_stock'].value
    
    this.service.save(entity);

    console.log("submit", entity);

    this.addForm.markAsPristine();
    this.addForm.reset();

    this.router.navigate(["list-earring"]);    
  }
}
