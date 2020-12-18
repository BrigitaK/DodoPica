const itemsData = {
    selector: '.pizza',
    title1: 'Picos',
    items: [
    {
        photo: 'christmas-pizza.jpg',
        title: 'Christmas Pizza',
        description: 'Kalakutiena, spanguolių padažas, bruknės, šoninė, raudonieji svogūnai, mocarelos sūris, česnakinis padažas',
        price: 'nuo 8,75 €',
        button: 'Pasirinkti'
    },
    {
        photo: 'carbonara.jpg',
        title: 'Carbonara',
        description: 'Sūrio padažas, granuliuoti česnakai, mocarelos sūris, raudonieji svogūnai, šoninė, vyšniniai pomidorai, itališkos žolelės, parmezanas, čederio sūris',
        price: 'nuo 8,75 €',
        button: 'Pasirinkti'
    },
    {
        photo: 'pesto.jpg',
        title: 'Pesto',
        description: 'Vištiena, fetos sūris, vyšniniai pomidorai, mocarelos sūris, padažas pesto, česnakinis padažas',
        price: 'nuo 8,75 €',
        button: 'Pasirinkti'
    },
    {
        photo: 'half&half.jpg',
        title: 'Half&Half',
        description: '',
        price: 'nuo 11,70 €',
        button: 'Sukurti'
    },
    {
        photo: 'fiesta.jpg',
        title: 'Fiesta',
        description: 'Vištiena, mocarelos sūris, raudonieji svogūnai, saliamis, pomidorai, žalioji paprika, česnakinis padažas, chipotle padažas, granuliuoti česnakai',
        price: 'nuo 8,75 €',
        button: 'Pasirinkti'
    },
    {
        photo: 'cheesy-chiken.jpg',
        title: 'Cheesy Chicken',
        description: 'Pomidorai, mocarelos sūris, vištiena, sūrio padažas',
        price: 'nuo 7,75 €',
        button: 'Pasirinkti'
    },
    {
        photo: 'crazy.jpg',
        title: 'Crazy',
        description: 'Saldžiarūgštis padažas, vištiena, mocarelos sūris, saliamis, picų padažas',
        price: 'nuo 8,75 €',
        button: 'Pasirinkti'
    },
    {
        photo: 'royal.jpg',
        title: 'Royal',
        description: 'Pievagrybiai, čili padažas, picų padažas, raudonieji svogūnai, vištiena, jautiena, kumpis, mocarelos sūris',
        price: 'nuo 8,75 €',
        button: 'Pasirinkti'
    },
    {
        photo: '4-seasons.jpg',
        title: '4 seasons',
        description: 'Pievagrybiai, pomidorai, mocarelos sūris, kumpis, saliamis, picų padažas, fetos sūris, itališkos žolelės',
        price: 'nuo 7,75 €',
        button: 'Pasirinkti'
    },
    {
        photo: 'dodo.jpg',
        title: 'Dodo',
        description: 'Pievagrybiai, pomidorai, mocarelos sūris, kumpis, saliamis, žalioji paprika, picų padažas',
        price: 'nuo 7,75 €',
        button: 'Pasirinkti'
    },
    {
        photo: 'chiken-bbq.jpg',
        title: 'Chicken BBQ',
        description: 'Mocarelos sūris, šoninė, vištiena, raudonieji svogūnai, picų padažas, bbq padažas',
        price: 'nuo 7,75 €',
        button: 'Pasirinkti'
    },
    {
        photo: 'mexican.jpg',
        title: 'Mexican',
        description: 'Pievagrybiai, picų padažas, jalapeno griežinėliai, žalioji paprika, vištiena, saliamis, mocarelos sūris, pomidorai',
        price: 'nuo 8,75 €',
        button: 'Pasirinkti'
    },
    {
        photo: 'pepperoni.jpg',
        title: 'Pepperoni',
        description: 'Picų padažas, mocarelos sūris, saliamis',
        price: 'nuo 8,75 €',
        button: 'Pasirinkti'
    },
    {
        photo: 'champion.jpg',
        title: 'Champion',
        description: 'Pievagrybiai, mocarelos sūris, kumpis, picų padažas',
        price: 'nuo 6,75 €',
        button: 'Pasirinkti'
    },
    {
        photo: 'ranch.jpg',
        title: 'Ranch',
        description: 'Česnakinis padažas, pomidorai, mocarelos sūris, kumpis, vištiena, granuliuoti česnakai',
        price: 'nuo 8,75 €',
        button: 'Pasirinkti'
    },
    {
        photo: 'cheeseburger.jpg',
        title: 'Cheeseburger',
        description: 'Mocarelos sūris, pomidorai, šoninė, jautiena, raudonieji svogūnai, marinuoti agurkai, picų padažas',
        price: 'nuo 7,75 €',
        button: 'Pasirinkti'
    },
    {
        photo: 'havaiian.jpg',
        title: 'Hawaiian',
        description: 'Picų padažas, ananasai, mocarelos sūris, kumpis',
        price: 'nuo 7,75 €',
        button: 'Pasirinkti'
    },
    {
        photo: 'spicy.jpg',
        title: 'Spicy',
        description: 'Mocarelos sūris, čili padažas, jalapeno griežinėliai, saliamis, picų padažas, medžiotojų dešrelės',
        price: 'nuo 7,75 €',
        button: 'Pasirinkti'
    },
    {
        photo: 'margherita.jpg',
        title: 'Margherita',
        description: 'Picų padažas, mocarelos sūris, pomidorai, itališkos žolelės',
        price: 'nuo 6,75 €',
        button: 'Pasirinkti'
    },
    {
        photo: 'seafood.jpg',
        title: 'Seafood',
        description: 'Mocarelos sūris, šoninė, vištiena, krevetės, picų padažas',
        price: 'nuo 8,75 €',
        button: 'Pasirinkti'
    },
    {
        photo: 'the-meats.jpg',
        title: 'The Meats',
        description: 'Medžiotojų dešrelės, mocarelos sūris, šoninė, kumpis, jautiena, picų padažas',
        price: 'nuo 7,75 €',
        button: 'Pasirinkti'
    },
    {
        photo: 'vegetarian.jpg',
        title: 'Vegetarian',
        description: 'Pievagrybiai, fetos sūris, picų padažas, marinuoti agurkai, juodosios alyvuogės, žalioji paprika, raudonieji svogūnai, mocarelos sūris, pomidorai, itališkos žolelės',
        price: 'nuo 7,75 €',
        button: 'Pasirinkti'
    },
    {
        photo: 'cheese.jpg',
        title: 'Cheese',
        description: 'Mocarelos sūris, picų padažas, fetos suгis, itališkos žolelės',
        price: 'nuo 6,75 €',
        button: 'Pasirinkti'
    },
    {
        photo: 'picos-pyragas.jpg',
        title: 'Picos pyragas',
        description: 'Bruknės, ananasai, sutirštintas pienas',
        price: 'nuo 6,75 €',
        button: 'Pasirinkti'
    },
]
}

export { itemsData }