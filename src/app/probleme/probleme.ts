export interface IProbleme {
     id: number,
     prenom: string,
     nom: string,
     notypeProbleme?: number,
     notification: string,
     courriel: string,
     courrielConfirmation: string,
     telephone: string,
     noUnite: string,
     descriptionProbleme: string,
     dateProbleme?: Date 
}