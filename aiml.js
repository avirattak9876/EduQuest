function locomotive() {
    gsap.registerPlugin(ScrollTrigger);
  
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true ,
    });
    locoScroll.on("scroll", ScrollTrigger.update);
  
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      },
  
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
  
      pinType: document.querySelector("#main").style.transform
        ? "transform"
        : "fixed",
    });
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
  }
  locomotive();
  
  
  const canvas = document.querySelector("canvas");
  const context = canvas.getContext("2d");
  
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  
  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });
  
  function files(index) {
    var data = `
      korean/male0001.png
    korean/male0002.png
       korean/male0003.png
       korean/male0004.png
       korean/male0005.png
       korean/male0006.png
       korean/male0007.png
    korean/male0008.png
       korean/male0009.png
       korean/male0010.png
       korean/male0011.png
       korean/male0012.png
       korean/male0013.png
       korean/male0014.png
       korean/male0015.png
    korean/male0016.png
       korean/male0017.png
       korean/male0018.png
       korean/male0019.png
       korean/male0020.png
       korean/male0021.png
       korean/male0022.png
       korean/male0023.png
       korean/male0024.png
       korean/male0025.png
       korean/male0026.png
       korean/male0027.png
       korean/male0028.png
       korean/male0029.png
       korean/male0030.png
       korean/male0031.png
       korean/male0032.png
       korean/male0033.png
       korean/male0034.png
       korean/male0035.png
       korean/male0036.png
       korean/male0037.png
       korean/male0038.png
       korean/male0039.png
       korean/male0040.png
       korean/male0041.png
       korean/male0042.png
       korean/male0043.png
       korean/male0044.png
       korean/male0045.png
       korean/male0046.png
       korean/male0047.png
       korean/male0048.png
       korean/male0049.png
       korean/male0050.png
       korean/male0051.png
       korean/male0052.png
       korean/male0053.png
       korean/male0054.png
       korean/male0055.png
       korean/male0056.png
       korean/male0057.png
       korean/male0058.png
       korean/male0059.png
       korean/male0060.png
       korean/male0061.png
       korean/male0062.png
       korean/male0063.png
       korean/male0064.png
       korean/male0065.png
       korean/male0066.png
       korean/male0067.png
       korean/male0068.png
       korean/male0069.png
       korean/male0070.png
       korean/male0071.png
       korean/male0072.png
       korean/male0073.png
       korean/male0074.png
       korean/male0075.png
       korean/male0076.png
       korean/male0077.png
       korean/male0078.png
       korean/male0079.png
       korean/male0080.png
       korean/male0081.png
       korean/male0082.png
       korean/male0083.png
       korean/male0084.png
       korean/male0085.png
       korean/male0086.png
       korean/male0087.png
       korean/male0088.png
       korean/male0089.png
       korean/male0090.png
       korean/male0091.png
       korean/male0092.png
       korean/male0093.png
       korean/male0094.png
       korean/male0095.png
       korean/male0096.png
       korean/male0097.png
       korean/male0098.png
       korean/male0099.png
       korean/male0100.png
       korean/male0101.png
       korean/male0102.png
       korean/male0103.png
       korean/male0104.png
       korean/male0105.png
       korean/male0106.png
       korean/male0107.png
       korean/male0108.png
       korean/male0109.png
       korean/male0110.png
       korean/male0111.png
       korean/male0112.png
       korean/male0113.png
       korean/male0114.png
       korean/male0115.png
       korean/male0116.png
       korean/male0117.png
       korean/male0118.png
       korean/male0119.png
       korean/male0120.png
       korean/male0121.png
       korean/male0122.png
       korean/male0123.png
       korean/male0124.png
       korean/male0125.png
       korean/male0126.png
       korean/male0127.png
       korean/male0128.png
       korean/male0129.png
       korean/male0130.png
       korean/male0131.png
       korean/male0132.png
       korean/male0133.png
       korean/male0134.png
       korean/male0135.png
       korean/male0136.png
       korean/male0137.png
       korean/male0138.png
       korean/male0139.png
       korean/male0140.png
       korean/male0141.png
       korean/male0142.png
       korean/male0143.png
       korean/male0144.png
       korean/male0145.png
       korean/male0146.png
       korean/male0147.png
       korean/male0148.png
       korean/male0149.png
       korean/male0150.png
       korean/male0151.png
       korean/male0152.png
       korean/male0153.png
       korean/male0154.png
       korean/male0155.png
       korean/male0156.png
       korean/male0157.png
       korean/male0158.png
       korean/male0159.png
       korean/male0160.png
       korean/male0161.png
       korean/male0162.png
       korean/male0163.png
       korean/male0164.png
       korean/male0165.png
       korean/male0166.png
       korean/male0167.png
       korean/male0168.png
       korean/male0169.png
       korean/male0170.png
       korean/male0171.png
       korean/male0172.png
       korean/male0173.png
       korean/male0174.png
       korean/male0175.png
       korean/male0176.png
       korean/male0177.png
       korean/male0178.png
       korean/male0179.png
       korean/male0180.png
       korean/male0181.png
       korean/male0182.png
       korean/male0183.png
       korean/male0184.png
       korean/male0185.png
       korean/male0186.png
       korean/male0187.png
       korean/male0188.png
       korean/male0189.png
       korean/male0190.png
       korean/male0191.png
       korean/male0192.png
       korean/male0193.png
       korean/male0194.png
       korean/male0195.png
       korean/male0196.png
       korean/male0197.png
       korean/male0198.png
       korean/male0199.png
       korean/male0200.png
       korean/male0201.png
       korean/male0202.png
       korean/male0203.png
       korean/male0204.png
       korean/male0205.png
       korean/male0206.png
       korean/male0207.png
       korean/male0208.png
       korean/male0209.png
       korean/male0210.png
       korean/male0211.png
       korean/male0212.png
       korean/male0213.png
       korean/male0214.png
       korean/male0215.png
       korean/male0216.png
       korean/male0217.png
       korean/male0218.png
       korean/male0219.png
       korean/male0220.png
       korean/male0221.png
       korean/male0222.png
       korean/male0223.png
       korean/male0224.png
       korean/male0225.png
       korean/male0226.png
       korean/male0227.png
       korean/male0228.png
       korean/male0229.png
       korean/male0230.png
       korean/male0231.png
       korean/male0232.png
       korean/male0233.png
       korean/male0234.png
       korean/male0235.png
       korean/male0236.png
       korean/male0237.png
       korean/male0238.png
       korean/male0239.png
       korean/male0240.png
       korean/male0241.png
       korean/male0242.png
       korean/male0243.png
       korean/male0244.png
       korean/male0245.png
       korean/male0246.png
       korean/male0247.png
       korean/male0248.png
       korean/male0249.png
       korean/male0250.png
       korean/male0251.png
       korean/male0252.png
       korean/male0253.png
       korean/male0254.png
       korean/male0255.png
       korean/male0256.png
       korean/male0257.png
       korean/male0258.png
       korean/male0259.png
       korean/male0260.png
       korean/male0261.png
       korean/male0262.png
       korean/male0263.png
       korean/male0264.png
       korean/male0265.png
       korean/male0266.png
       korean/male0267.png
       korean/male0268.png
       korean/male0269.png
       korean/male0270.png
       korean/male0271.png
       korean/male0272.png
       korean/male0273.png
       korean/male0274.png
       korean/male0275.png
       korean/male0276.png
       korean/male0277.png
       korean/male0278.png
       korean/male0279.png
       korean/male0280.png
       korean/male0281.png
       korean/male0282.png
       korean/male0283.png
       korean/male0284.png
       korean/male0285.png
       korean/male0286.png
       korean/male0287.png
       korean/male0288.png
       korean/male0289.png
       korean/male0290.png
       korean/male0291.png
       korean/male0292.png
       korean/male0293.png
       korean/male0294.png
       korean/male0295.png
       korean/male0296.png
       korean/male0297.png
       korean/male0298.png
       korean/male0299.png
       korean/male0300.png
   `;
    return data.split("\n")[index];
  }
  
  const frameCount = 300;
  
  const images = [];
  const imageSeq = {
    frame: 1,
  };
  
  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }
  
  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: `none`,
    scrollTrigger: {
      scrub: 0.15,
      trigger: `#page>canvas`,
      start: `top top`,
      end: `600% top`,
      scroller: `#main`,
    },
    onUpdate: render,
  });
  
  images[1].onload = render;
  
  function render() {
    scaleImage(images[imageSeq.frame], context);
  }
  
  function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  }
  ScrollTrigger.create({
    trigger: "#page>canvas",
    pin: true,
    // markers:true,
    scroller: `#main`,
    start: `top top`,
    end: `600% top`,
  });
  
  
  
  gsap.to("#page1",{
    scrollTrigger:{
      trigger:`#page1`,
      start:`top top`,
      end:`bottom top`,
      pin:true,
      scroller:`#main`
    }
  })
  gsap.to("#page2",{
    scrollTrigger:{
      trigger:`#page2`,
      start:`top top`,
      end:`bottom top`,
      pin:true,
      scroller:`#main`
    }
  })
  gsap.to("#page3",{
    scrollTrigger:{
      trigger:`#page3`,
      start:`top top`,
      end:`bottom top`,
      pin:true,
      scroller:`#main`
    }
  })