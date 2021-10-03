import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarCrashService } from 'src/app/core/car-crash.service';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit {

  cardId = ''; 
  result: any;

  constructor(private router: Router, private activatedRouter: ActivatedRoute, private carCrashService: CarCrashService) { 

  }

  ngOnInit(): void {

    this.cardId = this.activatedRouter.snapshot.params.id;


    this.carCrashService.getCarById(this.cardId).subscribe((result) => {
      console.log("Result ->", result)
      this.result = result;
    })

  }

}
