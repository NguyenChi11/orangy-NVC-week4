import products from "./data.js";

function createSplideProduct(product) {
  return `
    <li class="splide__slide">  
      <div class="product__slider">
          <img class="product__image image__slide" src="${
            product.image
          }" alt="">
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
  </li>
      `;
}

const splideProduct = document.getElementById("splide__list");
splideProduct.innerHTML = products.map(createSplideProduct).join("");

function checkScreenSize() {
  const width = window.innerWidth;

  const splide = new Splide(".splide", {
    perPage: 4,
    rewind: true,
    gap: 10,
    pagination: false,
  });

  const splide_mobile = new Splide(".splide", {
    perPage: 1.5,
    rewind: true,
    gap: 10,
    pagination: false,
  });
  const splide_ipad = new Splide(".splide", {
    perPage: 3,
    rewind: true,
    gap: 10,
    pagination: false,
  });

  const splide_2 = new Splide(".splide", {
    perPage: 2,
    rewind: true,
    gap: 10,
    pagination: false,
  });

  if (width <= 400) {
    splide_mobile.mount();
  } else if (width <= 1500 && width >= 769) {
    splide_ipad.mount();
  } else if (width <= 768 && width >= 392) {
    splide_2.mount();
  } else {
    splide.mount();
  }
}

// Gọi hàm ngay khi trang tải
checkScreenSize();

// Theo dõi sự thay đổi kích thước
window.addEventListener("resize", checkScreenSize);
