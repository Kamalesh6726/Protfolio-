/**
 * ==========================================================================
 * KAMALESH GANESH – PERSONAL PORTFOLIO SCRIPT
 * Vanilla JavaScript (Zero External Framework Overhead)
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // ------------------------------------------------------------------------
  // 1. DOM Element References
  // ------------------------------------------------------------------------
  const navbar = document.getElementById('navbar');
  const navMenu = document.getElementById('navMenu');
  const mobileToggleBtn = document.getElementById('mobileToggleBtn');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');
  const backToTopBtn = document.getElementById('backToTopBtn');
  
  // Project Modal Elements
  const projectModal = document.getElementById('projectModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalCategory = document.getElementById('modalCategory');
  const modalTitle = document.getElementById('modalTitle');
  const modalRole = document.getElementById('modalRole');
  const modalDesc = document.getElementById('modalDesc');
  const modalKeyPoints = document.getElementById('modalKeyPoints');
  const modalTags = document.getElementById('modalTags');
  const modalPrimaryBtn = document.getElementById('modalPrimaryBtn');
  const modalGithubBtn = document.getElementById('modalGithubBtn');

  // Filter Buttons & Cards
  const filterBtns = document.querySelectorAll('.filter-tab-btn');
  const projectCards = document.querySelectorAll('.project-card');

  // ------------------------------------------------------------------------
  // 2. Comprehensive Project Data Dictionary
  // ------------------------------------------------------------------------
  const projectDatabase = {
        'pcos-research': {
      title: 'AI-Assisted PCOS Research and Risk Assessment',
      category: 'Academic Inquiry & Healthcare AI',
      role: 'Lead Researcher & AI Developer',
      description: 'An interdisciplinary academic research initiative investigating how machine learning, healthcare data analytics, and clinical-metabolic indicators can contribute to PCOS-related risk assessment and women\'s health monitoring. Grounded in national endocrinology guidelines (Government of India) and the Rotterdam diagnostic framework.',
      keyPoints: [
        'Explores explainable machine learning and clinical-metabolic indicator analysis for women\'s health risk assessment.',
        'Synthesizes multi-factor clinical covariates: cycle regularity, hyperandrogenism signs, AMH/LH/FSH biochemical markers, and metabolic profiles.',
        'Integrates national clinical guidelines (Government of India Standard Treatment Guidelines: Endocrinology) and Rotterdam consensus criteria.',
        'Prioritizes transparent feature attribution (Explainable AI / SHAP) over opaque black-box scoring for trustworthy decision support.',
        'Strictly designed as an exploratory non-diagnostic research model that complements rather than replaces licensed clinical evaluation.'
      ],
      tags: ['Healthcare AI', 'Machine Learning', 'Women\'s Health', 'Research & Analytics', 'Clinical Decision Support', 'Predictive Analytics'],
      status: 'Active Academic Research Initiative',
      caseStudyUrl: 'ai-assisted-pcos-research.html',
      linkText: 'Explore Research'
    },
    'singa-paarvai': {
      title: 'Singa Paarvai AI',
      category: 'AI & Public Safety',
      role: 'AI & Systems Lead',
      description: 'An AI-powered public safety and intelligent surveillance initiative designed to strengthen public safety through 360-degree intelligent surveillance, automated threat detection, GPS coordinate tagging, police jurisdiction routing, and faster emergency communication.',
      keyPoints: [
        'Presented to AI Minister R. Kumar; received positive feedback for automated crime detection focus.',
        'Continuous 360-degree computer vision screening for crowd surges, weapon threats, and chain-snatching.',
        'Automated GPS coordinate binding and spatial police jurisdiction routing for rapid dispatch.',
        'Tamper-resistant encrypted cloud evidence management ensuring chain-of-custody integrity.'
      ],
      tags: ['Artificial Intelligence', 'Computer Vision', 'Public Safety', 'Smart Surveillance', 'Emergency Response'],
      status: 'Presented to AI Minister R. Kumar • Under Further Consideration',
      github: 'https://github.com/Kamalesh6726',
      caseStudyUrl: 'singa-paarvai-ai.html',
      linkText: 'Explore Singa Paarvai AI Microsite'
    },
    'medilong': {
      title: 'MediLong — Hospital Management Platform',
      category: 'Healthcare Technology | AI | SaaS',
      role: 'Founder | Full-Stack & AI Developer',
      description: 'A comprehensive, cloud-native hospital management platform engineered to simplify healthcare administration through intelligent automated workflows. MediLong centralizes patient registration, multi-department doctor scheduling, intelligent appointment routing, unified electronic health records (EHR), and smart healthcare analytics into a streamlined interface.',
      keyPoints: [
        'Architected end-to-end hospital workflow management system serving administrative staff, medical practitioners, and patients.',
        'Engineered secure electronic health records (EHR) management with role-based access control (RBAC).',
        'Implemented intelligent appointment allocation and queue optimization reducing patient waiting times.',
        'Developed automated prescription management, diagnostic lab report integration, and clinical summary generation.'
      ],
      tags: ['Healthcare AI', 'React', 'Python', 'REST APIs', 'Cloud DBMS', 'SaaS Architecture', 'Security'],
      status: 'Live Startup Venture',
      github: 'https://github.com/Kamalesh6726',
      linkText: 'Explore MediLong Initiative'
    },
    'diacare': {
      title: 'DiaCare — Diabetes Management Application',
      category: 'Healthcare | Mobile Application',
      role: 'Full-Stack Developer',
      description: 'A specialized chronic disease management application crafted to empower diabetic patients and consulting endocrinologists with real-time biometric tracking, predictive trend analysis, automated dietary guidance, and integrated telehealth payment systems.',
      keyPoints: [
        'Built secure multi-factor user authentication and personalized patient health profile management.',
        'Developed interactive biometric data visualization for continuous blood glucose and insulin tracking.',
        'Integrated Razorpay payment gateway facilitating smooth telehealth consultation fees and subscription billing.',
        'Utilized Firebase Realtime Database and Cloud Functions for instant alert notifications on critical glucose levels.'
      ],
      tags: ['Mobile Application', 'Full-Stack', 'Firebase', 'Health Analytics', 'Razorpay API', 'Data Visualization'],
      status: 'Academic & Prototype Project',
      github: 'https://github.com/Kamalesh6726',
      linkText: 'View Project Details'
    },
    'rel-website': {
      title: 'REL Website Enhancement',
      category: 'Web Development | Performance & UX',
      role: 'Full-Stack Developer',
      description: 'A targeted performance and interface enhancement project focused on upgrading an existing enterprise web platform. Concentrated on modernizing UI styling, accelerating page load speeds, refining navigation flows, and optimizing mobile responsiveness.',
      keyPoints: [
        'Re-engineered front-end page layouts using modern semantic HTML5 and optimized CSS grid systems.',
        'Audited and resolved responsive breakpoint bottlenecks across mobile, tablet, and desktop viewports.',
        'Reduced visual clutter and streamlined user conversion funnels for higher user engagement.',
        'Conducted thorough cross-browser testing ensuring uniform fidelity on Chrome, Safari, Firefox, and Edge.'
      ],
      tags: ['UI/UX Design', 'JavaScript', 'HTML5/CSS3', 'Performance Optimization', 'Responsive Design'],
      status: 'Completed Enterprise Enhancement',
      github: 'https://github.com/Kamalesh6726',
      linkText: 'View Case Study'
    },
    'macrodyne': {
      title: 'Macrodyne Automation Interface',
      category: 'Automation | Frontend Engineering',
      role: 'Frontend Developer',
      description: 'A modern, intuitive control interface engineered for automation systems and industrial workflow monitoring. Provides technical operators with real-time process state visualization, telemetry telemetry displays, and streamlined configuration menus.',
      keyPoints: [
        'Developed an ergonomic dashboard interface for tracking automation machine states and error flags.',
        'Designed modular components for sensory readings, operational telemetry, and cycle counters.',
        'Integrated RESTful endpoint polling for near-instantaneous status feedback.',
        'Implemented strict client-side validation to prevent unauthorized or hazardous configuration inputs.'
      ],
      tags: ['Industrial Automation', 'Frontend UI', 'REST API Integration', 'Workflow Systems', 'Telemetry'],
      status: 'Proprietary Automation Project',
      github: 'https://github.com/Kamalesh6726',
      linkText: 'Private Project Details'
    },
    'grocery-inventory': {
      title: 'Grocery Inventory Management System',
      category: 'Database Systems & Business Automation',
      role: 'Backend & Database Developer',
      description: 'An automated retail inventory control system that tracks product stock levels in real time, generates supplier replenishment orders when threshold minimums are breached, and provides managerial analytics on turnover rates and margin performance.',
      keyPoints: [
        'Engineered normalized relational SQL database schemas for catalog, inventory, and supplier tracking.',
        'Programmed Python automation scripts for batch stock updates and automated purchase order triggers.',
        'Designed cashier point-of-sale receipt generation and inventory decrement workflows.',
        'Created managerial summary reports exporting sales metrics into tabular spreadsheets.'
      ],
      tags: ['Python', 'SQL DBMS', 'Inventory Automation', 'Relational Database', 'Business Analytics'],
      status: 'Academic Capstone Project',
      github: 'https://github.com/Kamalesh6726',
      linkText: 'View Project Code'
    },
    'food-ordering': {
      title: 'Food Ordering Platform',
      category: 'E-Commerce & Interactive Web App',
      role: 'Full-Stack Developer',
      description: 'An interactive online food ordering web platform featuring dynamic digital menus, customizable order modifiers, reactive shopping cart state management, and real-time checkout summaries.',
      keyPoints: [
        'Constructed reactive shopping cart logic with real-time price calculations, tax, and discount parsing.',
        'Developed interactive item filtering categorized by cuisine, dietary preference, and price tiers.',
        'Engineered smooth micro-animations for adding items, quantity toggling, and checkout progression.',
        'Validated client-side order payload structures prior to simulated server dispatch.'
      ],
      tags: ['JavaScript', 'HTML5/CSS3', 'E-Commerce', 'Cart State Management', 'UI/UX'],
      status: 'Interactive Web Prototype',
      github: 'https://github.com/Kamalesh6726',
      linkText: 'Explore Application'
    },
    'mark-generation': {
      title: 'Automated Mark Generation System',
      category: 'Academic Tooling & Analytics',
      role: 'Python Developer',
      description: 'An academic computation utility designed for collegiate examination cells to ingest raw student evaluation scores, calculate weighted grade points, compute institutional CGPA, and generate structured grade sheets automatically.',
      keyPoints: [
        'Automated multi-semester mark consolidation eliminating manual calculation errors.',
        'Generated standardized printable grade reports and batch analytics.',
        'Implemented validation checks identifying anomaly scores and missing assessment marks.',
        'Structured modular code for easy customization according to varying university grading schemes.'
      ],
      tags: ['Python', 'Data Processing', 'Automation Tooling', 'Excel / CSV Pipeline', 'Algorithms'],
      status: 'Departmental Tooling Project',
      github: 'https://github.com/Kamalesh6726',
      linkText: 'View Architecture'
    },
    'bus-tracking': {
      title: 'Panimalar Bus Tracking System',
      category: 'IoT & Campus Transit Management',
      role: 'Full-Stack Developer',
      description: 'A campus logistics transit coordination platform designed to provide students and faculty with real-time campus bus route scheduling, stop location details, route alerts, and estimated arrival times across Chennai metropolitan routes.',
      keyPoints: [
        'Designed intuitive transit schedule and route explorer for 50+ institutional transport routes.',
        'Integrated location coordinate parsing and visual route representations.',
        'Created driver and coordinator broadcast bulletin channel for transit delay notifications.',
        'Designed lightweight, high-speed mobile interface optimized for low-bandwidth cellular connections.'
      ],
      tags: ['Transit Logistics', 'Geolocation APIs', 'Full-Stack', 'Mobile-First', 'Campus Systems'],
      status: 'Institutional Campus Project',
      github: 'https://github.com/Kamalesh6726',
      caseStudyUrl: 'panimalar-smart-transit.html',
      linkText: 'Explore Smart Transit Case Study'
    }
  };

  // ------------------------------------------------------------------------
  // 3. Sticky Navbar & Scroll Behavior
  // ------------------------------------------------------------------------
  function handleNavbarScroll() {
    if (window.scrollY > 30) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    if (window.scrollY > 400) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  }

  window.addEventListener('scroll', handleNavbarScroll, { passive: true });
  handleNavbarScroll(); // Initial check

  // Back to Top Click
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // ------------------------------------------------------------------------
  // 4. Mobile Menu Navigation Toggle
  // ------------------------------------------------------------------------
  if (mobileToggleBtn && navMenu) {
    mobileToggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = navMenu.classList.toggle('open');
      mobileToggleBtn.innerHTML = isOpen 
        ? '<i class="fa-solid fa-xmark"></i>' 
        : '<i class="fa-solid fa-bars"></i>';
      mobileToggleBtn.setAttribute('aria-expanded', isOpen);
    });

    // Close menu when clicking any nav link & reset deck if navigating away
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        mobileToggleBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
        mobileToggleBtn.setAttribute('aria-expanded', 'false');

        const targetHref = link.getAttribute('href');
        if (targetHref && targetHref !== '#experience') {
          if (typeof stackDeck === 'function' && uiCardsStage && uiCardsStage.classList.contains('spread-mode')) {
            stackDeck();
          }
        }
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!navMenu.contains(e.target) && !mobileToggleBtn.contains(e.target) && navMenu.classList.contains('open')) {
        navMenu.classList.remove('open');
        mobileToggleBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
        mobileToggleBtn.setAttribute('aria-expanded', 'false');
      }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navMenu.classList.contains('open')) {
        navMenu.classList.remove('open');
        mobileToggleBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
        mobileToggleBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // 1B. Explore Dropdown Popover Click & Touch Toggle
  const exploreDropdownWrap = document.getElementById('exploreDropdownWrap');
  const exploreDropdownBtn = document.getElementById('exploreDropdownBtn');
  if (exploreDropdownBtn && exploreDropdownWrap) {
    exploreDropdownBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = exploreDropdownWrap.classList.toggle('active');
      exploreDropdownBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    document.addEventListener('click', (e) => {
      if (!exploreDropdownWrap.contains(e.target)) {
        exploreDropdownWrap.classList.remove('active');
        exploreDropdownBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // ------------------------------------------------------------------------
  // 5. ScrollSpy — Highlight Active Nav Link
  // ------------------------------------------------------------------------
  function updateActiveNavLink() {
    const scrollPosition = window.scrollY + 120;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', updateActiveNavLink, { passive: true });
  updateActiveNavLink();

  // ------------------------------------------------------------------------
  // 5B. Interactive UI Cards Stage Controls (Spread View & Stacked Deck)
  // ------------------------------------------------------------------------
  const uiCardsStage = document.getElementById('uiCardsStage');
  const btnSpreadView = document.getElementById('btnSpreadView');
  const btnStackedView = document.getElementById('btnStackedView');
  const btnFlipAllUiCards = document.getElementById('btnFlipAllUiCards');
  const flipAllUiText = document.getElementById('flipAllUiText');
  const interactiveCards = document.querySelectorAll('.ui-interactive-card');
  let allCardsFlipped = false;
  let isDeckAnimating = false;

  const stackRotations = [-3, 7, -8, 10, -12];

  // Fluid Spring FLIP Expansion: Stacked -> Spread
  function spreadDeck() {
    if (!uiCardsStage || uiCardsStage.classList.contains('spread-mode') || isDeckAnimating) return;
    isDeckAnimating = true;

    // 1. Measure initial rects in stacked mode
    const firstRects = Array.from(interactiveCards).map(c => c.getBoundingClientRect());

    // 2. Switch state classes & button highlights
    uiCardsStage.classList.remove('stacked-mode');
    uiCardsStage.classList.add('spread-mode');
    if (btnSpreadView) btnSpreadView.classList.add('active');
    if (btnStackedView) btnStackedView.classList.remove('active');

    // 3. Measure final spread rects
    const lastRects = Array.from(interactiveCards).map(c => c.getBoundingClientRect());

    // 4. Invert & Animate each card with spring physics
    interactiveCards.forEach((card, index) => {
      const deltaX = firstRects[index].left - lastRects[index].left;
      const deltaY = firstRects[index].top - lastRects[index].top;
      const rot = stackRotations[index] || 0;

      // Lock to starting stacked coordinates
      card.style.transition = 'none';
      card.style.transform = `translate(${deltaX}px, ${deltaY}px) rotate(${rot}deg) scale(0.96)`;
      card.style.zIndex = 10 - index;

      // Force layout reflow
      void card.offsetHeight;

      // Elastic Spring Gliding to spread position
      card.style.transition = `transform 0.85s cubic-bezier(0.34, 1.56, 0.64, 1) ${index * 80}ms, box-shadow 0.4s ease`;
      card.style.transform = 'translate(0px, 0px) rotate(0deg) scale(1)';

      setTimeout(() => {
        card.style.transition = '';
        card.style.transform = '';
        card.style.zIndex = '';
        if (index === interactiveCards.length - 1) {
          isDeckAnimating = false;
        }
      }, 850 + index * 80);
    });
  }

  // Fluid FLIP Collapse: Spread -> Stacked Deck
  function stackDeck() {
    if (!uiCardsStage || uiCardsStage.classList.contains('stacked-mode') || isDeckAnimating) return;
    isDeckAnimating = true;

    // Reset all flipped cards so deck stacks uniformly
    interactiveCards.forEach(c => c.classList.remove('is-flipped'));
    allCardsFlipped = false;
    if (flipAllUiText) flipAllUiText.textContent = 'Flip All';

    // 1. Measure spread rects
    const firstRects = Array.from(interactiveCards).map(c => c.getBoundingClientRect());

    // 2. Switch state classes
    uiCardsStage.classList.remove('spread-mode');
    uiCardsStage.classList.add('stacked-mode');
    if (btnStackedView) btnStackedView.classList.add('active');
    if (btnSpreadView) btnSpreadView.classList.remove('active');

    // 3. Measure target stacked rects
    const lastRects = Array.from(interactiveCards).map(c => c.getBoundingClientRect());

    // 4. Invert & Glide back into center stack
    interactiveCards.forEach((card, index) => {
      const deltaX = firstRects[index].left - lastRects[index].left;
      const deltaY = firstRects[index].top - lastRects[index].top;

      card.style.transition = 'none';
      card.style.transform = `translate(${deltaX}px, ${deltaY}px) rotate(0deg) scale(1)`;

      void card.offsetHeight;

      const reverseIndex = (interactiveCards.length - 1) - index;
      card.style.transition = `transform 0.75s cubic-bezier(0.16, 1, 0.3, 1) ${reverseIndex * 60}ms, box-shadow 0.4s ease`;
      card.style.transform = ''; // Lets the CSS stacked-mode rules smoothly take over

      setTimeout(() => {
        card.style.transition = '';
        if (index === 0) {
          isDeckAnimating = false;
        }
      }, 750 + reverseIndex * 60);
    });
  }

  // Button triggers for view switcher
  if (btnSpreadView) {
    btnSpreadView.addEventListener('click', spreadDeck);
  }

  if (btnStackedView) {
    btnStackedView.addEventListener('click', stackDeck);
  }

  // Clicking on the stacked deck stage or center card spreads all cards!
  if (uiCardsStage) {
    uiCardsStage.addEventListener('click', (e) => {
      if (uiCardsStage.classList.contains('stacked-mode')) {
        if (e.target.closest('a')) return;
        spreadDeck();
      }
    });
  }

  // Interactive Card Click Handling
  interactiveCards.forEach(card => {
    card.addEventListener('click', (e) => {
      if (e.target.closest('a')) return;

      // In Stacked Mode: Clicking any card spreads the deck!
      if (uiCardsStage && uiCardsStage.classList.contains('stacked-mode')) {
        e.stopPropagation();
        spreadDeck();
        return;
      }

      // In Spread Mode: Clicking flips between Front and Back (Key Contributions)
      card.classList.toggle('is-flipped');
    });

    // Keyboard accessibility
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        if (e.target.closest('a')) return;
        e.preventDefault();
        if (uiCardsStage && uiCardsStage.classList.contains('stacked-mode')) {
          spreadDeck();
        } else {
          card.classList.toggle('is-flipped');
        }
      }
    });
  });

  // Flip All Cards Toggle (Available in Spread Mode)
  if (btnFlipAllUiCards) {
    btnFlipAllUiCards.addEventListener('click', (e) => {
      e.stopPropagation();
      // Ensure we are in spread mode when flipping all
      if (uiCardsStage && uiCardsStage.classList.contains('stacked-mode')) {
        spreadDeck();
      }

      allCardsFlipped = !allCardsFlipped;
      interactiveCards.forEach((card, index) => {
        setTimeout(() => {
          if (allCardsFlipped) {
            card.classList.add('is-flipped');
          } else {
            card.classList.remove('is-flipped');
          }
        }, index * 85);
      });

      if (flipAllUiText) {
        flipAllUiText.textContent = allCardsFlipped ? 'Flip to Front' : 'Flip All';
      }
    });
  }

  // ------------------------------------------------------------------------
  // 5C. Auto-Reset Experience Cards to Normal Stacked Position When Scrolling Away
  // ------------------------------------------------------------------------
  const expSection = document.getElementById('experience');
  if (expSection) {
    const expResetObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        // When user crosses out of the experience section (scrolling to next or previous page)
        if (!entry.isIntersecting || entry.intersectionRatio < 0.08) {
          if (uiCardsStage && uiCardsStage.classList.contains('spread-mode')) {
            stackDeck();
          } else {
            // Also reset any flipped cards back to front
            interactiveCards.forEach(c => c.classList.remove('is-flipped'));
            allCardsFlipped = false;
          }
        }
      });
    }, {
      root: null,
      threshold: [0, 0.08]
    });

    expResetObserver.observe(expSection);
  }

  // ------------------------------------------------------------------------
  // 6. Project Filter Tabs
  // ------------------------------------------------------------------------
  if (filterBtns.length > 0 && projectCards.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filterValue = btn.getAttribute('data-filter');

        projectCards.forEach(card => {
          const cardCategory = card.getAttribute('data-category') || '';

          if (filterValue === 'all' || cardCategory.split(' ').includes(filterValue)) {
            card.style.display = 'flex';
            card.style.opacity = '0';
            card.style.transform = 'translateY(15px)';
            setTimeout(() => {
              card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
              card.style.opacity = '1';
              card.style.transform = 'translateY(0)';
            }, 50);
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  // ------------------------------------------------------------------------
  // 6B. 3D Rotating Project Cards Flip & Interactive Controls
  // ------------------------------------------------------------------------
  const cards3D = document.querySelectorAll('.project-card-3d');
  cards3D.forEach(card => {
    const rotateBtn = card.querySelector('.btn-3d-rotate');
    const flipBackBtn = card.querySelector('.btn-flip-back');

    if (rotateBtn) {
      rotateBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        card.classList.toggle('is-flipped');
      });
    }

    if (flipBackBtn) {
      flipBackBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        card.classList.remove('is-flipped');
      });
    }
  });

  // ------------------------------------------------------------------------
  // 7. Project Details Modal Management
  // ------------------------------------------------------------------------
  window.openProjectModal = function(projectId) {
    const data = projectDatabase[projectId];
    if (!data || !projectModal) return;

    modalCategory.textContent = data.category;
    modalTitle.textContent = data.title;
    modalRole.textContent = `Role: ${data.role}`;
    modalDesc.textContent = data.description;

    // Render Key Points
    modalKeyPoints.innerHTML = data.keyPoints.map(point => `
      <li class="modal-key-point-item">
        <i class="fa-solid fa-circle-check"></i>
        <span>${escapeHtml(point)}</span>
      </li>
    `).join('');

    // Render Tags
    modalTags.innerHTML = data.tags.map(tag => `
      <span class="tech-tag">${escapeHtml(tag)}</span>
    `).join('');

    // Action button
    modalPrimaryBtn.textContent = data.linkText || 'View Project';
    modalPrimaryBtn.onclick = () => {
      if (data.caseStudyUrl) {
        window.location.href = data.caseStudyUrl;
      } else {
        alert(`Project: ${data.title}\nStatus: ${data.status}\n\nFor source access or demonstration inquiries, feel free to reach out via the Contact section!`);
      }
    };

    if (modalGithubBtn) {
      modalGithubBtn.style.display = 'none';
    }

    // Open Modal
    projectModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  function closeProjectModal() {
    if (!projectModal) return;
    projectModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeProjectModal);
  }

  if (projectModal) {
    projectModal.addEventListener('click', (e) => {
      if (e.target === projectModal) {
        closeProjectModal();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && projectModal.classList.contains('active')) {
        closeProjectModal();
      }
    });
  }

  // ------------------------------------------------------------------------
  // 8. KPI Cards Animation & Counter Logic
  // ------------------------------------------------------------------------
  const kpiNumbers = document.querySelectorAll('.kpi-number');
  let kpiHasAnimated = false;

  function runKpiCounters() {
    if (kpiHasAnimated) return;
    kpiHasAnimated = true;

    kpiNumbers.forEach((el, index) => {
      const target = parseFloat(el.getAttribute('data-target')) || 0;
      const decimals = parseInt(el.getAttribute('data-decimals') || '0', 10);
      const duration = 1800 + index * 100; // slight offset for organic feel
      const startTime = performance.now();

      function updateCounter(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // Cubic ease-out
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const currentVal = target * easeOut;

        el.textContent = currentVal.toFixed(decimals);

        if (progress < 1) {
          requestAnimationFrame(updateCounter);
        } else {
          el.textContent = target.toFixed(decimals);
        }
      }

      requestAnimationFrame(updateCounter);
    });
  }

  // Observe KPI Section for Counter Animation
  const kpiSection = document.getElementById('kpi-stats');
  if (kpiSection) {
    const kpiObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          runKpiCounters();
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    kpiObserver.observe(kpiSection);
  }

  // Interactive 3D Tilt on KPI Cards
  const kpiCards = document.querySelectorAll('.kpi-card');
  kpiCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -9;
      const rotateY = ((x - centerX) / centerX) * 9;

      card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px) scale(1.02)`;

      const glow = card.querySelector('.kpi-card-glow');
      if (glow) {
        glow.style.transform = `translate(${x - rect.width}px, ${y - rect.height}px)`;
      }
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
      const glow = card.querySelector('.kpi-card-glow');
      if (glow) {
        glow.style.transform = '';
      }
    });
  });

  // ------------------------------------------------------------------------
  // 9. IntersectionObserver Scroll Reveal Animations
  // ------------------------------------------------------------------------
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.12
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.kpi-card, .highlight-card, .education-card, .experience-card, .ui-cards-stage, .project-card, .skill-category-card, .achievement-card, .cert-card, .interest-tag-pill, .contact-card-item').forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(22px)';
    el.style.transition = `opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${(i % 4) * 0.08}s, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${(i % 4) * 0.08}s`;
    revealObserver.observe(el);
  });

  // Helper CSS class triggered by observer
  const styleEl = document.createElement('style');
  styleEl.textContent = `
    .revealed {
      opacity: 1 !important;
      transform: translateY(0) !important;
    }
  `;
  document.head.appendChild(styleEl);

  // ------------------------------------------------------------------------
  // 10. Helper Utilities
  // ------------------------------------------------------------------------
  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  console.log('🚀 Kamalesh Ganesh Portfolio initialized successfully.');
});
