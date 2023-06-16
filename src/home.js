

function createHomePage() {
    const content = document.querySelector('#content');
    const pageContent = document.createElement('div');
    content.appendChild(pageContent);
    pageContent.classList.add('pagecontent');


    const headline = document.createElement("h1");
    headline.textContent = "Welcome to our restaurant";
    pageContent.appendChild(headline);

    //: Hero Image 
    const image = document.createElement('img');
    image.src = "https://www.spoon-restaurant.com/wp-content/uploads/2022/06/Spoon_cLe_Bonbon-1-1299x998.jpg";
    pageContent.appendChild(image);
    
}


    //:Home Button
    let btn = document.createElement('button');
    btn.innerHTML = "Home";
    document.body.appendChild(btn);
    btn.addEventListener('click', null);

    //:About Us Button
    let btn1 = document.createElement('button1');
    btn.innerHTML = "About Us";
    document.body.appendChild(btn1);
    btn.addEventListener('click', null);






export default createHomePage;