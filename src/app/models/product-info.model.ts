export enum CountryManufacture { 
  Russian = "Россия", 
  China = "Китай",
  Italy = "Италия"  
};

export class Product {
  id: number;  
  name: string;
  description?: string;
  price: number;
  data_product: any;  
  in_stock: boolean = true;
  image?: string[];
  country?: CountryManufacture;
  is_new:boolean;
  
  constructor(
    id: number,
    name: string,    
    price: number,  
    data_product: any,
    is_new:boolean) { 
    this.id = id;
    this.name = name;
    this.price = price;
    this.data_product = data_product;
    this.is_new = is_new;
  }
}
// Кольцо
export class Ring extends Product{
    size_ring: any;

    constructor(
      id: number,
      name: string,    
      price: number,  
      data_product: any,
      is_new:boolean,
      size_ring: number){
        super(id, name, price, data_product, is_new);
        this.size_ring = size_ring;
    }
}
// Цепочка
export class Chain extends Product{
  length_chain: number;

  constructor(
    id: number,
    name: string,    
    price: number,  
    data_product: any,
    is_new:boolean,
    length_chain: number) {      
      super(id, name, price, data_product, is_new);
      this.length_chain = length_chain;
  }
}
// Серьга
export class Earring extends Product{
  weight_earring: number;
  material_earring:Array<String>;

  constructor(
    id: number,
    name: string,    
    price: number,  
    data: any,
    is_new:boolean,
    weight_earring: number,
    material_earring:Array<String>){
      super( id, name, price, data, is_new);
      this.weight_earring = weight_earring;
      this.material_earring = material_earring;
  }
}




