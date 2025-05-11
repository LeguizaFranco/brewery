import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-integer',
  standalone: false,
  templateUrl: './input-integer.component.html',
  styleUrl: './input-integer.component.scss'
})
export class InputIntegerComponent implements OnInit {
  @Input() quantity: number = 0; // los input son los [input] de la vista
  @Input() maxQuantity: number = 0;

  @Output() quantityChange: EventEmitter<number> = new EventEmitter<number>();
  // los output son los () y se emiten con el emit

  ngOnInit(): void {
    this.currentQuantity = this.quantity;
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
