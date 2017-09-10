import {Component, OnInit, Input} from '@angular/core';
import {Service} from "../../../classes/service";
import * as Masonry from 'masonry-layout';

declare var $: any;

@Component({
    selector: 'app-services-multi-widget',
    templateUrl: './services-multi-widget.component.html',
    styleUrls: ['./services-multi-widget.component.scss']
})

export class ServicesMultiWidgetComponent implements OnInit, Input {

    @Input() services: Service[];

    constructor() {

    }

    ngOnInit() {
        this.runMasonry();
        setTimeout(() => {
            this.runMasonry();
        }, 1000);
    }

    runMasonry(): void {
        $(document).ready(() => {
            // let widget_masonry = new Masonry("#services-grid", {
            //     itemSelector: '.col-md-4'
            // });
            $(() => {
                $('.service-box').matchHeight();
            });
        });
    }

}
