//keyboard


// parent
let tabs = document.querySelectorAll('.tabs'),
    blocks = document.querySelectorAll('.tabs_content');

tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        blocks.forEach((content) => {
            content.classList.remove('is-active');
        });
        blocks[index].classList.add('is-active');
    });
});













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



