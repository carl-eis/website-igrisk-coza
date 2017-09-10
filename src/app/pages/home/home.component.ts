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
            // new Slide({
            //     "title" : "The Investment Group",
            //     "subtitle" : "Testing",
            //     "image_url" : "assets/images/slider/ig3.png",
            //     "animation" : "animated4",
            //     "animation_title" : "animated2",
            //     "animation_subtitle" : "animated3",
            //     "display_button" : false
            // }),
            new Slide({
                "title" : "The Investment Group",
                "subtitle" : "Growing your future",
                "image_url" : "assets/images/slider/slider1_2.jpg",
                "animation" : "animated6",
                "animation_title" : "animated5",
                "animation_subtitle" : "animated4"
            }),
            new Slide({
                "title" : "The Investment Group",
                "subtitle" : "Caring for our customers",
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
