/* =========================================================
   Areeb Sheikh — Portfolio
   GSAP: gsap.to() · gsap.from() · gsap.fromTo() · Timelines
         Easing · Stagger · ScrollTrigger (+ pin) · Loader
========================================================= */

gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {

  /* =========================================================
     1. LOADING ANIMATION
     Uses gsap.to() to fake-progress a build bar, then a
     timeline() to reveal the logo letters and transition out.
  ========================================================= */
  const loader        = document.getElementById('loader');
  const loaderFill     = document.getElementById('loaderFill');
  const loaderPercent  = document.getElementById('loaderPercent');
  const loaderMarkSpans = document.querySelectorAll('.loader-mark span');

  const loaderTl = gsap.timeline();
  const progress = { val: 0 };

  // Logo letters slide up into place — stagger + custom ease
  loaderTl.to(loaderMarkSpans, {
    y: 0,
    duration: 0.7,
    ease: 'power4.out',
    stagger: 0.08
  });

  // gsap.to() driving a plain object's value, synced to the bar width + counter text
  loaderTl.to(progress, {
    val: 100,
    duration: 1.5,
    ease: 'power2.inOut',
    onUpdate: () => {
      const pct = Math.round(progress.val);
      loaderFill.style.width = pct + '%';
      loaderPercent.textContent = pct;
    }
  }, '-=0.2');

  // Hold briefly, then wipe the loader up and out
  loaderTl.to(loader, {
    yPercent: -100,
    duration: 0.9,
    ease: 'expo.inOut',
    delay: 0.15,
    onComplete: () => {
      loader.style.display = 'none';
      document.body.style.overflow = '';
      playHeroIntro();      // hero only animates in once the loader is gone
      ScrollTrigger.refresh();
    }
  });

  document.body.style.overflow = 'hidden';


  /* =========================================================
     2. HERO INTRO TIMELINE
     Runs right after the loader clears. Mix of gsap.from()
     and gsap.fromTo() with different eases, chained on one
     timeline so timing stays perfectly relative.
  ========================================================= */
  function playHeroIntro() {
    const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    // gsap.from(): eyebrow badge drops + fades in
    heroTl.from('.hero-eyebrow', {
      y: -16,
      opacity: 0,
      duration: 0.6
    })
    .set('.hero-eyebrow', { opacity: 1 });

    // gsap.fromTo(): headline lines given explicit start AND end state,
    // with a snappy custom cubic-bezier ease + stagger between the two lines
    heroTl.fromTo('.hero-title-line',
      { yPercent: 130, rotate: 4 },
      {
        yPercent: 0,
        rotate: 0,
        duration: 1.1,
        ease: 'power4.out',
        stagger: 0.12
      },
      '-=0.2'
    );

    // gsap.to(): sub copy + actions fade/rise up to their resting opacity
    heroTl.to('.hero-sub', {
      opacity: 1,
      y: 0,
      duration: 0.7
    }, '-=0.5')
    .to('.hero-actions', {
      opacity: 1,
      y: 0,
      duration: 0.7,
      ease: 'back.out(1.6)'   // custom overshoot easing on the buttons
    }, '-=0.55');

    // marquee ambient loop — infinite gsap.to(), linear ease, runs independently
    gsap.to('.hero-marquee-track', {
      xPercent: -50,
      duration: 18,
      ease: 'none',
      repeat: -1
    });
  }

  // Pre-set hero elements below their resting position for the fromTo/from above
  gsap.set('.hero-sub', { opacity: 0, y: 18 });
  gsap.set('.hero-actions', { opacity: 0, y: 18 });


  /* =========================================================
     3. NAV — scroll state + active link highlighting
  ========================================================= */
  const nav = document.getElementById('nav');

  ScrollTrigger.create({
    start: 'top -80',
    onUpdate: (self) => {
      nav.classList.toggle('is-scrolled', self.scroll() > 80);
    }
  });

  const navLinks = gsap.utils.toArray('.nav-links a');
  navLinks.forEach(link => {
    const targetSel = link.getAttribute('href');
    const target = document.querySelector(targetSel);
    if (!target) return;
    ScrollTrigger.create({
      trigger: target,
      start: 'top 40%',
      end: 'bottom 40%',
      onEnter: () => setActiveLink(link),
      onEnterBack: () => setActiveLink(link)
    });
  });
  function setActiveLink(activeLink) {
    navLinks.forEach(l => l.classList.remove('is-active'));
    activeLink.classList.add('is-active');
  }

  // Mobile menu toggle
  const navBurger = document.getElementById('navBurger');
  const mobileMenu = document.getElementById('mobileMenu');
  navBurger.addEventListener('click', () => {
    navBurger.classList.toggle('is-open');
    mobileMenu.classList.toggle('is-open');
  });
  mobileMenu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      navBurger.classList.remove('is-open');
      mobileMenu.classList.remove('is-open');
    });
  });


  /* =========================================================
     4. CUSTOM CURSOR DOT — gsap.to() following pointer
  ========================================================= */
  const cursorDot = document.getElementById('cursorDot');
  if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    window.addEventListener('mousemove', (e) => {
      gsap.to(cursorDot, {
        x: e.clientX,
        y: e.clientY,
        opacity: 1,
        duration: 0.5,
        ease: 'power3.out'
      });
    });
    document.querySelectorAll('a, button').forEach(el => {
      el.addEventListener('mouseenter', () => gsap.to(cursorDot, { scale: 2.4, duration: 0.3, ease: 'power2.out' }));
      el.addEventListener('mouseleave', () => gsap.to(cursorDot, { scale: 1, duration: 0.3, ease: 'power2.out' }));
    });
  }


  /* =========================================================
     5. GENERIC SCROLL REVEALS ('.reveal-up')
     One ScrollTrigger-driven gsap.from() per element, batched
     so groups of elements in the same section stagger together.
  ========================================================= */
  ScrollTrigger.batch('.reveal-up', {
    start: 'top 88%',
    onEnter: (batch) => {
      gsap.from(batch, {
        y: 44,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
        stagger: 0.12
      });
    },
    once: true
  });


  /* =========================================================
     6. ABOUT — code card fromTo + gentle parallax tilt
  ========================================================= */
  gsap.fromTo('.about-card',
    { y: 60, opacity: 0, rotate: -3 },
    {
      y: 0, opacity: 1, rotate: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.about-card',
        start: 'top 82%'
      }
    }
  );


  /* =========================================================
     7. SKILLS SECTION — PINNED + STAGGERED BUILD LOG
     This is the signature interaction: the section pins in the
     viewport while GSAP scrubs a staggered timeline that reveals
     each skill row and animates its progress bar + percentage.
  ========================================================= */
  const skillRows = gsap.utils.toArray('.skill-row');

  const skillsTl = gsap.timeline({
    scrollTrigger: {
      trigger: '.skills-pin-wrap',
      start: 'top top',
      end: '+=140%',       // extra scroll distance while pinned
      scrub: 1,
      pin: '.skills-pin',  // <-- ScrollTrigger pin in action
      anticipatePin: 1
    }
  });

  // Row entrance: fade/slide in with a stagger, tied to scroll position
  skillsTl.to(skillRows, {
    opacity: 1,
    x: 0,
    ease: 'power2.out',
    stagger: 0.5
  }, 0);

  // Progress bars fill in lockstep with each row's own reveal
  skillRows.forEach((row, i) => {
    const fill = row.querySelector('.skill-bar-fill');
    const level = fill.getAttribute('data-level');
    skillsTl.fromTo(fill,
      { width: '0%' },
      { width: level + '%', ease: 'power1.inOut' },
      i * 0.5 + 0.15   // offset so the bar fills just after its row appears
    );
  });


  /* =========================================================
     8. TIMELINE (Experience) — vertical progress line
     A scrubbed gsap.to() that grows the fill line in step with
     scroll position through the experience section.
  ========================================================= */
  gsap.to('#timelineFill', {
    height: '100%',
    ease: 'none',
    scrollTrigger: {
      trigger: '.timeline',
      start: 'top 60%',
      end: 'bottom 80%',
      scrub: 0.6
    }
  });

  gsap.utils.toArray('.timeline-dot').forEach(dot => {
    gsap.fromTo(dot,
      { scale: 0 },
      {
        scale: 1,
        duration: 0.5,
        ease: 'back.out(2)',
        scrollTrigger: {
          trigger: dot,
          start: 'top 75%'
        }
      }
    );
  });


  /* =========================================================
     9. PROJECT ROWS — index number counts a subtle stagger in
  ========================================================= */
  gsap.from('.project-row', {
    scrollTrigger: {
      trigger: '.project-list',
      start: 'top 80%'
    },
    opacity: 0,
    y: 30,
    duration: 0.7,
    ease: 'power2.out',
    stagger: 0.15
  });


  /* =========================================================
     10. ACHIEVEMENTS GRID — staggered scale-in
  ========================================================= */
  gsap.from('.ach-card', {
    scrollTrigger: {
      trigger: '.ach-grid',
      start: 'top 82%'
    },
    opacity: 0,
    scale: 0.92,
    duration: 0.6,
    ease: 'power2.out',
    stagger: {
      each: 0.12,
      grid: [2, 2],
      from: 'start'
    }
  });


  /* =========================================================
     11. CONTACT — headline + cards
  ========================================================= */
  gsap.from('.contact-primary', {
    scrollTrigger: { trigger: '.contact-grid', start: 'top 85%' },
    opacity: 0,
    x: -30,
    duration: 0.8,
    ease: 'power3.out'
  });
  gsap.from('.social-row', {
    scrollTrigger: { trigger: '.contact-grid', start: 'top 85%' },
    opacity: 0,
    x: 30,
    duration: 0.6,
    ease: 'power2.out',
    stagger: 0.12
  });


  /* =========================================================
     12. Smooth in-page nav scrolling for burger + section links
  ========================================================= */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      const target = document.querySelector(targetId);
      if (!target) return;
      e.preventDefault();
      gsap.to(window, {
        duration: 1,
        ease: 'power3.inOut',
        scrollTo: { y: target, offsetY: 70 }
      });
    });
  });

});