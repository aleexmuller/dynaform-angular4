import { ValidatorFn } from '@angular/forms';

/**
 * @name FieldType
 * @description Interface that represent a type of form field
 *
 * @typedef
 *
 * @property {string} name
 * @property {string} key
 * @property {string} type
 * @property {any} value
 * @property {Array<any>} options
 * @property {ValidatorFn[]} validators
 */
export interface FieldType {
   /**
    * @name name
    * @description The label name for describe the field
    */
	name: string;

   /**
    * @name key
    * @description The key name for diff the field
    */
	key: string;

   /**
    * @name type
    * @description The type of component
    */
	type: string;

   /**
    * @name value
    * @description The initial value the field
    */
	value?: any;

   /**
    * @name options
    * @description The initial value the options
    */
	options?: any;

   /**
    * @name validators
    * @description A list of Angular Validators
    */
	validators: ValidatorFn[];
}

/**
 * @name GroupType
 * @description Interface that represent a type of form field group
 *
 * @typedef
 *
 * @property {string} name
 * @property {string} key
 * @property {FieldType[]} fields
 */
export interface GroupType {
   /**
    * @name name
    * @description The label name for describe the group
    */
	name: string;

   /**
    * @name key
    * @description The key name for diff the group
    */
	key: string;

   /**
    * @name fields
    * @description A list of field models
    */
	fields: FieldType[];
}

/**
 * @name ButtonType
 * @description Interface that represent a type of form button
 *
 * @typedef
 *
 * @property {string} name
 * @property {string} key
 * @property {string} type
 */
export interface ButtonType {
	/**
	 * @name name
	 * @description The label name for describe the button
	 */
	name: string;

	/**
	 * @name key
	 * @description The key name for diff the button
	 */
	key: string;

	/**
	 * @name type
	 * @description The type of component
	 */
	type: string;
}

/**
 * @name FormType
 * @description Interface that represent a type of form
 *
 * @typedef
 *
 * @property {string} name
 * @property {GroupType[]} groups
 */
export interface FormType {
   /**
    * @name name
    * @description The label name for describe the form
    */
	name: string;

   /**
    * @name groups
    * @description A list of field models
    */
	groups: GroupType[];

   /**
    * @name buttons
    * @description A list of field models
    */
	buttons: ButtonType[];
}
