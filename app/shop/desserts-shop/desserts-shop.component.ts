import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {  FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-desserts-shop',
  templateUrl: './desserts-shop.component.html',
  styleUrls: ['./desserts-shop.component.css']
})
export class DessertsShopComponent implements OnInit {
    signUpForm:FormGroup

   
    constructor( private router:Router) { }
  
    ngOnInit() {
        this.signUpForm = new FormGroup({
            'userData': new FormGroup({
                'firstName': new FormControl(null , [Validators.required]),
                'lastName': new FormControl(null , [Validators.required])
            }),
            'email': new FormControl(null , [Validators.email , Validators.required])
        })
    }
    onSubmit(){
        console.log(this.signUpForm)
        this.signUpForm.reset();
        
    }
    onBackToRecipes(){
        this.router.navigate(['/recipes'])
    }
  }
