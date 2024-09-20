let bagItems;

onPageLoad();

function onPageLoad() {
  let bagItemsStr = localStorage.getItem("bagItems");
  bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];
  displayItemsOnPage();
  displayBagIcon();
}

function addToBag(itemId) {
  bagItems.push(itemId);
  localStorage.setItem("bagItems", JSON.stringify("bagItems"));
  displayBagIcon();
}

function displayBagIcon() {
  let bagItemCountElement = document.querySelector(".bag-item-count");
  if (bagItems.length > 0) {
    bagItemCountElement.style.visibility = "visible";
    bagItemCountElement.innerText = bagItems.length;
  } else {
    bagItemCountElement.style.visibility = "hidden";
  }
}

function displayItemsOnPage() {
  let productsContaineritems = document.querySelector(".product-container");
  let innerHTML = "";
  products.forEach((item) => {
    innerHTML += `<div 
  class="item-container">
      <img class="product-img" src="${item.image}" alt="">
    <div class="rating">${item.rating.stars}, <span class="material-symbols-outlined" id="star">
  star
  </span> | ${item.rating.count} 
     </div>
    <div class="company-name">${item.company}</div>
    <div class="item-name">
      ${item.item_name}
    </div>
    <div class="price">
      <span class="current-price">Rs ${item.current_price}</span>
      <span class="original-price">Rs ${item.original_price}</span>
      <span class="discount">${item.discount_percentage}</span>
    </div>
      <button class="btn-add-bag" onclick="addToBag(${item.id})">Add to Bag</button>
  </div>`;
  });

  productsContaineritems.innerHTML = innerHTML;
}
