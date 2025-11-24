const submissions = [];
const form = document.getElementById("contactForm");
const submissionsContainer = document.getElementById("submissionsContainer");
const submissionsList = document.getElementById("submissionsList");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  // Get form values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  // Reset error messages
  document.getElementById("nameError").classList.add("hidden");
  document.getElementById("emailError").classList.add("hidden");
  document.getElementById("messageError").classList.add("hidden");

  // Validation
  let isValid = true;

  if (name === "") {
    document.getElementById("nameError").classList.remove("hidden");
    isValid = false;
  }

  if (email === "" || !email.includes("@")) {
    document.getElementById("emailError").classList.remove("hidden");
    isValid = false;
  }

  if (message === "") {
    document.getElementById("messageError").classList.remove("hidden");
    isValid = false;
  }

  if (!isValid) return;

  // Store submission
  const submission = {
    name: name,
    email: email,
    message: message,
    timestamp: new Date().toLocaleString(),
  };

  submissions.push(submission);

  // Display submission
  displaySubmissions();

  // Reset form
  form.reset();

  // Show success message
  alert("Thank you for your message! We will get back to you soon.");
});

function displaySubmissions() {
  submissionsContainer.classList.remove("hidden");
  submissionsList.innerHTML = "";

  submissions.forEach((submission, index) => {
    const submissionDiv = document.createElement("div");
    submissionDiv.className =
      "bg-gray-50 p-6 rounded-lg border border-gray-200";
    submissionDiv.innerHTML = `
                    <div class="flex justify-between items-start mb-2">
                        <h4 class="font-semibold text-gray-900">${submission.name}</h4>
                        <span class="text-sm text-gray-500">${submission.timestamp}</span>
                    </div>
                    <p class="text-sm text-gray-600 mb-2">${submission.email}</p>
                    <p class="text-gray-700">${submission.message}</p>
                `;
    submissionsList.appendChild(submissionDiv);
  });
  console.log(submissions);
}
