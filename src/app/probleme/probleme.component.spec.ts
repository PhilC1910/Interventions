import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemeComponent } from './probleme.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ReactiveFormsModule } from '@angular/forms';
import { TypeProduitService } from './type-probleme.service';
import { HttpClientModule } from '@angular/common/http';
import { emailMatcherValidator } from '../shared/emailMatcher-validator';

describe('ProblemeComponent', () => {
  let component: ProblemeComponent;
  let fixture: ComponentFixture<ProblemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
     
      imports: [AngularFontAwesomeModule,  ReactiveFormsModule, HttpClientModule],
      declarations: [ ProblemeComponent ],
      providers:[TypeProduitService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProblemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  it('champs prénom du probleme est invalide avec 2 caractères',() => {
    let errors = { };
    let zone =component.problemeForm.controls['prenomProbleme'];
    zone.setValue('a'.repeat(2));
    errors = zone.errors || { };
    expect(errors['minlength']).toBeTruthy();
  });

  it('champs prénom du probleme est valide avec 3 caractères',() => {
    let errors = { };
    let zone =component.problemeForm.controls['prenomProbleme'];
    zone.setValue('a'.repeat(3));
    errors = zone.errors || { };
    expect(errors['minlength']).toBeFalsy();
  });

  it('champs prénom du probleme est valide avec 200 caractères',() => {
    let errors = { };
    let zone =component.problemeForm.controls['prenomProbleme'];
    zone.setValue('a'.repeat(200));
    errors = zone.errors || { };
    expect(errors['minlength']).toBeFalsy();
  });

  it('champs prénom du probleme est invalide avec aucune valeur',() => {
    let errors = { };
    let zone =component.problemeForm.controls['prenomProbleme'];
    zone.setValue('');
    errors = zone.errors || { };
    expect(errors['required']).toBeTruthy();
  });

  it('champs prénom du probleme est invalide avec 1 caractère',() => {
    let errors = { };
    let zone =component.problemeForm.controls['prenomProbleme'];
    zone.setValue('a'.repeat(1));
    errors = zone.errors || { };
    expect(errors['minlength']).toBeTruthy();
  });

  it('champs prénom du probleme est invalide avec 50 espaces',() => {
    let errors = { };
    let zone =component.problemeForm.controls['prenomProbleme'];
    zone.setValue(' '.repeat(50));
    errors = zone.errors || { };
    expect(errors['longueurMinimum']).toBeFalsy(); 
  });

  it('champs prénom du probleme est invalide avec 2 espaces et 1 caractère',() => {
    let errors = { };
    let zone =component.problemeForm.controls['prenomProbleme'];
    zone.setValue('a'.repeat(1), ' '.repeat(2) );
    errors = zone.errors || { };
    expect(errors['longueurMinimum']).toBeFalsy();
  });

  it('Zone Addresse Courriel  commande est désactivée quand ne pas me notifier', () => {
      component.gestionNotifications('pasNotification');
      let zone = component.problemeForm.get('addresseCourrielGroup.courriel');
      expect(zone.status).toEqual('DISABLED'); 
  });

  it('Zone Confirmer  Courriel   commande est désactivée quand ne pas me notifier', () => {
    component.gestionNotifications('pasNotification');
    let zone = component.problemeForm.get('addresseCourrielGroup.courrielConfirmation');
    expect(zone.status).toEqual('DISABLED'); 
});

it('Zone Télephone commande est désactivé quand ne pas me notifier', () => {
  component.gestionNotifications('pasNotification');
  let zone = component.problemeForm.get('telephone');
  expect(zone.status).toEqual('DISABLED'); 
});

it('Zone  Télephone commande est vide quand ne pas me notifier', () => {
  component.gestionNotifications('pasNotification');
  let zone = component.problemeForm.get('telephone');
  expect(zone.value).toBeNull(); 
});

it('Zone Téléphone est désactivé quand notifier par courriel', () => {
  component.gestionNotifications('parCourriel');
  let zone = component.problemeForm.get('telephone');
  expect(zone.status).toEqual('DISABLED'); 
});

it('Zone Adresse Courriel est activé quand notifier par courriel', () => {
  component.gestionNotifications('parCourriel');

  let zone = component.problemeForm.get('addresseCourrielGroup.courriel');
  expect(zone.status).not.toEqual('DISABLED');
});

it('Zone  Confirmer Courriel est activé quand notifier par courriel', () => {
  component.gestionNotifications('parCourriel');

  let zone = component.problemeForm.get('addresseCourrielGroup.courrielConfirmation');
  expect(zone.status).not.toEqual('DISABLED');
});

it('Zone  Adresse Courriel est invalide sans valeur quand notifier par courriel', () => {
  component.gestionNotifications('parCourriel');

  let zone = component.problemeForm.get('addresseCourrielGroup.courriel');
  expect(zone.value).toBeNull();
});

it('Zone  Confirmer Courriel est invalide sans valeur quand notifier par courriel', () => {
  component.gestionNotifications('parCourriel');

  let zone = component.problemeForm.get('addresseCourrielGroup.courrielConfirmation');
  expect(zone.value).toBeNull();
});

it('Zone  Adresse Courriel est invalide avec un format non conforme', () => {
  component.gestionNotifications('parCourriel');

  let errors = { };
  let zone = component.problemeForm.get('addresseCourrielGroup.courrielConfirmation');

  errors = zone.errors || { };
  expect(errors['pattern']).toBeFalsy();
});

it('Zone  Adresse Courriel sans valeur  et Zone  Confirmation Courriel avec valeur valide retourne null', () => {
  component.gestionNotifications('parCourriel');

  let errors = { };

  let zoneAddresseCourriel = component.problemeForm.get('addresseCourrielGroup.courriel');
  let zoneCourrielConfirmation = component.problemeForm.get('addresseCourrielGroup.courrielConfirmation');
 zoneAddresseCourriel.setValue('');
 zoneCourrielConfirmation.setValue('phil2@hotmail.com');

 let groupe = component.problemeForm.get('addresseCourrielGroup');
 errors = groupe.errors|| { };
expect(errors['match']).toBeUndefined();
  
});

it('Zone  Adresse Courriel avec  valeur valide et Zone  Confirmation Courriel sans valeur retourne null', () => {
  

  component.gestionNotifications('parCourriel');

  let errors = { };

  let zoneAddresseCourriel = component.problemeForm.get('addresseCourrielGroup.courriel');
  let zoneCourrielConfirmation = component.problemeForm.get('addresseCourrielGroup.courrielConfirmation');
 zoneAddresseCourriel.setValue('phil3@hotmail.com');
 zoneCourrielConfirmation.setValue('');

 let groupe = component.problemeForm.get('addresseCourrielGroup');
 errors = groupe.errors|| { };
 expect(errors['match']).toBeUndefined();
});

it('Zone  Adresse Courriel  et Zone  Confirmation Courriel sont invalides si les valeur sont identiques quand notifier par courriel ', () => {
  component.gestionNotifications('parCourriel');

  let errors = { };

  let zoneAddresseCourriel = component.problemeForm.get('addresseCourrielGroup.courriel');
  let zoneCourrielConfirmation = component.problemeForm.get('addresseCourrielGroup.courrielConfirmation');
 zoneAddresseCourriel.setValue('phil5@hotmail.com');
 zoneCourrielConfirmation.setValue('phil5@hotmail.com');

 let groupe = component.problemeForm.get('addresseCourrielGroup');
 errors = groupe.errors|| { };
 expect(errors['match']).toBeUndefined();
});

it('Zone  Adresse Courriel  et Zone  Confirmation Courriel sont valides si les valeur sont différents quand notifier par courriel ', () => {
  component.gestionNotifications('parCourriel');

  let errors = { };

  let zoneAddresseCourriel = component.problemeForm.get('addresseCourrielGroup.courriel');
  let zoneCourrielConfirmation = component.problemeForm.get('addresseCourrielGroup.courrielConfirmation');
 zoneAddresseCourriel.setValue('phil3@hotmail.com');
 zoneCourrielConfirmation.setValue('phil4@hotmail.com');

 let groupe = component.problemeForm.get('addresseCourrielGroup');
 errors = groupe.errors|| { };
 expect(errors['match']).toBe(true);
});

});
