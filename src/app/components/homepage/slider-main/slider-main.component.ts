import {Component, OnInit, Input} from '@angular/core';
import {Slide} from "../../../classes/slide";
declare var $: any;
// let $: any;
// import * as $ from 'jquery';
// import * as flexslider from 'flexslider';
// flexslider.
// let flexslider: any;


@Component({
    selector: 'app-slider-main',
    templateUrl: './slider-main.component.html',
    styleUrls: ['./slider-main.component.scss']
})
export class SliderMainComponent implements OnInit, Input {

    @Input() slides: Slide[];

    constructor() {

    }

    ngOnInit() {
        this.setupSlides();
    }

    setupSlides(): void {
        $(document).ready(() => {
            $('.flexSlideshow').flexslider({
                slideshowSpeed: 5000,
                animationSpeed: 600,
            });
        });
    }

}
