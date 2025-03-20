let sliderWrapper = document.querySelector('.swiper-wrapper');

fetch("https://fakestoreapi.in/api/products")
  .then((response) => response.json())
  .then((data) => {
    let res = data.products

    for (let i = 0; i < res.length; i++) {
      let card = document.createElement("div");
      card.classList.add('swiper-slide'); 
      card.style.width = '80%';
      card.style.height = '500px'
      // card.style.border = '2px solid red';
      card.style.padding = "10px";
      card.style.textAlign = "center";
      card.style.borderRadius = '10px'

      let picture = document.createElement("img");
      picture.style.width = "100%";
      picture.style.height = "500px";
      picture.style.objectFit = 'contain'
      picture.style.display = 'flex';
      picture.style.margin = '0 auto';
      picture.src = res[i].image;

      // let id = document.createElement("p");
      // let text = document.createElement("h1");

      // id.innerHTML = res[i].id;
      // text.innerHTML = `${res[i].title.slice(0, 30)}...`;

      card.append(picture);
      sliderWrapper.append(card);
    }

    // ✅ Swiper init QILISH fetch ichida
    const swiper = new Swiper('.mySwiper', {
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      // autoplay: {
      //   delay: 2500,
      // },
    });

  });




  let stock = document.querySelector('.stock');

fetch("https://fakestoreapi.in/api/products")
  .then((response) => response.json())
  .then((data) => {
      console.log(data);
      
      let res = data.products
      for (let i = 0; i < 20; i++) {
        console.log(res[i]);
        
          let card = document.createElement("div");
          card.style.width = '300px';
          card.style.height = '350px'
          card.style.border = '1px solid black'
          card.style.margin = '20px';

          // card.style.border = '2px solid red'
          card.style.padding = "10px";
          let picture = document.createElement("img");
          picture.style.width = "100%";
          picture.style.objectFit = 'contain'
          picture.style.height = "200px";
          picture.style.display = 'flex';
          picture.style.margin = '0 auto'
          picture.src = res[i].image
      // let id = document.createElement("p");
      let text = document.createElement("h1");
      text.style.textAlign = 'center'
      text.style.fontSize = '20px'
      text.style.width = '200px'



      // id.innerHTML = res[i].id;
      text.innerHTML = `${res[i].title.slice(0, 35)} . . .`;
      
      // let content = document.createElement('p');
      // text.innerHTML = `${res[i].}`

      let price = document.createElement("p")
      price.innerHTML = `Narxi: $${res[i].price}`;  
      price.style.backgroundColor = 'yellow'
      price.style.width = '100px'
      price.style.borderRadius = '6px'
      price.style.textAlign = 'center'
      price.style.marginTop = '25px'




      card.append(picture,  text,  price);
      stock.append(card);
    }
  });
