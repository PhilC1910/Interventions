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

     it('chaine phrase avec des mots est valide ' ,() => {
        let control = { value: 'je suis beau' };
        let validator = nombreCaractereValidator.sansEspaces();
        let result= validator(control as AbstractControl);
        expect(result == null);
     });

     it('chaime phrase avec 3 espaces,des mots et ensuite 3 espaces est valide ' ,() => {
        let control = { value: '   bravo   '};
        let validator = nombreCaractereValidator.sansEspaces();
        let result= validator(control as AbstractControl);
        expect(result == null);
     });
     it('expression avec 1 espace et 2 caractères est invalide  ' ,() => {
        let control = { value: ' xx'};
        let validator = nombreCaractereValidator.longueurMinimum(3);
        let result= validator(control as AbstractControl);
        expect(result['longueurMinimum']).toBe(false);
     });
     it('expression avec 2 espace et 1 caractères est invalide  ' ,() => {
        let control = { value: '  x'};
        let validator = nombreCaractereValidator.longueurMinimum(3);
        let result= validator(control as AbstractControl);
        expect(result['longueurMinimum']).toBe(false);
     });
     it('une phrase  avec 3 espace et 3 caractères est valide  ' ,() => {
        let control = { value: '   xxx'};
        let validator = nombreCaractereValidator.longueurMinimum(3);
        let result= validator(control as AbstractControl);
        expect(result == null);
     });

     it('une phrase  avec 5 espace,5 caractères  et 5 espaces est valide   ' ,() => {
        let control = { value: '     xxxxx     '};
        let validator = nombreCaractereValidator.longueurMinimum(5);
        let result= validator(control as AbstractControl);
        expect(result == null);
     });
});