 function loader(){
  gsap.registerPlugin(SplitText);

    const wrapper = document.getElementById("wrapper");
    const heading = document.getElementById("heading");
    const bar = document.getElementById("bar");
    const countEl = document.getElementById("count");

    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(wrapper, {
          opacity: 0,
          duration: 0.8,
          onComplete: () => {
            wrapper.style.display = "none";
          }
        });
      }
    });

    const counter = { val: 0 };

    // number 0 -> 100
    tl.to(counter, {
      val: 100,
      duration: 3,
      onUpdate: () => {
        countEl.textContent = Math.round(counter.val) + "%";
      }
    }, 0);

    // bar full width
    tl.to(bar, {
      width: "100vw",
      duration: 3,
    }, 0);

    // text split + reveal
    const split = new SplitText(heading, {
      type: "chars",
      mask: "chars",
    });

    gsap.set(split.chars, { yPercent: 120, opacity: 0 });

    tl.to(split.chars, {
      yPercent: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.04,
      ease: "expo.out",
    }, 0);
 }
 loader()
 gsap.from("#hometext",{
  y:200,
  duration:.9,
  delay:3,
  stagger:0.3,
 ease: "power1.out",
 })
 gsap.from(".homepara",{
  y:200,
  duration:.9,
  delay:3.5,
  stagger:0.1,
 ease: "power1.out",
 })
 
const texts = document.querySelectorAll(".container");
const img = document.querySelector(".imgcontainer");

texts.forEach((text) => {
  text.addEventListener("mousemove", (e) => {
    const cubeWidth = img.offsetWidth;

    let x = e.clientX - cubeWidth / 2;

    // screen ke andar rakhna
    x = Math.max(0, Math.min(x, window.innerWidth - cubeWidth));

    img.style.left = `${x}px`;
  });

  
});
 gsap.to(".imgcontainer",{
  scale:1,
  duration:1,
  delay:4,
  
 ease: "power1.out",
 })
 