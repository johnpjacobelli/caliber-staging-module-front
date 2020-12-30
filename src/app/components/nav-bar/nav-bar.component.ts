import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor() { }


  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  addTemplateTag(){
    const link = document.querySelector('.nav-link');
    const showArea = document.getElementById('showArea');
    console.log(link);
    console.log(showArea);

    // check for specific class name to get appropriate template tag
    if (link.classList.contains('view-associates')){
      console.log('Found view-associates class in link. Getting tag...');
      // NOTE: the below two lines did work BUT still did not show component
      const templateTag = document.createElement('app-view-associate');
      showArea.appendChild(templateTag);
    }
  }

}
