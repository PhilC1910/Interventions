import { Component, OnInit } from '@angular/core';
import { FormBuilder,  Validators, FormGroup } from '@angular/forms';
import { nombreCaractereValidator } from '../shared/caracteres-validator';
import { TypeProduitService } from './type-probleme.service';
import { ITypeProbleme } from './typeProbleme';
import { validateConfig } from '@angular/router/src/config';
import { emailMatcherValidator } from '../shared/emailMatcher-validator';


@Component({
  selector: 'inter-probleme',
  templateUrl: './probleme.component.html',
  styleUrls: ['./probleme.component.css']
})
export class ProblemeComponent implements OnInit {

  problemeForm: FormGroup;
  typesProblemes: ITypeProbleme[];
  errorMessage: string;
  constructor(private fb: FormBuilder, private typeProbleme: TypeProduitService) { }

  ngOnInit() {
    this.problemeForm = this.fb.group({
        prenomProbleme:['',[Validators.required, Validators.minLength(3)]],
        caractere:['',[nombreCaractereValidator.longueurMinimum(3)]],
        nomProbleme:['',[Validators.required, Validators.maxLength(50)]],
        noTypeProbleme: ['', Validators.required],
        appliquerNotifications:{value: 'pasnotification', disabled: false},
        addresseCourrielGroup: this.fb.group({    
          courriel:[{value:''}],
          courrielConfirmation:[{value:''}]
        }),
        telephone:[{value: ''}],
     });  
     
     this.typeProbleme.obtenirTypeProbleme()
     .subscribe(typ => this.typesProblemes = typ,
                error => this.errorMessage = <any>error);
      
  }
  
gestionNotifications(typeProbleme : string): void {
  const addresseCourrielGroupControl = this.problemeForm.get('addresseCourrielGroup');
 const addresseCourrielControl = this.problemeForm.get('addresseCourrielGroup.courriel');
 const courrielConfirmationControl = this.problemeForm.get('addresseCourrielGroup.courrielConfirmation');
 const telephoneControl = this.problemeForm.get('telephone');

  // tous remettre a zéro
  addresseCourrielControl.clearValidators();
  addresseCourrielControl.reset();
  addresseCourrielControl.disable();

  courrielConfirmationControl.clearValidators();
  courrielConfirmationControl.reset();
  courrielConfirmationControl.disable();

  telephoneControl.clearValidators();
  telephoneControl.reset();
  telephoneControl.disable();

 if(typeProbleme === 'parCourriel'){
  addresseCourrielGroupControl.setValidators([Validators.compose([emailMatcherValidator.courrielConfirmation()])]);
  addresseCourrielControl.setValidators([Validators.required,  Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+')]);
  addresseCourrielControl.enable();
  courrielConfirmationControl.setValidators([Validators.required,  Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+')]);
  courrielConfirmationControl.enable();
 }else{
  if(typeProbleme === 'parMessageTexte'){
    telephoneControl.setValidators([Validators.required,  Validators.pattern('[0-9]+'), Validators.minLength(10),  Validators.maxLength(10)])
    telephoneControl.enable();
   }
} 
addresseCourrielGroupControl.updateValueAndValidity();
 addresseCourrielControl.updateValueAndValidity();
 courrielConfirmationControl.updateValueAndValidity();
telephoneControl.updateValueAndValidity();


  } 
}
