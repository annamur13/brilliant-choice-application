import { Injectable } from "@angular/core";
import { Chain } from "../models/product-info.model";

@Injectable({
    providedIn: "root"
})

export class ChainService {
    entityList: Chain[] = [];

    public edit(tack: Chain) {
        for (let i = 0; i < this.entityList.length; i++) {
            if (this.entityList[i].id == tack.id) {
                this.entityList[i] = tack;
            }
        }
    }

    public delete(id: number) {
        for (var i = 0; i < this.entityList.length; i++) {
            if (this.entityList[i].id == id) {
                this.entityList.splice(i, 1); 
                break;
            }
        }
    }

    findById(id: any): any {
        for (let i = 0; i < this.entityList.length; i++) {
            if (this.entityList[i].id == id) {
                return this.entityList[i];
            }
        }
        return null;
    }

    public load() {
        return this.entityList;
    }

    public save(entity: Chain) {
        console.log("Edit:" + entity.id);
        console.log("Edit isNew:" + entity.is_new);
        if (entity.is_new) {
            entity.is_new = false;
            const r = this.findById(entity.id);
            if(r == null){
                this.entityList.push(entity);
            } else{
                this.edit(entity);
            }           
            return entity;
        } else {
            this.delete(entity.id);
            this.entityList.push(entity);
            return entity;
        }
    }
    
    public setItem(value: any): void {
        //this.entityList.next(value);
        throw new Error('Function not implemented.');
    }
}