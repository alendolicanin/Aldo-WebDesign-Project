let sortedDefault = [
    {
        img: "Slike/4.jpg",
        naziv: "Siva jakna",
        rating: 4,
        cena: "48.00"
    },
    {
        img: "Slike/5.jpg",
        naziv: "Tamnoplava tanka jakna",
        rating: 3,
        cena: "35.00"
    },
    {
        img: "Slike/6.jpg",
        naziv: "Crno-bela tanka jakna",
        rating: 5,
        cena: "43.00"
    },
    {
        img: "Slike/7.jpg",
        naziv: "Tamnosivo odelo",
        rating: 4,
        cena: "115.00"
    },
    {
        img: "Slike/1.jpg",
        naziv: "Crno odelo",
        rating: 4,
        cena: "102.00"
    },
    {
        img: "Slike/2.jpg",
        naziv: "Svetlo braon kaput",
        rating: 3,
        cena: "87.00"
    },
    {
        img: "Slike/10.jpg",
        naziv: "Tamnoplava jakna",
        rating: 5,
        cena: "65.00"
    },
    {
        img: "Slike/11.jpg",
        naziv: "Crna kožna jakna",
        rating: 4,
        cena: "58.00"
    },
    {
        img: "Slike/17.jpg",
        naziv: "Maslinastozelena jakna",
        rating: 4,
        cena: "74.00"
    },
    {
        img: "Slike/14.jpg",
        naziv: "Beli džemper",
        rating: 3,
        cena: "38.00"
    },
    {
        img: "Slike/18.jpg",
        naziv: "Crno-beli džemper",
        rating: 5,
        cena: "32.00"
    },
    {
        img: "Slike/16.jpg",
        naziv: "Tamnoplavi kaput",
        rating: 4,
        cena: "76.00"
    },
];

let podaci = [
    {
        img: "Slike/4.jpg",
        naziv: "Siva jakna",
        rating: 4,
        cena: "48.00"
    },
    {
        img: "Slike/5.jpg",
        naziv: "Tamnoplava tanka jakna",
        rating: 3,
        cena: "35.00"
    },
    {
        img: "Slike/6.jpg",
        naziv: "Crno-bela tanka jakna",
        rating: 5,
        cena: "43.00"
    },
    {
        img: "Slike/7.jpg",
        naziv: "Tamnosivo odelo",
        rating: 4,
        cena: "115.00"
    },
    {
        img: "Slike/1.jpg",
        naziv: "Crno odelo",
        rating: 4,
        cena: "102.00"
    },
    {
        img: "Slike/2.jpg",
        naziv: "Svetlo braon kaput",
        rating: 3,
        cena: "87.00"
    },
    {
        img: "Slike/10.jpg",
        naziv: "Tamnoplava jakna",
        rating: 5,
        cena: "65.00"
    },
    {
        img: "Slike/11.jpg",
        naziv: "Crna kožna jakna",
        rating: 4,
        cena: "58.00"
    },
    {
        img: "Slike/17.jpg",
        naziv: "Maslinastozelena jakna",
        rating: 4,
        cena: "74.00"
    },
    {
        img: "Slike/14.jpg",
        naziv: "Beli džemper",
        rating: 3,
        cena: "38.00"
    },
    {
        img: "Slike/18.jpg",
        naziv: "Crno-beli džemper",
        rating: 5,
        cena: "32.00"
    },
    {
        img: "Slike/16.jpg",
        naziv: "Tamnoplavi kaput",
        rating: 4,
        cena: "76.00"
    },
];

renderData(podaci);

function renderData(data) {
    data.forEach(element => {
        let newDiv = document.createElement('div');
        newDiv.className = "col-4";
        let newA = document.createElement('a');
        if (element.img === "Slike/10.jpg") {
            newA.href = "proizvod-detalji.html";
        }
        let newImg = document.createElement('img');
        newImg.src = element.img;
        newImg.className = "compo-photo";
        let newHeader = document.createElement('h4');
        newHeader.innerHTML = element.naziv;
        let ratingDiv = document.createElement('div');
        ratingDiv.className = "rating";


        for (let i = 0; i < element.rating; i++) {
            let newI = document.createElement('i');
            newI.className = "fa fa-star";
            ratingDiv.append(newI);
        }

        let cenaP = document.createElement('p');
        cenaP.innerHTML = "€" + element.cena;

        newA.appendChild(newImg);
        newDiv.appendChild(newA);
        newDiv.appendChild(newHeader);
        newDiv.appendChild(ratingDiv);
        newDiv.appendChild(cenaP);

        let container = document.getElementById('products-sort');
        container.appendChild(newDiv);
    });
}


function sortProducts() {
    let selectedSort = document.getElementById('sorting').value;
    let sortedData = [];

    if (selectedSort === "Sortiranje") {
        sortedData = sortedDefault;
    }

    if (selectedSort === "Sortiraj po rastućoj ceni") {
        sortedData = podaci.sort(function (a, b) {
            let first = parseFloat(a.cena);
            let second = parseFloat(b.cena);
            return (first > second) ? 1 : (first < second) ? -1 : 0;
        })
    }

    if (selectedSort === "Sortiraj po opadajućoj ceni") {
        sortedData = podaci.sort(function (a, b) {
            let first = parseFloat(a.cena);
            let second = parseFloat(b.cena);
            return (first > second) ? -1 : (first < second) ? 1 : 0;
        })
    }

    if (selectedSort === "Sortiraj po popularnosti") {
        sortedData = podaci.sort(function (a, b) {
            let first = parseFloat(Math.random());
            let second = parseFloat(Math.random());
            return (first > second) ? 1 : (first < second) ? -1 : 0;
        })
    }

    if (selectedSort === "Sortiraj po rejtingu") {
        sortedData = podaci.sort(function (a, b) {
            let first = parseFloat(a.rating);
            let second = parseFloat(b.rating);
            return (first > second) ? 1 : (first < second) ? -1 : 0;
        })
    }

    let container = document.getElementById('products-sort');
    container.innerHTML = '';
    renderData(sortedData);

}