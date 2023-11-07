document.addEventListener("DOMContentLoaded", (event) => {
    const homeListImage = $('.home_list_images')
    if (homeListImage) {
        homeListImage.slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            prevArrow: '<button type="button" class="slick-prev slick-arrow"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none"><rect width="48" height="48" rx="24" fill="#F7F7F7" fill-opacity="0.8"/><path d="M20 32L28 24L20 16" stroke="#1B1B1B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
            nextArrow: '<button type="button" class="slick-next slick-arrow"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none"><rect width="48" height="48" rx="24" fill="#F7F7F7" fill-opacity="0.8"/><path d="M20 32L28 24L20 16" stroke="#1B1B1B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    }

    const homeProductList = $('.home_product_list')
    if (homeProductList) {
        homeProductList.slick({
            infinite: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            prevArrow: false,
            nextArrow: false,
            // prevArrow: '<button type="button" class="slick-prev slick-arrow"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none"><rect width="48" height="48" rx="24" fill="#F7F7F7" fill-opacity="0.8"/><path d="M20 32L28 24L20 16" stroke="#1B1B1B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
            // nextArrow: '<button type="button" class="slick-next slick-arrow"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none"><rect width="48" height="48" rx="24" fill="#F7F7F7" fill-opacity="0.8"/><path d="M20 32L28 24L20 16" stroke="#1B1B1B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots: true
                    }
                }
            ]
        })
    }

    const productAlsoLike = $('.product_also_like')
    if (productAlsoLike) {
        productAlsoLike.slick({
            infinite: false,
            slidesToShow: 4,
            slidesToScroll: 1,
            prevArrow: '<button type="button" class="slick-prev slick-arrow"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none"><rect width="48" height="48" rx="24" fill="#F7F7F7" fill-opacity="0.8"/><path d="M20 32L28 24L20 16" stroke="#1B1B1B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
            nextArrow: '<button type="button" class="slick-next slick-arrow"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none"><rect width="48" height="48" rx="24" fill="#F7F7F7" fill-opacity="0.8"/><path d="M20 32L28 24L20 16" stroke="#1B1B1B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots: true
                    }
                }
            ]
        })
    }

    const slickProductImages = $('.slick_product_image_mobile')
    if (slickProductImages) {
        slickProductImages.slick({
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: false,
            nextArrow: false,
            dots: true
            // prevArrow: '<button type="button" class="slick-prev slick-arrow"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none"><rect width="48" height="48" rx="24" fill="#F7F7F7" fill-opacity="0.8"/><path d="M20 32L28 24L20 16" stroke="#1B1B1B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
            // nextArrow: '<button type="button" class="slick-next slick-arrow"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none"><rect width="48" height="48" rx="24" fill="#F7F7F7" fill-opacity="0.8"/><path d="M20 32L28 24L20 16" stroke="#1B1B1B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
        })
    }

    // Trigger open search
    $('.menu_box_search_account .box_search').click(function() {
        console.log($('details-modal summary'))
        $('details-modal summary').trigger('click');
    });

    const btnCustomBuyNow = document.querySelector('.buynow-btn')
    if (btnCustomBuyNow) {
        btnCustomBuyNow.addEventListener('click', function(e) {
            e.preventDefault();
            const variantId = $("form.variants input[name='variantId']").val();

            const formData = {
                'items': [{
                    'id': variantId,
                    'quantity': 1
                }]
            };

            fetch(window.Shopify.routes.root + 'cart/add.js', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })
            .then( () => {
                window.location.href = "/checkout";
            })
            .catch((error) => {
                console.error('Error:', error);
            });
        })
    }

    function toggleTabsContent(attrTargetContent) {
        const tabsContent = document.querySelectorAll('.tabs_content .tab_content_item')
        if (tabsContent.length > 0) {
            tabsContent.forEach((item) => {
                item.classList.add('hidden')
                item.classList.contains(attrTargetContent) ? item.classList.remove('hidden') : ''
            })
        }

        attrTargetContent === undefined ? tabsContent[0]?.classList?.remove('hidden') : ''
    }
    toggleTabsContent()

    const productTabs = document.querySelectorAll('.tabs_title .tab_title')
    if (productTabs.length > 0) {
        productTabs.forEach((item) => {
            item.addEventListener('click', function() {
                const attrTargetContent = item.getAttribute('data-target-content')
                toggleTabsContent(attrTargetContent)

                productTabs.forEach(value => {
                    value.classList.remove('active')
                })

                item.classList.add('active')
            })
        })
    }

    
    // Make Custom Accordion
    class Accordion extends HTMLElement {
        constructor() {
            super();
            this.summary = this.querySelector('.summary');
            this.detail = this.querySelector('.details');
            this.detail.style.height = 0;
            this.toggleActive();
        }
        
        toggleActive() {
            this.summary.addEventListener('click', () => {
                document.querySelectorAll('accordion-controller').forEach((accordion) => {
                    if (accordion != this) {
                        accordion.querySelector('.details').style.height = 0;
                        accordion.classList.remove('active');
                    }
                });
                this.classList.toggle('active');
                if (this.classList.contains('active')) {
                    this.detail.style.height = this.detail.scrollHeight + 'px';
                } else {
                    this.detail.style.height = 0;
                }
            })
        }
    }

    customElements.define('accordion-controller', Accordion);

    const elmAboutFeedback = $('.feedback_items')
    if(elmAboutFeedback) {
        elmAboutFeedback.slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            prevArrow: false,
            nextArrow: false,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots: true
                    }
                }
            ]
        })
    }

    const elmBlogContent = $('.block_content_list.mobile')
    if(elmBlogContent) {
        elmBlogContent.slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: false,
            nextArrow: false,
            dots: true
        })
    }
})
