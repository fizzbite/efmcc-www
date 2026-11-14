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

  // ---- Office map ----
  // Google Maps once GOOGLE_MAPS.key is set; until then an OpenStreetMap
  // fallback (self-hosted Leaflet) so the map always shows. Either way it
  // loads only when the map nears the viewport.
  var GOOGLE_MAPS = {
    key: "",            // Google Maps JavaScript API key (restrict it to your domains). See README.
    mapId: "DEMO_MAP_ID" // Replace with your own Map ID from Google Cloud for production.
  };

  var mapBox = document.querySelector("[data-office-map]");
  if (mapBox) {
    var canvas = mapBox.querySelector("[data-map-canvas]");
    var offices = JSON.parse(mapBox.querySelector('script[type="application/json"]').textContent);
    var esc = function (t) {
      return String(t).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; });
    };
    var PIN = '<svg class="pin__mark" viewBox="0 0 32 42" aria-hidden="true"><path d="M16 41s14-13.2 14-25A14 14 0 0 0 2 16c0 11.8 14 25 14 25Z" fill="#0d6382" stroke="#fff" stroke-width="2"/><circle cx="16" cy="16" r="5.5" fill="#fff"/></svg>';
    var PHONE = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 3.5h3.2l1.6 4.2-2.1 1.4a11 11 0 0 0 7.2 7.2l1.4-2.1 4.2 1.6V19a1.5 1.5 0 0 1-1.6 1.5A16.5 16.5 0 0 1 3.5 5.1 1.5 1.5 0 0 1 5 3.5Z"/></svg>';
    var MAPPIN = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11Z"/><circle cx="12" cy="10" r="2.3"/></svg>';
    var pinHTML = function (o) { return PIN + '<span class="pin__label">' + esc(o.place) + "</span>"; };
    var popupHTML = function (o) {
      return '<div class="popup"><p class="popup__place">' + esc(o.place) + "</p>" +
        '<p class="popup__tag">' + esc(o.role) + " &middot; " + esc(o.juris) + "</p>" +
        '<p class="popup__addr">' + o.addr.map(esc).join("<br>") + "</p>" +
        '<a class="popup__tel tnum" href="tel:' + esc(o.telhref) + '">' + esc(o.tel) + "</a>" +
        '<p class="popup__actions">' +
        '<a class="btn" href="tel:' + esc(o.telhref) + '">' + PHONE + "Call</a>" +
        '<a class="btn btn--ghost" href="' + esc(o.map) + '" target="_blank" rel="noopener">' + MAPPIN + 'Directions<span class="visually-hidden"> to ' + esc(o.place) + " (opens Google Maps)</span></a>" +
        "</p></div>";
    };
    var loadScript = function (src, onerror) {
      var s = document.createElement("script");
      s.src = src;
      s.async = true;
      s.onerror = onerror;
      document.head.appendChild(s);
      return s;
    };

    // OpenStreetMap fallback
    var initLeaflet = function () {
      var start = function () {
        var L = window.L;
        var map = L.map(canvas, { scrollWheelZoom: false, dragging: !L.Browser.mobile, tap: true, zoomSnap: 0.25 });
        L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
          maxZoom: 19,
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
        var bounds = offices.map(function (o) {
          L.marker([o.lat, o.lng], {
            icon: L.divIcon({ className: "", html: '<span class="pin">' + pinHTML(o) + "</span>", iconSize: [32, 42], iconAnchor: [16, 42], popupAnchor: [0, -44] }),
            title: o.place + ", show details", alt: o.place, riseOnHover: true, keyboard: true
          }).addTo(map).bindPopup(popupHTML(o), { maxWidth: 300, autoPanPadding: [24, 24] });
          return [o.lat, o.lng];
        });
        map.fitBounds(bounds, { paddingTopLeft: [40, 60], paddingBottomRight: [130, 30], maxZoom: 12 });
        window.addEventListener("resize", function () { map.invalidateSize(); });
      };
      if (window.L) return start();
      var css = document.createElement("link");
      css.rel = "stylesheet";
      css.href = "assets/vendor/leaflet/leaflet.css";
      document.head.appendChild(css);
      loadScript("assets/vendor/leaflet/leaflet.js", function () { mapBox.hidden = true; }).onload = start;
    };

    // Google Maps
    var initGoogle = function () {
      window.__efmMapsReady = function () {
        google.maps.importLibrary("marker").then(function (lib) {
          var map = new google.maps.Map(canvas, {
            mapId: GOOGLE_MAPS.mapId,
            disableDefaultUI: true,
            zoomControl: true,
            gestureHandling: "cooperative",
            clickableIcons: false
          });
          var info = new google.maps.InfoWindow({ maxWidth: 300 });
          var bounds = new google.maps.LatLngBounds();
          offices.forEach(function (o) {
            var el = document.createElement("span");
            el.className = "pin";
            el.innerHTML = pinHTML(o);
            var marker = new lib.AdvancedMarkerElement({
              map: map,
              position: { lat: o.lat, lng: o.lng },
              title: o.place + ", show details",
              content: el,
              gmpClickable: true
            });
            marker.addListener("click", function () {
              info.setContent(popupHTML(o));
              info.open({ anchor: marker, map: map });
            });
            bounds.extend({ lat: o.lat, lng: o.lng });
          });
          map.fitBounds(bounds, { top: 70, left: 40, right: 130, bottom: 30 });
          google.maps.event.addListenerOnce(map, "idle", function () {
            if (map.getZoom() > 12) map.setZoom(12);
          });
        }).catch(initLeaflet);
      };
      // Google calls this if the key is rejected (wrong key, domain not allowed, billing off).
      window.gm_authFailure = function () {
        canvas.innerHTML = "";
        initLeaflet();
      };
      loadScript(
        "https://maps.googleapis.com/maps/api/js?key=" + encodeURIComponent(GOOGLE_MAPS.key) +
          "&v=weekly&loading=async&callback=__efmMapsReady",
        initLeaflet
      );
    };

    var startMap = function () { (GOOGLE_MAPS.key ? initGoogle : initLeaflet)(); };
    if ("IntersectionObserver" in window) {
      var mio = new IntersectionObserver(function (entries) {
        if (entries.some(function (e) { return e.isIntersecting; })) {
          mio.disconnect();
          startMap();
        }
      }, { rootMargin: "400px 0px" });
      mio.observe(mapBox);
    } else {
      startMap();
    }
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
