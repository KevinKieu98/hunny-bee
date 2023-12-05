if (!customElements.get('product-form')) {
  customElements.define(
    'product-form',
    class ProductForm extends HTMLElement {
      constructor() {
        super();

        this.form = this.querySelector('form');
        this.form.querySelector('[name=id]').disabled = false;
        this.form.addEventListener('submit', this.onSubmitHandler.bind(this));
        this.cart = document.querySelector('cart-notification') || document.querySelector('cart-drawer');
        this.submitButton = this.querySelector('[type="submit"]');

        if (document.querySelector('cart-drawer')) this.submitButton.setAttribute('aria-haspopup', 'dialog');

        this.hideErrors = this.dataset.hideErrors === 'true';
      }

      onSubmitHandler(evt) {
        evt.preventDefault();
        if (this.submitButton.getAttribute('aria-disabled') === 'true') return;

        this.handleErrorMessage();

        this.submitButton.setAttribute('aria-disabled', true);
        this.submitButton.classList.add('loading');
        this.querySelector('.loading-overlay__spinner').classList.remove('hidden');

        const config = fetchConfig('javascript');
        config.headers['X-Requested-With'] = 'XMLHttpRequest';
        delete config.headers['Content-Type'];

        const formData = new FormData(this.form);
        if (this.cart) {
          formData.append(
            'sections',
            this.cart.getSectionsToRender().map((section) => section.id)
          );
          formData.append('sections_url', window.location.pathname);
          this.cart.setActiveElement(document.activeElement);
        }
        config.body = formData;

        fetch(`${routes.cart_add_url}`, config)
          .then((response) => response.json())
          .then((response) => {
            if (response.status) {
              publish(PUB_SUB_EVENTS.cartError, {
                source: 'product-form',
                productVariantId: formData.get('id'),
                errors: response.errors || response.description,
                message: response.message,
              });
              this.handleErrorMessage(response.description);

              const soldOutMessage = this.submitButton.querySelector('.sold-out-message');
              if (!soldOutMessage) return;
              this.submitButton.setAttribute('aria-disabled', true);
              this.submitButton.querySelector('span').classList.add('hidden');
              soldOutMessage.classList.remove('hidden');
              this.error = true;
              return;
            } else if (!this.cart) {
              window.location = window.routes.cart_url;
              return;
            }

            if (!this.error)
              publish(PUB_SUB_EVENTS.cartUpdate, { source: 'product-form', productVariantId: formData.get('id'), cartData: response });
            this.error = false;
            const quickAddModal = this.closest('quick-add-modal');
            if (quickAddModal) {
              document.body.addEventListener(
                'modalClosed',
                () => {
                  setTimeout(() => {
                    this.cart.renderContents(response);
                  });
                },
                { once: true }
              );
              quickAddModal.hide(true);
            } else {
              this.cart.renderContents(response);
            }
          })
          .catch((e) => {
            console.error(e);
          })
          .finally(() => {
            this.submitButton.classList.remove('loading');
            if (this.cart && this.cart.classList.contains('is-empty')) this.cart.classList.remove('is-empty');
            if (!this.error) this.submitButton.removeAttribute('aria-disabled');
            this.querySelector('.loading-overlay__spinner').classList.add('hidden');

            document.querySelector('.header__icon--cart').click()
            refreshMiniCart()
          });
      }

      handleErrorMessage(errorMessage = false) {
        if (this.hideErrors) return;

        this.errorMessageWrapper =
          this.errorMessageWrapper || this.querySelector('.product-form__error-message-wrapper');
        if (!this.errorMessageWrapper) return;
        this.errorMessage = this.errorMessage || this.errorMessageWrapper.querySelector('.product-form__error-message');

        this.errorMessageWrapper.toggleAttribute('hidden', !errorMessage);

        if (errorMessage) {
          this.errorMessage.textContent = errorMessage;
        }
      }
    }
  );
}

// Make function minicart
const MESSAGE_MAXIMUM_QTY = 'Maximum QTY';
const minicartWrapper = document.querySelector('.mini-cart-wrapper')
const elmBody = document.querySelector('body')
const iconCartDesktop = document.querySelector('.header__icon--cart')
const minicartLoading = document.querySelector('.mini-cart-content #mincart-loading')
const elmCheckShipping = document.querySelector('.check-shipping')

const openMiniCart = () => {
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