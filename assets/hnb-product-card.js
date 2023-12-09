// Make function minicart
const MESSAGE_MAXIMUM_QTY = 'Maximum QTY';
const minicartWrapper = document.querySelector('.mini-cart-wrapper')
const elmBody = document.querySelector('body')
const iconCartDesktop = document.querySelector('.header__icon--cart')
const minicartLoading = document.querySelector('.mini-cart-content #mincart-loading')
const elmCheckShipping = document.querySelector('.check-shipping')
const cartOverley = document.querySelector('#bg-minicart-close')
const DEFAULT_QUANTITY = 1

if (cartOverley) {
    cartOverley.addEventListener('click', (e) => {
        e.preventDefault()
        minicartWrapper.classList.remove('show')
        elmBody.classList.remove('open-minicart')
        cartOverley.style.display = 'none'
    })
}

const openMiniCart = () => {
    // open minicart
    if (iconCartDesktop) {
        iconCartDesktop.addEventListener('click', (e) => {
            e.preventDefault()
            if (minicartWrapper.classList.contains('show')) {
                elmBody.classList.remove('open-minicart')
                minicartWrapper.classList.remove('show')
                cartOverley.style.display = 'none'
            } else {
                elmBody.classList.add('open-minicart')
                minicartWrapper.classList.toggle('show')
                cartOverley.style.display = 'block'
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

    if (closeIcon) {
        closeIcon.addEventListener('click', (e) => {
            e.preventDefault();
            minicartWrapper.classList.remove('show')
            elmBody.classList.remove('open-minicart')
            cartOverley.style.display = 'none'
        })
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
    const elmQuantityItem = document.querySelectorAll('.product-form__input.product-form__input--quantity')
    Array.from(elmQuantityItem).forEach((ele) => {
        ele.addEventListener('change', (e) => {
            e.preventDefault()
            const target = ele
            const id = target.closest('.product-form-item').getAttribute('data-id')
            const qty = target.value
            
            if (id && qty) {
                minicartLoading.style.display = 'block'
                updateItem(id, qty);
            } else {
                minicartLoading.style.display = 'block'
                updateItem(id, DEFAULT_QUANTITY)
            }
        })
    })

    // Handle button change quantity
    // Plus
    const elmQuantityItemPlus = document.querySelectorAll('.cart__product-info .product-plus')
    Array.from(elmQuantityItemPlus).forEach((ele) => {
        ele.addEventListener('click', () => {
            const inputQty = ele.closest('.product-form-item').querySelector('.product-form__input--quantity')
            const qty = parseInt(inputQty.value)
            inputQty.value = qty
            inputQty.dispatchEvent(new Event('change'))
        })
    })

    // Handle button change quantity
    // Minus
    const elmQuantityItemMinus = document.querySelectorAll('.cart__product-info .product-minus')
    Array.from(elmQuantityItemMinus).forEach((ele) => {
        ele.addEventListener('click', () => {
            const inputQty = ele.closest('.product-form-item').querySelector('.product-form__input--quantity')
            const qty = parseInt(inputQty.value)
            inputQty.value = qty
            inputQty.dispatchEvent(new Event('change'))
        })
    })
}

const removeItemById = (id) => {
    return removeItem({ id })
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

const handleOptionProductCard = () => {
    const options = document.querySelectorAll('.card_information_option')
    if (options.length > 0) {
        options.forEach((option) => {
            option.addEventListener('click', function() {
                const parentOption = option.closest('.product-card-wrapper')
                const elmATC = parentOption.querySelector('.btn_addtocart')

                options.forEach((option) => option.classList.remove('selected'))
                option.classList.add('selected')

                elmATC.setAttribute('variant-id', option.getAttribute('data-id'))
            })
        })
    }
}

const handleBtnQuickAdd = () => {
    const btnQuickAdds = document.querySelectorAll('.btn_addtocart')
    if(btnQuickAdds.length > 0) {
        btnQuickAdds.forEach((btnQuickAdd) => {
            btnQuickAdd.addEventListener('click', function() {
                const variantId = btnQuickAdd.getAttribute('variant-id')
                let formData = {
                    'items': [{
                        'id': variantId,
                        'quantity': DEFAULT_QUANTITY
                    }]
                }

                fetch(window.Shopify.routes.root + 'cart/add.js', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formData)
                })
                  .then(() => {
                    refreshMiniCart()
                    iconCartDesktop.click()
                })
                  .catch((error) => {
                    console.error('Error:', error)
                })
            })
        })
    }
}

const handleBtnQuickView = () => {
    const btnQuickViews = document.querySelectorAll('.btn_quickview')
    const elmQuickView = document.querySelector('.form_quick_view')
    const elmCloseQuickView = document.querySelector('.btn_close_quickview')
    const quickViewLoading = document.querySelector('.quickview_loading')

    if (elmCloseQuickView) {
        elmCloseQuickView.addEventListener('click', function() {
            elmQuickView.classList.add('hidden')
            cartOverley.style.display = 'none'
        })
    }

    if(btnQuickViews.length > 0) {
        btnQuickViews.forEach((btnQuickView) => {
            btnQuickView.addEventListener('click', function() {
                quickViewLoading.style.display = 'flex'
                const productHandle = btnQuickView.getAttribute('product-handle')
                fetch('/products/' + productHandle + '.json')
                .then(function(response) {
                    if (!response.ok) {
                        throw Error(response.statusText)
                    }
                    return response.json()
                })
                .then(function(data) {
                    const product = data?.product
                    const firstVariantProduct = product.variants[0]
                    const elmTitleProduct = elmQuickView.querySelector('.title_product')
                    const elmBtnAddToCart = elmQuickView.querySelector('.btn_quickview_ATC')
                    const elmBuyItNow = elmQuickView.querySelector('.btn_buy_it_now')
                    const elmPriceSale = elmQuickView.querySelector('.price_sale')
                    const elmPriceRegular = elmQuickView.querySelector('.price_regular')
                    const elmLinkDetail = elmQuickView.querySelector('.content_infor a')
                    const initImageElm = `<img src="${product?.image?.src}" class="block w-full h-full" loading="lazy" width="${product?.image?.width}" height="${product?.image?.height}">`

                    // fill data to popup
                    elmTitleProduct.textContent = product.title
                    elmQuickView.setAttribute('product-id', firstVariantProduct.id)
                    elmPriceRegular.textContent = `$${firstVariantProduct.price}`
                    elmLinkDetail.setAttribute('href', `/products/${product.handle}`)
                    document.querySelector('.form_content_left').innerHTML = initImageElm
                    if(firstVariantProduct.compare_at_price) {
                        // have price sale
                        elmPriceSale.textContent = `$${firstVariantProduct.compare_at_price}`
                        elmPriceSale.classList.remove('hidden')
                    } else {
                        // no have price sale
                        elmPriceSale.classList.add('hidden')
                    }

                    if(product.inventory_management === 'shopify') {

                    }

                    elmQuickView.classList.remove('hidden')
                    cartOverley.style.display = 'block'
                    setTimeout(() => {
                        quickViewLoading.style.display = 'none'
                    }, 500)

                    handleBtnATCQuickView(elmBuyItNow, elmQuickView, elmCloseQuickView)
                    handleBtnATCQuickView(elmBtnAddToCart, elmQuickView, elmCloseQuickView)
                })
                .catch(function(error) {
                    console.log('Error fetching product information', error)
                })
            })
        })
    }
}

const handleBtnATCQuickView = (elmBtn, elmQuickView) => {
    const productId = elmQuickView.getAttribute('product-id')
    elmBtn.addEventListener('click', function() {
        let formData = {}
        if(elmBtn.classList.contains('btn_buy_it_now')) {
            // Buy It Now
            formData = {
                'items': [{
                    'id': productId,
                    'quantity': DEFAULT_QUANTITY
                }]
            }
        } else {
            // Add To Cart
            const elmInputQtyVal = elmQuickView.querySelector('.product-form__input--quantity').value
            formData = {
                'items': [{
                    'id': productId,
                    'quantity': parseInt(elmInputQtyVal)
                }]
            }
        }

        fetch(window.Shopify.routes.root + 'cart/add.js', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(() => {
            refreshMiniCart()
            iconCartDesktop.click()
            elmQuickView.classList.add('hidden')
        })
            .catch((error) => {
            console.error('Error:', error)
        })
    })
}

miniCartChange()
openMiniCart()
handleOptionProductCard()
handleBtnQuickAdd()
handleBtnQuickView()
// End function minicart

export { refreshMiniCart, miniCartChange, getElementMiniCart, openMiniCart }
