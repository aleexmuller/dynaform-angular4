import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { FormType } from './dynaform.types';
import { FormModel, GroupModel, ButtonModel } from './dynaform.models';
import { FormFactory } from './dynaform.factories';

/**
 * @name DECORATOR_CONTENT
 * @description The decorator content of the form component.
 *
 * @const
 */
export const DECORATOR_CONTENT = {
	selector: 'app-dynaform',
	template: `
     	<form class="dynaform" [formGroup]="formGroup">
        	<h2 class="dynaform-title">{{ dynaForm.getName() }}</h2>
        	<div class="dynaform-group" *ngFor="let group of dynaForm.getGroups()">
           	<h4 class="dynaform-group-title">{{ group.getName() }}</h4>
           	<div class="dynaform-field" *ngFor="let field of group.getFields()">
              	<div class="dynaform-label">{{ field.getName() }}</div>
              	<ng-container [fGroup]="formGroup" dynaformField [field]="field"></ng-container>
          	</div>
		  	</div>
		  	<div class="dynaform-buttons" *ngFor="let button of dynaForm.getButtons()">
        	<ng-container
          	[fGroup]="formGroup"
          	dynaformButton
          	[button]="button"
          	(buttonOnClick)="buttonOnClick($event)"></ng-container>
		  	</div>
     	</form>
  	`,
};

/**
 * @description The decorator to DynaFormComponent
 */
@Component(DECORATOR_CONTENT)

/**
 * @name DynaFormComponent
 *
 * @implements OnInit
 * @class
 *
 * @property {FormGroup} formGroup
 * @property {FormModel} dynaForm
 * @property {FormType} template
 */
export class DynaFormComponent implements OnInit {
	/**
	 * @name formGroup
	 * @description A instance of model FormGroup.
	 *
	 * @public
	 */
	public formGroup: FormGroup;

	/**
	 * @name dynaForm
	 * @description A instance of model FormModel.
	 *
	 * @public
	 */
	public dynaForm: FormModel;

	/**
	 * @name template
	 * @description A instance of type FormType.
	 *
	 * @public
	 */
	@Input() public template: FormType;

	/**
	 * @name doAction
	 * @description A instance of type EventEmmiter.
	 *
	 * @public
	 */
	@Output() public doAction: EventEmitter<{ formValue: any, button: ButtonModel }> = new EventEmitter();

	/**
	  * @name DynaFormComponent
	  *
	  * @constructor
	  * @public
	  *
	  * @param {FormBuilder} fBuilder
	  */
	constructor(
		private fBuilder: FormBuilder) { }

	/**
	 * Create a DynaForm and builder FormGroup.
	 *
	 * @name ngOnInit
	 * @method
	 * @public
	 */
	ngOnInit() {
		this.dynaForm = FormFactory.create(this.template);
		this.formGroup = this.fBuilder.group(this.createGroup(this.dynaForm));
	}

	/**
	 * Create a group.
	 *
	 * @name createGroup
	 * @method
	 * @private
	 *
	 * @param {FormModel} dynaForm A instance of model FormModel.
	 *
	 * @return {Object} An object formatted for the form builder.
	 */
	private createGroup(dynaForm: FormModel): Object {
		return dynaForm.getGroups().reduce((formGroup, group) => {
			return Object.assign({}, formGroup, this.createSubGroup(group));
		}, {});
	}

	/**
	 * Create a sub-group.
	 *
	 * @name createSubGroup
	 * @method
	 * @private
	 *
	 * @param {FormModel} dynaForm A instance of model FormModel.
	 *
	 * @return {Object} An object formatted for the form builder.
	 */
	private createSubGroup(group: GroupModel): Object {
		return group.getFields().reduce((formGroup, field) => {
			formGroup[field.getKey()] = new FormControl(field.getValue(), field.getValidators());
			return formGroup;
		}, {});
	}

	/**
	 * Fired event to parent with form value and clicked button.
	 *
	 * @name buttonOnClick
	 * @method
	 * @private
	 *
	 * @param {ButtonModel} button A instance of model ButtonModel.
	 *
	 * @return {void}
	 */
	public buttonOnClick(button: ButtonModel): void {
		this.doAction.emit({
			formValue: this.formGroup.value,
			button: button
		});
	}
}
