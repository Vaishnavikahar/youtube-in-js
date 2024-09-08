//object
const videoData = [
    {
      src: "motu patlu2.webp",
      title: "Non Stop Motu - Patlu | मोटू पतलू | #motupatlukijodi #motupatlucartoon ",
      views: "94k views • 5 month ago",
      // date: "5 months ago",
      profile: "profile-3",
      channel:"Zee Music Company",
      menu:"⋮"
    },
    {
      src: "tom and jerry.webp",
      title: "Tom & Jerry | Tom & Jerry in Full Screen | Classic Cartoon Compilation | WB Kids",
      views: "661M views • 2 months ago",
      // date: "2 months ago",
      profile: "profile-1",
      channel:"WB kids ",
      menu:"⋮"
    },
    {
      src: "motu patlu.webp",
      title: "Non Stop Motu - Patlu | मोटू पतलू | #motupatlukijodi #motupatlucartoon",
      views: "94k views • 5 months ago",
      // date: "5 months ago",
      profile: "profile-2",
      channel:"WB kids",
      menu:"⋮"
    },
    {
      src: "motu patlu2.webp",
      title: "Non Stop Motu - Patlu | मोटू पतलू | #motupatlukijodi #motupatlucartoon",
      views: "94k views • 5 months ago",
      // date: "5 months ago",
      profile: "profile-3",
      channel:"WB kids",
      menu:"⋮"
    },
    {
      src: "munky and trunk.webp",
      title: "Full Season 6 Compilation | Jungle Beat: Munki and Trunk | VIDEOS and CARTOONS...",
      views: "31M Views • 2 year ago",
      // date: "2 year ago",
      profile: "profile-4",
      channel:"Jungle Beat",
      menu:"⋮"
    },
    {
      src: "oggy on the cokroach.webp",
      title: "Oggy and the Cockroaches - The Legend of Excalibur (S05E76) BEST CARTOON",
      views: "1.2M views • 2 months ago",
      // date: "2 months ago",
      profile: "profile-5",
      channel:"OGGY",
      menu:"⋮"
    },
    {
      src: "Tom and jerry2.webp",
      title: "Tom & Jerry | Tom & Jerry in Full Screen | Classic Cartoon Compilation | WB Kids",
      views: "661M views • 2 months ago",
      // date: "2 months ago",
      profile: "profile-1",
      channel:"WB kids",
      menu:"⋮"
    },
    {
      src: "tom and jerry.webp",
      title: "Tom & Jerry | Tom & Jerry in Full Screen | Classic Cartoon Compilation | WB Kids",
      views: "661M views • 2 months ago",
      // date: "2 months ago",
      profile: "profile-1",
      channel:"WB kids",
      menu:"⋮"
    },
    {
      src: "motu patlu.webp",
      title: "Non Stop Motu - Patlu | मोटू पतलू | #motupatlukijodi #motupatlucartoon",
      views: "94k views • 5 months ago",
      profile: "profile-2",
      channel:"WB kids",
      menu:"⋮"
    },

    {
      src: "motu patlu2.webp",
      title: "Non Stop Motu - Patlu | मोटू पतलू | #motupatlukijodi #motupatlucartoon ",
      views: "94k views • 5 month ago",
      // date: "5 months ago",
      profile: "profile-3",
      channel:"Zee Music Company",
      menu:"⋮"
    },
    {
      src: "tom and jerry.webp",
      title: "Tom & Jerry | Tom & Jerry in Full Screen | Classic Cartoon Compilation | WB Kids",
      views: "661M views • 2 months ago",
      // date: "2 months ago",
      profile: "profile-1",
      channel:"WB kids ",
      menu:"⋮"
    },
    {
      src: "motu patlu.webp",
      title: "Non Stop Motu - Patlu | मोटू पतलू | #motupatlukijodi #motupatlucartoon",
      views: "94k views • 5 months ago",
      // date: "5 months ago",
      profile: "profile-2",
      channel:"WB kids",
      menu:"⋮"
    },

    {
      src: "motu patlu2.webp",
      title: "Non Stop Motu - Patlu | मोटू पतलू | #motupatlukijodi #motupatlucartoon ",
      views: "94k views • 5 month ago",
      // date: "5 months ago",
      profile: "profile-3",
      channel:"Zee Music Company",
      menu:"⋮"
    },
    {
      src: "tom and jerry.webp",
      title: "Tom & Jerry | Tom & Jerry in Full Screen | Classic Cartoon Compilation | WB Kids",
      views: "661M views • 2 months ago",
      // date: "2 months ago",
      profile: "profile-1",
      channel:"WB kids ",
      menu:"⋮"
    },
    {
      src: "motu patlu.webp",
      title: "Non Stop Motu - Patlu | मोटू पतलू | #motupatlukijodi #motupatlucartoon",
      views: "94k views • 5 months ago",
      // date: "5 months ago",
      profile: "profile-2",
      channel:"WB kids",
      menu:"⋮"
    },
    {
      src: "motu patlu2.webp",
      title: "Non Stop Motu - Patlu | मोटू पतलू | #motupatlukijodi #motupatlucartoon",
      views: "94k views • 5 months ago",
      // date: "5 months ago",
      profile: "profile-3",
      channel:"WB kids",
      menu:"⋮"
    },
    {
      src: "munky and trunk.webp",
      title: "Full Season 6 Compilation | Jungle Beat: Munki and Trunk | VIDEOS and CARTOONS...",
      views: "31M Views • 2 year ago",
      // date: "2 year ago",
      profile: "profile-4",
      channel:"Jungle Beat",
      menu:"⋮"
    },
    {
      src: "oggy on the cokroach.webp",
      title: "Oggy and the Cockroaches - The Legend of Excalibur (S05E76) BEST CARTOON",
      views: "1.2M views • 2 months ago",
      // date: "2 months ago",
      profile: "profile-5",
      channel:"OGGY",
      menu:"⋮"
    },
  ];
  
  // Get the container element
  const container = document.querySelector(".right-home");
  
  
  videoData.forEach((video, index) => {
    // Create the slider container
    if (index % 3 === 0) {
      const slider = document.createElement("div");
      slider.classList.add("right-home-slider");
      container.appendChild(slider);
    }
  
    // Get the current slider container
    const currentSlider = container.children[container.children.length - 1];
  
    const boxSlide = document.createElement("div");
    boxSlide.classList.add("box-slide");
    currentSlider.appendChild(boxSlide);
  
    // upper 
    const boxSlideUpper = document.createElement("div");
    boxSlideUpper.classList.add("box-slide-upper");
    boxSlide.appendChild(boxSlideUpper);
  
   
    const img = document.createElement("img");
    img.src = video.src;
    img.alt = "";
    // img.width = "100%";
    // img.height = "100%";
    boxSlideUpper.appendChild(img);
  
    // lower
    const boxSlideLower = document.createElement("div");
    boxSlideLower.classList.add("box-slide-lower");
    boxSlide.appendChild(boxSlideLower);
  
    // profile image 
    const profileImg = document.createElement("div");
    profileImg.classList.add("profile-img");
    boxSlideLower.appendChild(profileImg);
  
    // profile element
    const profile = document.createElement("div");
    profile.classList.add(video.profile);
    profile.classList.add("profile");
    profileImg.appendChild(profile);
  
    // text
    const text = document.createElement("div");
    text.classList.add("text");
    text.classList.add("text-1");
    text.innerText=video.title;
    boxSlideLower.appendChild(text);

    const p2= document.createElement('p');
    p2.innerHTML=video.channel;
    text.appendChild(p2);

    const p = document.createElement('p');
    p.innerHTML = video.views;
    text.appendChild(p);

    const i = document.createElement('i');
    i.innerHTML = video.menu;
    text.appendChild(i);

});

 