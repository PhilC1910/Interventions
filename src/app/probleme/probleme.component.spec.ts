import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemeComponent } from './probleme.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ReactiveFormsModule } from '@angular/forms';

describe('ProblemeComponent', () => {
  let component: ProblemeComponent;
  let fixture: ComponentFixture<ProblemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
     
      imports: [AngularFontAwesomeModule,  ReactiveFormsModule],
      declarations: [ ProblemeComponent ]
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
});
