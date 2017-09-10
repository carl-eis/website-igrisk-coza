export class Slide {

    title: string;
    subtitle: string;
    image_url: string;
    animation: string;

    animation_title: string;
    animation_subtitle: string;

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
