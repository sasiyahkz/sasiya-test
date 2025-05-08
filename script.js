async function downloadVideo() {
  const url = document.getElementById('videoUrl').value;
  const resultDiv = document.getElementById('result');

  resultDiv.innerHTML = "Loading...";

  try {
    const response = await fetch(`https://tiktok-downloader-download-videos-without-watermark.p.rapidapi.com/vid/index?url=${encodeURIComponent(url)}`, {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '66839d11cfmshc4c4e55a34e5a6bp1c42b9jsna9fb1862b7a9',
        'X-RapidAPI-Host': 'tiktok-downloader-download-videos-without-watermark.p.rapidapi.com'
      }
    });

    const data = await response.json();

    if (data.video && data.video.no_watermark) {
      resultDiv.innerHTML = `
        <video width="100%" controls>
          <source src="${data.video.no_watermark}" type="video/mp4">
          ඔබේ browser එකට video play කරන්න support නැහැ.
        </video>
        <a href="${data.video.no_watermark}" download>
          <button>Download Video</button>
        </a>
      `;
    } else {
      resultDiv.innerHTML = "Video එක Download කරන්න බැරි වුණා.";
    }
  } catch (error) {
    resultDiv.innerHTML = "Error: " + error.message;
  }
}
