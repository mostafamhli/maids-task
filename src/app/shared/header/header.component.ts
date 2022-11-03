import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CardsService } from 'src/app/services/cards.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  result: any
  searchInput: String = ''
  constructor(private cardService: CardsService, private router: Router) { }

  ngOnInit(): void {

  }

  searchForResult(event: any) {

    if (+event.target.value) {
      this.cardService.getCardByID(+event.target.value).subscribe((res: any) => {
        this.result = ''
        this.result = res.data
      })
    }
  }

  clicked(id: number) {
    this.router.routeReuseStrategy.shouldReuseRoute = function () { return false; }
    this.router.onSameUrlNavigation = 'reload';
    this.result = ''
    this.router.navigate(['/cards', +id]);
    this.searchInput = ''
  }
}
