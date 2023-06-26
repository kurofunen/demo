 gsap.registerPlugin(ScrollTrigger); 

document.querySelectorAll("li").forEach((el, index) => {
	    ScrollTrigger.create({
	        trigger: el,
	        id: index+1,
	        start: 'top 50%',
	        toggleClass: {targets: el, className: "active"},
          markers: true,
	    });
  });
const custom_anime = gsap.timeline({
  
});
custom_anime.to('.l_jsli01', //アニメーションする要素
  { keyframes: [
    { duration: 0.5, y: 100, x:100,opacity:0,rotation: 30 }, //このアニメーションが終わったら下のアニメーションが起こる
    { duration: 1, y: 300, x:200,opacity:1 } ,
    { duration: 1, y: 600, x:0,rotation: -90 } ,
    { duration: 1, y: 700, x:200,rotation: 0 } ,
    { duration: 1, y: 900, x:100,rotation: 0 } ,
    { duration: 1, y: 1000, x:200,rotation: 0 ,opacity:0} 
]});
custom_anime.to('.l_jsli02', //アニメーションする要素
  { keyframes: [
    { duration: 0.5, y: 50, x:0 ,opacity:0}, //このアニメーションが終わったら下のアニメーションが起こる
    { duration: 1, y: 200, x:100,rotation: -90,opacity:1 } ,
    { duration: 1, y: 500, x:300 } ,
    { duration: 1, y: 700, x:100,rotation: 30 },
    { duration: 1, y: 850, x:200 },
    { duration: 1, y: 1000, x:100,rotation: 0,opacity:0},
  ]}, "<");
custom_anime.to('.l_jsli03', //アニメーションする要素
  { keyframes: [
    { duration: 0.5, y: 50, x:0 ,opacity:0}, //このアニメーションが終わったら下のアニメーションが起こる
    { duration: 1, y: 200, x:300,rotation: -90,opacity:1 } ,
    { duration: 1, y: 500, x:100 } ,
    { duration: 1, y: 700, x:200,rotation: 30 },
    { duration: 1, y: 850, x:100 },
    { duration: 1, y: 1000, x:300,rotation: 0 ,opacity:0},
  ]}, "<");
  
  
  
  const custom_anime_right = gsap.timeline({
  scrollTrigger: {
    trigger: ".jsright", //アニメーションが始まるトリガーとなる要素
    start: 0,
    scrub: true,

    opacity:0,
    markers: true
  },
  stagger: {
    from: "random", //左からアニメーション start、center、edges、random、endが指定できる
    //amount: 0.1 //0.1秒ズラしてアニメーション
  }
});
  custom_anime_right.to('.r_jsli01', //アニメーションする要素
  { keyframes: [
    { duration: 0.5, y: 100, x:100,opacity:0,rotation: 30 }, //このアニメーションが終わったら下のアニメーションが起こる
    { duration: 1, y: 300, x:300,opacity:1 } ,
    { duration: 1, y: 600, x:0,rotation: -90 } ,
    { duration: 1, y: 700, x:200,rotation: 0 } ,
    { duration: 1, y: 900, x:100,rotation: 0 } ,
    { duration: 1, y: 930, x:200,rotation: 0, opacity:0}
]});
custom_anime_right.to('.r_jsli02', //アニメーションする要素
  { keyframes: [
    { duration: 0.5, y: 50, x:0 ,opacity:0}, //このアニメーションが終わったら下のアニメーションが起こる
    { duration: 1, y: 200, x:100,rotation: -90,opacity:1 } ,
    { duration: 1, y: 500, x:300 } ,
    { duration: 1, y: 700, x:100,rotation: 30 },
    { duration: 1, y: 850, x:200 },
    { duration: 1, y: 930, x:100,rotation: 0,opacity:0}
  ]}, "<");
custom_anime_right.to('.r_jsli03', //アニメーションする要素
  { keyframes: [
    { duration: 0.5, y: 50, x:0 ,opacity:0}, //このアニメーションが終わったら下のアニメーションが起こる
    { duration: 1, y: 200, x:300,rotation: -90,opacity:1 } ,
    { duration: 1, y: 500, x:100 } ,
    { duration: 1, y: 700, x:200,rotation: 30 },
    { duration: 1, y: 850, x:100 },
    { duration: 1, y: 930, x:300,rotation: 0 ,opacity:0}
  ]}, "<");
  