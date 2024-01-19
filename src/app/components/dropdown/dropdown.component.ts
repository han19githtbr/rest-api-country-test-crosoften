import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent {
  showOptions = false;

  @Input()
  placeholder: string | undefined;

  @Input()
  options: string[] | undefined;

  @Input()
  value: string | undefined;

  @Output()
  valueChange: EventEmitter<string> = new EventEmitter();

  select(value: string) {
    this.valueChange.emit(value);
  }

  toggleOptions() {
    this.showOptions = !this.showOptions;
  }

}
