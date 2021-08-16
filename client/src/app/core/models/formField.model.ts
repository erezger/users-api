import {
  eFieldSource,
  eFieldType,
  eFormFieldCategory,
  ePermission,
} from '@app/core/constants/data.enums';

export namespace FormFields {
  export class FieldOptionDto {
    public constructor(init?: Partial<FieldOptionDto>) {
      Object.assign(this, init);
    }
    public _id?: string;
    public image?: string;
    public title?: string;
    public value: string;
    public name?:string;
    public valueHebrew?: string;
    public selected?: boolean;
  }

  export class FormFieldDto {
    public constructor(init?: Partial<FormFieldDto>) {
      Object.assign(this, init);
    }
    public _id?: string;
    public fieldId?: string;
    public fieldName: string;
    public fieldNameHebrew?:string;
    public fieldType: eFieldType;
    public fieldCategory: eFormFieldCategory;
    public isMandatory?: string|boolean;
    public fieldOptions?: FieldOptionDto[];
    public source?: eFieldSource;
    public position?: number;
    public permission?: ePermission;
  }
}
