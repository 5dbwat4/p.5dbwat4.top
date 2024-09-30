/**
 * Loading assets with progress bar
 * @author 5dbwat4 <me@5dbwat4.top>
 */

/** @format */

let loadingAssets = [];

document.querySelector("#app").insertAdjacentHTML("beforeend",`<div class="progressing"></div>
<style>.progress-bar-rail{position:relative;overflow:hidden;background:rgba(183, 181, 233, 0.565);flex:1;height:12px;border-radius:5px;}.progress-bar-fill{background:rgb(11, 9, 129);position:relative;border-radius:5px;height:inherit;width:100%;max-width:0;}.loading-item{display:flex;align-items:center;padding-top:6px;padding-bottom:6px;}.loading-item p{line-height:0;width:fit-content;color:#1b0b75;padding-right:12px;font-size:12px;}.progressing{width:700px;max-width:100%;}</style>`)

// get asset list to load

document.querySelectorAll("[progressing]").forEach((ele) => {
    // console.log(ele);
    
  if (ele.tagName == "SCRIPT") {
    const url = ele.getAttribute("data-src");
    // console.log(url);
    
    loadingAssets.push({
      url,
      dom: ele,
      type: "text/javascript"
    });
    // console.log(url);
    

    document.querySelector(".progressing").insertAdjacentHTML(
      "beforeend",
      `<div class="loading-item"><p>${url.split("/").pop()}</p><div class="progress-bar-rail"><div class="progress-bar-fill" id="progress-bar-${url}"></div></div><p id="percentage-${url}"></p><p id="speed-${url}"></p></div>`
    );
  }
  if (ele.tagName == "LINK" && ele.getAttribute("rel") == "stylesheet") {
    const url =  ele.getAttribute("data-href")
    loadingAssets.push({
      url,
      dom: ele,
      type:"text/css"
    });
    document.querySelector(".progressing").insertAdjacentHTML(
        "beforeend",
        `<div class="loading-item"><p>${url.split("/").pop()}</p><div class="progress-bar-rail"><div class="progress-bar-fill" id="progress-bar-${url}"></div></div><p id="percentage-${url}"></p><p id="speed-${url}"></p></div>`
      );
  }
});

//Loading


loadingAssets.forEach(
    
    
    /**
     * 
     * @param {{url:string,dom:HTMLElement,type:string}} vo 
     */
    async(vo)=>{


    const response = await fetch(vo.url);
      
    const reader = response.body.getReader();

    let receivedLength = 0; // received that many bytes at the moment
    let chunks = []; // array of received binary chunks 
    let percent = 0; // percent of video downloaded

    let lastReceiveAt=(new Date()).getTime()

    const contentLength = +response.headers.get('Content-Length') || +vo.dom.getAttribute("content-length");
    while(true) {
        const {done, value} = await reader.read();
  
        if (done) {
          break;
        }
  
        chunks.push(value);
        receivedLength += value.length;
        percent = ((receivedLength/contentLength)*100).toFixed(2);
  
        // Set container data attr
        // containerElement.setAttribute('data-percent', percent);
  
        // containerElement.style.setProperty('--progress-percent', percent);

        // get Speed
        const now = (new Date()).getTime()
        const diff = now - lastReceiveAt
        lastReceiveAt = now
        const speed = ((value.length/diff/1024)*1000).toFixed(2) // in KB/s
        if (speed > 1024) {
          const speedM = ((speed/1024)*1000).toFixed(2) // in MB/s
          document.getElementById("speed-"+vo.url).innerText = `${speedM} MB/s`
        } else {
          document.getElementById("speed-"+vo.url).innerText = `${speed} KB/s`
        }


        document.getElementById("progress-bar-"+vo.url).style.maxWidth = percent+"%"
        document.getElementById("percentage-"+vo.url).innerText = percent+"%"

        // console.log(`Received ${receivedLength} of ${contentLength} ${percent}%`);
      }


    //   console.log(chunks);

    const DataBlob = new Blob(chunks, {type: vo.type});

      /**
       * @type {HTMLElement}
       */
    const dom = document.createElement(vo.dom.tagName)

    for (let index = 0; index < vo.dom.attributes.length; index++) {
        const element = vo.dom.attributes.item(index);
        // console.log(element.nodeValue,element.nodeName);
        
        dom.setAttribute(element.nodeName,element.nodeValue)
    }

    console.log(dom);

    if (dom.tagName == "SCRIPT") {
        dom.setAttribute("src",URL.createObjectURL(DataBlob))
    }
      if (dom.tagName == "LINK" && dom.getAttribute("rel") == "stylesheet") {
        dom.setAttribute("href",URL.createObjectURL(DataBlob))
      }

    vo.dom.parentElement.appendChild(dom)
    
      
      
      
      







})
