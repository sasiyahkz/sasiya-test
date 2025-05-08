function downloadVideo() {
  const url = document.getElementById("tiktokUrl").value.trim();
  if (!url) {
    alert("Please enter a TikTok video URL.");
    return;
  }

  fetch(`https://tiktok-video-no-watermark.p.rapidapi.com/video?url=${encodeURIComponent(url)}`, {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '66839d11cfmshc4c4e55a34e5a6bp1c42b9jsna9fb1862b7a9',
      'X-RapidAPI-Host': 'tiktok-video-no-watermark.p.rapidapi.com'
    }
  })
    .then(response => response.json())
    .then(data => {
      if (data.video) {
        document.getElementById("result").innerHTML = `
          <p>Download Ready:</p>
          <a href="${data.video}" target="_blank" download>Click here to download</a>
        `;
      } else {
        document.getElementById("result").innerHTML = `<p>Video not found. Please check the URL.</p>`;
      }
    })
    .catch(err => {
      console.error(err);
      document.getElementById("result").innerHTML = `<p>Error fetching video. Try again.</p>`;
    });
}
