function renderItems(data) {
    //input validation
    //logic
    let HTML = '';
    const DOM = document.querySelector(data.selector);
    const itemsData = data.items;
    console.log(itemsData);
    if(!DOM){
        return;
    }
    for (let i = 0; i < itemsData.length; i++) {
        const item = itemsData[i];
        HTML += `
                <div class="item">
                    <div class="item-top">
                        <img class="image" src="./img/picos/${item.photo}" alt="pizza">
                        <h2 class="name">${item.title}</h2>
                        <p id="par" class="description">${item.description}</p>
                    </div>
                    <div class="row">
                        <div class="price-left">${item.price}</div>
                        <div class="price-right">${item.button}</div>
                    </div>
                </div>`;
    }
    // post logic validation

    //output
    DOM.innerHTML = `<h1 class="title">Picos</h1>${HTML}`;
}

export { renderItems }