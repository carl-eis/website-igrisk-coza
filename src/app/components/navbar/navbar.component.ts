import {Component, OnInit} from '@angular/core';
// import * as $ from 'jquery';
declare var $: any;

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

    navitems: any;

    constructor() {

    }

    ngOnInit() {
        this.setupNavHeader();
        this.setupNavItems();
    }

    setupNavItems(): void {
        this.navitems = [
            {name: "Home", path: "home"},
            {name: "About Us", path: "about", children: [
                {name: "About Us", path: "about"},
                {name: "Meet the team", path: "team"}
            ]},
            {name: "Services", path: "services"},
            {name: "Clients", path: "clients"}
        ];
    }

    setupNavHeader(): void {
        $(window).on('scroll', () => {
            if ($(window).scrollTop() > 100) {
                $('.header').addClass('header-solid animated fadeInDown');
            }
            else {
                $('.header').removeClass('header-solid animated fadeInDown');
            }
        });

        $(window).on('scroll', () => {
            if ($(window).scrollTop() > 200) {
                $('.header2').addClass('header-bgnone animated fadeInDown');
            }
            else {
                $('.header2').removeClass('header-bgnone animated fadeInDown');
            }
        });
    }

    nav_clicked(): void {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    }



}
