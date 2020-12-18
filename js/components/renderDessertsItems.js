function renderDessertsItems(data) {
    //input validation
    //logic
    let HTML = '';
    const DOM = document.querySelector(data.selector);
    const itemsData = data.items;
    if(!DOM){
        return;
    }
    for (let i = 0; i < itemsData.length; i++) {
        const item = itemsData[i];
        HTML += `
                <div class="row col-3">
                    <img class="image" src="./img/desertai/${item.photo}" alt="snack">
                    <h2 class="name">${item.title}</h2>
                    <p class="description">${item.description}</p>
                    <div class="row">
                        <div class="price-left">${item.price}</div>
                        <div class="price-right">${item.button}</div>
                    </div>
                </div>`;
    }
    // post logic validation

    //output
    DOM.innerHTML = `<h1 class="title row col-12">Desertai</h1>${HTML}`;
}

export { renderDessertsItems }