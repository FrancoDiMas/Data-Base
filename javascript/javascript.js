
// Checking if there is stock
const input = document.getElementById('number');
const span = document.getElementById('span-stock');

function updateStockColor() {
    const value = input.value.trim();
    if (Number(value) > 0) {
        span.style.color = 'green';
    } else {
        span.style.color = 'red';
    }
}

input.addEventListener('input', updateStockColor);
window.addEventListener('load', updateStockColor);



//Make changes to span
const spanList = document.querySelectorAll('.div-card span'); // points to all div-cards and all spans

spanList.forEach((span) => {
    // Event listener for the mouse when it's over
    span.addEventListener('mouseover', () => {
      if (span.classList.contains('not-editable')) {
        span.style.cursor = 'default'; 
      } else {
        span.style.cursor = 'pointer'; 
      }
    });

  // Let the user change de span
  span.addEventListener('click', () => {
    if (span.classList.contains('not-editable')) {
        return; // Si el span tiene la clase no-editable, no hace nada
    }
    span.contentEditable = true;
    span.focus();
  });

  // Event listener when the focus lossed made the editable false
  span.addEventListener('blur', () => {
    span.contentEditable = false;
  });
});

// Button to change style view of stock
const viewGridBtn = document.getElementById('gridView');
const viewGridBtnRsp = document.getElementById('gridViewResponsive');
const viewListBtn = document.getElementById('listView');
const viewListBtnRsp = document.getElementById('listViewResponsive');
const listPointed = document.getElementById('div__table-stock');
const gridPointed = document.getElementById('div__main-stock-info');
const responsiveListPointed = document.getElementById('div__table-stock-responsive');

viewGridBtn.addEventListener('click', () => {
  responsiveListPointed.style.opacity = '0';
  listPointed.style.opacity = '0';
  listPointed.style.display = 'none';
  gridPointed.style.display = 'grid';
  setTimeout(function(){
    gridPointed.style.opacity = '1';
  }, 100);
})

// Same options to responsive buttom eventListener
viewGridBtnRsp.addEventListener('click', () => {
  responsiveListPointed.style.opacity = '0';
  listPointed.style.opacity = '0';
  listPointed.style.display = 'none';
  gridPointed.style.display = 'grid';
  setTimeout(function(){
    gridPointed.style.opacity = '1';
  }, 100);
})

viewListBtn.addEventListener('click', () => {
  gridPointed.style.opacity = '0';
  gridPointed.style.display = 'none';
  if (window.innerWidth < 905) {
    listPointed.style.display = 'none';
    responsiveListPointed.style.display = 'block';
    setTimeout(function(){
      responsiveListPointed.style.opacity = '1';
    }, 100);
  } else {
    responsiveListPointed.style.display = 'none';
    listPointed.style.display = 'block';
    setTimeout(function(){
      listPointed.style.opacity = '1';
    }, 100);
  }
})

// Same options to responsive buttom eventListener
viewListBtnRsp.addEventListener('click', () => {
  gridPointed.style.opacity = '0';
  gridPointed.style.display = 'none';
  if (window.innerWidth < 905) {
    listPointed.style.display = 'none';
    responsiveListPointed.style.display = 'block';
    setTimeout(function(){
      responsiveListPointed.style.opacity = '1';
    }, 100);
  } else {
    responsiveListPointed.style.display = 'none';
    listPointed.style.display = 'block';
    setTimeout(function(){
      listPointed.style.opacity = '1';
    }, 100);
  }
})

// Button to add a product
const addProductBtn = document.getElementById('add-btn');
const addProductBtnRsp = document.getElementById('add-btn-responsive');
const modal = document.getElementById('modal');
const closeBtn = document.querySelector('.close-btn');
const form = document.querySelector('form');
const productTable = document.getElementById('table-stock').getElementsByTagName('tbody')[0];
const imageInput = document.getElementById("product-image");
const previewImage = document.getElementById("preview");

addProductBtn.addEventListener('click', () => {
  modal.style.display = 'block';
});

// Same example for responsive buttom
addProductBtnRsp.addEventListener('click', () => {
  modal.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

imageInput.addEventListener('change', () => {
  const file = imageInput.files[0];
  if (file) {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      previewImage.src = reader.result;
    });
    reader.readAsDataURL(file);
  }
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const nameInput = document.getElementById('product-name');
  const brandInput = document.getElementById('product-brand');
  const modelInput = document.getElementById('product-model');
  const priceInput = document.getElementById('product-price');
  const colorInput = document.getElementById('product-color');
  const stockInput = document.getElementById('product-stock');
  const name = nameInput.value;
  const brand = brandInput.value;
  const model = modelInput.value;
  const price = priceInput.value;
  const color = colorInput.value;
  const stock = stockInput.value;
  const newRow = productTable.insertRow();
  const cell1 = newRow.insertCell(0);
  const cell2 = newRow.insertCell(1);
  const cell3 = newRow.insertCell(2);
  const cell4 = newRow.insertCell(3);
  const cell5 = newRow.insertCell(4);
  const cell6 = newRow.insertCell(5);
  const cell7 = newRow.insertCell(6);
  const cell8 = newRow.insertCell(7);
  cell1.innerHTML = `<img class="image" src="${previewImage.src}" alt="Product Image">`;
  cell2.innerHTML = name;
  cell3.innerHTML = brand;
  cell4.innerHTML = model;
  cell5.innerHTML = '$' + price;
  cell6.innerHTML = color;
  cell7.innerHTML = stock;
  cell8.innerHTML = '<i class="bx bx-cog"></i><i class="bx bx-map-pin"></i><i class="bx bx-trash"></i>';
  nameInput.value = '';
  brandInput.value = '';
  modelInput.value = '';
  priceInput.value = '';
  colorInput.value = '';
  stockInput.value = '';
  previewImage.src = '#';
  modal.style.display = 'none';
});


// Hamburger buttom
const menuIcon = document.querySelector(".bx-menu");
const menuX = document.querySelector(".bx-x");
const menuResponsive = document.querySelector(".menu-responsive");

menuIcon.addEventListener('click',()=>{
  menuResponsive.classList.toggle('mobile-menu');
  menuIcon.classList.toggle('bx-menu');
  menuIcon.classList.toggle('bx-x');
})