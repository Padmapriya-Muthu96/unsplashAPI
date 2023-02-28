url='https://api.unsplash.com/photos/?client_id=PNaSqQsgKheCE7O3LyAzeIjyEq931z8zVfGIYXDww4o&page=1'
url='https://api.unsplash.com/search/photos/?client_id=PNaSqQsgKheCE7O3LyAzeIjyEq931z8zVfGIYXDww4o&query="nature"&per_page=30'

var page=1
async function api(page_val){
    v=fetch(`https://api.unsplash.com/search/photos/?client_id=PNaSqQsgKheCE7O3LyAzeIjyEq931z8zVfGIYXDww4o&query="nature"&per_page=30&page=${page_val}`);
    out=await v;
    prom=out.json();
    out1=await prom;
    console.log(out1.results);
    var parent=document.querySelector('.parent')
      for (let i of out1.results){
        var imgele=document.createElement('img')
        imgele.setAttribute('src',i.urls.thumb)
        console.log(i.urls.thumb );
        parent.append(imgele)
      }
}

api(1)

window.addEventListener('scroll',()=>{
    //page++
    console.log(page);
})
