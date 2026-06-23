// Menu Data
const menuData = [
    {
        id: "burger",
        title: "Zen Burger",
        category: "mains",
        categoryLabel: "Mains",
        rating: "★ 4.9",
        desc: "Signature premium wagyu beef, caramelized onions, truffle aioli, aged cheddar, toasted brioche bun, and microgreens.",
        calories: "850",
        weight: "340g",
        prep: "12m",
        price: 18.99,
        emoji: "🍔",
        glowColor: "rgba(255, 107, 53, 0.3)"
    },
    {
        id: "sushi",
        title: "Neon Dragon Roll",
        category: "specialties",
        categoryLabel: "Specialties",
        rating: "★ 4.8",
        desc: "Fresh bluefin tuna, sliced avocado, spicy mayo, toasted sesame, edible gold leaf, and a sweet house-brewed soy glaze.",
        calories: "420",
        weight: "220g",
        prep: "10m",
        price: 22.50,
        emoji: "🍣",
        glowColor: "rgba(247, 183, 49, 0.3)"
    },
    {
        id: "ramen",
        title: "Cyber Ramen Bowl",
        category: "mains",
        categoryLabel: "Mains",
        rating: "★ 4.9",
        desc: "Slow-simmered rich tonkotsu broth, hand-cut wheat noodles, soft-boiled soy egg, chashu pork, bamboo shoots, and green onions.",
        calories: "680",
        weight: "550g",
        prep: "15m",
        price: 16.75,
        emoji: "🍜",
        glowColor: "rgba(255, 94, 98, 0.3)"
    },
    {
        id: "tart",
        title: "Cosmic Matcha Tart",
        category: "desserts",
        categoryLabel: "Desserts",
        rating: "★ 4.7",
        desc: "Creamy organic matcha ganache, crispy black sesame crust, sweet red bean purée, and a dusting of golden powder.",
        calories: "340",
        weight: "150g",
        prep: "8m",
        price: 12.00,
        emoji: "🍵",
        glowColor: "rgba(29, 151, 108, 0.3)"
    },
    {
        id: "gyoza",
        title: "Golden Gyoza",
        category: "specialties",
        categoryLabel: "Specialties",
        rating: "★ 4.8",
        desc: "Pan-seared handmade dumplings stuffed with Berkshire pork and scallions, served with a citrus-infused ponzu dip.",
        calories: "280",
        weight: "180g",
        prep: "9m",
        price: 14.50,
        emoji: "🥟",
        glowColor: "rgba(247, 183, 49, 0.3)"
    },
    {
        id: "shrimp",
        title: "Volcano Shrimp",
        category: "specialties",
        categoryLabel: "Specialties",
        rating: "★ 4.9",
        desc: "Crispy jumbo tempura shrimp tossed in a velvety, spicy sriracha mayo nectar, garnished with spring chives.",
        calories: "510",
        weight: "240g",
        prep: "11m",
        price: 19.50,
        emoji: "🍤",
        glowColor: "rgba(255, 107, 53, 0.3)"
    },
    {
        id: "fries",
        title: "Truffle Fries",
        category: "mains",
        categoryLabel: "Mains",
        rating: "★ 4.6",
        desc: "Gourmet thin-cut fries seasoned with double-truffle oil, sea salt, shaved parmesan, and fresh curly parsley.",
        calories: "450",
        weight: "200g",
        prep: "7m",
        price: 9.75,
        emoji: "🍟",
        glowColor: "rgba(255, 94, 98, 0.3)"
    },
    {
        id: "ribeye",
        title: "Shogun Ribeye",
        category: "mains",
        categoryLabel: "Mains",
        rating: "★ 5.0",
        desc: "Prime 45-day dry-aged ribeye steak, finished with garlic herb compound butter and served with roasted gold potatoes.",
        calories: "980",
        weight: "400g",
        prep: "18m",
        price: 38.00,
        emoji: "🥩",
        glowColor: "rgba(255, 50, 50, 0.3)"
    },
    {
        id: "toast",
        title: "Avocado Toast",
        category: "mains",
        categoryLabel: "Mains",
        rating: "★ 4.7",
        desc: "Artisanal grilled sourdough topped with hand-smashed Hass avocados, micro-greens, cherry tomatoes, and a soft poached egg.",
        calories: "380",
        weight: "210g",
        prep: "8m",
        price: 13.50,
        emoji: "🥑",
        glowColor: "rgba(46, 204, 113, 0.3)"
    },
    {
        id: "cheesecake",
        title: "Sakura Cheesecake",
        category: "desserts",
        categoryLabel: "Desserts",
        rating: "★ 4.8",
        desc: "Japanese double-layered soufflé cheesecake infused with real sakura blossom essence and served with strawberry syrup.",
        calories: "310",
        weight: "130g",
        prep: "6m",
        price: 11.25,
        emoji: "🍰",
        glowColor: "rgba(255, 120, 150, 0.3)"
    },
    {
        id: "salmon",
        title: "Miso Glazed Salmon",
        category: "mains",
        categoryLabel: "Mains",
        rating: "★ 4.9",
        desc: "Pan-roasted Atlantic salmon fillet glazed with sweet white miso sauce, served on a bed of steamed sushi rice.",
        calories: "620",
        weight: "320g",
        prep: "14m",
        price: 24.50,
        emoji: "🐟",
        glowColor: "rgba(247, 183, 49, 0.3)"
    },
    {
        id: "boba",
        title: "Boba Galaxy",
        category: "desserts",
        categoryLabel: "Desserts/Drinks",
        rating: "★ 4.9",
        desc: "Stellar multi-layered taro milk tea featuring brown sugar tapioca boba pearls, cheese foam crown, and gold flakes.",
        calories: "290",
        weight: "450ml",
        prep: "5m",
        price: 8.50,
        emoji: "🧋",
        glowColor: "rgba(155, 89, 182, 0.3)"
    }
];

// State variables
let currentItemIndex = 0;
let scene, camera, renderer;
let dishesGroup = {}; // Object to hold our 3D models
let activeMesh = null;
let particles;
let cart = {};

// Mouse interaction tracking
let isDragging = false;
let previousMousePosition = { x: 0, y: 0 };
let targetRotationX = 0.2;
let targetRotationY = 0.5;
let currentRotationX = 0.2;
let currentRotationY = 0.5;

// Initialize WebGL & UI
function init() {
    setupUI();
    setupThree();
    createModels();
    createAmbientParticles();
    animate();
    
    // Load initial item
    switchDish(0);
}

// 1. Setup UI Elements and Listeners
function setupUI() {
    const itemsPanel = document.getElementById("itemsPanel");
    
    // Load menu cards
    renderMenuCards(menuData);

    // Category filtering
    const categoryBtns = document.querySelectorAll(".category-btn");
    categoryBtns.forEach(btn => {
        btn.addEventListener("click", (e) => {
            categoryBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            
            const category = btn.dataset.category;
            filterMenu(category);
        });
    });

    // Add to Cart
    document.getElementById("addToCartBtn").addEventListener("click", () => {
        addToCart(menuData[currentItemIndex]);
    });

    // Cart Panel Toggles
    document.getElementById("openCartBtn").addEventListener("click", () => {
        document.getElementById("cartPanel").classList.add("open");
    });
    document.getElementById("closeCartBtn").addEventListener("click", () => {
        document.getElementById("cartPanel").classList.remove("open");
    });

    // Checkout
    document.getElementById("checkoutBtn").addEventListener("click", () => {
        if (Object.keys(cart).length === 0) {
            alert("Your cart is empty!");
            return;
        }
        alert("Thank you for your order! Cooking starts now. ✨");
        cart = {};
        updateCartUI();
        document.getElementById("cartPanel").classList.remove("open");
    });
}

function renderMenuCards(items) {
    const itemsPanel = document.getElementById("itemsPanel");
    itemsPanel.innerHTML = "";
    
    items.forEach((item) => {
        // Find index in global menuData
        const originalIndex = menuData.findIndex(d => d.id === item.id);
        
        const card = document.createElement("div");
        card.className = `menu-card ${originalIndex === currentItemIndex ? "active" : ""}`;
        card.dataset.index = originalIndex;
        
        card.innerHTML = `
            <div class="menu-card-img-placeholder">${item.emoji}</div>
            <div class="menu-card-info">
                <div class="menu-card-title">${item.title}</div>
                <div class="menu-card-price">$${item.price.toFixed(2)}</div>
            </div>
        `;
        
        card.addEventListener("click", () => {
            document.querySelectorAll(".menu-card").forEach(c => c.classList.remove("active"));
            card.classList.add("active");
            switchDish(originalIndex);
        });
        
        itemsPanel.appendChild(card);
    });
}

function filterMenu(category) {
    let filtered = menuData;
    if (category !== "all") {
        filtered = menuData.filter(item => item.category === category);
    }
    renderMenuCards(filtered);
}

// 2. Setup Three.js Scene
function setupThree() {
    const container = document.querySelector(".canvas-container");
    const canvas = document.getElementById("canvas3d");

    scene = new THREE.Scene();
    
    // Camera
    camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 100);
    camera.position.set(0, 0.7, 4.2);
    camera.lookAt(0, -0.25, 0);

    // Renderer
    renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
    dirLight.position.set(5, 8, 5);
    dirLight.castShadow = true;
    dirLight.shadow.mapSize.width = 1024;
    dirLight.shadow.mapSize.height = 1024;
    scene.add(dirLight);

    const pointLight1 = new THREE.PointLight(0xffaa66, 1.5, 10);
    pointLight1.position.set(-3, 2, -2);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x66ccff, 1.0, 10);
    pointLight2.position.set(3, -1, 2);
    scene.add(pointLight2);

    // Event Listeners for canvas drag
    canvas.addEventListener("mousedown", (e) => {
        isDragging = true;
        previousMousePosition = { x: e.clientX, y: e.clientY };
    });

    window.addEventListener("mouseup", () => {
        isDragging = false;
    });

    canvas.addEventListener("mousemove", (e) => {
        if (!isDragging) return;

        const deltaMove = {
            x: e.clientX - previousMousePosition.x,
            y: e.clientY - previousMousePosition.y
        };

        targetRotationY += deltaMove.x * 0.005;
        targetRotationX += deltaMove.y * 0.005;

        // Limit vertical rotation to avoid flipping upside down
        targetRotationX = Math.max(-Math.PI / 4, Math.min(Math.PI / 4, targetRotationX));

        previousMousePosition = { x: e.clientX, y: e.clientY };
    });

    // Handle Resize
    window.addEventListener("resize", () => {
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, container.clientHeight);
    });
}

// 3. Create Custom Procedural 3D Food Models
function createModels() {
    // Shared materials
    const darkWoodMat = new THREE.MeshStandardMaterial({ color: 0x221a15, roughness: 0.8 });
    const goldMat = new THREE.MeshStandardMaterial({ color: 0xd4af37, metalness: 0.9, roughness: 0.1 });

    // ----------------------------------------------------
    // Model 1: BURGER
    // ----------------------------------------------------
    const burgerGroup = new THREE.Group();
    
    // Bun Bottom
    const bunBottomGeom = new THREE.CylinderGeometry(1.2, 1.2, 0.25, 32);
    const bunMat = new THREE.MeshStandardMaterial({ color: 0xc68a4c, roughness: 0.6 });
    const bunBottom = new THREE.Mesh(bunBottomGeom, bunMat);
    bunBottom.position.y = -0.6;
    burgerGroup.add(bunBottom);

    // Patty
    const pattyGeom = new THREE.CylinderGeometry(1.15, 1.15, 0.35, 32);
    const pattyMat = new THREE.MeshStandardMaterial({ color: 0x422518, roughness: 0.9, bumpScale: 0.05 });
    const patty = new THREE.Mesh(pattyGeom, pattyMat);
    patty.position.y = -0.3;
    burgerGroup.add(patty);

    // Cheese
    const cheeseGeom = new THREE.BoxGeometry(1.25, 0.04, 1.25);
    const cheeseMat = new THREE.MeshStandardMaterial({ color: 0xfcb418, roughness: 0.4 });
    const cheese = new THREE.Mesh(cheeseGeom, cheeseMat);
    cheese.position.y = -0.11;
    cheese.rotation.y = Math.PI / 8;
    burgerGroup.add(cheese);

    // Tomato
    const tomatoGeom = new THREE.CylinderGeometry(1.1, 1.1, 0.15, 24);
    const tomatoMat = new THREE.MeshStandardMaterial({ color: 0xd63031, roughness: 0.3 });
    const tomato = new THREE.Mesh(tomatoGeom, tomatoMat);
    tomato.position.y = 0.02;
    burgerGroup.add(tomato);

    // Lettuce
    const lettuceGroup = new THREE.Group();
    const lettuceMat = new THREE.MeshStandardMaterial({ color: 0x2ecc71, roughness: 0.7 });
    for (let i = 0; i < 6; i++) {
        const leafGeom = new THREE.BoxGeometry(0.8, 0.05, 0.9);
        const leaf = new THREE.Mesh(leafGeom, lettuceMat);
        const angle = (i / 6) * Math.PI * 2;
        leaf.position.set(Math.cos(angle) * 0.7, 0.12, Math.sin(angle) * 0.7);
        leaf.rotation.set(0.1, angle, 0.1);
        lettuceGroup.add(leaf);
    }
    burgerGroup.add(lettuceGroup);

    // Bun Top
    const bunTopGeom = new THREE.SphereGeometry(1.2, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2);
    const bunTop = new THREE.Mesh(bunTopGeom, bunMat);
    bunTop.scale.set(1, 0.7, 1);
    bunTop.position.y = 0.15;
    burgerGroup.add(bunTop);

    // Sesame Seeds
    const sesameGeom = new THREE.ConeGeometry(0.02, 0.06, 4);
    const sesameMat = new THREE.MeshStandardMaterial({ color: 0xfaf5ef, roughness: 0.5 });
    for (let i = 0; i < 40; i++) {
        const seed = new THREE.Mesh(sesameGeom, sesameMat);
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.random() * (Math.PI / 3);
        const r = 1.2;
        
        seed.position.set(
            r * Math.sin(phi) * Math.cos(theta),
            (r * Math.cos(phi) * 0.7) + 0.15,
            r * Math.sin(phi) * Math.sin(theta)
        );
        seed.rotation.set(phi, theta, 0);
        burgerGroup.add(seed);
    }

    // Plate for Burger
    const plateGeom = new THREE.CylinderGeometry(1.6, 1.4, 0.1, 32);
    const plateMat = new THREE.MeshStandardMaterial({ color: 0x111115, roughness: 0.4 });
    const plate1 = new THREE.Mesh(plateGeom, plateMat);
    plate1.position.y = -0.76;
    burgerGroup.add(plate1);

    dishesGroup["burger"] = burgerGroup;

    // ----------------------------------------------------
    // Model 2: SUSHI
    // ----------------------------------------------------
    const sushiGroup = new THREE.Group();
    
    // Slate serving block
    const slateGeom = new THREE.BoxGeometry(2.4, 0.15, 1.6);
    const slateMat = new THREE.MeshStandardMaterial({ color: 0x1e272e, roughness: 0.9 });
    const slate = new THREE.Mesh(slateGeom, slateMat);
    slate.position.y = -0.6;
    sushiGroup.add(slate);

    // Create 3 Sushi rolls arranged on the slate
    const rollPositions = [
        { x: -0.5, z: -0.2 },
        { x: 0.4, z: 0.1 },
        { x: -0.1, z: 0.3 }
    ];

    rollPositions.forEach((pos, idx) => {
        const roll = new THREE.Group();
        
        // Nori outer wrapper
        const noriGeom = new THREE.CylinderGeometry(0.42, 0.42, 0.4, 24);
        const noriMat = new THREE.MeshStandardMaterial({ color: 0x1b2620, roughness: 0.8 });
        const nori = new THREE.Mesh(noriGeom, noriMat);
        roll.add(nori);

        // White rice core
        const riceGeom = new THREE.CylinderGeometry(0.38, 0.38, 0.41, 24);
        const riceMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.9 });
        const rice = new THREE.Mesh(riceGeom, riceMat);
        roll.add(rice);

        // Tuna/Salmon center filling
        const tunaGeom = new THREE.BoxGeometry(0.2, 0.42, 0.2);
        const tunaMat = new THREE.MeshStandardMaterial({ color: 0xff4757, roughness: 0.5 });
        const tuna = new THREE.Mesh(tunaGeom, tunaMat);
        tuna.position.set(-0.08, 0, -0.08);
        roll.add(tuna);

        // Avocado center filling
        const avoGeom = new THREE.BoxGeometry(0.18, 0.42, 0.18);
        const avoMat = new THREE.MeshStandardMaterial({ color: 0x2ecc71, roughness: 0.6 });
        const avo = new THREE.Mesh(avoGeom, avoMat);
        avo.position.set(0.08, 0, 0.08);
        roll.add(avo);

        // Orange roe top dressing
        for (let i = 0; i < 15; i++) {
            const roeGeom = new THREE.SphereGeometry(0.035, 8, 8);
            const roeMat = new THREE.MeshStandardMaterial({ color: 0xffa502, roughness: 0.2 });
            const roe = new THREE.Mesh(roeGeom, roeMat);
            roe.position.set(
                (Math.random() - 0.5) * 0.3,
                0.21,
                (Math.random() - 0.5) * 0.3
            );
            roll.add(roe);
        }

        // Gold flake decoration on middle roll
        if (idx === 1) {
            const goldFlakeGeom = new THREE.BoxGeometry(0.1, 0.01, 0.1);
            const goldFlake = new THREE.Mesh(goldFlakeGeom, goldMat);
            goldFlake.position.set(0, 0.22, 0);
            goldFlake.rotation.set(0, Math.random() * Math.PI, 0.2);
            roll.add(goldFlake);
        }

        roll.position.set(pos.x, -0.32, pos.z);
        roll.rotation.y = idx * 0.8;
        sushiGroup.add(roll);
    });

    dishesGroup["sushi"] = sushiGroup;

    // ----------------------------------------------------
    // Model 3: RAMEN
    // ----------------------------------------------------
    const ramenGroup = new THREE.Group();

    // The Bowl
    const bowlOuterGeom = new THREE.CylinderGeometry(1.4, 0.8, 0.9, 32, 1, true);
    const bowlMat = new THREE.MeshStandardMaterial({ color: 0x1e1e24, roughness: 0.2, metalness: 0.1 });
    const bowlOuter = new THREE.Mesh(bowlOuterGeom, bowlMat);
    bowlOuter.position.y = -0.3;
    ramenGroup.add(bowlOuter);

    // Inner bowl floor/walls
    const bowlInnerGeom = new THREE.CylinderGeometry(1.36, 0.78, 0.86, 32, 1, true);
    const bowlInner = new THREE.Mesh(bowlInnerGeom, bowlMat);
    bowlInner.position.y = -0.28;
    bowlInner.rotation.x = Math.PI;
    ramenGroup.add(bowlInner);

    const bowlBottomGeom = new THREE.CylinderGeometry(0.8, 0.8, 0.1, 32);
    const bowlBottom = new THREE.Mesh(bowlBottomGeom, bowlMat);
    bowlBottom.position.y = -0.75;
    ramenGroup.add(bowlBottom);

    // Soup Liquid
    const soupGeom = new THREE.CylinderGeometry(1.3, 1.25, 0.05, 32);
    const soupMat = new THREE.MeshStandardMaterial({ color: 0x965a38, roughness: 0.1 });
    const soup = new THREE.Mesh(soupGeom, soupMat);
    soup.position.y = -0.05;
    ramenGroup.add(soup);

    // Noodles (interlocking toruses)
    const noodleGroup = new THREE.Group();
    const noodleMat = new THREE.MeshStandardMaterial({ color: 0xf1f2b6, roughness: 0.6 });
    for (let i = 0; i < 8; i++) {
        const noodleGeom = new THREE.TorusGeometry(0.4, 0.04, 8, 24);
        const noodle = new THREE.Mesh(noodleGeom, noodleMat);
        noodle.position.set((Math.random() - 0.5) * 0.4, -0.04, (Math.random() - 0.5) * 0.4);
        noodle.rotation.set(Math.PI / 2 + (Math.random() - 0.5) * 0.2, (Math.random() - 0.5) * 0.2, Math.random() * Math.PI);
        noodleGroup.add(noodle);
    }
    ramenGroup.add(noodleGroup);

    // Soy Egg (two halves)
    const eggGroup = new THREE.Group();
    const eggWhiteGeom = new THREE.SphereGeometry(0.24, 16, 16);
    const eggWhiteMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.4 });
    const eggWhite = new THREE.Mesh(eggWhiteGeom, eggWhiteMat);
    eggWhite.scale.set(1, 0.7, 1.3);
    
    const eggYolkGeom = new THREE.SphereGeometry(0.14, 16, 16);
    const eggYolkMat = new THREE.MeshStandardMaterial({ color: 0xff9f43, roughness: 0.2 });
    const eggYolk = new THREE.Mesh(eggYolkGeom, eggYolkMat);
    eggYolk.position.y = 0.08;
    eggYolk.scale.set(1, 0.4, 1.2);

    eggGroup.add(eggWhite);
    eggGroup.add(eggYolk);
    eggGroup.position.set(0.4, 0.02, 0.3);
    eggGroup.rotation.set(-0.2, 0.5, 0.3);
    ramenGroup.add(eggGroup);

    // Chashu Pork slice
    const porkGeom = new THREE.CylinderGeometry(0.35, 0.35, 0.08, 16);
    const porkMat = new THREE.MeshStandardMaterial({ color: 0x9c483a, roughness: 0.7 });
    const pork = new THREE.Mesh(porkGeom, porkMat);
    pork.position.set(-0.4, 0.01, -0.1);
    pork.rotation.set(0.1, 0, 0.2);
    ramenGroup.add(pork);

    // Nori seaweed sheets
    const noriSheetGeom = new THREE.BoxGeometry(0.4, 0.8, 0.02);
    const noriSheetMat = new THREE.MeshStandardMaterial({ color: 0x111c16, roughness: 0.95 });
    const noriSheet = new THREE.Mesh(noriSheetGeom, noriSheetMat);
    noriSheet.position.set(-0.5, 0.3, -0.6);
    noriSheet.rotation.set(0.4, 0.6, -0.2);
    ramenGroup.add(noriSheet);

    // Green onions sprinkling
    for (let i = 0; i < 25; i++) {
        const scallionGeom = new THREE.CylinderGeometry(0.025, 0.025, 0.04, 8, 1, true);
        const scallionMat = new THREE.MeshStandardMaterial({ color: 0x27ae60, roughness: 0.6 });
        const scallion = new THREE.Mesh(scallionGeom, scallionMat);
        scallion.position.set(
            (Math.random() - 0.5) * 0.8,
            0.02,
            (Math.random() - 0.5) * 0.8
        );
        scallion.rotation.set(Math.random() * 0.5, Math.random() * Math.PI, Math.random() * 0.5);
        ramenGroup.add(scallion);
    }

    dishesGroup["ramen"] = ramenGroup;

    // ----------------------------------------------------
    // Model 4: MATCHA TART
    // ----------------------------------------------------
    const tartGroup = new THREE.Group();

    // Plate/Underplate
    const tartPlateGeom = new THREE.CylinderGeometry(1.5, 1.3, 0.08, 32);
    const tartPlateMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.1 });
    const tartPlate = new THREE.Mesh(tartPlateGeom, tartPlateMat);
    tartPlate.position.y = -0.6;
    tartGroup.add(tartPlate);

    // Pastry base
    const pastryGeom = new THREE.CylinderGeometry(1.0, 0.95, 0.25, 32);
    const pastryMat = new THREE.MeshStandardMaterial({ color: 0x3d2716, roughness: 0.9 });
    const pastry = new THREE.Mesh(pastryGeom, pastryMat);
    pastry.position.y = -0.45;
    tartGroup.add(pastry);

    // Green Matcha Filling
    const matchaGeom = new THREE.CylinderGeometry(0.94, 0.94, 0.15, 32);
    const matchaMat = new THREE.MeshStandardMaterial({ color: 0x3bb177, roughness: 0.3 });
    const matcha = new THREE.Mesh(matchaGeom, matchaMat);
    matcha.position.y = -0.38;
    tartGroup.add(matcha);

    // Single Strawberry decoration
    const berryGeom = new THREE.ConeGeometry(0.18, 0.35, 16);
    const berryMat = new THREE.MeshStandardMaterial({ color: 0xe84118, roughness: 0.3 });
    const berry = new THREE.Mesh(berryGeom, berryMat);
    berry.position.set(0.2, -0.15, 0.2);
    berry.rotation.set(-0.2, 0.3, 0.4);
    tartGroup.add(berry);

    // Cream Dollop
    const creamGeom = new THREE.SphereGeometry(0.13, 16, 16);
    const creamMat = new THREE.MeshStandardMaterial({ color: 0xfffcf0, roughness: 0.5 });
    const cream = new THREE.Mesh(creamGeom, creamMat);
    cream.position.set(-0.3, -0.24, -0.2);
    cream.scale.set(1.2, 0.8, 1);
    tartGroup.add(cream);

    // Gold Leaf Flakes
    for (let i = 0; i < 6; i++) {
        const flakeGeom = new THREE.BoxGeometry(0.08, 0.005, 0.08);
        const flake = new THREE.Mesh(flakeGeom, goldMat);
        flake.position.set(
            (Math.random() - 0.5) * 0.8,
            -0.3,
            (Math.random() - 0.5) * 0.8
        );
        flake.rotation.set(0.1, Math.random() * Math.PI, 0.1);
        tartGroup.add(flake);
    }

    dishesGroup["tart"] = tartGroup;

    // ----------------------------------------------------
    // Model 5: GOLDEN GYOZA
    // ----------------------------------------------------
    const gyozaGroup = new THREE.Group();
    
    // Slate plate
    const gyozaPlateGeom = new THREE.CylinderGeometry(1.5, 1.4, 0.08, 32);
    const gyozaPlateMat = new THREE.MeshStandardMaterial({ color: 0x18181b, roughness: 0.5 });
    const gyozaPlate = new THREE.Mesh(gyozaPlateGeom, gyozaPlateMat);
    gyozaPlate.position.y = -0.6;
    gyozaGroup.add(gyozaPlate);

    // Dipping bowl in center
    const dipBowlGeom = new THREE.CylinderGeometry(0.4, 0.3, 0.25, 16);
    const dipBowlMat = new THREE.MeshStandardMaterial({ color: 0xc0392b, roughness: 0.2 });
    const dipBowl = new THREE.Mesh(dipBowlGeom, dipBowlMat);
    dipBowl.position.set(0, -0.45, 0);
    gyozaGroup.add(dipBowl);

    const sauceGeom = new THREE.CylinderGeometry(0.36, 0.36, 0.02, 16);
    const sauceMat = new THREE.MeshStandardMaterial({ color: 0x110d0a, roughness: 0.1 });
    const sauce = new THREE.Mesh(sauceGeom, sauceMat);
    sauce.position.set(0, -0.34, 0);
    gyozaGroup.add(sauce);

    // 5 Gyozas arranged in a circle
    for (let i = 0; i < 5; i++) {
        const gyoza = new THREE.Group();
        const bodyGeom = new THREE.SphereGeometry(0.24, 16, 16);
        const gyozaMat = new THREE.MeshStandardMaterial({ color: 0xf5f6fa, roughness: 0.8 });
        const body = new THREE.Mesh(bodyGeom, gyozaMat);
        body.scale.set(1.5, 0.7, 0.4);
        gyoza.add(body);

        // Seared bottom
        const bottomGeom = new THREE.BoxGeometry(0.5, 0.02, 0.25);
        const bottomMat = new THREE.MeshStandardMaterial({ color: 0xb57c3a, roughness: 0.9 });
        const bottom = new THREE.Mesh(bottomGeom, bottomMat);
        bottom.position.y = -0.15;
        gyoza.add(bottom);

        const angle = (i / 5) * Math.PI * 2;
        const radius = 0.8;
        gyoza.position.set(Math.cos(angle) * radius, -0.44, Math.sin(angle) * radius);
        gyoza.rotation.set(0, -angle + Math.PI / 2, 0.2);
        gyozaGroup.add(gyoza);
    }

    dishesGroup["gyoza"] = gyozaGroup;

    // ----------------------------------------------------
    // Model 6: VOLCANO SHRIMP
    // ----------------------------------------------------
    const shrimpGroup = new THREE.Group();

    // Dark round plate
    const shrimpPlateGeom = new THREE.CylinderGeometry(1.5, 1.4, 0.08, 32);
    const shrimpPlateMat = new THREE.MeshStandardMaterial({ color: 0x2d3436, roughness: 0.3 });
    const shrimpPlate = new THREE.Mesh(shrimpPlateGeom, shrimpPlateMat);
    shrimpPlate.position.y = -0.6;
    shrimpGroup.add(shrimpPlate);

    // 3 Crispy Shrimp
    const shrimpPositions = [
        { x: -0.3, y: -0.4, z: -0.2, rotY: 0.2, rotZ: 0.1 },
        { x: 0.3, y: -0.4, z: 0.2, rotY: 2.1, rotZ: -0.1 },
        { x: 0.0, y: -0.25, z: 0.0, rotY: -1.2, rotZ: 0.4 }
    ];

    shrimpPositions.forEach((pos) => {
        const shrimp = new THREE.Group();
        // Crispy breading body
        const bodyGeom = new THREE.CylinderGeometry(0.18, 0.14, 0.9, 12);
        const tempuraMat = new THREE.MeshStandardMaterial({ color: 0xeccc68, roughness: 0.95 });
        const body = new THREE.Mesh(bodyGeom, tempuraMat);
        body.rotation.z = Math.PI / 2;
        shrimp.add(body);

        // Spicy orange/red sauce drizzle
        const drizzleGeom = new THREE.TorusGeometry(0.19, 0.03, 8, 16);
        const sauceMat = new THREE.MeshStandardMaterial({ color: 0xff6b6b, roughness: 0.2 });
        const drizzle = new THREE.Mesh(drizzleGeom, sauceMat);
        drizzle.rotation.y = Math.PI / 2;
        shrimp.add(drizzle);

        // Pinkish Tail
        const tailGeom = new THREE.ConeGeometry(0.1, 0.3, 8);
        const tailMat = new THREE.MeshStandardMaterial({ color: 0xff7675, roughness: 0.6 });
        const tail = new THREE.Mesh(tailGeom, tailMat);
        tail.position.x = 0.5;
        tail.rotation.z = -Math.PI / 4;
        shrimp.add(tail);

        shrimp.position.set(pos.x, pos.y, pos.z);
        shrimp.rotation.set(0.2, pos.rotY, pos.rotZ);
        shrimpGroup.add(shrimp);
    });

    dishesGroup["shrimp"] = shrimpGroup;

    // ----------------------------------------------------
    // Model 7: TRUFFLE FRIES
    // ----------------------------------------------------
    const friesGroup = new THREE.Group();

    // Plate base
    const friesPlate = new THREE.Mesh(shrimpPlateGeom, shrimpPlateMat);
    friesPlate.position.y = -0.6;
    friesGroup.add(friesPlate);

    // Cup/holder
    const cupGeom = new THREE.CylinderGeometry(0.55, 0.45, 0.8, 16);
    const cupMat = new THREE.MeshStandardMaterial({ color: 0x111111, metalness: 0.8, roughness: 0.2 });
    const cup = new THREE.Mesh(cupGeom, cupMat);
    cup.position.set(-0.5, -0.2, -0.4);
    friesGroup.add(cup);

    // Dynamic French Fries
    const friesMat = new THREE.MeshStandardMaterial({ color: 0xffd32a, roughness: 0.7 });
    for (let i = 0; i < 35; i++) {
        const fryGeom = new THREE.BoxGeometry(0.08, 0.9, 0.08);
        const fry = new THREE.Mesh(fryGeom, friesMat);
        
        // Randomize positioning (some inside the cup, some scattered on the plate)
        if (i < 20) {
            fry.position.set(
                -0.5 + (Math.random() - 0.5) * 0.4,
                0.2 + (Math.random() - 0.5) * 0.2,
                -0.4 + (Math.random() - 0.5) * 0.4
            );
            fry.rotation.set(
                (Math.random() - 0.5) * 0.4,
                Math.random() * Math.PI,
                (Math.random() - 0.5) * 0.4
            );
        } else {
            fry.position.set(
                0.3 + (Math.random() - 0.5) * 0.8,
                -0.52,
                0.1 + (Math.random() - 0.5) * 0.8
            );
            fry.rotation.set(
                Math.PI / 2 + (Math.random() - 0.5) * 0.1,
                Math.random() * Math.PI,
                (Math.random() - 0.5) * 0.1
            );
        }
        friesGroup.add(fry);
    }

    // Parsley & Parmesan flakes
    const parsleyMat = new THREE.MeshStandardMaterial({ color: 0x26de81, roughness: 0.9 });
    for (let i = 0; i < 20; i++) {
        const leafGeom = new THREE.BoxGeometry(0.04, 0.01, 0.04);
        const flake = new THREE.Mesh(leafGeom, parsleyMat);
        flake.position.set(
            0.1 + (Math.random() - 0.5) * 0.9,
            -0.48,
            0.1 + (Math.random() - 0.5) * 0.9
        );
        friesGroup.add(flake);
    }

    dishesGroup["fries"] = friesGroup;

    // ----------------------------------------------------
    // Model 8: SHOGUN RIBEYE
    // ----------------------------------------------------
    const ribeyeGroup = new THREE.Group();

    // Large plate
    const ribeyePlateGeom = new THREE.CylinderGeometry(1.6, 1.5, 0.08, 32);
    const ribeyePlateMat = new THREE.MeshStandardMaterial({ color: 0xf5f6fa, roughness: 0.1 });
    const ribeyePlate = new THREE.Mesh(ribeyePlateGeom, ribeyePlateMat);
    ribeyePlate.position.y = -0.6;
    ribeyeGroup.add(ribeyePlate);

    // Ribeye Steak
    const steakGeom = new THREE.BoxGeometry(1.6, 0.25, 1.0);
    const steakMat = new THREE.MeshStandardMaterial({ color: 0x4b1e16, roughness: 0.6 });
    const steak = new THREE.Mesh(steakGeom, steakMat);
    steak.scale.set(1.0, 1.0, 0.8);
    steak.position.set(-0.2, -0.44, -0.1);
    steak.rotation.y = -0.3;
    ribeyeGroup.add(steak);

    // Grill marks
    for (let i = 0; i < 5; i++) {
        const markGeom = new THREE.BoxGeometry(0.03, 0.02, 0.9);
        const markMat = new THREE.MeshStandardMaterial({ color: 0x110705, roughness: 0.9 });
        const mark = new THREE.Mesh(markGeom, markMat);
        mark.position.set(-0.7 + i * 0.3, 0.13, 0);
        mark.rotation.y = Math.PI / 4;
        steak.add(mark);
    }

    // Melting butter on top
    const butterGeom = new THREE.BoxGeometry(0.25, 0.08, 0.25);
    const butterMat = new THREE.MeshStandardMaterial({ color: 0xfed330, roughness: 0.4 });
    const butter = new THREE.Mesh(butterGeom, butterMat);
    butter.position.set(-0.1, -0.28, -0.1);
    butter.rotation.y = 0.5;
    ribeyeGroup.add(butter);

    // Roasted potato spheres
    const potatoMat = new THREE.MeshStandardMaterial({ color: 0xdca768, roughness: 0.8 });
    for (let i = 0; i < 4; i++) {
        const potatoGeom = new THREE.SphereGeometry(0.18, 12, 12);
        const potato = new THREE.Mesh(potatoGeom, potatoMat);
        potato.position.set(
            0.7 + (Math.random() - 0.5) * 0.3,
            -0.42,
            0.2 + (Math.random() - 0.5) * 0.4
        );
        ribeyeGroup.add(potato);
    }

    dishesGroup["ribeye"] = ribeyeGroup;

    // ----------------------------------------------------
    // Model 9: AVOCADO TOAST
    // ----------------------------------------------------
    const toastGroup = new THREE.Group();

    // Square plate
    const toastPlateGeom = new THREE.BoxGeometry(2.4, 0.06, 2.4);
    const toastPlateMat = new THREE.MeshStandardMaterial({ color: 0x222222, roughness: 0.5 });
    const toastPlate = new THREE.Mesh(toastPlateGeom, toastPlateMat);
    toastPlate.position.y = -0.6;
    toastGroup.add(toastPlate);

    // Sourdough bread slice
    const breadGeom = new THREE.BoxGeometry(1.5, 0.18, 1.2);
    const crustMat = new THREE.MeshStandardMaterial({ color: 0x4a2e1d, roughness: 0.95 });
    const bread = new THREE.Mesh(breadGeom, crustMat);
    bread.position.y = -0.48;
    toastGroup.add(bread);

    const crumbGeom = new THREE.BoxGeometry(1.4, 0.1, 1.1);
    const crumbMat = new THREE.MeshStandardMaterial({ color: 0xefd8c1, roughness: 0.9 });
    const crumb = new THREE.Mesh(crumbGeom, crumbMat);
    crumb.position.y = 0.05;
    bread.add(crumb);

    // Smashed avocado (green blocks)
    const avoSpreadMat = new THREE.MeshStandardMaterial({ color: 0x44bd32, roughness: 0.8 });
    for (let i = 0; i < 12; i++) {
        const spreadGeom = new THREE.BoxGeometry(0.35, 0.06, 0.35);
        const spread = new THREE.Mesh(spreadGeom, avoSpreadMat);
        spread.position.set(
            (Math.random() - 0.5) * 1.1,
            0.12,
            (Math.random() - 0.5) * 0.8
        );
        spread.rotation.set(
            (Math.random() - 0.5) * 0.2,
            Math.random() * Math.PI,
            (Math.random() - 0.5) * 0.2
        );
        bread.add(spread);
    }

    // Poached Egg on top
    const eggGroup2 = new THREE.Group();
    const eggWhiteGeom2 = new THREE.SphereGeometry(0.24, 16, 16);
    const eggWhiteMat2 = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.3 });
    const eggWhite2 = new THREE.Mesh(eggWhiteGeom2, eggWhiteMat2);
    eggWhite2.scale.set(1.3, 0.6, 1.3);
    eggGroup2.add(eggWhite2);

    const yolkTearGeom = new THREE.SphereGeometry(0.12, 16, 16);
    const yolkMat2 = new THREE.MeshStandardMaterial({ color: 0xffc048, roughness: 0.1 });
    const yolk2 = new THREE.Mesh(yolkTearGeom, yolkMat2);
    yolk2.position.set(0, 0.1, 0);
    yolk2.scale.set(1, 0.6, 1);
    eggGroup2.add(yolk2);

    eggGroup2.position.set(0, -0.28, 0);
    toastGroup.add(eggGroup2);

    dishesGroup["toast"] = toastGroup;

    // ----------------------------------------------------
    // Model 10: SAKURA CHEESECAKE
    // ----------------------------------------------------
    const cakeGroup = new THREE.Group();

    // Round plate
    const cakePlate = new THREE.Mesh(tartPlateGeom, tartPlateMat);
    cakePlate.position.y = -0.6;
    cakeGroup.add(cakePlate);

    // Base biscuit crust
    const crustGeom = new THREE.CylinderGeometry(0.85, 0.85, 0.08, 32);
    const biscuitMat = new THREE.MeshStandardMaterial({ color: 0xa87747, roughness: 0.95 });
    const crust = new THREE.Mesh(crustGeom, biscuitMat);
    crust.position.y = -0.52;
    cakeGroup.add(crust);

    // Pink Cheesecake layer
    const cakeGeom = new THREE.CylinderGeometry(0.82, 0.82, 0.35, 32);
    const cakeMat = new THREE.MeshStandardMaterial({ color: 0xffd2e8, roughness: 0.4 });
    const cake = new THREE.Mesh(cakeGeom, cakeMat);
    cake.position.y = -0.32;
    cakeGroup.add(cake);

    // Strawberry top gel layer
    const jellyGeom = new THREE.CylinderGeometry(0.825, 0.825, 0.04, 32);
    const jellyMat = new THREE.MeshStandardMaterial({ color: 0xff5252, roughness: 0.1, transparent: true, opacity: 0.85 });
    const jelly = new THREE.Mesh(jellyGeom, jellyMat);
    jelly.position.y = -0.13;
    cakeGroup.add(jelly);

    // Sakura blossoms (pink spheres/cones)
    for (let i = 0; i < 5; i++) {
        const blossom = new THREE.Group();
        const petalMat = new THREE.MeshStandardMaterial({ color: 0xffb7b2, roughness: 0.6 });
        for (let j = 0; j < 4; j++) {
            const petalGeom = new THREE.BoxGeometry(0.08, 0.01, 0.12);
            const petal = new THREE.Mesh(petalGeom, petalMat);
            petal.position.set(0, 0, 0.06);
            petal.rotation.y = (j / 4) * Math.PI * 2;
            blossom.add(petal);
        }
        const angle = (i / 5) * Math.PI * 2;
        const radius = 0.45;
        blossom.position.set(Math.cos(angle) * radius, -0.1, Math.sin(angle) * radius);
        blossom.rotation.set(0.1, Math.random() * 2, 0.1);
        cakeGroup.add(blossom);
    }

    dishesGroup["cheesecake"] = cakeGroup;

    // ----------------------------------------------------
    // Model 11: MISO GLAZED SALMON
    // ----------------------------------------------------
    const salmonGroup = new THREE.Group();

    // Dark grey ceramic plate
    const salmonPlate = new THREE.Mesh(gyozaPlateGeom, gyozaPlateMat);
    salmonPlate.position.y = -0.6;
    salmonGroup.add(salmonPlate);

    // Bed of rice
    const riceBedGeom = new THREE.CylinderGeometry(0.9, 1.0, 0.25, 24);
    const riceBedMat = new THREE.MeshStandardMaterial({ color: 0xfafafa, roughness: 0.9 });
    const riceBed = new THREE.Mesh(riceBedGeom, riceBedMat);
    riceBed.position.y = -0.45;
    salmonGroup.add(riceBed);

    // Salmon Fillet
    const filletGeom = new THREE.BoxGeometry(1.2, 0.24, 0.55);
    const salmonMat = new THREE.MeshStandardMaterial({ color: 0xff793f, roughness: 0.3 });
    const fillet = new THREE.Mesh(filletGeom, salmonMat);
    fillet.position.set(0, -0.28, 0);
    fillet.rotation.y = 0.4;
    salmonGroup.add(fillet);

    // Glazed crust (top layer)
    const glazeGeom = new THREE.BoxGeometry(1.21, 0.03, 0.56);
    const glazeMat = new THREE.MeshStandardMaterial({ color: 0x825010, roughness: 0.1 });
    const glaze = new THREE.Mesh(glazeGeom, glazeMat);
    glaze.position.y = 0.13;
    fillet.add(glaze);

    // Scallion shreds
    for (let i = 0; i < 8; i++) {
        const onionGeom = new THREE.BoxGeometry(0.02, 0.01, 0.25);
        const onionMat = new THREE.MeshStandardMaterial({ color: 0x2ecc71, roughness: 0.6 });
        const onion = new THREE.Mesh(onionGeom, onionMat);
        onion.position.set((Math.random() - 0.5) * 0.7, 0.16, (Math.random() - 0.5) * 0.3);
        onion.rotation.y = Math.random() * 2;
        fillet.add(onion);
    }

    dishesGroup["salmon"] = salmonGroup;

    // ----------------------------------------------------
    // Model 12: BOBA GALAXY
    // ----------------------------------------------------
    const bobaGroup = new THREE.Group();

    // Serving saucer
    const saucerGeom = new THREE.CylinderGeometry(0.9, 0.8, 0.06, 24);
    const saucerMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.1 });
    const saucer = new THREE.Mesh(saucerGeom, saucerMat);
    saucer.position.y = -0.6;
    bobaGroup.add(saucer);

    // Transparent Glass cup
    const cupOuterGeom = new THREE.CylinderGeometry(0.6, 0.45, 1.5, 24, 1, true);
    const glassMat = new THREE.MeshStandardMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.3,
        roughness: 0.1,
        metalness: 0.1,
        side: THREE.DoubleSide
    });
    const cupOuter = new THREE.Mesh(cupOuterGeom, glassMat);
    cupOuter.position.y = 0.15;
    bobaGroup.add(cupOuter);

    const cupFloorGeom = new THREE.CylinderGeometry(0.44, 0.44, 0.05, 24);
    const cupFloor = new THREE.Mesh(cupFloorGeom, glassMat);
    cupFloor.position.y = -0.58;
    bobaGroup.add(cupFloor);

    // Taro purple milk tea
    const teaGeom = new THREE.CylinderGeometry(0.57, 0.44, 1.25, 24);
    const teaMat = new THREE.MeshStandardMaterial({ color: 0xdcd8f3, roughness: 0.3 }); // soft purple
    const tea = new THREE.Mesh(teaGeom, teaMat);
    tea.position.y = 0.05;
    bobaGroup.add(tea);

    // Brown sugar swirl
    const swirlGeom = new THREE.CylinderGeometry(0.575, 0.445, 0.3, 24);
    const sugarMat = new THREE.MeshStandardMaterial({ color: 0x4d2912, roughness: 0.2 });
    const swirl = new THREE.Mesh(swirlGeom, sugarMat);
    swirl.position.y = -0.3;
    bobaGroup.add(swirl);

    // Boba tapioca pearls (dark spheres)
    const bobaMat = new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0.4 });
    for (let i = 0; i < 22; i++) {
        const pearlGeom = new THREE.SphereGeometry(0.08, 10, 10);
        const pearl = new THREE.Mesh(pearlGeom, bobaMat);
        pearl.position.set(
            (Math.random() - 0.5) * 0.6,
            -0.5 + Math.random() * 0.25,
            (Math.random() - 0.5) * 0.6
        );
        bobaGroup.add(pearl);
    }

    // Straw (pink diagonal cylinder)
    const strawGeom = new THREE.CylinderGeometry(0.05, 0.05, 1.8, 12);
    const strawMat = new THREE.MeshStandardMaterial({ color: 0xff79c6, roughness: 0.5 });
    const straw = new THREE.Mesh(strawGeom, strawMat);
    straw.position.set(0.2, 0.5, 0.1);
    straw.rotation.z = -0.18;
    straw.rotation.x = 0.1;
    bobaGroup.add(straw);

    dishesGroup["boba"] = bobaGroup;
}

// 4. Ambient Sparkles Particle Ring
function createAmbientParticles() {
    const particleCount = 60;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const velocities = [];

    for (let i = 0; i < particleCount; i++) {
        // Distribute in a ring around the center
        const angle = Math.random() * Math.PI * 2;
        const radius = 1.3 + Math.random() * 1.0;
        
        positions[i * 3] = Math.cos(angle) * radius;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 2;
        positions[i * 3 + 2] = Math.sin(angle) * radius;

        velocities.push({
            y: 0.003 + Math.random() * 0.006,
            angleSpeed: 0.002 + Math.random() * 0.004,
            radius: radius,
            angle: angle
        });
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    // Glowy particle material
    const material = new THREE.PointsMaterial({
        color: 0xf7b731,
        size: 0.05,
        transparent: true,
        opacity: 0.7,
        blending: THREE.AdditiveBlending
    });

    particles = new THREE.Points(geometry, material);
    particles.userData = { velocities };
    scene.add(particles);
}

// 5. Dish Switch Transition Logic
function switchDish(index) {
    currentItemIndex = index;
    const dishData = menuData[index];

    // Update Ambient Glow Color in backgrounds
    const glowOrb = document.getElementById("glowOrb");
    glowOrb.style.background = `radial-gradient(circle, ${dishData.glowColor} 0%, rgba(0,0,0,0) 70%)`;

    // 1. UI Information Card transition
    gsap.to("#detailCard", { opacity: 0, y: 15, duration: 0.25, onComplete: () => {
        document.getElementById("dishCategory").innerText = dishData.categoryLabel;
        document.getElementById("dishRating").innerText = dishData.rating;
        document.getElementById("dishTitle").innerText = dishData.title;
        document.getElementById("dishDesc").innerText = dishData.desc;
        document.getElementById("statCalories").innerText = dishData.calories;
        document.getElementById("statWeight").innerText = dishData.weight;
        document.getElementById("statPrep").innerText = dishData.prep;
        document.getElementById("dishPrice").innerText = dishData.price.toFixed(2);
        
        gsap.to("#detailCard", { opacity: 1, y: 0, duration: 0.35, ease: "power2.out" });
    }});

    // 2. 3D Model transition
    const nextMesh = dishesGroup[dishData.id];
    
    if (activeMesh) {
        const prevMesh = activeMesh;
        gsap.to(prevMesh.scale, { x: 0, y: 0, z: 0, duration: 0.3, ease: "power2.in", onComplete: () => {
            scene.remove(prevMesh);
        }});
    }

    nextMesh.scale.set(0, 0, 0);
    scene.add(nextMesh);
    activeMesh = nextMesh;

    // Reset interaction angles
    targetRotationX = 0.2;
    targetRotationY = 0.5;

    gsap.to(nextMesh.scale, { x: 1, y: 1, z: 1, duration: 0.5, delay: 0.2, ease: "back.out(1.5)" });
}

// 6. Animation Loop
function animate() {
    requestAnimationFrame(animate);

    // Smooth lerp mouse/drag rotations
    currentRotationX += (targetRotationX - currentRotationX) * 0.08;
    currentRotationY += (targetRotationY - currentRotationY) * 0.08;

    if (activeMesh) {
        // Apply rotation from mouse drag + an automatic base rotation
        activeMesh.rotation.x = currentRotationX;
        activeMesh.rotation.y = currentRotationY + (isDragging ? 0 : Date.now() * 0.0006);
    }

    // Animate Particles
    if (particles) {
        const positions = particles.geometry.attributes.position.array;
        const velocities = particles.userData.velocities;

        for (let i = 0; i < velocities.length; i++) {
            const v = velocities[i];
            
            // Move particles upward slightly
            positions[i * 3 + 1] += v.y;
            if (positions[i * 3 + 1] > 1.2) {
                positions[i * 3 + 1] = -1.2;
            }

            // Slowly orbit around center
            v.angle += v.angleSpeed;
            positions[i * 3] = Math.cos(v.angle) * v.radius;
            positions[i * 3 + 2] = Math.sin(v.angle) * v.radius;
        }
        particles.geometry.attributes.position.needsUpdate = true;
        // Make the particles rotate as a whole too
        particles.rotation.y += 0.002;
    }

    camera.lookAt(0, -0.25, 0);
    renderer.render(scene, camera);
}

// 7. Cart System Functions
function addToCart(item) {
    if (cart[item.id]) {
        cart[item.id].qty += 1;
    } else {
        cart[item.id] = {
            title: item.title,
            price: item.price,
            qty: 1
        };
    }
    updateCartUI();
    
    // Quick micro-animation feedback on cart button
    const cartBtn = document.getElementById("openCartBtn");
    gsap.to(cartBtn, { scale: 1.1, duration: 0.1, yoyo: true, repeat: 1 });
}

function updateCartUI() {
    const cartItemsContainer = document.getElementById("cartItems");
    const cartCount = document.getElementById("cartCount");
    const cartSubtotal = document.getElementById("cartSubtotal");
    
    cartItemsContainer.innerHTML = "";
    
    let totalItems = 0;
    let subtotalPrice = 0;
    
    const items = Object.entries(cart);
    
    if (items.length === 0) {
        cartItemsContainer.innerHTML = `<p style="text-align: center; color: var(--text-secondary); margin-top: 40px;">Your cart is empty</p>`;
    } else {
        items.forEach(([id, item]) => {
            totalItems += item.qty;
            subtotalPrice += item.price * item.qty;
            
            const cartItemDiv = document.createElement("div");
            cartItemDiv.className = "cart-item";
            cartItemDiv.innerHTML = `
                <div class="cart-item-detail">
                    <h4>${item.title}</h4>
                    <span>$${(item.price * item.qty).toFixed(2)}</span>
                </div>
                <div class="cart-item-controls">
                    <button class="cart-btn-qty" onclick="changeQty('${id}', -1)">-</button>
                    <span>${item.qty}</span>
                    <button class="cart-btn-qty" onclick="changeQty('${id}', 1)">+</button>
                </div>
            `;
            cartItemsContainer.appendChild(cartItemDiv);
        });
    }
    
    cartCount.innerText = totalItems;
    cartSubtotal.innerText = subtotalPrice.toFixed(2);
}

// Make changeQty globally accessible for inline onclick buttons
window.changeQty = function(id, delta) {
    if (!cart[id]) return;
    
    cart[id].qty += delta;
    if (cart[id].qty <= 0) {
        delete cart[id];
    }
    updateCartUI();
};

// Start the app when window loads
window.onload = init;
