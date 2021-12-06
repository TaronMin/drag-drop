import { Component } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'cards';
  // todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];

  // done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];

  ideas: string[] = [
    'Get to work',
    'Pick up groceries',
    'Go home',
    'Fall asleep',
  ];

  newAct: string = '';
  list = [
    {
      title: 'Ideas',
      act: this.ideas,
    },
    {
      title: 'Search',
      act: ['Engineering', 'Mathematics', 'Biology', 'Computer Science'],
    },
    {
      title: 'To Do',
      act: [],
    },
    {
      title: 'Done',
      act: [],
    },
  ];

  onAddAct(str: string) {
    this.newAct = '';
    console.log(str);
    this.ideas.push(str);
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
