// EF McCambridge & Co. — progressive enhancements. Every page works without this file.
(function () {
  "use strict";

  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var year = document.querySelector("[data-year]");
  if (year) year.textContent = String(new Date().getFullYear());

  // ---- Header: tighten and lift once the page scrolls ----
  var masthead = document.querySelector("[data-masthead]");
  if (masthead) {
    var onScroll = function () { masthead.classList.toggle("is-scrolled", window.scrollY > 8); };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  // ---- Scroll reveals ----
  var hero = document.querySelector("[data-hero]");
  var revealables = document.querySelectorAll("[data-reveal]");
  var showAll = function () {
    if (hero) hero.classList.add("is-in");
    revealables.forEach(function (el) { el.classList.add("is-in"); });
  };

  if (reduce || !("IntersectionObserver" in window)) {
    showAll();
  } else {
    if (hero) requestAnimationFrame(function () { requestAnimationFrame(function () { hero.classList.add("is-in"); }); });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-in");
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.12 });
    revealables.forEach(function (el) { io.observe(el); });
    // Safety net: never leave content hidden (e.g. print, or an anchor jump past it).
    window.addEventListener("beforeprint", showAll);
    setTimeout(function () {
      revealables.forEach(function (el) {
        var r = el.getBoundingClientRect();
        if (r.bottom < 0) el.classList.add("is-in");
      });
    }, 1200);
  }

  // ---- Office finder ----
  var picker = document.querySelector("[data-picker]");
  if (picker) {
    var data = JSON.parse(picker.querySelector("[data-offices]").textContent);
    var tel = picker.querySelector("[data-tel]");
    var addr = picker.querySelector("[data-addr]");
    var call = picker.querySelector("[data-call]");
    var callLabel = picker.querySelector("[data-call-label]");
    var map = picker.querySelector("[data-map]");
    var timer;

    picker.addEventListener("change", function (e) {
      var o = data[e.target.value];
      if (!o) return;
      var apply = function () {
        tel.textContent = o.tel;
        tel.href = "tel:" + o.telhref;
        addr.textContent = o.addr;
        call.href = "tel:" + o.telhref;
        callLabel.textContent = "Call " + o.place;
        map.href = o.map;
        tel.classList.remove("is-swapping");
        addr.classList.remove("is-swapping");
      };
      clearTimeout(timer);
      if (reduce) return apply();
      tel.classList.add("is-swapping");
      addr.classList.add("is-swapping");
      timer = setTimeout(apply, 220);
    });
  }

  // ---- Services: tick what you need, carry it to the enquiry form ----
  var svcForm = document.querySelector("[data-services]");
  if (svcForm) {
    var count = svcForm.querySelector("[data-count]");
    var update = function () {
      var n = svcForm.querySelectorAll('input[name="s"]:checked').length;
      count.textContent = n === 0 ? "Nothing ticked yet." : n === 1 ? "1 service ticked." : n + " services ticked.";
    };
    svcForm.addEventListener("change", update);
    svcForm.addEventListener("submit", function (e) {
      if (!svcForm.querySelector('input[name="s"]:checked')) {
        e.preventDefault();
        count.textContent = "Tick at least one service first, or ring us to talk it through.";
      }
    });
    update();
  }

  // ---- Enquiry form: prefill, validate, submit ----
  var form = document.querySelector("[data-enquiry]");
  if (!form) return;

  new URLSearchParams(window.location.search).getAll("s").forEach(function (sid) {
    var box = form.querySelector('input[data-sid="' + CSS.escape(sid) + '"]');
    if (box) box.checked = true;
  });

  var status = form.querySelector("[data-status]");
  var setError = function (id, msg) {
    var input = form.querySelector("#" + id);
    var err = form.querySelector("#" + id + "-err");
    var field = err.closest(".field");
    if (msg) {
      field.setAttribute("data-invalid", "");
      if (input) { input.setAttribute("aria-invalid", "true"); input.setAttribute("aria-describedby", id + "-err"); }
    } else {
      field.removeAttribute("data-invalid");
      if (input) input.removeAttribute("aria-invalid");
    }
    err.textContent = msg || "";
  };

  var validate = function (focus) {
    var first = null;
    var name = form.elements.name.value.trim();
    var phone = form.elements.phone.value.trim();
    var email = form.elements.email.value.trim();

    setError("f-name", name ? "" : "Please tell us your name.");
    if (!name) first = first || form.elements.name;

    setError("f-phone", "");
    setError("f-email", "");
    if (!phone && !email) {
      setError("f-phone", "Add a phone number or an email address so we can reply.");
      first = first || form.elements.phone;
    } else if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("f-email", "That email address doesn't look complete. Check it, or leave it blank and give a phone number.");
      first = first || form.elements.email;
    } else if (phone && phone.replace(/\D/g, "").length < 7) {
      setError("f-phone", "That phone number looks too short.");
      first = first || form.elements.phone;
    }

    var office = form.querySelector('input[name="office"]:checked');
    setError("f-office", office ? "" : "Pick an office, or choose No preference.");
    if (!office) first = first || form.querySelector('input[name="office"]');

    if (first && focus) first.focus();
    return !first;
  };

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    status.hidden = true;
    if (!validate(true)) return;

    var showError = function (msg) {
      status.hidden = false;
      status.className = "form-status form-status--error";
      status.innerHTML = msg + ' <a href="tel:+442871266002">028 7126 6002</a>.';
    };

    var endpoint = form.getAttribute("action");
    if (/YOUR_FORM_ID/.test(endpoint)) {
      showError("Sorry, online enquiries aren’t switched on yet. Please ring our Derry office on");
      return;
    }

    var btn = form.querySelector('button[type="submit"]');
    var label = btn.querySelector("[data-label]");
    btn.disabled = true;
    label.textContent = "Sending…";

    fetch(endpoint, {
      method: "POST",
      headers: { Accept: "application/json" },
      body: new FormData(form)
    })
      .then(function (res) {
        if (!res.ok) throw new Error(String(res.status));
        window.location.href = form.getAttribute("data-thanks") || "thanks.html";
      })
      .catch(function () {
        btn.disabled = false;
        label.textContent = "Send enquiry";
        showError("Sorry, your enquiry didn’t send. Please try again in a moment, or ring our Derry office on");
      });
  });

  form.addEventListener("input", function (e) {
    var f = e.target.closest(".field");
    if (f && f.hasAttribute("data-invalid")) validate(false);
  });
})();
