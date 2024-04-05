let searchBox=document.querySelector("#search-box");
let searchResult=document.querySelector("#search-result");
let searchForm=document.querySelector("#search-form");
let showMoreBtn=document.querySelector("#show-more-btn");

let key="9YE2VB7f11yxr_MrCv_Sp-ymmk5J-rUYOSveeyqIRJ8";
let page=1;

async function searchImage(){
    const response=await fetch(`https://api.unsplash.com/search/photos?page=${page}&query=${searchBox.value}&client_id=${key}&per_page=12`);
    let data=await response.json();
    console.log(data);
    let results=data.results;
    if(page===1){
        searchResult.innerHTML="";
    }
    results.map((result)=>{
        let img=document.createElement("img");
        img.src=result.urls.small;
        let imgLink=document.createElement("a");
        imgLink.href=result.links.html;
        imgLink.target="_blank";
        imgLink.append(img);
        searchResult.append(imgLink);
    })
    showMoreBtn.style.display="block";
}
searchForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    page=1;
    searchImage();
})
showMoreBtn.addEventListener("click",()=>{
    page++;
    searchImage();
})