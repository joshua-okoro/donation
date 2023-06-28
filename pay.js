
document.querySelectorAll('.wallcon').forEach(container=>{
      let copy=container.querySelector('.wamcon1')
      copy.addEventListener("focus",()=>copy.select());
      let btn=container.querySelector('.copy');
      btn.addEventListener("click",()=>{
        let text=copy.value;
        copy.select()
        navigator.clipboard.writeText(text);
        copy.value="copied";
        setTimeout(()=>copy.value=text,2000)
      
      })
    
})