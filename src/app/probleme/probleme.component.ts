import { Component, OnInit } from '@angular/core';
import { FormBuilder,  Validators, FormGroup } from '@angular/forms';
import { nombreCaractereValidator } from '../shared/caracteres-validator';


@Component({
  selector: 'inter-probleme',
  templateUrl: './probleme.component.html',
  styleUrls: ['./probleme.component.css']
})
export class ProblemeComponent implements OnInit {

  problemeForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.problemeForm = this.fb.group({
        prenomProbleme:['',[Validators.required, Validators.minLength(3)]],
        caractere:['',[nombreCaractereValidator.longueurMinimum(3)]]
     });
  }

}
