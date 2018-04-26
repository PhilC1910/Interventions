import { AppPage } from './app.po';

describe('interventions App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Déclarer un problème');
  });

  it('doit activer le bouton Sauvegarder avec champs valides scénario nominal', () => {
    page.setChampsValidesScenarioNominal();                    
    expect(page.boutonSubmit().isEnabled()).toBe(true);
  });   

  it('doit activer le bouton Sauvegarder avec champs valides scénario alternatif Par message TEXTE', () => {
    page.setChampsValidesScenarioAlternatifParMessageTexte();                    
    expect(page.boutonSubmit().isEnabled()).toBe(true);
  });

  it('doit activer le bouton Sauvegarder avec champs valides scénario alternatif Par Courriel', () => {
    page.setChampsValidesScenarioAlternatifParCourriel();                    
    expect(page.boutonSubmit().isEnabled()).toBe(true);
  });

  it('zone DescriptionProblème a une bordure ROUGE si nombre de caractères insuffisant', () => {
    page.setZoneDescriptionProblemeCaractereInsuffisant();
    expect(page.obtenirClasseZoneDescriptionProbleme()).toContain('is-invalid');
  });

  it('zone DescriptionProblème a une bordure VERT si nombre de caractères suffisant', () => {
    page.setZoneDescriptionProblemeCaractereSuffisant();
    expect(page.obtenirClasseZoneDescriptionProbleme()).toContain('is-valid');
  });
});
