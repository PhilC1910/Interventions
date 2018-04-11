import { Component, OnInit } from '@angular/core';
import { FormBuilder,  Validators, FormGroup } from '@angular/forms';
import { nombreCaractereValidator } from '../shared/caracteres-validator';
import { TypeProduitService } from './type-probleme.service';
import { ITypeProbleme } from './typeProbleme';


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
        noTypeProbleme: ['', Validators.required]
     });  
     this.typeProbleme.obtenirTypeProbleme()
     .subscribe(typ => this.typesProblemes = typ,
                error => this.errorMessage = <any>error);
  }

}
