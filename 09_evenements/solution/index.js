/** Point d'entrée */
function main() {
    const carousel = createCarousel([
        {
            url: "https://p.kagi.com/proxy/African_Wild_Cat_%28Felis_lybica%29_%286549450873%29_%28cropped%29.jpg?c=9cn5Kxse4yD05EJkf6QML9dK4clUbdQ9Oq4d5gDoyHBOcmf_KiwkcRO5av5lTNxKNPPpiV1dt4aLdne_zA-LX5Tept8YYR79CfNznxmAlFlTECtEozDtFx8c54rUIUBKmvHrsGrMfMgsgr7VamgXp-su_UycVnmQOD7gB3zCBLWWcGyMgnP-B51BdAH5PSUC",
            alt: "African wild cat",
        },
        {
            url: "https://p.kagi.com/proxy/Cat_August_2010-4.jpg?c=9cn5Kxse4yD05EJkf6QML9dK4clUbdQ9Oq4d5gDoyHD2gI7u-C-WhJZ-uv4V1A8Hx1NaEQ26hwcpEr6CqLL3VOrQ4it1rkGXzG_viiMCwAi5OWWyJi57ELCdhURcmFeB",
            alt: "Cat lying down",
        },
        {
            url: "https://p.kagi.com/proxy/eede8fe0-5dd0-11f1-ad28-eda8e494639c.jpg?c=uYcaKy-gDyyo9OSJL8pIsnk-u-zDFhxzVdGtCtG_LlEa8uTLEjao304slrVy82QdarLiGPKIYCfOZx22G_iULC6W-142TOFYuaRsd4kH_dA2gYaRKcvlIoRqMg8MSpSe",
            alt: "Cat portrait",
        },
    ]);
    document.body.append(carousel);
}

main();

/**
 * Creates a carousel.
 * @param {Array<{ url: string, alt: string }>} images
 * @returns {HTMLElement}
 */
function createCarousel(images) {
    const carousel = document.createElement("div");

    let currentImgIndex = 0;

    const img = document.createElement("img");

    img.src = images[currentImgIndex].url;
    img.alt = images[currentImgIndex].alt;

    const nextButton = createButton("next", () => {
        currentImgIndex = (currentImgIndex + 1) % images.length;
        img.src = images[currentImgIndex].url;
        img.alt = images[currentImgIndex].alt;
    });
    const prevButton = createButton("prev", () => {
        currentImgIndex = (currentImgIndex - 1 + images.length) % images.length;
        img.src = images[currentImgIndex].url;
        img.alt = images[currentImgIndex].alt;
    });

    carousel.append(img, prevButton, nextButton);

    return carousel;
}

test("has an image and a prev and next button", () => {
    const carousel = createCarousel([
        { url: "image1.jpg", alt: "Image 1" },
        { url: "image2.jpg", alt: "Image 2" },
        { url: "image3.jpg", alt: "Image 3" },
    ]);

    const img = carousel.querySelector("img");
    expect(img.src).toContain("image1.jpg");
    expect(img.alt).toBe("Image 1");

    const buttons = carousel.querySelectorAll("button");
    expect(buttons[0].textContent).toBe("prev");
    expect(buttons[1].textContent).toBe("next");
});

test("show next and prev image when buttons are clicked", () => {
    const carousel = createCarousel([
        { url: "image1.jpg", alt: "Image 1" },
        { url: "image2.jpg", alt: "Image 2" },
        { url: "image3.jpg", alt: "Image 3" },
    ]);
    const img = carousel.querySelector("img");

    const buttons = carousel.querySelectorAll("button");
    const prevButton = buttons[0];
    const nextButton = buttons[1];

    nextButton.dispatchEvent(new MouseEvent("click"));
    expect(img.src).toContain("image2.jpg");
    expect(img.alt).toBe("Image 2");
    nextButton.dispatchEvent(new MouseEvent("click"));
    expect(img.src).toContain("image3.jpg");
    expect(img.alt).toBe("Image 3");

    prevButton.dispatchEvent(new MouseEvent("click"));
    expect(img.src).toContain("image2.jpg");
    expect(img.alt).toBe("Image 2");
    prevButton.dispatchEvent(new MouseEvent("click"));
    expect(img.src).toContain("image1.jpg");
    expect(img.alt).toBe("Image 1");
});

test("loop around when at the start or end", () => {
    const carousel = createCarousel([
        { url: "image1.jpg", alt: "Image 1" },
        { url: "image2.jpg", alt: "Image 2" },
        { url: "image3.jpg", alt: "Image 3" },
    ]);
    const img = carousel.querySelector("img");

    const buttons = carousel.querySelectorAll("button");
    const prevButton = buttons[0];
    const nextButton = buttons[1];

    prevButton.dispatchEvent(new MouseEvent("click"));
    expect(img.src).toContain("image3.jpg");
    expect(img.alt).toBe("Image 3");

    nextButton.dispatchEvent(new MouseEvent("click"));
    expect(img.src).toContain("image1.jpg");
    expect(img.alt).toBe("Image 1");
});

/**
 * Creates a button with the given label. The given onClick function is
 * called when the button is clicked.
 * @param {string} label
 * @param {() => void} onClick
 * @returns {HTMLButtonElement}
 */
function createButton(label, onClick) {
    const button = document.createElement("button");
    button.textContent = label;
    button.addEventListener("click", onClick);
    return button;
}

test("return a button that calls the given function when clicked", () => {
    let result = "";
    const button = createButton("foo", () => result = "bar");
    expect(button.outerHTML).toBe("<button>foo</button>");
    button.dispatchEvent(new MouseEvent("click"));
    expect(result).toBe("bar");
});
