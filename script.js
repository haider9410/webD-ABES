function generateID() {
  const name = document.getElementById("name").value;
  const roll = document.getElementById("roll").value;
  const dob = document.getElementById("dob").value;
  const mobile = document.getElementById("mobile").value;
  const address = document.getElementById("address").value;
  const photoInput = document.getElementById("photo");

  if (!name || !roll || !dob || !mobile || !address || photoInput.files.length === 0) {
    alert("Please fill in all fields and upload a student photo.");
    return;
  }

  const file = photoInput.files[0];
  const reader = new FileReader();

  reader.onload = function (e) {
    const photoURL = e.target.result;

    const idCardHTML = `
      <img src="abes logo.jpg" class="college-logo" alt="College Logo" />
      <h2>ABES Engeneering college ghziabad</h2>
      <img src="${photoURL}" class="photo" alt="Student Photo" />
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Roll No:</strong> ${roll}</p>
      <p><strong>DOB:</strong> ${dob}</p>
      <p><strong>Mobile:</strong> ${mobile}</p>
      <p><strong>Address:</strong> ${address}</p>
    `;

    const idCard = document.getElementById("idCard");
    idCard.innerHTML = idCardHTML;
    idCard.style.display = "block";
  };

  reader.readAsDataURL(file);
}
