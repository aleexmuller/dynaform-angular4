import { Directive, Input, ComponentFactoryResolver, ViewContainerRef, OnInit, ComponentRef, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldModel, ButtonModel } from './dynaform.models';
import { InputComponent } from './../fields/input.component';
import { ButtonComponent } from '../fields/button.component';

/**
 * @name UI_COMPONENTS_LIST
 * @description A list of ui components declarations.
 *
 * @const
 */
export const UI_COMPONENTS_LIST = {
	text: InputComponent,
	number: InputComponent
};

/**
 * @name FIELD_DECORATOR_CONTENT
 * @description The decorator content of the form directive.
 *
 * @const
 */
export const FIELD_DECORATOR_CONTENT = {
	selector: '[dynaformField]'
};

/**
 * @name BUTTON_DECORATOR_CONTENT
 * @description The decorator content of the form directive.
 *
 * @const
 */
export const BUTTON_DECORATOR_CONTENT = {
	selector: '[dynaformButton]'
};

/**
 * @description The decorator to DynaFormFieldDirective
 */
@Directive(FIELD_DECORATOR_CONTENT)

/**
 * @name DynaFormFieldDirective
 * @description Use this class to define a ui component.
 *
 * @implements OnInit
 * @class
 *
 * @property {FieldModel} field
 * @property {FormGroup} fGroup
 * @property {ComponentRef<any>} component
 */
export class DynaFormFieldDirective implements OnInit {
	/**
	* @name field
	* @description A instance of model FieldModel
	*
	* @public
	*/
	@Input() public field: FieldModel;

	/**
	* @name fGroup
	* @description A instance of FormGroup
	*
	* @public
	*/
	@Input() public fGroup: FormGroup;

	/**
	* @name component
	* @description A instance of ComponentRef
	*
	* @public
	*/
	public component: ComponentRef<any>;

	/**
	 * @name DynaFormFieldDirective
	 *
	 * @constructor
	 * @public
	 *
	 * @param {ComponentFactoryResolver} resolver
	 * @param {ViewContainerRef} container
	 */
	constructor(
		private resolver: ComponentFactoryResolver,
		private container: ViewContainerRef) { }

	/**
	* Instantiate a ui components dynamically
	*
	 * @name ngOnInit
	 * @method
	 * @public
	 */
	ngOnInit() {
		const factory = this.resolver.resolveComponentFactory<any>(UI_COMPONENTS_LIST[this.field.getType()]);
		this.defineFieldComponent(factory);
	}

	/**
	* Instantiate a ui components dynamically
	*
	 * @name defineFieldComponent
	 * @method
	 * @public
	 */
	public defineFieldComponent(factory) {
		this.component = this.container.createComponent(factory);
		this.component.instance.field = this.field;
		this.component.instance.fGroup = this.fGroup;
	}
}

/**
 * @description The decorator to DynaFormFieldDirective
 */
@Directive(BUTTON_DECORATOR_CONTENT)

/**
 * @name DynaFormFieldDirective
 * @description Use this class to define a ui component.
 *
 * @implements OnInit
 * @class
 *
 * @property {FieldModel} field
 * @property {FormGroup} fGroup
 * @property {ComponentRef<any>} component
 * @property {EventEmitter<any>} buttonOnClick
 */
export class DynaFormButtonDirective implements OnInit {
	/**
	* @name button
	* @description A instance of model ButtonModel
	*
	* @public
	*/
	@Input() public button: ButtonModel;

	/**
	* @name fGroup
	* @description A instance of FormGroup
	*
	* @public
	*/
	@Input() public fGroup: FormGroup;

	/**
	* @name buttonOnClick
	* @description A instance of EventEmitter
	*
	* @public
	*/
	@Output() buttonOnClick: EventEmitter<any> = new EventEmitter();

	/**
	* @name component
	* @description A instance of ComponentRef
	*
	* @public
	*/
	public component: ComponentRef<any>;

	/**
	 * @name DynaFormButtonDirective
	 *
	 * @constructor
	 * @public
	 *
	 * @param {ComponentFactoryResolver} resolver
	 * @param {ViewContainerRef} container
	 */
	constructor(
		private resolver: ComponentFactoryResolver,
		private container: ViewContainerRef) { }

	/**
	* Instantiate a ui components dynamically
	*
	 * @name ngOnInit
	 * @method
	 * @public
	 */
	ngOnInit() {
		const factory = this.resolver.resolveComponentFactory<any>(ButtonComponent);
		this.defineButtonComponent(factory);
	}

	/**
	* Instantiate a ui components dynamically
	*
	 * @name defineButtonComponent
	 * @method
	 * @public
	 */
	public defineButtonComponent(factory) {
		this.component = this.container.createComponent(factory);
		this.component.instance.button = this.button;
		this.component.instance.fGroup = this.fGroup;
		this.component.instance.buttonOnClick.subscribe((value: any) => this.buttonOnClick.emit(value));
	}
}
