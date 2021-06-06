import anime from 'animejs';

export function translate(element) {


    let x = anime.timeline({
        targets: element,

        // delay starts at 500ms then increase by 100ms for each elements.
    });

    x.add({

        targets: element,
        fontSize: 40,
        easing: 'spring(1, 80, 10, 0)',


    })

    x.add({
        fontSize: 20,
        delay: 1000,
    })

}



export function growup(element, color) {


    let x = anime.timeline({
        targets: element,
    });

    x.add({

        backgroundColor: [0, color],
        easing: 'easeInExpo',

    });




}