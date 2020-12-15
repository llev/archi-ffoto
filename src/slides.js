
const slides = document.querySelectorAll('.slides')

slides.forEach(slide => {
  let current = 0;
  let z = 10000000;
  
  const images = slide.querySelectorAll('img');
  
  images.forEach(image => {
    z = z - 1
    image.style.zIndex = z
  })

  gsap.set(images, { opacity: 0 })


  imagesLoaded(images, function () {
    const timeline = gsap.timeline()

    timeline
    .set(images, { 
      x: () => {
        return 500 * Math.random() - 250
      },
      y: "500%", 
      rotation: () => {
        return 80 * Math.random() -40
      },
      opacity: 1 
    })
    .to(images, { x: 0, y: 0, stagger: -0.25 })
    .to(images, { rotation: () => {
      return 25 * Math.random() - 12;
    }
  })
})

  
  
  slide.addEventListener('click', function () {
    z = z - 1;

    let direction = "150%";
    let midAngle = 15;

    if (Math.random() > 0.5) {
        direction = "-150%"
        midAngle = -15
    }

    const currentImage = images[current]

    const flipTimeline = gsap.timeline()

    flipTimeline
      .set(currentImage, { x: 0 })
      .to( currentImage, { 
        x: direction,
        rotation: () => {
          return midAngle * Math.random() - 7;
        }
      })
      .set( currentImage, { zIndex: z })
      .to( currentImage, { 
        x: 0,
        rotation: () => {
          return 16 * Math.random() - 8
        } 
      })
  
    current = current + 1
    current = current % images.length;
    
  })
})
