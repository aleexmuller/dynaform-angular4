import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DynaFormComponent } from './core/dynaform.component';
import { DynaFormFieldDirective, DynaFormButtonDirective } from './core/dynaform.directives';
import { InputComponent } from './fields/input.component';
import { ButtonComponent } from './fields/button.component';

/**
 * @name DECORATOR_CONTENT
 * @description The decorator content of the module component.
 *
 * @const
 */
export const DECORATOR_CONTENT = {
	imports: [CommonModule, FormsModule, ReactiveFormsModule],
	declarations: [DynaFormFieldDirective, DynaFormButtonDirective, DynaFormComponent, InputComponent, ButtonComponent],
	exports: [DynaFormComponent],
	entryComponents: [InputComponent, ButtonComponent]
};

/**
 * @description The decorator to DynaFormModule
 */
@NgModule(DECORATOR_CONTENT)

/**
 * @name DynaFormModule
 * @description A module that represent a form.
 *
 * @class
 */
export class DynaFormModule { }
