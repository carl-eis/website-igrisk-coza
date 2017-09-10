import {Component, OnInit} from '@angular/core';
import {Slide} from "../../classes/slide";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    slides_home: Slide[];

    constructor() {
        this.slides_home = [
            new Slide({
                "title" : "Lorum ipsum dolor sit amet!",
                "subtitle" : "Making great things, while making a difference",
                "image_url" : "assets/images/slider/slider1_2.jpg",
                "animation" : "animated4",
                "animation_title" : "animated2",
                "animation_subtitle" : "animated3"
            }),
            new Slide({
                "title" : "Lorum ipsum dolor sit amet!",
                "subtitle" : "Making great things, while making a difference",
                "image_url" : "assets/images/slider/slider1_1.jpg",
                "animation" : "animated6",
                "animation_title" : "animated4",
                "animation_subtitle" : "animated5"
            }),
            new Slide({
                "title" : "Lorum ipsum dolor sit amet!",
                "subtitle" : "Making great things, while making a difference",
                "image_url" : "assets/images/slider/slider1_3.jpg",
                "animation" : "animated4",
                "animation_title" : "animated7",
                "animation_subtitle" : "animated8"
            }),
        ];
    }

    ngOnInit() {

    }

}
