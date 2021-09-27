import { Component, OnInit } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-dart',
  templateUrl: './dart.component.html',
  styleUrls: ['./dart.component.css']
})
export class DartComponent implements OnInit {

  totalcostforstock: number;
  purchaseprice:number;
  percentreturn:number;
  numberofunits:number;
  sellprice:number;
  purchasefee:number;
  sellfee:number;
  totalpurchase:number;
  isBuyPrice: boolean = true;
  isPercentReturn:boolean = false;
  isNumberOfUnits:boolean = false;
  isSellPrice: boolean = false;
  costprice:number;
  actualcostperunit:number;
  sellpriceperunit:number;
  constructor() { 
    this.purchaseprice = 5.97;
    this.percentreturn = 5;
    this.isBuyPrice = true;
    this.numberofunits = 20;
    this.purchasefee = 5;
    this.sellfee = 5;
    this.calculate();
  }

  ngOnInit(): void {
  }

calculate(){
  this.costprice = parseFloat(((this.purchaseprice * this.numberofunits) + this.purchasefee + this.sellfee).toFixed(2));
  
  this.actualcostperunit = Number((this.costprice/this.numberofunits).toFixed(2));
  this.sellprice = Number((this.costprice * (1.00 + (this.percentreturn/100))).toFixed(2));
  this.sellpriceperunit = Number((this.sellprice/this.numberofunits).toFixed(2));
}
  purchasecost (purchase:number, units:number):number{

    return 3;

  }
    
}



