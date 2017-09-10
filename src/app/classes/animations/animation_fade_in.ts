import {trigger, animate, style, state, group, animateChild, query, stagger, transition} from '@angular/animations';

export function routerTransition() {
    return fadeIn();
}


function fadeIn() {
    return trigger('routerTransition', [

        // route 'enter' transition
        transition(':enter', [
            state('void', style({position:'fixed', width:'100%'}) ),
            state('*', style({position:'fixed', width:'100%'}) ),
            // css styles at start of transition
            style({ opacity: 0.00 }),

            // animation and styles at end of transition
            animate('3s ease-in-out', style({ opacity: 1.00 }))
        ]),
    ]);
}

function slideToRight() {
    return trigger('routerTransition', [
        state('void', style({position:'fixed', width:'100%'}) ),
        state('*', style({position:'fixed', width:'100%'}) ),
        transition(':enter', [
            style({transform: 'translateX(-100%)'}),
            animate('0.5s ease-in-out', style({transform: 'translateX(0%)'}))
        ]),
        transition(':leave', [
            style({transform: 'translateX(0%)'}),
            animate('0.5s ease-in-out', style({transform: 'translateX(100%)'}))
        ])
    ]);
}

function slideToLeft() {
    return trigger('routerTransition', [
        state('void', style({position:'fixed', width:'100%'}) ),
        state('*', style({position:'fixed', width:'100%'}) ),
        transition(':enter', [
            style({transform: 'translateX(100%)'}),
            animate('0.5s ease-in-out', style({transform: 'translateX(0%)'}))
        ]),
        transition(':leave', [
            style({transform: 'translateX(0%)'}),
            animate('0.5s ease-in-out', style({transform: 'translateX(-100%)'}))
        ])
    ]);
}

function slideToBottom() {
    return trigger('routerTransition', [
        state('void', style({position:'fixed', width:'100%', height:'100%'}) ),
        state('*', style({position:'fixed', width:'100%', height:'100%'}) ),
        transition(':enter', [
            style({transform: 'translateY(-100%)'}),
            animate('0.5s ease-in-out', style({transform: 'translateY(0%)'}))
        ]),
        transition(':leave', [
            style({transform: 'translateY(0%)'}),
            animate('0.5s ease-in-out', style({transform: 'translateY(100%)'}))
        ])
    ]);
}

function slideToTop() {
    return trigger('routerTransition', [
        state('void', style({position:'fixed', width:'100%', height:'100%'}) ),
        state('*', style({position:'fixed', width:'100%', height:'100%'}) ),
        transition(':enter', [
            style({transform: 'translateY(100%)'}),
            animate('0.5s ease-in-out', style({transform: 'translateY(0%)'}))
        ]),
        transition(':leave', [
            style({transform: 'translateY(0%)'}),
            animate('0.5s ease-in-out', style({transform: 'translateY(-100%)'}))
        ])
    ]);
}
