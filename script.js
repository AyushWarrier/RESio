document.addEventListener("DOMContentLoaded", () => {

  // ======================
  // INPUTS
  // ======================

  const nameInput = document.getElementById("nameInput");
  const locationInput = document.getElementById("locationInput");
  const emailInput = document.getElementById("emailInput");
  const phoneInput = document.getElementById("phoneInput");
  const linkedinInput = document.getElementById("linkedinInput");
  const portfolioInput = document.getElementById("portfolioInput");

  const summaryInput = document.getElementById("summaryInput");
  const skillsInput = document.getElementById("skillsInput");

  const awardInput = document.getElementById("awardInput");
  const extraInput = document.getElementById("extraInput");

  // ======================
  // OPTIONAL INPUTS
  // ======================

  const certContainer = document.getElementById("certContainer");
  const volContainer = document.getElementById("volContainer");

  const addCertBtn = document.getElementById("addCert");
  const addVolBtn = document.getElementById("addVol");

  // ======================
  // CONTAINERS
  // ======================

  const projectsContainer = document.getElementById("projectsContainer");
  const experienceContainer = document.getElementById("experienceContainer");
  const educationContainer = document.getElementById("educationContainer");

  // ======================
  // BUTTONS
  // ======================

  const addProjectBtn = document.getElementById("addProject");
  const addExperienceBtn = document.getElementById("addExperience");
  const addEducationBtn = document.getElementById("addEducation");

  const downloadBtn = document.getElementById("downloadBtn");
  const themeBtn = document.getElementById("themeBtn");

  // ======================
  // PREVIEW
  // ======================

  const namePreview = document.getElementById("namePreview");
  const infoPreview = document.getElementById("infoPreview");
  const linksPreview = document.getElementById("linksPreview");

  const summaryPreview = document.getElementById("summaryPreview");
  const skillsPreview = document.getElementById("skillsPreview");

  const projectPreview = document.getElementById("projectPreview");
  const expPreview = document.getElementById("expPreview");
  const eduPreview = document.getElementById("eduPreview");

  const certPreview = document.getElementById("certPreview");
  const volPreview = document.getElementById("volPreview");
  const awardPreview = document.getElementById("awardPreview");
  const extraPreview = document.getElementById("extraPreview");

  const certTitle = document.getElementById("certTitle");
  const volTitle = document.getElementById("volTitle");
  const awardTitle = document.getElementById("awardTitle");
  const extraTitle = document.getElementById("extraTitle");

  // ======================
  // TOGGLE
  // ======================

  function setupToggle(toggleId, sectionId) {
    const toggle = document.getElementById(toggleId);
    const section = document.getElementById(sectionId);

    toggle.addEventListener("click", () => {
      const isOpen = section.style.display === "block";
      section.style.display = isOpen ? "none" : "block";
      toggle.innerText = (isOpen ? "+ " : "− ") + toggle.innerText.slice(2);
    });
  }

  setupToggle("projectsToggle", "projectsSection");
  setupToggle("expToggle", "expSection");
  setupToggle("eduToggle", "eduSection");
  setupToggle("certToggle", "certSection");
  setupToggle("volToggle", "volSection");
  setupToggle("awardToggle", "awardSection");
  setupToggle("extraToggle", "extraSection");

  // ======================
  // PROJECTS
  // ======================

  addProjectBtn.addEventListener("click", () => {
    const div = document.createElement("div");
    div.className = "project-item";

    div.innerHTML = `
      <input class="projectTitle" placeholder="Project title">
      <input class="projectLink" placeholder="Project link">
      <input class="projectSource" placeholder="Source">
      <textarea class="projectDesc" placeholder="Write each point on a new line"></textarea>
    `;

    projectsContainer.appendChild(div);
    attachListeners();
  });

  function getProjects() {
    const titles = document.querySelectorAll(".projectTitle");
    const links = document.querySelectorAll(".projectLink");
    const sources = document.querySelectorAll(".projectSource");
    const descs = document.querySelectorAll(".projectDesc");

    let html = "";

    titles.forEach((t, i) => {
      if (t.value || descs[i].value) {
        html += `<div class="preview-project">`;
        html += `<div class="preview-project-title">${t.value}`;

        if (links[i].value) {
          html += ` | <a href="${links[i].value}" target="_blank">${links[i].value}</a>`;
        }

        html += `</div>`;

        if (sources[i].value) {
          html += `<div class="preview-exp-dates">${sources[i].value}</div>`;
        }

        html += `<div class="preview-bullets">`;
        descs[i].value.split("\n").forEach(p => {
          if (p.trim()) html += `• ${p}<br>`;
        });

        html += `</div></div>`;
      }
    });

    return html;
  }

  // ======================
  // EXPERIENCE
  // ======================

  addExperienceBtn.addEventListener("click", () => {
    const div = document.createElement("div");
    div.className = "exp-item";

    div.innerHTML = `
      <input class="expRole" placeholder="Job Title">
      <input class="expCompany" placeholder="Company">
      <input class="expDates" placeholder="Date">
      <textarea class="expDesc"></textarea>
    `;

    experienceContainer.appendChild(div);
    attachListeners();
  });

  function getExperience() {
    const roles = document.querySelectorAll(".expRole");
    const companies = document.querySelectorAll(".expCompany");
    const dates = document.querySelectorAll(".expDates");
    const descs = document.querySelectorAll(".expDesc");

    let html = "";

    roles.forEach((r, i) => {
      if (r.value || descs[i].value) {
        html += `<div class="preview-exp">`;
        html += `<div class="preview-exp-header">${r.value} | ${companies[i].value}</div>`;
        html += `<div class="preview-exp-dates">${dates[i].value}</div>`;

        html += `<div class="preview-bullets">`;
        descs[i].value.split("\n").forEach(p => {
          if (p.trim()) html += `• ${p}<br>`;
        });

        html += `</div></div>`;
      }
    });

    return html;
  }

  // ======================
  // EDUCATION
  // ======================

  addEducationBtn.addEventListener("click", () => {
    const div = document.createElement("div");
    div.className = "edu-item";

    div.innerHTML = `
      <input class="eduCollege" placeholder="College">
      <input class="eduDegree" placeholder="Degree">
      <input class="eduDates" placeholder="Date">
    `;

    educationContainer.appendChild(div);
    attachListeners();
  });

  function getEducation() {
    const colleges = document.querySelectorAll(".eduCollege");
    const degrees = document.querySelectorAll(".eduDegree");
    const dates = document.querySelectorAll(".eduDates");

    let html = "";

    colleges.forEach((c, i) => {
      if (c.value) {
        html += `
          <div class="edu-row">
            <div><strong>${c.value}</strong></div>
            <div>${dates[i].value}</div>
          </div>
          <div class="edu-degree">${degrees[i].value}</div>
        `;
      }
    });

    return html;
  }

  // ======================
  // VOLUNTEERING
  // ======================

  addVolBtn.addEventListener("click", () => {
    const div = document.createElement("div");
    div.className = "vol-item";

    div.innerHTML = `
      <input class="volRole" placeholder="Role">
      <input class="volOrg" placeholder="Organization">
      <input class="volDates" placeholder="Date">
      <textarea class="volDesc"></textarea>
    `;

    volContainer.appendChild(div);
    attachListeners();
  });

  function getVolunteering() {
    const roles = document.querySelectorAll(".volRole");
    const orgs = document.querySelectorAll(".volOrg");
    const dates = document.querySelectorAll(".volDates");
    const descs = document.querySelectorAll(".volDesc");

    let html = "";

    roles.forEach((r, i) => {
      if (r.value || descs[i].value) {
        html += `<div class="preview-exp">`;
        html += `<div class="preview-exp-header">${r.value} | ${orgs[i].value}</div>`;
        html += `<div class="preview-exp-dates">${dates[i].value}</div>`;

        html += `<div class="preview-bullets">`;
        descs[i].value.split("\n").forEach(p => {
          if (p.trim()) html += `• ${p}<br>`;
        });

        html += `</div></div>`;
      }
    });

    return html;
  }

  // ======================
  // CERTIFICATIONS
  // ======================

  addCertBtn.addEventListener("click", () => {
    const div = document.createElement("div");
    div.className = "cert-item";

    div.innerHTML = `
      <input class="certName" placeholder="Certification">
      <input class="certIssuer" placeholder="Issuer">
    `;

    certContainer.appendChild(div);
    attachListeners();
  });

  function getCertifications() {
    const names = document.querySelectorAll(".certName");
    const issuers = document.querySelectorAll(".certIssuer");

    let html = "";

    names.forEach((n, i) => {
      if (n.value) {
        html += `<div>• ${n.value} | ${issuers[i].value}</div>`;
      }
    });

    return html;
  }

  // ======================
  // UPDATE
  // ======================

  function updateResume() {

    namePreview.innerText = (nameInput.value || "Your Name").toUpperCase();

    infoPreview.innerText =
      `${locationInput.value || ""} | ${phoneInput.value || ""} | ${emailInput.value || ""}`;

    linksPreview.innerText =
      `${linkedinInput.value || ""} ${portfolioInput.value ? " | " + portfolioInput.value : ""}`;

    summaryPreview.innerText = summaryInput.value || "";

    skillsPreview.innerHTML = skillsInput.value
      ? skillsInput.value.split("\n").join("<br>")
      : "";

    projectPreview.innerHTML = getProjects();
    expPreview.innerHTML = getExperience();
    eduPreview.innerHTML = getEducation();

    // VOL
    const volHTML = getVolunteering();
    if (volHTML.trim()) {
      volTitle.style.display = "block";
      volPreview.innerHTML = volHTML;
    } else {
      volTitle.style.display = "none";
      volPreview.innerHTML = "";
    }

    // CERT
    const certHTML = getCertifications();
    if (certHTML.trim()) {
      certTitle.style.display = "block";
      certPreview.innerHTML = certHTML;
    } else {
      certTitle.style.display = "none";
      certPreview.innerHTML = "";
    }

    // SIMPLE SECTIONS
    function simple(input, preview, title) {
      if (input.value.trim()) {
        title.style.display = "block";
        preview.innerHTML = input.value.split("\n").map(x => "• " + x).join("<br>");
      } else {
        title.style.display = "none";
        preview.innerHTML = "";
      }
    }

    simple(awardInput, awardPreview, awardTitle);
    simple(extraInput, extraPreview, extraTitle);
  }

  function attachListeners() {
    document.querySelectorAll("input, textarea")
      .forEach(el => el.addEventListener("input", updateResume));
  }

  attachListeners();

  // ======================
  // PDF (UNCHANGED)
  // ======================

  downloadBtn.addEventListener("click", async () => {

    const resume = document.getElementById("resumePreview");
    const pdfContainer = document.getElementById("pdfContainer");

    pdfContainer.innerHTML = "";

    const clone = resume.cloneNode(true);

    clone.style.width = "794px";
    clone.style.minHeight = "1123px";
    clone.style.padding = "28px";
    clone.style.background = "#fff";
    clone.style.color = "#000";
    clone.style.display = "block";

    pdfContainer.appendChild(clone);

    await new Promise(r => setTimeout(r, 800));

    const canvas = await html2canvas(clone, { scale: 2 });

    const imgData = canvas.toDataURL("image/jpeg", 1);

    const pdf = new jspdf.jsPDF({
      unit: "px",
      format: [794, 1123]
    });

    pdf.addImage(imgData, "JPEG", 0, 0, 794, 1123);
    pdf.save("RESio_Resume.pdf");
  });

  // ======================
  // THEME
  // ======================

  themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light");
  });

});
