import { createContext, useContext } from "react";

import Veg1 from "../Assets/Vegetabls/veg1.png"
import Veg2 from "../Assets/Vegetabls/veg2.png"
import Veg3 from "../Assets/Vegetabls/veg3.png"
import Veg4 from "../Assets/Vegetabls/veg4.png"
import Veg5 from "../Assets/Vegetabls/veg5.png"
import Veg6 from "../Assets/Vegetabls/veg6.png"

import Blog1 from "../Assets/Blog/blog1.jpg"
import Blog2 from "../Assets/Blog/blog2.jpg"
import Blog3 from "../Assets/Blog/blog3.jpg"
import Blog4 from "../Assets/Blog/blog4.jpg"
import Blog5 from "../Assets/Blog/blog5.jpg"
import Blog6 from "../Assets/Blog/blog6.jpg"

import Bev1 from "../Assets/Bevarz/bev1.png"
import Bev2 from "../Assets/Bevarz/bev2.png"
import Bev3 from "../Assets/Bevarz/bev3.png"
import Bev4 from "../Assets/Bevarz/bev4.png"
import Bev5 from "../Assets/Bevarz/bev5.png"
import Bev6 from "../Assets/Bevarz/bev6.png"
import Bev7 from "../Assets/Bevarz/bev7.png"
import Bev8 from "../Assets/Bevarz/bev8.png"

import De1 from "../Assets/Desserts/de1.png"
import De2 from "../Assets/Desserts/de2.png"
import De3 from "../Assets/Desserts/de3.png"
import De4 from "../Assets/Desserts/de4.png"
import De5 from "../Assets/Desserts/de5.png"
import De6 from "../Assets/Desserts/de6.png"
import De7 from "../Assets/Desserts/de7.png"
import De8 from "../Assets/Desserts/de8.png"

import Dr1 from "../Assets/Drink/dr1.png"
import Dr2 from "../Assets/Drink/dr2.png"
import Dr3 from "../Assets/Drink/dr3.png"
import Dr4 from "../Assets/Drink/dr4.png"
import Dr5 from "../Assets/Drink/dr5.png"
import Dr6 from "../Assets/Drink/dr6.png"

import Fs1 from "../Assets/Fish/fs1.png"
import Fs2 from "../Assets/Fish/fs2.png"
import Fs3 from "../Assets/Fish/fs3.png"
import Fs4 from "../Assets/Fish/fs4.png"
import Fs5 from "../Assets/Fish/fs5.png"
import Fs6 from "../Assets/Fish/fs6.png"
import Fs7 from "../Assets/Fish/fs7.png"

import Fr1 from "../Assets/Fresh/fr1.png"
import Fr2 from "../Assets/Fresh/fr2.png"
import Fr3 from "../Assets/Fresh/fr3.png"
import Fr4 from "../Assets/Fresh/fr4.png"
import Fr5 from "../Assets/Fresh/fr5.png"
import Fr6 from "../Assets/Fresh/fr6.png"
import Fr7 from "../Assets/Fresh/fr7.png"
import Fr8 from "../Assets/Fresh/fr8.png"

import Pet1 from "../Assets/Pets/pet1.png"
import Pet2 from "../Assets/Pets/pet2.png"
import Pet3 from "../Assets/Pets/pet3.png"
import Pet4 from "../Assets/Pets/pet4.png"

import Toy1 from "../Assets/Toys/toy1.png"
import Toy2 from "../Assets/Toys/toy2.png"
import Toy3 from "../Assets/Toys/toy3.png"
import Toy4 from "../Assets/Toys/toy4.png"

const ShareDeta = createContext();

export const useDeta = () => useContext(ShareDeta);

export const DetaProvider = ({ children }) => {

  const  deta = [
        {
            id:"01", image: Veg1, rank:"2", Prise:" $ 22.00", Ftitle:"Vegetables", Title:"Avocado Creamy Elegance Pure, Fresh, and Irresistibly Delicious",
            repro:
            
        `Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor. <br />
-Pellentesque habitant tristique senectus <br/>
-Turpis egestaVestibulum tortor quam <br/>
-Eugiat vitae ultricies eget tempor`

        }, 
        {
            id:"02", image: Veg2, rank:"3", Prise:" $ 35.00", Ftitle:"Vegetables", Title:"Fresh and Sweet Watermelon Delights for Your Taste Buds!"
            ,repro:
            
            `Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor. <br />
    -Pellentesque habitant tristique senectus <br/>
    -Turpis egestaVestibulum tortor quam <br/>
    -Eugiat vitae ultricies eget tempor`
    
        }, 
        {
            id:"03", image: Veg3,rank:"4",  Prise:" $ 47.00", Ftitle:"Vegetables", Title:"Guava Organic Fruits"
            ,repro:
            
            `Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor. <br />
    -Pellentesque habitant tristique senectus <br/>
    -Turpis egestaVestibulum tortor quam <br/>
    -Eugiat vitae ultricies eget tempor`
        }, 
        {
            id:"04", image: Veg4, rank:"5", Prise:" $ 24.00", Ftitle:"Vegetables", Title:"Russet Idaho Potatoes Fresh Premium Fruit and Produce Vegetables, 4 pound case"
            ,repro:
            
            `Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor. <br />
    -Pellentesque habitant tristique senectus <br/>
    -Turpis egestaVestibulum tortor quam <br/>
    -Eugiat vitae ultricies eget tempor`
        }, 
        {
            id:"05", image: Veg5, rank:"2", Prise:" $ 15.00", Ftitle:"Vegetables", Title:"Whole Foods Market, Organic Trimmed Green Beans, 12 oz"
            ,repro:
            
            `Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor. <br />
    -Pellentesque habitant tristique senectus <br/>
    -Turpis egestaVestibulum tortor quam <br/>
    -Eugiat vitae ultricies eget tempor`
        }, 
        {
            id:"06", image: Veg6,rank:"3",  Prise:" $ 20.00", Ftitle:"Vegetables", Title:"Whole Foods Market, Romaine Hearts Salad Bag Organic"
            ,repro:
            
            `Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor. <br />
    -Pellentesque habitant tristique senectus <br/>
    -Turpis egestaVestibulum tortor quam <br/>
    -Eugiat vitae ultricies eget tempor`
        }, 
    ];

   const  deta1 =[
        {
            id:"01", image : Blog1 , Ftitle :" Vegitable ", Title:" Experience The Essence Of Traditional Cuisine"
        , repro :"When an unknown printer took a galley of type and scrambled lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac consequat diam diam vel iaculis pellentesque egestas feugiat. Nunc fermentum vitae rutrum pellentesque egestas elementum. Mauris ipsum semper facilisis pharetra dolor. Diam vitae facilisis quis rhoncus ultrices vitae, viverra habitasse varius. Aliquam sapien, ipsum cursus felis aliquam magna. Tincidunt magna sit laoreet elementum vel egestas metus. Pharetra in semper elementum praesent vel volutpat leo commodo. Blandit facilisi libero quisque enim. Sit mollis et ut feugiat leo. Blandit rhoncus nec in consequat at neque. Adipiscing id nisi sed in. Augue malesuada dictum viverra pretium nisi. Fringilla elementum, luctus suspendisse tellus diam morbi morbi consequat tellus. Egestas malesuada dolor sit quam eget.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac consequat diam diam vel iaculis pellentesque egestas feugiat. Nunc fermentum vitae rutrum pellentesque egestas elementum. Mauris ipsum semper facilisis pharetra dolor. Diam vitae facilisis quis rhoncus ultrices vitae, viverra habitasse varius. Aliquam sapien, ipsum cursus felis aliquam magna. Tincidunt magna sit laoreet elementum vel egestas metus. Pharetra in semper elementum praesent vel volutpat leo commodo. Blandit facilisi libero quisque enim. Sit mollis et ut feugiat leo."
        
    },
        {
            id:"02", image : Blog2, Ftitle :" Vegitable ", Title:" Discover The Secrets Of Our House-made Pasta"
            , repro :"When an unknown printer took a galley of type and scrambled lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac consequat diam diam vel iaculis pellentesque egestas feugiat. Nunc fermentum vitae rutrum pellentesque egestas elementum. Mauris ipsum semper facilisis pharetra dolor. Diam vitae facilisis quis rhoncus ultrices vitae, viverra habitasse varius. Aliquam sapien, ipsum cursus felis aliquam magna. Tincidunt magna sit laoreet elementum vel egestas metus. Pharetra in semper elementum praesent vel volutpat leo commodo. Blandit facilisi libero quisque enim. Sit mollis et ut feugiat leo. Blandit rhoncus nec in consequat at neque. Adipiscing id nisi sed in. Augue malesuada dictum viverra pretium nisi. Fringilla elementum, luctus suspendisse tellus diam morbi morbi consequat tellus. Egestas malesuada dolor sit quam eget.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac consequat diam diam vel iaculis pellentesque egestas feugiat. Nunc fermentum vitae rutrum pellentesque egestas elementum. Mauris ipsum semper facilisis pharetra dolor. Diam vitae facilisis quis rhoncus ultrices vitae, viverra habitasse varius. Aliquam sapien, ipsum cursus felis aliquam magna. Tincidunt magna sit laoreet elementum vel egestas metus. Pharetra in semper elementum praesent vel volutpat leo commodo. Blandit facilisi libero quisque enim. Sit mollis et ut feugiat leo."
        
        },
        {
            id:"03", image : Blog5, Ftitle :" Vegitable ", Title:" Dive Into The Bold Flavors Of Our Grilled Meats"
            , repro :"When an unknown printer took a galley of type and scrambled lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac consequat diam diam vel iaculis pellentesque egestas feugiat. Nunc fermentum vitae rutrum pellentesque egestas elementum. Mauris ipsum semper facilisis pharetra dolor. Diam vitae facilisis quis rhoncus ultrices vitae, viverra habitasse varius. Aliquam sapien, ipsum cursus felis aliquam magna. Tincidunt magna sit laoreet elementum vel egestas metus. Pharetra in semper elementum praesent vel volutpat leo commodo. Blandit facilisi libero quisque enim. Sit mollis et ut feugiat leo. Blandit rhoncus nec in consequat at neque. Adipiscing id nisi sed in. Augue malesuada dictum viverra pretium nisi. Fringilla elementum, luctus suspendisse tellus diam morbi morbi consequat tellus. Egestas malesuada dolor sit quam eget.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac consequat diam diam vel iaculis pellentesque egestas feugiat. Nunc fermentum vitae rutrum pellentesque egestas elementum. Mauris ipsum semper facilisis pharetra dolor. Diam vitae facilisis quis rhoncus ultrices vitae, viverra habitasse varius. Aliquam sapien, ipsum cursus felis aliquam magna. Tincidunt magna sit laoreet elementum vel egestas metus. Pharetra in semper elementum praesent vel volutpat leo commodo. Blandit facilisi libero quisque enim. Sit mollis et ut feugiat leo."
        
        },
        {
            id:"04", image : Blog3, Ftitle :" Vegitable ", Title:" Discover The Allure Of Our Vegetarian Menu Options"
            , repro :"When an unknown printer took a galley of type and scrambled lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac consequat diam diam vel iaculis pellentesque egestas feugiat. Nunc fermentum vitae rutrum pellentesque egestas elementum. Mauris ipsum semper facilisis pharetra dolor. Diam vitae facilisis quis rhoncus ultrices vitae, viverra habitasse varius. Aliquam sapien, ipsum cursus felis aliquam magna. Tincidunt magna sit laoreet elementum vel egestas metus. Pharetra in semper elementum praesent vel volutpat leo commodo. Blandit facilisi libero quisque enim. Sit mollis et ut feugiat leo. Blandit rhoncus nec in consequat at neque. Adipiscing id nisi sed in. Augue malesuada dictum viverra pretium nisi. Fringilla elementum, luctus suspendisse tellus diam morbi morbi consequat tellus. Egestas malesuada dolor sit quam eget.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac consequat diam diam vel iaculis pellentesque egestas feugiat. Nunc fermentum vitae rutrum pellentesque egestas elementum. Mauris ipsum semper facilisis pharetra dolor. Diam vitae facilisis quis rhoncus ultrices vitae, viverra habitasse varius. Aliquam sapien, ipsum cursus felis aliquam magna. Tincidunt magna sit laoreet elementum vel egestas metus. Pharetra in semper elementum praesent vel volutpat leo commodo. Blandit facilisi libero quisque enim. Sit mollis et ut feugiat leo."
        
        },
        {
            id:"05", image : Blog4, Ftitle :" Vegitable ", Title:" Awaken Your Senses With Our Fusion Cuisine"
            , repro :"When an unknown printer took a galley of type and scrambled lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac consequat diam diam vel iaculis pellentesque egestas feugiat. Nunc fermentum vitae rutrum pellentesque egestas elementum. Mauris ipsum semper facilisis pharetra dolor. Diam vitae facilisis quis rhoncus ultrices vitae, viverra habitasse varius. Aliquam sapien, ipsum cursus felis aliquam magna. Tincidunt magna sit laoreet elementum vel egestas metus. Pharetra in semper elementum praesent vel volutpat leo commodo. Blandit facilisi libero quisque enim. Sit mollis et ut feugiat leo. Blandit rhoncus nec in consequat at neque. Adipiscing id nisi sed in. Augue malesuada dictum viverra pretium nisi. Fringilla elementum, luctus suspendisse tellus diam morbi morbi consequat tellus. Egestas malesuada dolor sit quam eget.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac consequat diam diam vel iaculis pellentesque egestas feugiat. Nunc fermentum vitae rutrum pellentesque egestas elementum. Mauris ipsum semper facilisis pharetra dolor. Diam vitae facilisis quis rhoncus ultrices vitae, viverra habitasse varius. Aliquam sapien, ipsum cursus felis aliquam magna. Tincidunt magna sit laoreet elementum vel egestas metus. Pharetra in semper elementum praesent vel volutpat leo commodo. Blandit facilisi libero quisque enim. Sit mollis et ut feugiat leo."
        
        },
        {
            id:"06", image : Blog6, Ftitle :" Vegitable ", Title:" Discover The Allure Of Our Vegetarian Menu Options"
            , repro :"When an unknown printer took a galley of type and scrambled lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac consequat diam diam vel iaculis pellentesque egestas feugiat. Nunc fermentum vitae rutrum pellentesque egestas elementum. Mauris ipsum semper facilisis pharetra dolor. Diam vitae facilisis quis rhoncus ultrices vitae, viverra habitasse varius. Aliquam sapien, ipsum cursus felis aliquam magna. Tincidunt magna sit laoreet elementum vel egestas metus. Pharetra in semper elementum praesent vel volutpat leo commodo. Blandit facilisi libero quisque enim. Sit mollis et ut feugiat leo. Blandit rhoncus nec in consequat at neque. Adipiscing id nisi sed in. Augue malesuada dictum viverra pretium nisi. Fringilla elementum, luctus suspendisse tellus diam morbi morbi consequat tellus. Egestas malesuada dolor sit quam eget.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac consequat diam diam vel iaculis pellentesque egestas feugiat. Nunc fermentum vitae rutrum pellentesque egestas elementum. Mauris ipsum semper facilisis pharetra dolor. Diam vitae facilisis quis rhoncus ultrices vitae, viverra habitasse varius. Aliquam sapien, ipsum cursus felis aliquam magna. Tincidunt magna sit laoreet elementum vel egestas metus. Pharetra in semper elementum praesent vel volutpat leo commodo. Blandit facilisi libero quisque enim. Sit mollis et ut feugiat leo."
        
        },
    ]

    const  deta2 =[
        {
            id:"01", image : Bev1 ,rank:"2", Prise: "$ 12.00", Ftitle :" Beverage ", Title:" Delicious Lay’s Potato Chips, Classic, 8 oz Bag"
            ,repro:
            
            `Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor. <br />
    -Pellentesque habitant tristique senectus <br/>
    -Turpis egestaVestibulum tortor quam <br/>
    -Eugiat vitae ultricies eget tempor`
        },
        {
            id:"02", image : Bev2 ,rank:"3", Prise: "$ 24.00", Ftitle :" Beverage ", Title:" Green Tostitos Bite Size Rounds Party Size"
            ,repro:
            
            `Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor. <br />
    -Pellentesque habitant tristique senectus <br/>
    -Turpis egestaVestibulum tortor quam <br/>
    -Eugiat vitae ultricies eget tempor`
        },
        {
            id:"03", image : Bev3 ,rank:"4", Prise: "$ 24.00", Ftitle :" Beverage ", Title:" Mirinda Orange No Artificial Flavors Soft Drink, Can, 250 Ml"
            ,repro:
            
            `Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor. <br />
    -Pellentesque habitant tristique senectus <br/>
    -Turpis egestaVestibulum tortor quam <br/>
    -Eugiat vitae ultricies eget tempor`
        },
        {
            id:"04", image : Bev4 , rank:"5",Prise: "$ 30.00",  Ftitle :" Beverage", Title:" Pringles Classic Potato Peppers for All Kind of People Choice"
            ,repro:
            
            `Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor. <br />
    -Pellentesque habitant tristique senectus <br/>
    -Turpis egestaVestibulum tortor quam <br/>
    -Eugiat vitae ultricies eget tempor`
        },
        {
            id:"05", image : Bev5 ,rank:"2", Prise: "$ 12.00", Ftitle :" Beverage ", Title:" Gatorade G Zero Sugar Thirst Quencher Sports Drink, Variety Pack, 12 fl oz, 18 Pack Bottles"
            ,repro:
            
            `Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor. <br />
    -Pellentesque habitant tristique senectus <br/>
    -Turpis egestaVestibulum tortor quam <br/>
    -Eugiat vitae ultricies eget tempor`
        },
        {
            id:"06", image : Bev6 ,rank:"3",Prise: "$ 34.00", Ftitle :" Beverage ", Title:" Red Rock Deli Style Potato Chips, Lime & Cracked Pepper, 2 Ounce (12 Count)"
            ,repro:
            
            `Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor. <br />
    -Pellentesque habitant tristique senectus <br/>
    -Turpis egestaVestibulum tortor quam <br/>
    -Eugiat vitae ultricies eget tempor`
        },
        {
            id:"07", image : Bev7 ,rank:"4",Prise: "$ 22.00", Ftitle :" Beverage ", Title:" SunChips Minis, Garden Salsa Flavored Canister, Multigrain Chips, 3.75 oz Canister"
            ,repro:
            
            `Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor. <br />
    -Pellentesque habitant tristique senectus <br/>
    -Turpis egestaVestibulum tortor quam <br/>
    -Eugiat vitae ultricies eget tempor`
        },
        {
            id:"08", image : Bev8 ,rank:"5", Prise: "$ 15.00", Ftitle :" Beverage", Title:" Simply Lemonade with Strawberry, 52 Fl Oz Bottle"
            ,repro:
            
            `Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor. <br />
    -Pellentesque habitant tristique senectus <br/>
    -Turpis egestaVestibulum tortor quam <br/>
    -Eugiat vitae ultricies eget tempor`
        },
     

    ];


    const  deta3 =[
        {
            id:"01", image : De1 , rank:"2",Prise: "$ 47.00", Ftitle :" Desserts ", Title:" Aptamil Gold+ ProNutra Biotik Stage 1 Infant Formula– 31.7"
            ,repro:
            
            `Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor. <br />
    -Pellentesque habitant tristique senectus <br/>
    -Turpis egestaVestibulum tortor quam <br/>
    -Eugiat vitae ultricies eget tempor`
        },
        {
            id:"02", image : De2 ,rank:"3", Prise: "$ 12.00", Ftitle :" Desserts ", Title:" Oui by Yoplait Mocha & Chocolate Whole Milk Yogurt, French Style Yogurt Snack, 5 OZ Glass Yogurt Jar"
            ,repro:
            
            `Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor. <br />
    -Pellentesque habitant tristique senectus <br/>
    -Turpis egestaVestibulum tortor quam <br/>
    -Eugiat vitae ultricies eget tempor`
        },
        {
            id:"03", image : De3 ,rank:"4", Prise: "$ 30.00", Ftitle :" Desserts ", Title:" Chips Ahoy! Mini Chocolate Chip Cookies Snack-Sak – 8oz"
            ,repro:
            
            `Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor. <br />
    -Pellentesque habitant tristique senectus <br/>
    -Turpis egestaVestibulum tortor quam <br/>
    -Eugiat vitae ultricies eget tempor`
        },
        {
            id:"04", image : De4 ,rank:"5", Prise: "$ 23.00",  Ftitle :" Desserts", Title:" Simply Go-GURT Strawberry and Mixed Berry Kids Low Fat Yogurt Variety Pack, Gluten Free, 2 oz. Yogurt Tubes (16 Count)"
            ,repro:
            
            `Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor. <br />
    -Pellentesque habitant tristique senectus <br/>
    -Turpis egestaVestibulum tortor quam <br/>
    -Eugiat vitae ultricies eget tempor`
        },
        {
            id:"05", image : De5 ,rank:"2", Prise: "$ 16.00", Ftitle :" Desserts ", Title:" Healthy Nuts Great Value Cashew Halves & Pieces"
            ,repro:
            
            `Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor. <br />
    -Pellentesque habitant tristique senectus <br/>
    -Turpis egestaVestibulum tortor quam <br/>
    -Eugiat vitae ultricies eget tempor`
        },
        {
            id:"06", image : De6 ,rank:"3",Prise: "$ 15.00", Ftitle :" Desserts ", Title:" Sahale Snacks Maple Pecans Glazed Mix, Gluten-Free Snack, 4-Ounce Bag"
            ,repro:
            
            `Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor. <br />
    -Pellentesque habitant tristique senectus <br/>
    -Turpis egestaVestibulum tortor quam <br/>
    -Eugiat vitae ultricies eget tempor`
        },
        {
            id:"07", image : De7 ,rank:"4",Prise: "$ 23.00", Ftitle :" Desserts ", Title:" Whole Almonds Great Value For Health, 16 oz, Re-Closable Pouch"
            ,repro:
            
            `Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor. <br />
    -Pellentesque habitant tristique senectus <br/>
    -Turpis egestaVestibulum tortor quam <br/>
    -Eugiat vitae ultricies eget tempor`
        },
        {
            id:"08", image : De8 , rank:"5",Prise: "$ 16.00", Ftitle :" Desserts", Title:" The Greek Gods Probiotic Plain Traditional Greek Yogurt, 32 oz"
            ,repro:
            
            `Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor. <br />
    -Pellentesque habitant tristique senectus <br/>
    -Turpis egestaVestibulum tortor quam <br/>
    -Eugiat vitae ultricies eget tempor`
        },
     

    ];

    const  deta4 =[
        {
            id:"01", image : Dr1 ,rank:"2", Prise: "$ 17.00", Ftitle :" Drinks & Juice ", Title:" Diet A&W Root Beer, 12 fl oz – 12 Cans pack"
            ,repro:
            
            `Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor. <br />
    -Pellentesque habitant tristique senectus <br/>
    -Turpis egestaVestibulum tortor quam <br/>
    -Eugiat vitae ultricies eget tempor`
        },
        {
            id:"02", image : Dr2 ,rank:"3", Prise: "$ 24.00", Ftitle :" Drinks & Juice ", Title:" PLEZi Flavored Kids Juice Drink – Apple Splash Fruit Juice Drink Blend"
            ,repro:
            
            `Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor. <br />
    -Pellentesque habitant tristique senectus <br/>
    -Turpis egestaVestibulum tortor quam <br/>
    -Eugiat vitae ultricies eget tempor`
        },
        {
            id:"03", image : Dr3 ,rank:"4", Prise: "$ 12.00", Ftitle :" Drinks & Juice ", Title:" Great Value No Added Sweeteners 100%, Apple Juice 64. Fl Oz."
            ,repro:
            
            `Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor. <br />
    -Pellentesque habitant tristique senectus <br/>
    -Turpis egestaVestibulum tortor quam <br/>
    -Eugiat vitae ultricies eget tempor`
        },
        {
            id:"04", image : Dr4 ,rank:"5", Prise: "$ 23.00",  Ftitle :" Drinks & Juice", Title:" Nutrition Tropicana Orange Juice, No Pulp, 52 Fl Oz"
            ,repro:
            
            `Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor. <br />
    -Pellentesque habitant tristique senectus <br/>
    -Turpis egestaVestibulum tortor quam <br/>
    -Eugiat vitae ultricies eget tempor`
        },
        {
            id:"05", image : Dr5 ,rank:"2", Prise: "$ 18.00", Ftitle :" Drinks & Juice ", Title:" Simply Light Lemonade, 52 Fl Oz Bottle"
            ,repro:
            
            `Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor. <br />
    -Pellentesque habitant tristique senectus <br/>
    -Turpis egestaVestibulum tortor quam <br/>
    -Eugiat vitae ultricies eget tempor`
        },
        {
            id:"06", image : Dr6 ,rank:"3",Prise: "$ 59.00", Ftitle :" Drinks & Juice ", Title:" Hawaiian Punch Fruit Juicy Red Juice Drink, 1 Gallon Bottle"
            ,repro:
            
            `Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor. <br />
    -Pellentesque habitant tristique senectus <br/>
    -Turpis egestaVestibulum tortor quam <br/>
    -Eugiat vitae ultricies eget tempor`
        },
     
     
     

    ];

    const  deta5 =[
        {
            id:"01", image : Fs1 ,rank:"2", Prise: "$ 59.00", Ftitle :" Fish & Meats ", Title:" Beef Keema All Natural 93 Lean 7 Fat Lean Ground Beef, 1 lb Tray"
            ,repro:
            
            `Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor. <br />
    -Pellentesque habitant tristique senectus <br/>
    -Turpis egestaVestibulum tortor quam <br/>
    -Eugiat vitae ultricies eget tempor`
        },
        {
            id:"02", image : Fs2 ,rank:"3", Prise: "$ 35.00", Ftitle :" Fish & Meats", Title:" Foster Farms Fresh & Natural Chicken Drumsticks, 20g Protein per 4 oz Serving"
            ,repro:
            
            `Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor. <br />
    -Pellentesque habitant tristique senectus <br/>
    -Turpis egestaVestibulum tortor quam <br/>
    -Eugiat vitae ultricies eget tempor`
        },
        {
            id:"03", image : Fs3 ,rank:"4", Prise: "$ 34.00", Ftitle :" Fish & Meats ", Title:" Tilapia Skinless Fillets Value Pack, 2 lb (Frozen), Responsibly Sourced, Phosphate Free"
            ,repro:
            
            `Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor. <br />
    -Pellentesque habitant tristique senectus <br/>
    -Turpis egestaVestibulum tortor quam <br/>
    -Eugiat vitae ultricies eget tempor`
        },
        {
            id:"04", image : Fs4 ,rank:"5", Prise: "$ 7.00",  Ftitle :" Fish & Meats", Title:" Van de Kamp’s Beer Battered 100% Whole Fish Fillets, Frozen, 19.1 oz 10 ct"
            ,repro:
            
            `Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor. <br />
    -Pellentesque habitant tristique senectus <br/>
    -Turpis egestaVestibulum tortor quam <br/>
    -Eugiat vitae ultricies eget tempor`
        },
        {
            id:"05", image : Fs5 ,rank:"2", Prise: "$ 34.00", Ftitle :" Fish & Meats", Title:" Great Value Wild Caught Flounder Skinless Fillets, 32 oz (Frozen)"
            ,repro:
            
            `Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor. <br />
    -Pellentesque habitant tristique senectus <br/>
    -Turpis egestaVestibulum tortor quam <br/>
    -Eugiat vitae ultricies eget tempor`
        },
        {
            id:"06", image : Fs6 ,rank:"3",Prise: "$ 18.00", Ftitle :" Fish & Meats ", Title:" Fresh Brand – Chicken Breast Tenderloins, 100% Natural, Boneless Skinless, 1.5 lb"
            ,repro:
            
            `Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor. <br />
    -Pellentesque habitant tristique senectus <br/>
    -Turpis egestaVestibulum tortor quam <br/>
    -Eugiat vitae ultricies eget tempor`
        },
        {
            id:"07", image : Fs7 ,rank:"4",Prise: "$ 12.00", Ftitle :" Fish & Meats ", Title:" Fresh Brand – Wild Caught Pacific Whiting Skin-On Fillets Value Pack, 2 lb (Frozen)"
            ,repro:
            
            `Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor. <br />
    -Pellentesque habitant tristique senectus <br/>
    -Turpis egestaVestibulum tortor quam <br/>
    -Eugiat vitae ultricies eget tempor`
        },
     
     
     

    ];

    const  deta6 =[
        {
            id:"01", image : Fr1 ,rank:"2", Prise: "$ 53.00", Ftitle :" Fresh Fruits ", Title:" Cantaloupe Melon Fresh Organic Cut"
            ,repro:
            
            `Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor. <br />
    -Pellentesque habitant tristique senectus <br/>
    -Turpis egestaVestibulum tortor quam <br/>
    -Eugiat vitae ultricies eget tempor`
        },
        {
            id:"02", image : Fr2 ,rank:"3", Prise: "$ 56.00", Ftitle :" Fresh Fruits", Title:" Exquisite Pineapple Creations for a Burst of Sweet Sunshine in Every"
            ,repro:
            
            `Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor. <br />
    -Pellentesque habitant tristique senectus <br/>
    -Turpis egestaVestibulum tortor quam <br/>
    -Eugiat vitae ultricies eget tempor`
        },
        {
            id:"03", image : Fr3 ,rank:"4", Prise: "$ 54.00", Ftitle :" Fresh Fruits ", Title:" Garden Fresh Juicy Grapes for a Burst of Sweetness in Every Bite"
            ,repro:
            
            `Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor. <br />
    -Pellentesque habitant tristique senectus <br/>
    -Turpis egestaVestibulum tortor quam <br/>
    -Eugiat vitae ultricies eget tempor`
        },
        {
            id:"04", image : Fr4 ,rank:"5", Prise: "$ 56.00",  Ftitle :" Fresh Fruits", Title:" Fresh Strawberries by La Chatelaine Farms Per Pound"
            ,repro:
            
            `Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor. <br />
    -Pellentesque habitant tristique senectus <br/>
    -Turpis egestaVestibulum tortor quam <br/>
    -Eugiat vitae ultricies eget tempor`
        },
        {
            id:"05", image : Fr5 ,rank:"2", Prise: "$ 34.00", Ftitle :" Fresh Fruits", Title:" Jumbo Medjool Dates 1 LB Family Pack"
            ,repro:
            
            `Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor. <br />
    -Pellentesque habitant tristique senectus <br/>
    -Turpis egestaVestibulum tortor quam <br/>
    -Eugiat vitae ultricies eget tempor`
        },
        {
            id:"06", image : Fr6 ,rank:"3",Prise: "$ 56.00", Ftitle :" Fresh Fruits ", Title:" Exquisite Pineapple Creations for a Burst of Sweet Sunshine in Every"
            ,repro:
            
            `Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor. <br />
    -Pellentesque habitant tristique senectus <br/>
    -Turpis egestaVestibulum tortor quam <br/>
    -Eugiat vitae ultricies eget tempor`
        },
        {
            id:"07", image : Fr7 ,rank:"4",Prise: "$ 23.00", Ftitle :" Fresh Fruits ", Title:" Garden Fresh South African Green Apple"
            ,repro:
            
            `Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor. <br />
    -Pellentesque habitant tristique senectus <br/>
    -Turpis egestaVestibulum tortor quam <br/>
    -Eugiat vitae ultricies eget tempor`
        },
        {
            id:"08", image : Fr8 ,rank:"5",Prise: "$ 17.00", Ftitle :" Fresh Fruits ", Title:" Maxican Nature’s Sweet Bounty Fresh Organic Giant Papaya"
            ,repro:
            
            `Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor. <br />
    -Pellentesque habitant tristique senectus <br/>
    -Turpis egestaVestibulum tortor quam <br/>
    -Eugiat vitae ultricies eget tempor`
        },
     
     
     

    ];

    const  deta7 =[
        {
            id:"01", image : Pet1 ,rank:"2", Prise: "$ 56.00", Ftitle :" Pets & Animals ", Title:" Nutrition Grilled Steak & Vegetable Dry Dog Food for Adult Dog Bag"
            ,repro:
            
            `Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor. <br />
    -Pellentesque habitant tristique senectus <br/>
    -Turpis egestaVestibulum tortor quam <br/>
    -Eugiat vitae ultricies eget tempor`
        },
        {
            id:"02", image : Pet2 ,rank:"3", Prise: "$ 18.00", Ftitle :" Pets & Animals", Title:" Lives Paté Favorites Variety Pack Wet Cat Food, 5.5-Ounce Cans, 12-Count"
            ,repro:
            
            `Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor. <br />
    -Pellentesque habitant tristique senectus <br/>
    -Turpis egestaVestibulum tortor quam <br/>
    -Eugiat vitae ultricies eget tempor`
        },
        {
            id:"03", image : Pet3 ,rank:"4", Prise: "$ 45.00", Ftitle :" Pets & Animals ", Title:" Purina Friskies Dry Cat Food for Adult Cats & Kittens, Surfin’ & Turfin"
            ,repro:
            
            `Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor. <br />
    -Pellentesque habitant tristique senectus <br/>
    -Turpis egestaVestibulum tortor quam <br/>
    -Eugiat vitae ultricies eget tempor`
        },
        {
            id:"04", image : Pet4 ,rank:"5", Prise: "$ 32.00",  Ftitle :" Pets & Animals", Title:" Stella & Chewy’s Freeze-Dried Raw Lil’ Bites Itty Bitty Beef Recipe Small Breed Dog Food, 7 oz. Bag (Beef)"
            ,repro:
            
            `Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor. <br />
    -Pellentesque habitant tristique senectus <br/>
    -Turpis egestaVestibulum tortor quam <br/>
    -Eugiat vitae ultricies eget tempor`
        },
       

    ];

    const  deta8 =[
        {
            id:"01", image : Toy1 , rank:"2",Prise: "$ 65.00", Ftitle :" Toys ", Title:" Baby & Toddler Toy Smart Stages Puppy With White Shirt, For Ages 6+ Months"
            ,repro:
            
            `Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor. <br />
    -Pellentesque habitant tristique senectus <br/>
    -Turpis egestaVestibulum tortor quam <br/>
    -Eugiat vitae ultricies eget tempor`
        },
        {
            id:"02", image : Toy2 ,rank:"3", Prise: "$ 24.00", Ftitle :" Toys", Title:" Toy Car Gifts for Boys Girls Kids 3+, RC Cars, Remote Control Car"
            ,repro:
            
            `Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor. <br />
    -Pellentesque habitant tristique senectus <br/>
    -Turpis egestaVestibulum tortor quam <br/>
    -Eugiat vitae ultricies eget tempor`
        },
        {
            id:"03", image : Toy3 ,rank:"4", Prise: "$ 78.00", Ftitle :" Toys ", Title:" Robo Alive Junior Baby Shark New Silicon Fins Version Swimming Daddy Shark (Blue) by ZURU"
            ,repro:
            
            `Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor. <br />
    -Pellentesque habitant tristique senectus <br/>
    -Turpis egestaVestibulum tortor quam <br/>
    -Eugiat vitae ultricies eget tempor`
        },
        {
            id:"04", image : Toy4 ,rank:"5", Prise: "$ 56.00",  Ftitle :" Toys", Title:" Baby Learning Toy Puppy’s Music Player with Lights & Fine Motor Activities for Ages 6+ Months, Blue"
            ,repro:
            
            `Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor. <br />
    -Pellentesque habitant tristique senectus <br/>
    -Turpis egestaVestibulum tortor quam <br/>
    -Eugiat vitae ultricies eget tempor`
        },
       

    ];





    return (
        <ShareDeta.Provider value={{deta, deta1, deta2, deta3, deta4, deta5, deta6, deta7, deta8}}>
            {children}
        </ShareDeta.Provider>
    );
};