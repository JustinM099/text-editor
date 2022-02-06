const butInstall = document.getElementById("buttonInstall")

//event handler
window.addEventListener("beforeinstallprompt", (event) => {
    window.deferredPrompt = event
    butInstall.classList.toggle('hidden', false);
  })

butInstall.addEventListener("click", async () => {
  console.log('click')
  const promptEvent = window.deferredPrompt

  if (!promptEvent) {
   return;
  }

  //prompt user to install
  promptEvent.prompt()
  
  window.deferredPrompt = null
  
  butInstall.classList.toggle("hidden", true)
})

//appinstalled event handler (clears prompt)
window.addEventListener("appinstalled", (event) => {
  window.deferredPrompt = null;
})
