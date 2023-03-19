import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  forwardRef,
  Input,
  Output,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  template: `
    <label class="checkbox {{ size }}">
      <input
        type="checkbox"
        [indeterminate]="indeterminate"
        [disabled]="disabled"
        [value]="_value"
        [checked]="_value"
        (input)="onChange($event)"
      />
      <span
        [ngClass]="[
          _value ? 'active' : '',
          _value || indeterminate ? _bgColor : ''
        ]"
        class="checkmark {{ size }}"
      ></span>
    </label>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxComponent),
      multi: true,
    },
  ],
    styleUrls: ['./checkbox.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckboxComponent implements ControlValueAccessor {

  /** set button size
   * md(medium) is default size
   */
  @Input() readonly size: 'sm' | 'md' | 'lg' = 'md';

  /** set switch button color using bootstrap colors class */
  @Input() set color(val: Readonly<string>) {
    this._bgColor = `bg-${val}`;
  }

  /**
   * The indeterminate property sets or returns whether the state of a checkbox has changed.
   * default is false
   */
  @Input() indeterminate = false;
  @Output() changedVal: EventEmitter<boolean> = new EventEmitter<boolean>();

  /** set disable attribute to switch button */
  set disabled(isDisabled: boolean) {
    this.setDisabledState(isDisabled);
  }

  get disabled() {
    return this._disabled;
  }

  /** switch button value */
  _value = false;
  _bgColor = `bg-primary`;
  /**  local flag for indicate disable element */
  private _disabled =false;

  constructor(private _cdr: ChangeDetectorRef) {}

  /** it set radios disable status */
  setDisabledState(isDisabled: boolean): void {
    this._disabled = isDisabled;
    this._cdr.markForCheck();
  }

  /** it fire when click on switch button and set new value */
  onChange($event: any): void {
    this._value = Boolean($event.target?.checked);
    this.indeterminate = Boolean($event.target?.indeterminate);
    this._onChange(this._value);
    this.changedVal.emit(this._value);
    this._cdr.markForCheck();
  }

  /**
   * Update form when DOM element value changes (view => model)
   * NOTE its used to support using component in form-builder
   */
  registerOnChange(fn: (value: any) => any): void {
    // Store the provided function as an internal method.
    this._onChange = fn;
  }

  /**
   * Update form when DOM element is blurred (view => model)
   * NOTE its used to support using component in form-builder
   */
  registerOnTouched(fn: () => any): void {
    // Store the provided function as an internal method.
    this._onTouched = fn;
  }

  /**
   * it will pass forms initial state to the component
   * NOTE its used to support using component in form-builder
   */
  writeValue(value: any) {
    this._value = value;
    this._cdr.markForCheck();
  }

  /**
   * it gets called when a change occurred in input elements
   * it will be filled when registerOnChange got called
   * NOTE its used to support using component in form-builder
   */
  private _onChange(_: any) {}

  /**
   * it gets called when select box has been toggled for the first time
   * it will be filled when registerOnTouched got called
   * NOTE its used to support using component in form-builder
   */
  private _onTouched() {}
}
