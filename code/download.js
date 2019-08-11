Download:
function download_image(){
  alert('clicked')
  const promise = fetch('url)
  promise.then((data)=>{
    const element = document.createElement("a");
    const file = new Blob([data], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = "aimage.png";
    element.click();
  }).
  catch(err=>{
    alert(err)
  })
}
