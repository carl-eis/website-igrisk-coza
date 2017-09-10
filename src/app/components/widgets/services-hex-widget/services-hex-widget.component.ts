import {Component, OnInit, Input} from '@angular/core';
import {Service} from "../../../classes/service";

@Component({
    selector: 'app-services-hex-widget',
    templateUrl: './services-hex-widget.component.html',
    styleUrls: ['./services-hex-widget.component.scss']
})
export class ServicesHexWidgetComponent implements OnInit, Input {

    @Input() services: Service[];

    constructor() {

    }

    ngOnInit() {
    }

}
