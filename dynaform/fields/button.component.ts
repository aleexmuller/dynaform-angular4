import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ButtonModel } from '../core/dynaform.models';

/**
 * @name DECORATOR_CONTENT
 * @description The decorator content of the button component.
 *
 * @const
 */
export const DECORATOR_CONTENT = {
    selector: 'dynaform-button',
    template: `
		<div class="dynaform-button" [ngClass]="{'disabled': !fGroup.valid}">
			<button
				[type]="button.getType()"
				[attr.id]="button.getKey()"
				(click)="buttonOnClick.emit(button)">
					{{button.getName()}}
			</button>
	    </div>
  	`
};

/**
 * @description The decorator to ButtonComponent
 */
@Component(DECORATOR_CONTENT)

/**
 * @name ButtonComponent
 *
 * @class
 *
 * @property {ButtonModel} button
 * @property {FormGroup} fGroup
 * @property {EventEmitter<ButtonModel>} buttonOnClick
 */
export class ButtonComponent {
    /**
	 * @name button
	 * @description A instance of model ButtonModel
	 *
	 * @public
	 */
    public button: ButtonModel;

    /**
	 * @name fGroup
	 * @description A instance of FormGroup
	 *
	 * @public
	 */
	public fGroup: FormGroup;

	/**
	 * @name buttonOnClick
	 * @description A instance of EventEmitter
	 *
	 * @public
	 */
	@Output() public buttonOnClick: EventEmitter<ButtonModel> = new EventEmitter();
}
