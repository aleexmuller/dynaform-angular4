import { ValidatorFn } from '@angular/forms';

/**
 * @name FieldModel
 * @description A model that represent a form field. For best implementation, never instantiate this
 * model directly. In this case, use FieldFactory to create a new FieldModel.
 *
 * @class
 */
export class FieldModel {
	/**
	 * @name FieldModel
	 *
	 * @constructor
	 * @public
	 *
	 * @param {string} name The label name for describe the field.
	 * @param {string} key The key name for diff the field.
	 * @param {string} type The type of component.
	 * @param {ValidatorFn[]} validators A list of Angular Validators.
	 * @param {any} value The initial value the field.
	 * @param {Array<any>} options The options of field.
	 */
	constructor(
		private name: string,
		private key: string,
		private type: string,
		private validators: ValidatorFn[],
		private value?: any,
		private options?: Array<any>) { }

	/**
	 * @name getName
	 * @description Get the name of field
	 *
	 * @method
	 * @public
	 *
	 * @return {string} The name of field
	 */
	public getName(): string {
		return this.name;
	}

	/**
	 * Get the key of field
	 *
	 * @name getKey
	 * @method
	 * @public
	 *
	 * @return {string} The key of field
	 */
	public getKey(): string {
		return this.key;
	}

	/**
	 * Get the type of field
	 *
	 * @name getType
	 * @method
	 * @public
	 *
	 * @return {string} The type of field
	 */
	public getType(): string {
		return this.type;
	}

	/**
	 * Get the validators of field
	 *
	 * @name getValidators
	 * @method
	 * @public
	 *
	 * @return {string} A list of Angular Validators
	 */
	public getValidators(): ValidatorFn[] {
		return this.validators;
	}

	/**
	 * Get the value of field
	 *
	 * @name getValue
	 * @method
	 * @public
	 *
	 * @return {any} The value of field
	 */
	public getValue(): any {
		return this.value;
	}

	/**
	 * Get the options of field
	 *
	 * @name getOptions
	 * @method
	 * @public
	 *
	 * @return {Array<any>} A list of options of field
	 */
	public getOptions(): Array<any> {
		return this.options;
	}
}

/**
 * @name GroupModel
 * @description A model that represent a form field group. For best implementation, never instantiate this
 * model directly. In this case, use GroupFactory to create a new GroupModel.
 *
 * @class
 */
export class GroupModel {
	/**
	 * @name GroupModel
	 *
	 * @constructor
	 * @public
	 *
	 * @param {string} name The label name for describe the group.
	 * @param {string} key The key name for diff the group.
	 * @param {FieldModel[]} fields A list of field models.
	 */
	constructor(
		private name: string,
		private key: string,
		private fields: FieldModel[]) { }

	/**
	 * Get the name of group
	 *
	 * @name getName
	 * @method
	 * @public
	 *
	 * @return {string} The name of group
	 */
	public getName(): string {
		return this.name;
	}

	/**
	 * Get the key of group
	 *
	 * @name getKey
	 * @method
	 * @public
	 *
	 * @return {string} The key of group
	 */
	public getKey(): string {
		return this.key;
	}

	/**
	 * Get the fields of group
	 *
	 * @name getFields
	 * @method
	 * @public
	 *
	 * @return {FieldModel[]} The fields of group
	 */
	public getFields(): FieldModel[] {
		return this.fields;
	}
}

/**
 * @name ButtonModel
 * @description A model that represent a form button. For best implementation, never instantiate this
 * model directly. In this case, use ButtonFactory to create a new ButtonModel.
 *
 * @class
 */
export class ButtonModel {
	/**
	 * @name ButtonModel
	 *
	 * @constructor
	 * @public
	 *
	 * @param {string} name The label name for describe the button.
	 * @param {string} key The key name for diff the button.
	 * @param {string} type The type of component.
	 */
	constructor(
		private name: string,
		private key: string,
		private type: string) { }

	/**
	 * @name getName
	 * @description Get the name of button
	 *
	 * @method
	 * @public
	 *
	 * @return {string} The name of button
	 */
	public getName(): string {
		return this.name;
	}

	/**
	 * Get the key of button
	 *
	 * @name getKey
	 * @method
	 * @public
	 *
	 * @return {string} The key of button
	 */
	public getKey(): string {
		return this.key;
	}

	/**
	 * Get the type of button
	 *
	 * @name getType
	 * @method
	 * @public
	 *
	 * @return {string} The type of button
	 */
	public getType(): string {
		return this.type;
	}
}

/**
 * @name FormModel
 * @description A model that represent a form. For best implementation, never instantiate this model directly. In
 * this case, use FormFactory to create a new FormModel.
 *
 * @class
 */
export class FormModel {
	/**
	 * @name FormModel
	 *
	 * @constructor
	 * @public
	 *
	 * @param {string} name The label name for describe the form.
	 * @param {GroupModel[]} groups A list of group models.
	 */
	constructor(
		private name: string,
		private groups: GroupModel[],
		private buttons: ButtonModel[]) { }

	/**
	 * Get the name of form
	 *
	 * @name getName
	 * @method
	 * @public
	 *
	 * @return {string} The name of form
	 */
	public getName(): string {
		return this.name;
	}

	/**
	 * Get the groups of form
	 *
	 * @name getGroups
	 * @method
	 * @public
	 *
	 * @return {GroupModel[]} The groups of form
	 */
	public getGroups(): GroupModel[] {
		return this.groups;
	}

	/**
	 * Get the buttons of form
	 *
	 * @name getButtons
	 * @method
	 * @public
	 *
	 * @return {ButtonModel[]} The groups of form
	 */
	public getButtons(): ButtonModel[] {
		return this.buttons;
	}
}
