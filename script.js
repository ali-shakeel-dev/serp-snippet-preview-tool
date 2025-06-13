let search = document.getElementById("search")
let search_btn = document.getElementById("search_btn")
let title = document.getElementById("title")
let description = document.getElementById("desc")
let url = document.getElementById("url")
let keywords = document.getElementById("keywords")
let desktop_title = document.getElementById("desktop_title")
let desktop_description = document.getElementById("desktop_desc")
let mobile_title = document.getElementById("mobile_title")
let mobile_description = document.getElementById("mobile_desc")
let description_pixels_count = document.getElementById("desc_pixels")
let desc_characters_count = document.getElementById("desc_chars")
let title_pixels_count = document.getElementById("title_pixels")
let title_characters_count = document.getElementById("title_chars")
let meta_desc_stats = document.querySelector(".meta_desc_stats")
let meta_title_stats = document.querySelector(".meta_title_stats")
let feedbackButtons = document.querySelectorAll(".feedback_button");
let feedbackMsg = document.getElementById("feedback_msg");
let feedbackContainer = document.getElementById("feedback_buttons");
let url_preview = document.querySelectorAll(".url_preview")


const emojiMap = {
  1: "😠",
  2: "😕",
  3: "😐",
  4: "🙂",
  5: "😊",
  6: "😍"
};

feedbackButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const rating = button.value;
    localStorage.setItem("feedback", rating)
    feedbackMsg.innerText = `Thank you! You have given a ${emojiMap[rating]} rating.`
    feedbackContainer.style.display = "none";
  })
})


const savedRating = localStorage.getItem("feedback");
if (savedRating && emojiMap[savedRating]) {
  feedbackMsg.innerText = `You have already given a ${emojiMap[savedRating]} rating.`;
  feedbackContainer.style.display = "none";
}

function getTextPixelWidth(text, font = 'bold 14px Arial') {
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  context.font = font;
  return Math.floor(context.measureText(text).width);
}

title.addEventListener('input', () => {
  const titleText = title.value.trim() || "Preview Your SERP Snippet — Example Title Goes Here";
  desktop_title.innerText = titleText
  mobile_title.innerText = titleText

  meta_title_stats.classList.remove("hidden")
  title_pixels_count.innerText = `${getTextPixelWidth(title.value, "bold 20px Arial")}px`
  title_characters_count.innerText = title.value.replace(/\s/g, '').length
})

description.addEventListener('input', () => {
  const descText = description.value.trim() || "Use this tool to preview how your page title and meta description will appear in Google search results. Perfect for SEO testing and optimization."
  desktop_description.innerText = descText
  mobile_description.innerText = descText

  meta_desc_stats.classList.remove("hidden")
  description_pixels_count.innerText = `${getTextPixelWidth(description.value)}px`
  desc_characters_count.innerText = description.value.replace(/\s/g, '').length
})

url.addEventListener('input', () => {
  const rawInput = url.value.trim();
  let formattedURL = rawInput;

  // Default if input is empty
  if (!rawInput) {
    formattedURL = "https://www.example.com";
  } else {
    // Add https:// if missing
    if (!/^https?:\/\//i.test(rawInput)) {
      formattedURL = "https://www." + rawInput.replace(/^www\./, "");
    }
  }

  try {
    const urlObj = new URL(formattedURL);
    const host = urlObj.hostname.replace(/^www\./, ''); // remove www
    const path = urlObj.pathname
      .split('/')
      .filter(part => part.trim().length > 0) // remove empty segments
      .join(' › '); // breadcrumb style

    const displayURL = path ? `${host} › ${path}` : host;

    url_preview.forEach(preview => {
      preview.innerText = displayURL;
    });

  } catch (err) {
    // Handle invalid URL
    url_preview.forEach(preview => {
      preview.innerText = "Invalid URL";
    });
  }
});
