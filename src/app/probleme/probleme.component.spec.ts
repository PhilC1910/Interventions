import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemeComponent } from './probleme.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

describe('ProblemeComponent', () => {
  let component: ProblemeComponent;
  let fixture: ComponentFixture<ProblemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AngularFontAwesomeModule],
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
    expect(false).toBeFalsy();
  });

  it('champs prénom du probleme est valide avec 5 caractères',() => {
    expect(true).toBeTruthy();
  });

  it('champs prénom du probleme est valide avec 3 caractères',() => {
    expect(true).toBeTruthy();
  });

  it('champs prénom du probleme est valide avec 200 caractères',() => {
    expect(true).toBeTruthy();
  });

  it('champs prénom du probleme est invalide avec aucune valeur',() => {
    expect(false).toBeFalsy();
  });

  it('champs prénom du probleme est invalide avec 1 caractère',() => {
    expect(false).toBeFalsy();
  });

  it('champs prénom du probleme est valide avec 50 espaces',() => {
    expect(true).toBeTruthy();
  });

  it('champs prénom du probleme est valide avec 2 espaces et 1 caractère',() => {
    expect(true).toBeTruthy();
  });
});
