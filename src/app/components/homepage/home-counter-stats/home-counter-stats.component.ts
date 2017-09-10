import {Component, OnInit} from '@angular/core';

declare var $: any;

@Component({
    selector: 'app-home-counter-stats',
    templateUrl: './home-counter-stats.component.html',
    styleUrls: ['./home-counter-stats.component.scss']
})
export class HomeCounterStatsComponent implements OnInit {

    hasCounted: boolean;
    counter: number;

    constructor() {
        this.counter = 100;
    }

    ngOnInit() {
        // this.hasCounted = false;

        if (!this.hasCounted) {
            $('.cs-counter').counterUp({
                delay: 10,
                time: 1200
            });

            this.hasCounted = true;
        }
    }

}
