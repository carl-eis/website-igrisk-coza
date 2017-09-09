import {Component, OnInit, Input} from '@angular/core';
import {Slide} from "./slide";

@Component({
    selector: 'app-slider-main',
    templateUrl: './slider-main.component.html',
    styleUrls: ['./slider-main.component.scss']
})
export class SliderMainComponent implements OnInit, Input {

    // slides: Slide[];
    @Input() slides: Slide[];

    constructor() {
        // this.setupSlides();
    }

    ngOnInit() {

    }

    setupSlides(): void {
        // this.slides =
    }

}
