import { AbstractControl, ValidatorFn } from '@angular/forms';

export class emailMatcherValidator {

    static courrielConfirmation(): ValidatorFn {
        return (c: AbstractControl): { [key: string]: boolean } | null => {
             const email = c.get('courriel');
             const confirm = c.get('courrielConfirmation');
            if (!c['controls'].courriel.value || !c['controls'].courrielConfirmation.value) {
              return null;
            }
            return c['controls'].courriel.value === c['controls'].courrielConfirmation.value ? null : { match: true };
        };
    }   
}