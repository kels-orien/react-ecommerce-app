import {newProducts} from "../../data/items"
import {ProductsReducer} from "../ProductsReducer"

describe("users Reducer", () => {
    const INITIALSTATE = {
        products: newProducts,
        cart: []
    }

    const item = [{
        id: 0,
        name: "2019 Lenovo Thinkpad E590 15.6in HD",
        brand: "Lenovo",
        price: "353, 780",
        screen: "15.6",
        cpu: "Intel Quad Core i5-8265U 1.6 GHz (Turbo 3.90 GHz, 4 Cores 8 Threads, 6MB SmartCache)",
        gpu:"Integrated Intel UHD Graphics 620",
        ram: "RAM	16 GB SDRAM DDR4",
        harddrive: "Hard Drive	512 GB SSD",
        battery: "Battery Life (in hours)	12.23 hours",
        wireless_type: "802.11ac, Bluetooth",
        backlit_keyboard: "Yes",
        webcam: "HD Webcam",
        color: "black",
        imageurl:["https://res.cloudinary.com/dofiasjpi/image/upload/v1566409238/e-shop/Laptops/Lenovo/61RkJvByOdL._SL1364_.jpg","https://res.cloudinary.com/dofiasjpi/image/upload/v1566409239/e-shop/Laptops/Lenovo/61XJaRkMLAL._SL1280_.jpg", "https://res.cloudinary.com/dofiasjpi/image/upload/v1566409238/e-shop/Laptops/Lenovo/61UFDIoMZjL._SL1280_.jpg", "https://res.cloudinary.com/dofiasjpi/image/upload/v1566409238/e-shop/Laptops/Lenovo/51RSDhg9K4L._SL1000_.jpg","https://res.cloudinary.com/dofiasjpi/image/upload/v1566409238/e-shop/Laptops/Lenovo/51tMndxxH7L._SL1280_.jpg","https://res.cloudinary.com/dofiasjpi/image/upload/v1566409238/e-shop/Laptops/Lenovo/51O18VB7tSL._SL1000_.jpg"],
        chipset_brand: "Intel",
        os: "Windows 10 Pro",
        screen_resolution: "1366x768",
        processor_brand: "Intel",
        quantity: 1
      }];

    it("returns the initial state correctly", () => {
      const reducer = ProductsReducer(INITIALSTATE, {});
  
      expect(reducer).toEqual(INITIALSTATE);
    });
    it("returns updated cart", () => {

       
        const reducer = ProductsReducer(item, "ADD_PRODUCT_TO_CART");
    
        expect(reducer).toEqual(item);
      });

      it("increments product quantity in cart", () => {

       
        const reducer = ProductsReducer(item, "INCREMENT_CART_PRODUCT_QUANTITY");
    
        expect(reducer.quantity).toEqual(2);
      });
    
})