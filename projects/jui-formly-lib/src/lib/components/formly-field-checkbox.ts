import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
    selector: 'formly-field-checkbox',
    template: `
      <div class="govuk-form-group">
        <fieldset class="govuk-fieldset">
          <legend class="govuk-fieldset__legend govuk-fieldset__legend--xl">
            <h1 class="govuk-fieldset__heading">
              {{to.label}}
              <span *ngIf="to.required === true">&#42;</span>
            </h1>
          </legend>
          <span id="to.id" class="govuk-hint">
            {{to.description}}
          </span>
          <div class="govuk-checkboxes">
            <div class="govuk-checkboxes__item" *ngFor="let option of to.options">
              <input class="govuk-checkboxes__input"
                     id="option.id"
                     name="option.label"
                     type="checkbox"
                     [formControl]="formControl"
                     [formlyAttributes]="field"
                     [value]="option.value">
              <label class="govuk-label govuk-checkboxes__label" [for]="option.id">
                {{ option.label }}
              </label>
            </div>
          </div>
        </fieldset>
      </div>`,
})
export class FormlyFieldCheckbox extends FieldType {}
