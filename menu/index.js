const menuItem=[
    {
        name:'enjira',
        description:"classical ethiopian food",
        price:'20',
        img:"photo_2024-01-05_05-36-47 (2).jpg",
    },
    {
    name:'enjira',
    description:"classical ethiopian food",
    price:'20',
    img:"photo_2024-01-05_05-36-47 (2).jpg",},

    {
        name:'enjira',
        description:"classical ethiopian food",
        price:'20',
        img:"photo_2024-01-05_05-36-46.jpg",},
        {
            name:'enjira',
            description:"classical ethiopian food",
            price:'20',
            img:"photo_2024-01-05_05-36-35.jpg",},
            {
                name:'enjira',
                description:"classical ethiopian food",
                price:'20',
                img:"photo_2024-01-05_05-36-46.jpg",},
                {
                    name:'enjira',
                    description:"classical ethiopian food",
                    price:'20',
                    img:"photo_2024-01-05_05-36-35.jpg",},
                    {
                        name:'enjira',
                        description:"classical ethiopian food",
                        price:'20',
                        img:"photo_2024-01-05_05-36-46.jpg",},
                        {
                            name:'enjira',
                            description:"classical ethiopian food",
                            price:'20',
                            img:"photo_2024-01-05_05-36-35.jpg",},
                            {
                                name:'enjira',
                                description:"classical ethiopian food",
                                price:'20',
                                img:"photo_2024-01-05_05-36-46.jpg",},
                                {
                                    name:'enjira',
                                    description:"classical ethiopian food",
                                    price:'20',
                                    img:"photo_2024-01-05_05-36-35.jpg",}

]
function displaymenu() {
    const menuContainer=document.getElementById('menu-container');
    menuItem.forEach(item=>{
        const menuItemDiv=document.createElement('div');
       
        menuItemDiv.classList.add('menu-item');
        const img=document.createElement('img');
        
        img.src=item.img;
        menuItemDiv.appendChild(img);

        const name=document.createElement('h3');
        name.textContent=item.name;
     menuItemDiv.appendChild(name);

     const description=document.createElement('p');
     description.textContent=item.description;
     menuItemDiv.appendChild(description);

     const price=document.createElement('span');
     price.textContent=item.description;
     menuItemDiv.appendChild(price);

     menuContainer.appendChild(menuItemDiv);
    });

    
   
    
}
window.onload=displaymenu;