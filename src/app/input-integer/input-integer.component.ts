import { Component, EventEmitter, Input, OnInit, Output, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-input-integer',
  standalone: false,
  templateUrl: './input-integer.component.html',
  styleUrls: ['./input-integer.component.scss']
})
export class InputIntegerComponent implements OnInit, OnChanges {
  @Input() quantity: number = 0; // los input son los [input] de la vista
  @Input() maxQuantity: number = 0;

  @Output() quantityChange: EventEmitter<number> = new EventEmitter<number>();
  // los output son los () y se emiten con el emit

  ngOnInit(): void {
    this.currentQuantity = this.quantity;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['quantity']) {
      // Si el padre cambia el valor, actualiza el input interno
      this.currentQuantity = changes['quantity'].currentValue;
    }
  }

  currentQuantity: number = 0;

  downQuantity(): void {
    if (this.currentQuantity > 0) {
      this.currentQuantity--;
      this.quantityChange.emit(this.currentQuantity);
    }
  }

  upQuantity(): void {
    if (this.currentQuantity < this.maxQuantity) {
      this.currentQuantity++;
      this.quantityChange.emit(this.currentQuantity);
    }
  }
}
