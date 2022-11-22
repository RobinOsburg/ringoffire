import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-info',
  templateUrl: './game-info.component.html',
  styleUrls: ['./game-info.component.scss']
})
export class GameInfoComponent implements OnInit, OnChanges {

  cardAction = [
    { title: 'Thruster', description: 'Everyone has to do 3 Thrusters' },
    { title: 'PullUps', description: 'You have to do 5 Strickt PullUps' },
    { title: 'SkiErg', description: 'Everyone has to do 10 cal on SkiErg' },
    { title: 'DeadLift', description: 'Person left from you has to do 10 DeadLifts' },
    { title: 'Squats', description: 'Everyone has to do 10 FrontSquats' },
    { title: 'Squats', description: 'Everyone has to do 10 FrontSquats' },
    { title: 'Squats', description: 'Everyone has to do 10 FrontSquats' },
    { title: 'Squats', description: 'Everyone has to do 10 FrontSquats' },
    { title: 'Squats', description: 'Everyone has to do 10 FrontSquats' },
    { title: 'Squats', description: 'Everyone has to do 10 FrontSquats' },
    { title: 'Squats', description: 'Everyone has to do 10 FrontSquats' },
    { title: 'Squats', description: 'Everyone has to do 10 FrontSquats' },
    { title: 'Squats', description: 'Everyone has to do 10 FrontSquats' },
    { title: 'Squats', description: 'Everyone has to do 10 FrontSquats' },
    { title: 'Squats', description: 'Everyone has to do 10 FrontSquats' },
    { title: 'Squats', description: 'Everyone has to do 10 FrontSquats' },
    { title: 'Squats', description: 'Everyone has to do 10 FrontSquats' },

  ]

  title = '';
  description = '';
  @Input() card: string;



  constructor() { }

  ngOnInit(): void {

  }

  ngOnChanges(): void {
    if(this.card){
    console.log('current card is:', this.card);
    let cardNumber = +this.card.split('_')[1];
    this.title=this.cardAction[cardNumber - 1].title;
    this.description=this.cardAction[cardNumber - 1].description;
  }
}

}
