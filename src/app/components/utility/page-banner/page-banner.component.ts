import {Component, OnInit, Input} from '@angular/core';

@Component({
    selector: 'app-page-banner',
    templateUrl: './page-banner.component.html',
    styleUrls: ['./page-banner.component.scss']
})
export class PageBannerComponent implements OnInit, Input {

    @Input() name: string;
    @Input() image: string;

    constructor() {
        if (!this.name) {
            this.name = "Page Name";
        }

        if (!this.image) {
            this.image = "assets/vendor/images/banner/banner2.jpg";
        }
    }

    ngOnInit() {

    }

}
