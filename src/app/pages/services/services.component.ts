import {Component, OnInit} from '@angular/core';
// import {Service} from "../../classes/service";
import {Service} from "../../classes/service";

@Component({
    selector: 'app-services',
    templateUrl: './services.component.html',
    styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

    services: Service[];

    constructor() {
        this.setupServices();
    }

    ngOnInit() {

    }

    setupServices(): void {
        this.services = [
            new Service({
                name: "Local Investment Advice",
                description: "",
                image: "",
                icon: "",
                list: [
                    "Evaluation of your existing investments",
                    "Risk appropriate asset allocation",
                    "Tailored portfolio construction",
                    "Money markets and preference shares"
                ]
            }),
            new Service({
                name: "Specialist Offshore Investment Advice",
                description: "",
                image: "",
                icon: "",
                list: [
                    "Evaluation of your existing investments",
                    "Risk appropriate asset allocation",
                    "Tailored portfolio construction",
                    "Offshore unit funds, direct foreign shares and bonds",
                    "Overseas property investments",
                    "Guaranteed & structured products",
                    "Offshore bank accounts",
                    "Tax efficient investments"
                ]
            }),
            new Service({
                name: "Retirement Planning",
                description: "",
                image: "",
                icon: "",
                list: [
                    "Evaluation of existing Retirement Provision",
                    "Retirement needs analysis and planning",
                    "Retirement annuities, amalgamations and transfers",
                    "Preservation fund creation and management",
                    "Tax structuring"
                ]
            }),
            new Service({
                name: "Foreign Exchange",
                description: "",
                image: "",
                icon: "",
                list: [
                    "Facilitating forex and foreign investment allowance",
                    "Facilitating exchange control approvals and declarations\n",
                ]
            }),
            new Service({
                name: "Estate Planning and Wills",
                description: "",
                image: "",
                icon: "",
                list: [
                    "Local and foreign wills tailored to your circumstances",
                    "Winding up of estates and appointment of executives",
                    "General Estate planning",
                    "Minimization of estate fees and tax"
                ]
            }),
            new Service({
                name: "Trust Services",
                description: "",
                image: "",
                icon: "",
                list: [
                    "Local & Offshore Trust Setup",
                    "Professional Trusteeship",
                    "Trust investment management"
                ]
            }),
            new Service({
                name: "Risk and Insurance",
                description: "",
                image: "",
                icon: "",
                list: [
                    "Evaluation of personal Risk Cover",
                    "Disability and Life Insurance",
                    "Dread disease cover",
                    "Income Protection",
                    "Buy and sell agreements"
                ]
            }),
        ];
    }

}
