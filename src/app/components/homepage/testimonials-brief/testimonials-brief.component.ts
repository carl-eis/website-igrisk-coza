import {Component, OnInit} from '@angular/core';
declare var $: any;
@Component({
    selector: 'app-testimonials-brief',
    templateUrl: './testimonials-brief.component.html',
    styleUrls: ['./testimonials-brief.component.scss']
})
export class TestimonialsBriefComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
        $(document).ready(() => {
            //Testimonial

            $("#testimonial-carousel").owlCarousel({

                navigation : false, // Show next and prev buttons
                slideSpeed : 600,
                pagination:true,
                singleItem:true

            });

            // Custom Navigation Events
            var owl = $("#testimonial-carousel");


            // Custom Navigation Events
            $(".next").click(function(){
                owl.trigger('owl.next');
            })
            $(".prev").click(function(){
                owl.trigger('owl.prev');
            })
            $(".play").click(function(){
                owl.trigger('owl.play',1000); //owl.play event accept autoPlay speed as second parameter
            })
            $(".stop").click(function(){
                owl.trigger('owl.stop');
            });
        });
    }

}
