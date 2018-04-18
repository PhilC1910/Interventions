import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemeComponent } from './probleme.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ReactiveFormsModule } from '@angular/forms';
import { TypeProduitService } from './type-probleme.service';
import { HttpClientModule } from '@angular/common/http';

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

it('Zone Confirmer  Courriel   commande est activée si parCourriel', () => {
  component.gestionNotifications('parCourriel');

  let zone = component.problemeForm.get('addresseCourrielGroup.courrielConfirmation');
  expect(zone.status).not.toEqual('DISABLED'); 
});
it('Zone Confirmer  Courriel   commande est activée si parCourriel', () => {
  component.gestionNotifications('parCourriel');
  
  let zone = component.problemeForm.get('addresseCourrielGroup.courrielConfirmation');
  expect(zone.status).not.toEqual('DISABLED'); 
});
it('Zone Télephone commande est désactivé quand ne pas me notifier', () => {
  component.gestionNotifications('pasNotification');
  let zone = component.problemeForm.get('telephone');
  expect(zone.status).toEqual('DISABLED'); 
});

it('Zone Confirmer  Télephone commande est vide quand ne pas me notifier', () => {
  component.gestionNotifications('pasNotification');
  let zone = component.problemeForm.get('telephone');
  expect(zone.value).toBeNull(); 
});
});
