export class Service {

    name: string;
    description: string;
    image: string;
    icon: string;
    list: string[];

    constructor(init: any) {
        if (!!init) {
            for (const key in init) {
                if (init.hasOwnProperty(key)) {
                    this[key] = init[key];
                }
            }
        }
    }
}
