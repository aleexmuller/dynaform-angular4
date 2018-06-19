import { Component, ViewContainerRef, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldModel } from '../core/dynaform.models';

/**
 * @name DECORATOR_CONTENT
 * @description The decorator content of the input component.
 *
 * @const
 */
export const DECORATOR_CONTENT = {
	selector: 'dynaform-input',
	template: `
		<div class="dynaform-item" [formGroup]="fGroup">
	        <input [type]="field.getType()" [formControlName]="field.getKey()" />
	    </div>
  	`
};

/**
 * @description The decorator to InputComponent
 */
@Component(DECORATOR_CONTENT)

/**
 * @name InputComponent
 *
 * @class
 *
 * @property {FieldModel} field
 * @property {FormGroup} fGroup
 */
export class InputComponent {
  /**
	* @name field
	* @description A instance of model FieldModel
	*
	* @public
	*/
	public field: FieldModel;

  /**
	* @name fGroup
	* @description A instance of FormGroup
	*
	* @public
	*/
	public fGroup: FormGroup;
}
