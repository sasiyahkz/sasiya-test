async function downloadVideo() {
  const url = document.getElementById("videoUrl").value;
  const resultDiv = document.getElementById("result");

  if (!url) {
    resultDiv.innerHTML = "Please enter a video URL.";
    return;
  }

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
      resultDiv.innerHTML = \`<a href="\${data.video.no_watermark}" download>Click here to download the video</a>\`;
    } else {
      resultDiv.innerHTML = "Video download link not found.";
    }
  } catch (error) {
    console.log(error);
    resultDiv.innerHTML = "Error fetching video.";
  }
}
