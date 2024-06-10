const scenes =  document.querySelectorAll(".scene");

scenes.forEach((scene)=>{
    console.log(scene);
    scene.addEventListener('click',()=>{
         remove(scene);
        scene.classList.add('active');
    })
})
function remove(){
    scenes.forEach((scene)=>{
       
          
            scene.classList.remove('active');
        
    })
}