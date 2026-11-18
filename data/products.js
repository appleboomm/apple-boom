const products = [
    // --- iPhone 17 Серия ---
    { id: "ip17-black", name: "iPhone 17 (Black)", price: 95000, category: "iphone", image: "img/663E1DDA-AEEC-41DB-8CD7-120F8508CF6E.JPEG" },
    { id: "ip17-white", name: "iPhone 17 (White)", price: 95000, category: "iphone", image: "img/9A8FB809-AA0C-4715-9627-E4C0EF395CB4.JPEG" },
    { id: "ip17-blue", name: "iPhone 17 (Mist Blue)", price: 95000, category: "iphone", image: "img/807940C6-47DD-4BDB-AA76-2C1639947FA9.JPEG" },
    { id: "ip17-pro-silver", name: "iPhone 17 Pro (Silver)", price: 120000, category: "iphone", image: "img/B48B2E5C-1574-4A93-A6CE-E81BA100A2D1.JPEG" },
    { id: "ip17-pro-orange", name: "iPhone 17 Pro (Cosmic Orange)", price: 120000, category: "iphone", image: "img/BAB16FBB-CB95-461F-A726-A41FA79F0BF7.JPEG" },
    { id: "ip17-promax-blue", name: "iPhone 17 Pro Max (Deep Blue)", price: 135000, category: "iphone", image: "img/7AF0C267-6C2B-4972-B750-34955194B379.JPEG" },

    // --- MacBook ---
    { id: "mb-air-13", name: "MacBook Air 13″ (Silver)", price: 105000, category: "macbook", image: "img/3B4B99D1-C170-4FE7-8378-B89119AC90D5.JPEG" },
    { id: "mb-pro-14", name: "MacBook Pro 14″ (Space Black)", price: 160000, category: "macbook", image: "img/BA286FDE-222C-4B1A-AD86-A7798C6D9F79.JPEG" },

    // --- Mac ---
    { id: "mac-mini", name: "Mac mini (Silver)", price: 65000, category: "mac", image: "img/FC145BCE-B651-4BBB-BD77-8473A8DFF404.JPEG" },
    { id: "imac", name: "iMac (Silver)", price: 125000, category: "mac", image: "img/B87C2D30-DA29-4F25-89CE-E58A03712413.JPEG" },

    // --- iPad ---
    { id: "ipad-pro-11", name: "iPad Pro 11″ (Space Black)", price: 95000, category: "ipad", image: "img/A1D5DAFE-8866-4F1F-A7C5-8DA06A9640FB.JPEG" },
    { id: "ipad-air-11", name: "iPad Air 11″ (Blue)", price: 70000, category: "ipad", image: "img/3E72674B-2113-4EA2-8C06-C7340D7AEDAE.JPEG" },

    // --- Apple Watch ---
    { id: "watch-se", name: "Apple Watch SE (Midnight)", price: 28000, category: "watch", image: "img/A1FE87B7-E9A4-4A7C-B742-7D6506930113.JPEG" },
    { id: "watch-ultra", name: "Apple Watch Ultra (Natural)", price: 75000, category: "watch", image: "img/E606DFE7-34FD-4166-87FF-D820F3AD291F.JPEG" },

    // --- AirPods и акустика ---
    { id: "airpods-4", name: "AirPods 4 (White)", price: 16000, category: "audio", image: "img/0EE51425-034C-4BFA-B543-CFE5CC17D115.JPEG" },
    { id: "airpods-pro-3", name: "AirPods Pro 3 (White)", price: 24000, category: "audio", image: "img/7DD2D55C-CCC3-4D25-AD7E-0760E6BF8C26.JPEG" },

    // --- Samsung & Google ---
    { id: "samsung-s26", name: "Samsung Galaxy S26 Ultra (Cobalt Violet)", price: 115000, category: "samsung", image: "img/2FA1707A-2D24-4D6D-8BFB-3642864223CE.JPEG" },
    { id: "pixel-11-pro", name: "Google Pixel 11 Pro XL (Obsidian)", price: 105000, category: "pixel", image: "img/35359768-16CF-4C9B-9F31-8CE5112CE603.JPEG" },

    // --- PlayStation ---
    { id: "ps5-pro", name: "PlayStation 5 Pro (White)", price: 90000, category: "playstation", image: "img/C38A0A99-835A-4F2C-8D63-EEEDC455BB6D.JPEG" }
];
