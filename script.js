// parent
let tabs = document.querySelectorAll('.tabs'),
    blocks = document.querySelectorAll('.tabs_content');

// tabs

tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        blocks.forEach((content) => {
            content.classList.remove('is-active');
        });
        blocks[index].classList.add('is-active');
    });
});





// keyboard

let keys = document.querySelectorAll('.keys');
let spaceKey = document.querySelector('.space_key');
let shift_left = document.querySelector('.shift_left');
let shift_right = document.querySelector('.shift_right');
let caps_lock_key = document.querySelector('.caps_lock_key');


for(let i = 0; i < keys.length; i++) {
    keys[i].setAttribute('keyname', keys[i].innerText);
    keys[i].setAttribute('lowerCaseName', keys[i].innerText.toLowerCase());
}

window.addEventListener('keydown', function(e) {
    for(let i = 0; i < keys.length; i++) {
        if(e.key == keys[i].getAttribute('keyname' ) || e.key == keys[i].getAttribute('lowerCaseName')) {
            keys[i].classList.add('active')
        }
        if(e.code == 'Space') {
            spaceKey.classList.add('active')
        }
        if(e.code == 'ShiftLeft') {
            shift_right.classList.remove('active')
        }
        if(e.code == 'ShiftRight') {
            shift_left.classList.remove('active')
        }
        if(e.code == 'CapsLock') {
            caps_lock_key.classList.toggle('active');
        }
    }
})

window.addEventListener('keyup', function(e) {
    for(let i = 0; i < keys.length; i++) {
        if(e.key == keys[i].getAttribute('keyname' ) || e.key == keys[i].getAttribute('lowerCaseName')) {
            keys[i].classList.remove('active')
            keys[i].classList.add('remove')
        }
        if(e.code == 'Space') {
            spaceKey.classList.remove('active');
            spaceKey.classList.add('remove');
        }
        if(e.code == 'ShiftLeft') {
            shift_right.classList.remove('active')
            shift_right.classList.remove('remove')
        }
        if(e.code == 'ShiftRight') {
            shift_left.classList.remove('active')
            shift_left.classList.remove('remove')
        }
        setTimeout(()=> {
            keys[i].classList.remove('remove')
        },200)
    }
})






    // tabs.forEach((tab, index) => {
    //     tab.addEventListener('click', () => {
    //         blocks.forEach((block, index) => {
    //             block.style.display = "none";
    //             console.log(1231231);
    //         });
    //         blocks.forEach((block, index) => {
    //                 block[index].style.display = "flex";
    //         });
    //     });
    // });

        // tabs.forEach((tab, index) => {
        //     tab.addEventListener('click', () => {
        //         blocks.forEach((block) => {
        //             block.classList.remove('is-active');
        //             console.log(1111);
        //         });
        //         blocks[index].classList.add('is-active');
        //     });
        // });
        //



