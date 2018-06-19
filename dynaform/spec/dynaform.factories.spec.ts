import { ButtonModel, FieldModel, GroupModel, FormModel } from './../core/dynaform.models';
import { Validators } from '@angular/forms';
import { ButtonFactory, FieldFactory, GroupFactory, FormFactory } from '../core/dynaform.factories';

describe('ButtonFactory', () => {
	it('should to create a instance of ButtonModel', () => {
		const buttonTpl = {
			name: 'Cancelar', 
			key: 'cancel', 
			type: 'cancel'
		};
		const buttonMdl = ButtonFactory.create(buttonTpl);
		expect(buttonMdl instanceof ButtonModel).toBe(true);
	});
});

describe('FieldFactory', () => {
	it('should to create a instance of FieldModel', () => {
		const fieldTpl = {
			name: 'Nome Completo', 
			key: 'name', 
			type: 'text', 
			value: 'valor inicial', 
			validators: [Validators.required]
		};
		const fieldMdl = FieldFactory.create(fieldTpl);
		expect(fieldMdl instanceof FieldModel).toBe(true);
	});
});

describe('GroupFactory', () => {
	it('should to create a instance of GroupModel', () => {
		const groupTpl = {
			name: 'Encereço',
			key: 'endereco',
			fields: [
				{
					name: 'Rua',
					key: 'rua',
					type: 'text',
					value: 'valor inicial',
					validators: [Validators.required]
				},
				{
					name: 'Numero',
					key: 'numero',
					type: 'number',
					value: 100,
					validators: []
				},
				{
					name: 'Bairro',
					key: 'bairro',
					type: 'text',
					value: 'valor inicial',
					validators: []
				}
			]
		};
		const groupMdl = GroupFactory.create(groupTpl);
		expect(groupMdl instanceof GroupModel).toBe(true);
	});
});

describe('FormFactory', () => {
	it('should to create a instance of FormModel', () => {
		const formTpl = {
			name: 'Dyna Form',
			groups: [
				{
					name: 'Encereço',
					key: 'endereco',
					fields: [
						{
							name: 'Rua',
							key: 'rua',
							type: 'text',
							value: 'valor inicial',
							validators: [Validators.required]
						},
						{
							name: 'Numero',
							key: 'numero',
							type: 'number',
							value: 100,
							validators: []
						},
						{
							name: 'Bairro',
							key: 'bairro',
							type: 'text',
							value: 'valor inicial',
							validators: []
						}
					]
				}
			],
			buttons: [
				{
					name: 'Enviar',
					key: 'submit',
					type: 'submit'
				}
			]
		};
		const formMdl = FormFactory.create(formTpl);
		expect(formMdl instanceof FormModel).toBe(true);
	});
})
