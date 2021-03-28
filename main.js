$(document).ready(function(){
  var API_KEY="AIzaSyApVtjkvprbQMUJ-Bth3BS4hJRhthV2GgU";
  var video=''


  $("form").submit(function(event){
      event.preventDefault();
      var search=$("#search").val()

      videoSearch(API_KEY,search,10)
  })

  function videoSearch(key,search,maxresults){
      $.get("https://www.googleapis.com/youtube/v3/search?key=" +key +"&type=video&part=snippet&maxResults="+maxresults +"&q="+search,function(data){
          console.log(data);
          data.items.forEach(item=>{
              video=`<iframe width=420 height=315 src="http://www.youtube.com/embed/${item.id.videoId}" frameborder="0" allowfullscreen</iframe>`;
              $("#videos").append(video)
          })
      })
  }
})
//https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=surfing&key=[YOUR_API_KEY]
/*function helper(){
  let key="AIzaSyApVtjkvprbQMUJ-Bth3BS4hJRhthV2GgU";
  let search=document.getElementById('search').value;
  console.log(search)
  fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${search}&key=${key}`)
  .then(response=>{
    console.log(typeof(response))
    return response;
  }).then(data=>{
    let d=JSON.parse(data);
    d.items.forEach(item=>{
      let video=`<iframe width=420 height=315 src="http://www.youtube.com/embed/${item.id.videoId}" frameborder="0" allowfullscreen</iframe>`;
      let v=document.getElementById('videos');
      v.appendChild(video);

    })
  }).catch(err=>{
    console.log(err)
  })
}*/

