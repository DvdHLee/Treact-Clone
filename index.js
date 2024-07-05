const movedLeft = () => {
    document.querySelector('.testimonials__list').classList.remove("testimonial__moved--right");
}

const movedRight = () => {
    document.querySelector('.testimonials__list').classList.add("testimonial__moved--right");
}

const openFAQ1 = () => {
    document.getElementById('faq1').classList.toggle("faq__expand");
    document.getElementById('chev1').classList.toggle("faq__chevron--up");
}

const openFAQ2 = () => {
    document.getElementById('faq2').classList.toggle("faq__expand");
    document.getElementById('chev2').classList.toggle("faq__chevron--up");
}

const openFAQ3 = () => {
    document.getElementById('faq3').classList.toggle("faq__expand");
    document.getElementById('chev3').classList.toggle("faq__chevron--up");
}

const leftbutton1doc = document.getElementById('#leftbutton1');
if (leftbutton1doc) {
    leftbutton1doc.addEventListener('click', movedLeft);
}

const rightbutton1doc = document.getElementById('#rightbutton1');
if (rightbutton1doc) {
    rightbutton1doc.addEventListener('click', movedRight);
}

const faq1 = document.getElementById('#faq1');
if (faq1) {
    faq1.addEventListener('click', openFAQ1);
}

const faq2 = document.getElementById('#faq2');
if (faq2) {
    faq2.addEventListener('click', openFAQ1);
}

const faq3 = document.getElementById('#faq3');
if (faq3) {
    faq1.addEventListener('click', openFAQ1);
}

function openMenu() {
    document.body.classList += " menu--open"
}

function closeMenu() {
    document.body.classList.remove('menu--open')
}

const observer__from__left = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('slide__in__from__left')
        }
    })
})

observer__from__left.observe(document.querySelector('#landing'));
observer__from__left.observe(document.querySelector('#quality'));
observer__from__left.observe(document.querySelector('#values'));
observer__from__left.observe(document.querySelector('#testimonials'));
observer__from__left.observe(document.querySelector('#ending'));

const observer__from__right = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('slide__in__from__right')
        }
    })
})

observer__from__right.observe(document.querySelector('#features'));
observer__from__right.observe(document.querySelector('#steps'));
observer__from__right.observe(document.querySelector('#pricing'));
observer__from__right.observe(document.querySelector('#faqs'));
observer__from__right.observe(document.querySelector('footer'));