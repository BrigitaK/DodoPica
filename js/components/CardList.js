class CardList {
    constructor(params){
        this.DOM = params.DOM;
        this.data = params.data;
        this.imagesPath = params.imagesPath;
        this.itemsCount = params.itemsCount;
        this.listDOM = null;
    }


    render = () => {
        let HTML = '';

        for ( let i=0; i<this.itemsCount; i++){
            const item = this.data[i];
            let photo = item.photo;

            HTML += `<div class="item row col-12">
                    <img src="${item.photo}" alt="Photo">
                    </div>`;
        }
        return `<div class="list row col-12" style="margin-left:0;">
                ${HTML}
                </div>`;
    }
    shiftList = (diff) => {
        this.listDOM.style.marginLeft = parseFloat(this.listDOM.style.marginLeft) - diff * 100 + '%';

    }
}



export { CardList };