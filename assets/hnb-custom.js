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

    const btnScrollToTop = document.querySelector('.btn_scroll_top');
    if(btnScrollToTop) {
        btnScrollToTop.classList.add('hidden')

        btnScrollToTop.addEventListener('click', function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        })
    }

    document.addEventListener("scroll", (event) => {
        if(window.scrollY !== 0) {
            btnScrollToTop.classList.remove('hidden')
        } else {
            btnScrollToTop.classList.add('hidden')
        }
    })

    const elmPopupService = document.querySelector('.popup_hunny_service')
    if(elmPopupService) {
        const btnClosePopup = elmPopupService.querySelector('.btn_close_popup_hunny')
        const overlay = document.querySelector('.popup_hunny_service_overlay')
        if(!elmPopupService.classList.contains('hidden')) {
            document.body.classList.add('open_popup')
            overlay.classList.remove('hidden')
            elmPopupService.classList.remove('hidden')
        } else {
            document.body.classList.remove('open_popup')
            overlay.classList.add('hidden')
            elmPopupService.classList.add('hidden')
        }

        btnClosePopup.addEventListener('click', function() {
            document.body.classList.remove('open_popup')
            overlay.classList.add('hidden')
            elmPopupService.classList.add('hidden')
        })
    }

    // Make function minicart
    const MESSAGE_MAXIMUM_QTY = 'Maximum QTY';
    const minicartWrapper = document.querySelector('.mini-cart-wrapper')
    const elmBody = document.querySelector('body')
    const iconCartDesktop = document.querySelector('.header__icon--cart')
    const minicartLoading = document.querySelector('.mini-cart-content #mincart-loading')
    const elmCheckShipping = document.querySelector('.check-shipping')

    function openMiniCart() {
        // open minicart
        if (iconCartDesktop) {
            iconCartDesktop.addEventListener('click', (e) => {
                e.preventDefault()
                if (minicartWrapper.classList.contains('show')) {
                    elmBody.classList.remove('open-minicart')
                    minicartWrapper.classList.remove('show')
                } else {
                    elmBody.classList.add('open-minicart')
                    minicartWrapper.classList.toggle('show')
                }
                if (!minicartWrapper.classList.contains('added-list')) {
                    listCartChange()
                }
            }, false)
        }
    }

    const listCartChange = () => {
        const listP = document.getElementById('minicart-product-list')
        const miniCartContainer = document.getElementById('mini-list')
        if (listP && miniCartContainer) {
            miniCartContainer.appendChild(listP);
            minicartWrapper.classList.add('added-list')
        }
    }

    const miniCartChange = () => {
        const closeIcon = document.querySelector('#close-minicart')
        const cartOverley = document.querySelector('#bg-minicart-close')

        if (closeIcon) {
            closeIcon.addEventListener('click', (e) => {
                e.preventDefault();
                minicartWrapper.classList.remove('show')
                elmBody.classList.remove('open-minicart')
            });
        }

        if (cartOverley) {
            cartOverley.addEventListener('click', (e) => {
                e.preventDefault();
                minicartWrapper.classList.remove('show')
                elmBody.classList.remove('open-minicart')
            });
        }

        const elmDeleteItem = document.querySelectorAll('.cart-details .remove-item .delete')
        Array.from(elmDeleteItem).forEach((ele) => {
            ele.addEventListener('click', (e) => {
                e.preventDefault()
                const target = ele
                const id = target.getAttribute('data-cart-item')
                if (id) {
                    minicartLoading.style.display = 'block'

                    removeItemById(id)
                }
            })
        })

        // Handle input change quantity product
        const elmQuantityItem = document.querySelectorAll('.product-form__input.product-form__input--quantity');
        Array.from(elmQuantityItem).forEach((ele) => {
            ele.addEventListener('change', (e) => {
                e.preventDefault()
                const target = ele
                const id = target.closest('.product-form-item').getAttribute('data-id')
                const qty = target.value
                const DEFAULT_QUANTITY = 1

                if (id && qty) {
                    minicartLoading.style.display = 'block'
                    updateItem(id, qty);
                } else {
                    minicartLoading.style.display = 'block'
                    updateItem(id, DEFAULT_QUANTITY);
                }
            })
        })

        // Handle button change quantity
        // Plus
        const elmQuantityItemPlus = document.querySelectorAll('.cart__product-info .product-plus');
        Array.from(elmQuantityItemPlus).forEach((ele) => {
            ele.addEventListener('click', () => {
                const inputQty = ele.closest('.product-form-item').querySelector('.product-form__input--quantity');
                const qty = parseInt(inputQty.value);
                inputQty.value = qty;
                inputQty.dispatchEvent(new Event('change'));
            })
        })

        // Handle button change quantity
        // Minus
        const elmQuantityItemMinus = document.querySelectorAll('.cart__product-info .product-minus');
        Array.from(elmQuantityItemMinus).forEach((ele) => {
            ele.addEventListener('click', () => {
                const inputQty = ele.closest('.product-form-item').querySelector('.product-form__input--quantity');
                const qty = parseInt(inputQty.value);
                inputQty.value = qty;
                inputQty.dispatchEvent(new Event('change'));
            })
        })
    }

    const removeItemById = (id) => {
        return removeItem({ id });
    }
    
    const removeItem = (data) => {
        const result = fetch(`/cart/change?line=${data.id}&quantity=0`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then((response) => response.json)
            .finally(() => {
                refreshMiniCart();
            })
            .catch((e) => console.error(e))
    }

    const refreshMiniCart = () => {
        fetch('/cart').then((response) => {
            // When the page is loaded convert it to text
            return response.text()
        }).then((html) => {
            // Initialize the DOM parser
            const parser = new DOMParser()

            // Parse the text
            const doc = parser.parseFromString(html, 'text/html')
            console.log(doc)
            if (elmBody.classList.contains('template-cart')) {
                const contentCartHtml = doc.querySelector('#cart-template').innerHTML
                const cartCount = parseInt(doc.querySelector('#minicart-count').getAttribute('data-count'))
                const minicartTemplate = document.querySelector('#cart-template')

                if (cartCount === 0) {
                    elmCheckShipping?.classList.add('hidden')
                    minicartTemplate.className = 'flex items-center justify-center'
                } else {
                    elmCheckShipping?.classList.remove('hidden')
                    minicartTemplate.className = 'bg-white'
                }

                minicartTemplate.innerHTML = contentCartHtml
                minicartLoading.style.display = 'none'
            }

            getElementMiniCart(doc)
            miniCartChange()
        }).catch((error) => {
            minicartLoading.style.display = 'none'
            console.error(error);
        })
    }

    const getElementMiniCart = (doc) => {
        const minicartActions = document.querySelector('#minicart-actions')
        const minicartItemsById = document.querySelector('#minicart-items')
        const minicartItemsByClass = document.querySelector('.minicart-items')
        const minicartContent = document.querySelector('.mini-cart-content')
        const minicartHeading = document.querySelector('#cart-heading')

        if (doc.getElementById('minicart-count')) {
            const cartCount = parseInt(doc.querySelector('#minicart-count').getAttribute('data-count'))
            if (cartCount === 0) {
                elmCheckShipping?.classList.add('hidden')
                minicartActions.classList.add('hidden')
                minicartContent.classList.add('no-item')
    
                iconCartDesktop.classList.remove('active')
            } else {
                minicartContent.classList.remove('no-item')
                minicartActions.classList.remove('hidden')
                iconCartDesktop.classList.add('active')
            }
    
        } else {
            elmCheckShipping?.classList.remove('hidden')
        }

        const headingCartHtml = doc.querySelector('#cart-heading').innerHTML
        const contentCartHtmlById = doc.querySelector('#minicart-items').innerHTML
        const contentCartHtmlByClass = doc.querySelector('.minicart-items').innerHTML
        const actionCartHtml = doc.querySelector('#minicart-actions').innerHTML

        if (contentCartHtmlById && contentCartHtmlByClass && headingCartHtml) {
            minicartHeading.innerHTML = headingCartHtml
            minicartItemsById.innerHTML = contentCartHtmlById
            minicartItemsByClass.innerHTML = contentCartHtmlByClass
            minicartActions.innerHTML = actionCartHtml
        }
        
        minicartLoading.style.display = 'none'
    }

    const updateItem = (id, qty) => {
        if (!qty) {
            return removeItem(id)
        }

        fetch('/cart/change.js', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                id: id,
                quantity: qty
            })
        })
        .then((response) => {
            response.json()
        })
        .then((data) => checkMaximumQtyProduct(data, id, parseInt(qty)))
        .catch((error) => {
            console.error(error)
        })
    }

    const checkMaximumQtyProduct = (data, id, qty) => {
        const resultItems = data?.items || []
        // const btnChangeQTY = document.querySelectorAll('.button-change-qty-items')
        const btnChangeMiniCart = document.querySelectorAll('.mincart__product-qty')

        resultItems.forEach(element => {
            const checkProductQTY = parseInt(element.id) === parseInt(id) && element.quantity < qty
            if (checkProductQTY) {
                // //Cart page
                // for (const btn of btnChangeQTY) {
                //     if (btn.getAttribute('data-id') !== id) continue;
    
                //     const errorMsgDesktop = `<p class="item-error text-border-error text-center min-w-max w-full text-sm font-normal m-0 mt-1">${MESSAGE_MAXIMUM_QTY}</p>`;
                //     const errorMsgMobile = `<p class="item-error text-border-error text-left min-w-max text-sm font-normal m-0 mt-1">${MESSAGE_MAXIMUM_QTY}</p>`;
                //     const showMessage = window.innerWidth > WIDTH_TABLET ? errorMsgDesktop : errorMsgMobile
    
                //     btn.insertAdjacentHTML('afterend', showMessage);
                // }
    
                //Mini cart
                for (const btn of btnChangeMiniCart) {
                    const getProductIdMiniCart = btn.querySelector('.product-form__input').getAttribute('data-id') !== id
                    if (getProductIdMiniCart) continue
    
                    const errorMsgMiniCart = `<p class="item-error text-border-error min-w-max text-left text-sm font-normal m-0 p-0 mt-1">${MESSAGE_MAXIMUM_QTY}</p>`
                    btn.insertAdjacentHTML( 'afterend', errorMsgMiniCart)
                }
            };
        })

        refreshMiniCart()
    }

    miniCartChange()
    openMiniCart()



    if($('.image-zoom')) {
        $('.image-zoom')
        .wrap('<span style="display:inline-block"></span>')
        .css('display', 'block')
        .parent()
        .zoom({
          url: $(this).find('img').attr('data-zoom'),
          magnify: 2
        })
    }
})
