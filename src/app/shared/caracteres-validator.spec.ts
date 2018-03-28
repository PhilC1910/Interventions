import { nombreCaractereValidator } from "./caracteres-validator";
import { AbstractControl } from "@angular/forms";

describe('sansEspaces Validator',() => { 
    it('chaine de  caractère avec un champs vide' ,() => {
        let control = { value: ''};
        let validator = nombreCaractereValidator.sansEspaces();
        let result= validator(control as AbstractControl);
        expect(result['sansEspaces']).toBe(false);
     });

     it('chaime avec 10 espaces  ' ,() => {
        let control = { value: ''.repeat(10)};
        let validator = nombreCaractereValidator.sansEspaces();
        let result= validator(control as AbstractControl);
        expect(result['sansEspaces']).toBe(false);
     });

     it('chaime phrase avec des mots  ' ,() => {
        let control = { value: 'je suis beau' };
        let validator = nombreCaractereValidator.sansEspaces();
        let result= validator(control as AbstractControl);
        expect(result['sansEspaces']).toBe(true);
     });

     it('chaime phrase avec 3 espaces,des mots et ensuite 3 espaces  ' ,() => {
        let control = { value: '   bravo   '};
        let validator = nombreCaractereValidator.sansEspaces();
        let result= validator(control as AbstractControl);
        expect(result['sansEspaces']).toBe(true);
     });
});