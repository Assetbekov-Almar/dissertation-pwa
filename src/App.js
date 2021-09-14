import logo from './logo.svg';
import React from 'react';
import './App.css';

function App() {
  const [isInitialMount, setIsInitialMount] = React.useState(true);

  React.useEffect(() => {
    if (isInitialMount) {
      setIsInitialMount(false)
    } else {
      const divInstall = document.getElementById('installContainer');
      const butInstall = document.getElementById('butInstall');

      /* Put code here */
      window.addEventListener('beforeinstallprompt', (event) => {
        console.log('👍', 'beforeinstallprompt', event);
        // Stash the event so it can be triggered later.
        window.deferredPrompt = event;
        // Remove the 'hidden' class from the install button container
        divInstall.classList.toggle('hidden', false);
      });

      butInstall.addEventListener('click', async () => {
        console.log('👍', 'butInstall-clicked');
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

      if (window.location.protocol === 'http:') {
        const requireHTTPS = document.getElementById('requireHTTPS');
        const link = requireHTTPS.querySelector('a');
        link.href = window.location.href.replace('http://', 'https://');
        requireHTTPS.classList.remove('hidden');
      }
    }
  })

    window.addEventListener('appinstalled', (event) => {
      console.log('👍', 'appinstalled', event);
      // Clear the deferredPrompt so it can be garbage collected
      window.deferredPrompt = null;
    });


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
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
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
    </div>
  );
}

export default App;
