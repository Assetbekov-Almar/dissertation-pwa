import React from 'react';
import './App.css';
import Navigation from "./components/Navigation";
import PageInfo from "./components/PageInfo";

function App() {
  const [isInitialMount, setIsInitialMount] = React.useState(true);

  React.useEffect(() => {
    if (isInitialMount) {
      setIsInitialMount(false)
    } else {
      const divInstall = document.getElementById('installContainer');
      const butInstall = document.getElementById('butInstall');
      const installPromotion = document.querySelector('.install-promotion');

      /* Put code here */
      window.addEventListener('beforeinstallprompt', (event) => {
        console.log('👍', 'beforeinstallprompt', event);

        event.preventDefault();
        // Stash the event so it can be triggered later.
        window.deferredPrompt = event;

        installPromotion.style.display = 'block';

        // Remove the 'hidden' class from the install button container
        divInstall.classList.toggle('hidden', false);
      });

      butInstall.addEventListener('click', async () => {
        console.log('👍', 'butInstall-clicked');

        installPromotion.style.display = 'none';

        const promptEvent = window.deferredPrompt;
        if (!promptEvent) {
          // The deferred prompt isn't available.
          return;
        }
        // Show the install prompt.
        promptEvent.prompt();
        // Log the result
        const result = await promptEvent.userChoice;
        console.log('👍', 'userChoice', result);
        // Reset the deferred prompt variable, since
        // prompt() can only be called once.
        window.deferredPrompt = null;
        // Hide the install button.
        divInstall.classList.toggle('hidden', true);
      });

      window.addEventListener('appinstalled', (event) => {
        console.log('👍', 'appinstalled', event);
        installPromotion.style.display = 'none';
        // Clear the deferredPrompt so it can be garbage collected
        window.deferredPrompt = null;
      });

      if (window.location.protocol === 'http:') {
        const requireHTTPS = document.getElementById('requireHTTPS');
        const link = requireHTTPS.querySelector('a');
        link.href = window.location.href.replace('http://', 'https://');
        requireHTTPS.classList.remove('hidden');
      }
    }
  })



    /* Only register a service worker if it's supported */
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/service-worker.js');
    }

    /**
     * Warn the page must be served over HTTPS
     * The `beforeinstallprompt` event won't fire if the page is served over HTTP.
     * Installability requires a service worker with a fetch event handler, and
     * if the page isn't served over HTTPS, the service worker won't load.
     */
    const handleInstallBtnClick = async () => {
      window.deferredPrompt.prompt();
      const { outcome } = await window.deferredPrompt.userChoice;
      console.log(`User response to the install prompt: ${outcome}`);
      window.deferredPrompt = null;
    }

  window.addEventListener('appinstalled', () => {
    // Clear the deferredPrompt so it can be garbage collected
    window.deferredPrompt = null;
    // Optionally, send analytics event to indicate successful install
    console.log('PWA was installed');
  });

  return (
    <div className="App">
      <header className="App-header">
        <Navigation />
        <h2 className="install-promotion">You can install PWA now.</h2>
        <p id="requireHTTPS" className="hidden">
          <b>STOP!</b> This page <b>must</b> be served over HTTPS.
          Please <a>reload this page via HTTPS</a>.
        </p>
        <div id="installContainer" className="hidden">
          <button id="butInstall" type="button" onClick={() => handleInstallBtnClick}>
            Install
          </button>
        </div>
      </header>
      <PageInfo />
    </div>
  );
}

export default App;
