let domain = document.domain;

fetch(
  "https://raw.githubusercontent.com/NAIJULU/paro_nacional/master/config.json"
)
  .then(res => res.json())
  .then(response => {
    let urlsBoicot = response.hosts;
    let images = response.images;
    let indexImg = Math.floor(Math.random() * (images.length - 1)) + 0;
    let messages = response.messages;
    let indexMessages = Math.floor(Math.random() * (messages.length - 1)) + 0;
    console.log(messages[indexMessages]);
    if (urlsBoicot.includes(domain)) {
      let html = `
        <div class="d-flex align-items-center">
        <div class="container-image w-50 p-3">
            <img class="mw-100" src="${images[indexImg]}" alt="">
        </div>
        <div class="container-text w-50 p-3">
            ${messages[indexMessages]}
            <center><img style="width: 100px" src='https://paro-nacional.s3.us-east-2.amazonaws.com/images/Rebel_Alliance_logo.png'/></center>
        </div>
      </div>
        `;
      document.body.innerHTML = html;
    }
  })
  .catch(err => {
    throw err;
  });
