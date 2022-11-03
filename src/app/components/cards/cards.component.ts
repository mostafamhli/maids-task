import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { cards, CardsService } from 'src/app/services/cards.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})


export class CardsComponent implements OnInit,AfterViewInit  {

  data: any;
  dataSource:any;
  columnsToDisplay= ['avatar','first_name','last_name','email'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private cardsService:CardsService, private router: Router) { }

  ngOnInit(): void {
    this.getAllCards()
  }
   
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  getAllCards() {
    this.cardsService.getCardsInPageOne().subscribe((res:any)=>{
      let grouped=res.data
      this.cardsService.getCardsInPageTwo().subscribe((res:any)=>{
        grouped.push(...res.data)
        this.data=grouped
        this.dataSource=new MatTableDataSource<cards>(this.data);
        this.dataSource.paginator = this.paginator;
      })
    })
  }

  clickedRow(row:any){
    this.router.navigate(['/cards', +row+1]);
  }
}
