import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardsService } from 'src/app/services/cards.service';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.css']
})
export class CardDetailsComponent implements OnInit {

  id:any
  userInfo!:any
  constructor(private route: ActivatedRoute, private cardService:CardsService) { 
    this.id = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.cardService.getCardByID(+this.id).subscribe((res:any) =>{
      this.userInfo=res.data
    })
  }

}
