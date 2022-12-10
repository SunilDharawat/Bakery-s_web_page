// show cart
(function () {
  const cartInfo = document.getElementById("cart-info");
  const cart = document.getElementById("cart");

  cartInfo.addEventListener("click", function () {
    cart.classList.toggle("show-cart");
  });
})();
// add items in to the cart

(function () {
  const cartBtn = document.querySelectorAll(".store-item-icon");
  cartBtn.forEach(function (btn) {
    btn.addEventListener("click", function (event) {
      //   console.log(event.target);
      if (event.target.parentElement.classList.contains("store-item-icon")) {
        let fullpath = event.target.parentElement.previousElementSibling.src;
        // indexOf() - methos that get the positon of "img"
        // console.log(fullpath);
        let pos = fullpath.indexOf("img") + 3;
        let parPath = fullpath.slice(pos);
        // console.log(pos);
        // console.log(parPath);
        const item = {};
        item.img = `img-cart${parPath}`;
        // console.log(item);
        let name =
          event.target.parentElement.parentElement.nextElementSibling
            .children[0].children[0].textContent;

        // to store name into the item object

        item.name = name;

        // to as same in price Selection
        let price =
          event.target.parentElement.parentElement.nextElementSibling
            .children[0].children[1].textContent;
        // to remove the dollor and white space between the price section
        let finalPrice = price.slice(1).trim();

        item.price = finalPrice;

        // console.log(finalPrice);
        // console.log(name);
        // console.log(item);

        // create a element for the cart item, that store the favraite item

        const cartItem = document.createElement("div");

        cartItem.classList.add(
          "cart-item",
          "d-flex",
          "justify-content-between",
          "text-capitalize",
          "my-3"
        );

        cartItem.innerHTML = ` <img src = '${item.img}' class="img-fluid rounded-circle" id = "item-img" alt = "" >
            <div class="item-text">

              <p id="cart-item-title" class="font-weight-bold mb-0">${item.name}</p>
              <span>Rs</span>
              <span id="cart-item-price" class="cart-item-price" class="mb-0">${item.price}</span>
            </div>
            <a href="#" id='cart-item-remove' class="cart-item-remove">
             <i class="fas fa-trash"></i>
            </a>
          </div >`;

        // select cart
        const cart = document.getElementById("cart");
        const total = document.querySelector(".cart-total-container");
        cart.insertBefore(cartItem, total);
        alert("This item added to the cart");
        showTotals(); // show tatals function
      }
    });
  });

  // create a function that containte the show totals

  function showTotals() {
    const total = [];
    const item = document.querySelectorAll(".cart-item-price");

    // forEach loop to go for every element in the arry
    item.forEach(function (item) {
      total.push(parseFloat(item.textContent));
    });
    // console.log(total);

    const totalMoney = total.reduce(function (total, item) {
      total += item;
      return total;
    }, 0);
    // console.log(totalMoney);
    // to fix the total money after two digits in total price

    const finalMoney = totalMoney.toFixed(2);
    // console.log(finalMoney);
    // target the cart total value and the total item
    document.getElementById("cart-total").textContent = finalMoney;
    document.querySelector(".item-total").textContent = finalMoney;
    document.getElementById("item-count").textContent = total.length;
  }
})();
