function showMessage() {
  alert("Launching into space!");
}

// load planets
if (document.getElementById("planets")) {
  fetch("data/planets.json")
    .then(res => res.json())
    .then(data => {
      let html = "";
      data.forEach(p => {
        html += `<div class="card">
          <h3>${p.name}</h3>
          <p>${p.desc}</p>
        </div>`;
      });
      document.getElementById("planets").innerHTML = html;
    });
}

// load header
fetch("components/header.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("header").innerHTML = data;
  });
