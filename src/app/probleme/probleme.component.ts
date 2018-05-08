import { Component, OnInit } from '@angular/core';
import { FormBuilder,  Validators, FormGroup } from '@angular/forms';
import { nombreCaractereValidator } from '../shared/caracteres-validator';
import { TypeProblemeService } from './type-probleme.service';
import { ITypeProbleme } from './typeProbleme';
import { validateConfig } from '@angular/router/src/config';
import { emailMatcherValidator } from '../shared/emailMatcher-validator';
import { IProbleme } from './probleme';
import { ProblemeService } from './probleme.service';


@Component({
  selector: 'inter-probleme',
  templateUrl: './probleme.component.html',
  styleUrls: ['./probleme.component.css']
})
export class ProblemeComponent implements OnInit {

  problemeForm: FormGroup;
  typesProblemes: ITypeProbleme[];
  errorMessage: string;
  probleme: IProbleme;
  messageSauvegarde: string;
  constructor(private fb: FormBuilder, private typeProbleme: TypeProblemeService, private problemeService: ProblemeService) { }

  ngOnInit() {
    this.problemeForm = this.fb.group({
        prenom:['',[Validators.required, Validators.minLength(3), nombreCaractereValidator.longueurMinimum(3), nombreCaractereValidator.sansEspaces()]],
        nom:['',[Validators.required, Validators.maxLength(50)]],
        noTypeProbleme: ['', Validators.required],
        notification:{value: 'pasNotification', disabled: false},
        addresseCourrielGroup: this.fb.group({    
          courriel:[{value:'',disabled :true}],
          courrielConfirmation:[{value:'',disabled :true}]
        }),
        telephone:[{value: '',disabled :true}],
        descriptionProbleme:['',[Validators.required, Validators.minLength(5)]],
        noUnite:[''],
        dateProbleme:{value:Date(), disabled:true}
     });  
     
     this.typeProbleme.obtenirTypeProbleme()
     .subscribe(typ => this.typesProblemes = typ,
                error => this.errorMessage = <any>error);

   this.problemeForm.get('notification').valueChanges
  .subscribe(value => this.gestionNotifications(value));        
      
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
    telephoneControl.setValidators([Validators.required,  Validators.pattern('[0-9]+'), Validators.minLength(10),  Validators.maxLength(10)]);
    telephoneControl.enable();
   }
} 
addresseCourrielGroupControl.updateValueAndValidity();
 addresseCourrielControl.updateValueAndValidity();
 courrielConfirmationControl.updateValueAndValidity();
telephoneControl.updateValueAndValidity();


  } 

  save(): void {
    if (this.problemeForm.dirty && this.problemeForm.valid) {
         this.probleme = this.problemeForm.value;
         // Affecter les valeurs qui proviennent du fg le plus interne.

         this.probleme.prenom =  this.problemeForm.get('prenom').value;
         this.probleme.nom =  this.problemeForm.get('nom').value;
         this.probleme.notypeProbleme =  this.problemeForm.get('noTypeProbleme').value;
         this.probleme.courriel =  this.problemeForm.get('addresseCourrielGroup.courriel').value;
         this.probleme.courrielConfirmation =  this.problemeForm.get('addresseCourrielGroup.courrielConfirmation').value;
         this.probleme.telephone =  this.problemeForm.get('telephone').value;
         this.probleme.descriptionProbleme =  this.problemeForm.get('descriptionProbleme').value;
          this.probleme.dateProbleme = new Date();
 
     
        this.problemeService.saveProbleme(this.probleme)
            .subscribe( // on s'abonne car on a un retour du serveur à un moment donné avec la callback fonction
                () => this.onSaveComplete(),  // Fonction callback
                (error: any) => this.errorMessage = <any>error
            );
    } 
  }
  
  onSaveComplete(): void {
    this.problemeForm.reset();  // Pour remettre Dirty à false.  Autrement le Route Guard va dire que le formulaire n'est pas sauvegardé
    this.messageSauvegarde = 'Votre demande a bien été sauvegardée.  Nous vous remercions.';
  }  
}
