import products__all__list from "./product__all__list.js";
const productHome = products__all__list.find(
  (i) => i.data_category === ""
).item;

function createProductCard(product) {
  return `
      <div class="productions">
        <img class="product__image" src="${product.image}" alt="">
        <div class="category">${product.category}</div>
        <div class="product__name">${product.product__name}</div>
        <div class="product__price__all"> 
          ${
            product.product__price
              ? `<div class="product__price"> ${product.product__price}</div>`
              : ""
          }
         ${
           product.product__price__new
             ? ` <div class="product__price__new"> ${product.product__price__new}</div>`
             : ""
         }
          ${
            product.product__price__old
              ? ` <div class="product__price__old"> ${product.product__price__old}</div>`
              : ""
          }
        
        </div>
        <div class="voucher">
          ${
            product.product__selling
              ? `<p class="voucher__sell">${product.product__selling}</p>`
              : ""
          }
          ${
            product.product__voucher
              ? `<p class="product__voucher" >${product.product__voucher}</p>`
              : ""
          }
  
          ${
            product.product__new
              ? `<p class="voucher__new">${product.product__new}</p>`
              : ""
          }
        </div>
      </div>
    `;
}

const productList = document.getElementById("product__container");
productList.innerHTML = productHome.map(createProductCard).join("");

const productions = document.querySelectorAll(".productions");
productions.forEach((item, index) => {
  if (index % 6 === 0) {
    item.classList.add("productions__gird__first");
  } else if (index % 6 === 5) {
    item.classList.add("productions__gird__last");
  }
});

// lọc sản ph

const productContainer = document.getElementById("product__container");
const listCategories = document.querySelectorAll(".product__menu__title");

listCategories.forEach((item) => {
  item.addEventListener("click", function () {
    const category = this.getAttribute("data-category");
    const filteredProducts = products__all__list
      .filter((product) => product.data_category === category)
      .flatMap((product) => product.item);

    console.log(filteredProducts);

    productContainer.innerHTML = filteredProducts
      .map(
        (product) => `
      <div class="productions">
        <img class="product__image" src="${product.image}" alt="">
        <div class="category">${product.category}</div>
        <div class="product__name">${product.product__name}</div>
        <div class="product__price__all"> 
        ${
          product.product__price
            ? `<div class="product__price"> ${product.product__price}</div>`
            : ""
        }
       ${
         product.product__price__new
           ? ` <div class="product__price__new"> ${product.product__price__new}</div>`
           : ""
       }
        ${
          product.product__price__old
            ? ` <div class="product__price__old"> ${product.product__price__old}</div>`
            : ""
        }
      
      </div>
      <div class="voucher">
        ${
          product.product__selling
            ? `<p class="voucher__sell">${product.product__selling}</p>`
            : ""
        }
        ${
          product.product__voucher
            ? `<p class="product__voucher" >${product.product__voucher}</p>`
            : ""
        }

        ${
          product.product__new
            ? `<p class="voucher__new">${product.product__new}</p>`
            : ""
        }
      </div>
      </div>
    `
      )
      .join("");

    const productions = document.querySelectorAll(".productions");
    productions.forEach((item, index) => {
      if (index % 6 === 0) {
        item.classList.add("productions__gird__first");
      } else if (index % 6 === 5) {
        item.classList.add("productions__gird__last");
      }
    });
  });
});
