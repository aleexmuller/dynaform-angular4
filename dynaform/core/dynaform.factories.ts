import { FieldModel, GroupModel, FormModel, ButtonModel } from './dynaform.models';
import { FieldType, GroupType, FormType, ButtonType } from './dynaform.types';

/**
 * @name FieldFactory
 * @description A class for create a model FieldModel. For best implementation, use this class.
 * to create a new FieldModel.
 *
 * @class
 */
export class FieldFactory {
	/**
	 * Create a new FieldModel.
	 *
	 * @name create
	 * @method
	 * @public
	 * @static
	 *
	 * @param {FieldType} dynaFormField The interface type of form field.
	 *
	 * @return {FieldModel} A new instance of FieldModel.
	 */
	public static create(dynaFormField: FieldType): FieldModel {
		return new FieldModel(
			dynaFormField.name,
			dynaFormField.key,
			dynaFormField.type,
			dynaFormField.validators,
			dynaFormField.value,
			dynaFormField.options
		);
	}
}

/**
 * @name GroupFactory
 * @description A class for create a model GroupModel. For best implementation, use this class
 * to create a new GroupModel.
 *
 * @class
 */
export class GroupFactory {
	/**
	 * Create a new GroupModel.
	 *
	 * @name create
	 * @method
	 * @public
	 * @static
	 *
	 * @param {GroupType} dynaFormGroup The interface type of form field group.
	 *
	 * @return {GroupModel} A new instance of GroupModel.
	 */
	static create(dynaFormGroup: GroupType): GroupModel {
		return new GroupModel(
			dynaFormGroup.name,
			dynaFormGroup.key,
			dynaFormGroup.fields.map(field => FieldFactory.create(field))
		);
	}
}

/**
 * @name ButtonFactory
 * @description A class for create a model ButtonModel. For best implementation, use this class.
 * to create a new ButtonModel.
 *
 * @class
 */
export class ButtonFactory {
	 /**
	 * Create a new ButtonModel.
	 *
	 * @name create
	 * @method
	 * @public
	 * @static
	 *
	 * @param {ButtonType} formButton The interface type of form field.
	 *
	 * @return {ButtonModel} A new instance of ButtonModel.
	 */
	public static create(formButton: ButtonType): ButtonModel {
		return new ButtonModel(
			formButton.name,
			formButton.key,
			formButton.type
		);
	}
}

/**
 * @name FormFactory
 * @description A class for create a model FormModel. For best implementation, use this class 
 * to create a new FormModel.
 *
 * @class
 */
export class FormFactory {
   /**
	 * Create a new FormModel.
	 *
	 * @name create
	 * @method
	 * @public
	 * @static
	 *
	 * @param {FormType} dynaForm The interface type of form.
	 *
	 * @return {FormModel} A new instance of FormModel.
	 */
	static create(dynaForm: FormType): FormModel {
		return new FormModel(
			dynaForm.name,
			dynaForm.groups.map(group => GroupFactory.create(group)),
			dynaForm.buttons.map(button => ButtonFactory.create(button))
		);
	}
}
