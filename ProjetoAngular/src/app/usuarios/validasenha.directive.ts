import { Directive, forwardRef, Attribute } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';
@Directive({
    selector: '[validaSenha][formControlName],[validaSenha][formControl],[validaSenha][ngModel]',
    providers: [
        { provide: NG_VALIDATORS, useExisting: forwardRef(() => ValidasenhaDirective), multi: true }
    ]
})
export class ValidasenhaDirective implements Validator {
    constructor( @Attribute('validaSenha') public validaSenha: string) {}

    validate(c: AbstractControl): { [key: string]: any } {

        let v = c.value;

        let e = c.root.get(this.validaSenha);

        if (e && v !== e.value) return {
          validaSenha: false
        }
        return null;
    }
}