import {Component, OnInit, Input} from '@angular/core';
import {Service} from "../../../classes/service";

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

    }

}
