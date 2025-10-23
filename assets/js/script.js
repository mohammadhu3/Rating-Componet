const container = document.querySelector(".container");

// Always show the rating section on page load
showRating();

//-----Rating Section ------
function showRating() {
  container.innerHTML = "";

  // ------ Star icon---------
  const star = document.createElement("div");
  star.id = "star";
  const starImg = document.createElement("img");
  starImg.src = "./assets/img/icon-star.svg";
  star.append(starImg);
  container.append(star);

  // ------- Text content --------
  const text = document.createElement("div");
  text.id = "text";
  const h1 = document.createElement("h1");
  h1.textContent = "How did we do?";
  const p = document.createElement("p");
  p.textContent =
    "Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!";
  text.append(h1, p);
  container.append(text);

  // ------- Rating buttons (1–5) ------
  const rate = document.createElement("div");
  rate.id = "rate";
  container.append(rate);

  const numbers = [1, 2, 3, 4, 5];
  let selected = null;

  for (let i = 0; i < numbers.length; i++) {
    const btn = document.createElement("button");
    btn.textContent = numbers[i];
    rate.append(btn);

    //------ Hover animation handled by JS------
    btn.addEventListener("mouseenter", () => {
      btn.classList.add("hover");
    });
    btn.addEventListener("mouseleave", () => {
      btn.classList.remove("hover");
    });

    //------ Select rating------
    btn.addEventListener("click", () => {
      selected = numbers[i];
      document.querySelectorAll("#rate button").forEach((b) => {
        b.classList.remove("active");
      });
      btn.classList.add("active");
    });
  }

  // --- Submit button ---
  const submit = document.createElement("div");
  submit.id = "submit";
  const submitBtn = document.createElement("button");
  submitBtn.textContent = "Submit";
  submit.append(submitBtn);
  container.append(submit);

  //------- Hover animation handled by JS------
  submitBtn.addEventListener("mouseenter", () => {
    submitBtn.classList.add("hover");
  });
  submitBtn.addEventListener("mouseleave", () => {
    submitBtn.classList.remove("hover");
  });

  //----- Submit event-----
  submitBtn.addEventListener("click", () => {
    if (selected) {
      showThank(selected);
    } else {
      alert("Please select a rating before submitting!");
    }
  });
}

// ----Thank You Section -------
function showThank(rating) {
  container.innerHTML = "";

  const thank = document.createElement("div");
  thank.id = "thankyou";
  container.append(thank);

  //------ Illustration image-----
  const img = document.createElement("img");
  img.src = "./assets/img/illustration-thank-you.svg";
  thank.append(img);

  //------ Selected rating display------
  const selected = document.createElement("div");
  selected.id = "selected";
  selected.textContent = `You selected ${rating} out of 5`;
  thank.append(selected);

  //---- Thank-you text-----
  const h1 = document.createElement("h1");
  h1.textContent = "Thank you!";
  thank.append(h1);

  const p = document.createElement("p");
  p.textContent =
    "We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!";
  thank.append(p);
}
