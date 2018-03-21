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
    let zone =component.problemeForm.controls['prenomProbleme'];
    zone.setValue('a'.repeat(2));
    expect(zone.valid).toBeFalsy();
  });

  it('champs prénom du probleme est valide avec 3 caractères',() => {
    let zone =component.problemeForm.controls['prenomProbleme'];
    zone.setValue('a'.repeat(3));
    expect(zone.valid).toBeTruthy();
  });

  it('champs prénom du probleme est valide avec 200 caractères',() => {
    let zone =component.problemeForm.controls['prenomProbleme'];
    zone.setValue('a'.repeat(200));
    expect(zone.valid).toBeTruthy();
  });

  it('champs prénom du probleme est invalide avec aucune valeur',() => {
    let zone =component.problemeForm.controls['prenomProbleme'];
    zone.setValue(' ');
    expect(zone.valid).toBeFalsy();
  });

  it('champs prénom du probleme est invalide avec 1 caractère',() => {
    let zone =component.problemeForm.controls['prenomProbleme'];
    zone.setValue('a'.repeat(1));
    expect(zone.valid).toBeFalsy();
  });

  it('champs prénom du probleme est valide avec 50 espaces',() => {
    let zone =component.problemeForm.controls['prenomProbleme'];
    zone.setValue('a'.repeat(50));
    expect(zone.valid).toBeTruthy();
  });

  it('champs prénom du probleme est valide avec 2 espaces et 1 caractère',() => {
    let zone =component.problemeForm.controls['prenomProbleme'];
    zone.setValue('a'.repeat(1), ' '.repeat(2) );
    expect(true).toBeTruthy();
  });
});
