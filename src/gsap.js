gsap.from(".bg-content h1", {
  opacity: 0,
  x: -100, 
  duration: 2,
  ease: "expo.out",

  scrollTrigger: {
      trigger: ".bg-content h1",  
      start: "top 80%",            
      end: "top 50%",            
      scrub: .5,                   
      markers: false, 
      opacity: 1, 
                   
  }
});

gsap.from(".bg-content button", {
  opacity: 0,
  x: -100, 
  duration: 1.5,
  ease: "power2.out",

  scrollTrigger: {
      trigger: ".bg-content button",  
      start: "top 80%",            
      end: "top 50%",            
      scrub: .5,                   
      markers: false, 
                   
  }
});


gsap.fromTo(".schedule-hero", 
  { scale: 0.5, opacity: 0 },
  { 
    scale: 1, 
    opacity: 1, 
    duration: 3, 
    ease: "elastic.out(1, 0.5)",
    scrollTrigger: {
      trigger: ".schedule-hero",
      start: "top 90%", 
      toggleActions: "play none none reverse",
      opacity: 0, 
      duration:10,
     
    }
  }
);

gsap.fromTo(".funny-stats", 
  { scale: 0.5, opacity: 0 },
  { 
    scale: 1, 
    opacity: 1, 
    duration: 3, 
    ease: "elastic.out(1, 0.5)",
    scrollTrigger: {
      trigger: ".funny-stats",
      start: "top 90%", 
      toggleActions: "play none none reverse",
      opacity: 0, 
      duration:10,
     
    }
  }
);

gsap.from(".heading h1", {
  opacity: 0,
  x: -600, 
  duration: 2,
  ease: "expo.out",

  scrollTrigger: {
      trigger: ".heading h1",  
      start: "top 80%",            
      end: "top 50%",            
      scrub: .5,                   
      markers: false, 
      opacity: 1, 
                   
  }
});
