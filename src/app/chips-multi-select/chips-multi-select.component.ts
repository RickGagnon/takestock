import { Component, OnInit, Input } from '@angular/core';
import { MatChip } from '@angular/material/chips';
import { ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-chips-multi-select',
  templateUrl: './chips-multi-select.component.html',
  styleUrls: ['./chips-multi-select.component.css']
})
export class ChipsMultiSelectComponent implements OnInit, ControlValueAccessor {

  //@Input() options: string[] = []
  options: string[] = [];
  constructor() {
    this.options = ['test', 'test2'];
    console.log(this.options);
  }

  ngOnInit(): void {
    this.options = ['test', 'test2'];
  }




  toggleSelection(chip: MatChip) {
    chip.toggleSelected();
  }


  onChange!: (value: string[]) => void;
  //ControlValueAccessor functions
  writeValue(value: string[]) {

  }
  registerOnChange(fn: any) {

  }
  registerOnTouched(fn: any) {

  }
  setDisabledState?(isDisabled: boolean): void {
  }
  //*****

}
