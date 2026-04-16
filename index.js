document.getElementById("orderForm").addEventListener("submit", async function(e) {
  e.preventDefault();

  const form = e.target;

  const formData = {
    name: form.elements["name"].value,
    email: form.elements["email"].value,
    address: form.elements["address"].value,
    notes: form.elements["notes"].value
  };

  try {
    const res = await fetch("http://localhost:5000/order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    });

    const data = await res.json();

    // 👇 SHOW MESSAGE (your old feature + new backend)
    document.getElementById("successMsg").innerText = "✅ " + data.message;

    form.reset();
  } catch (error) {
    document.getElementById("successMsg").innerText = "❌ Error placing order";
  }
});