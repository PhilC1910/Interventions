import { browser, by, element, ElementFinder } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/probleme');
  }

  getParagraphText() {
    return element(by.css('inter-root h5')).getText();
  }

   

  setChampsValidesScenarioNominal() : void {
    element(by.id('prenomProblemeId')).sendKeys('prenomProbleme');
    element(by.id('nomProblemeId')).sendKeys('nomProbleme');
    // Sélectionner le X élément dans la zone de liste déroulante
    element(by.id('noTypeProblemeId')).all(by.tagName('option')).get(2).click();
    // Cliquer sur le bouton radio voulu
    element.all(by.id('NotifiezMoiId')).get(0).click();
    element(by.id('descriptionProblemeId')).sendKeys('Problème entre la chaise et le clavier...');
   }

   setChampsValidesScenarioAlternatifParMessageTexte() : void {
    element(by.id('prenomProblemeId')).clear();
    element(by.id('prenomProblemeId')).sendKeys('philippe');
    element(by.id('nomProblemeId')).clear();
    element(by.id('nomProblemeId')).sendKeys('chevy');
    // Sélectionner le X élément dans la zone de liste déroulante
    element(by.id('noTypeProblemeId')).all(by.tagName('option')).get(2).click();
    // Cliquer sur le bouton radio voulu
    element.all(by.id('NotifiezMoiId')).get(2).click();
    element(by.id('telephoneId')).sendKeys('5141231234');
    element(by.id('descriptionProblemeId')).clear();
    element(by.id('descriptionProblemeId')).sendKeys('Problème entre la chaise et le clavier...');
   }

  
   setChampsValidesScenarioAlternatifParCourriel() : void {
    element(by.id('prenomProblemeId')).clear();
    element(by.id('prenomProblemeId')).sendKeys('phi');
    element(by.id('nomProblemeId')).clear();
    element(by.id('nomProblemeId')).sendKeys('chevry');
    // Sélectionner le X élément dans la zone de liste déroulante
    element(by.id('noTypeProblemeId')).all(by.tagName('option')).get(2).click();
    // Cliquer sur le bouton radio voulu
    element.all(by.id('NotifiezMoiId')).get(1).click();
    element(by.id('courrielId')).sendKeys('aa@bbb.com');
    element(by.id('courrielConfirmationId')).sendKeys('aa@bbb.com');
    element(by.id('descriptionProblemeId')).clear();
    element(by.id('descriptionProblemeId')).sendKeys('Problème entre la chaise et le clavier...');
   } 

   boutonSubmit() : ElementFinder { 
    return element(by.buttonText('Sauvegarder'));
  } 
   setZoneDescriptionProblemeCaractereSuffisant() : void {
    element(by.id('descriptionProblemeId')).clear();
    element(by.id('descriptionProblemeId')).sendKeys('XXXXXX   XXXXX');
  }

  setZoneDescriptionProblemeCaractereInsuffisant() : void {
    element(by.id('descriptionProblemeId')).clear();
    element(by.id('descriptionProblemeId')).sendKeys('XXXX');
  }

  obtenirClasseZoneDescriptionProbleme()   { 
    return element(by.id('descriptionProblemeId')).getAttribute("class");
  }
}
