import { VerifierNombresValidator } from "./caracteres-validator";

describe('Nombre Validator',() => { 
    it('plage pour la valeur limite 3' ,() => {
        let validator = VerifierNombresValidator.plage();
        let result= validator(null);
        expect(result['plage']).toBe(true);
     });
});