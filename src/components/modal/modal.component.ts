import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Output('accept') accept: EventEmitter<void> = new EventEmitter();
  @Output('cancel') cancel: EventEmitter<void> = new EventEmitter();
  @Output('close') close: EventEmitter<void> = new EventEmitter();

  ngOnInit(): void {
  }

  public emitAccept() {
    this.accept.emit();
  }

  public emitCancel() {
    this.cancel.emit();
  }

  public emitClose() {
    this.close.emit();
  }

}
