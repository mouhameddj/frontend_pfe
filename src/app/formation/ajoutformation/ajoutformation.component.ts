import { EtudiantService } from 'src/app/services/etudiant.service';
import { FormateurService } from './../../services/formateur.service';
import { FormationService } from './../../services/formation.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-ajoutformation',
  templateUrl: './ajoutformation.component.html',
  styleUrls: ['./ajoutformation.component.css']
})
export class AjoutformationComponent implements OnInit {
  

  constructor(private _formation:FormationService,private router:Router,private _formateur:FormateurService,private _etudiant:EtudiantService) { }
  formateur:any;
  etudiant:any;
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};


  ngOnInit(): void {
    this.getformateur();
    this.getetudiant();
    this.dropdownSettings = {
      singleSelection: false,
      idField: '_id',
      textField: 'name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };


  }
  getformateur(){
    this._formateur.getAll().subscribe(
      (res)=>{
        this.formateur=res;
        console.log(res);

      },
      (err)=>{
        console.log(err);


      }
    )
  }
  getetudiant(){
    this._etudiant.getAll().subscribe(
      (res)=>{
        this.etudiant=res;
        console.log(res);

      },
      (err)=>{
        console.log(err);


      }
    )
  }







  image:any;
  formation={
    title:'',
   description:'',
   date:'',
  nbr_heure:0,
   formateur:'',
  specialite:'',
   groupe:'',
   prix:0,
   technologies:''
  }
  selectedimage(event:any){
    this.image=event.target.files[0];

  }

  ajout(){
    let f =new FormData();
    f.append('title',this.formation.title);
    f.append('description',this.formation.description);
    f.append('date',this.formation.date);
    f.append('image',this.image);
    f.append('nbr_heure',this.formation.nbr_heure.toString());
    f.append('formateur',this.formation.formateur);
    f.append('specialite',this.formation.specialite);
    f.append('groupe',JSON.stringify(this.formation.groupe));
    f.append('prix',this.formation.prix.toString());
    f.append('technologies',this.formation.technologies);

    this._formation.ajout(f).subscribe(
      (res)=>{
    console.log(res);
    this.router.navigate(['/dashboard/list-formation'])
      },
      err=>{
        console.log(err);

      }
    )

  }
  selected = "----"

  update(e:any){
    this.selected = e.target.value
  }

}
