import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-info',
  templateUrl: './game-info.component.html',
  styleUrls: ['./game-info.component.scss']
})
export class GameInfoComponent implements OnInit, OnChanges {

  cardAction = [
    { title: 'Pull ups', description: '1' },
    { title: 'Strict Press', description: '2' },
    { title: 'Burning Roof', description: '3' },
    { title: 'Burpees', description: '4' },
    { title: 'Alternating lunge jumps', description: '5' },
    { title: 'Squat jumps', description: '6' },
    { title: 'Push ups', description: '7' },
    { title: 'Thrusters', description: '8' },
    { title: 'Lunges', description: '9' },
    { title: 'High knees', description: '10' },
    { title: 'Jumping Jacks', description: '11' },
    { title: 'Squats', description: '12' },
    { title: 'Sit ups', description: '13' },
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
