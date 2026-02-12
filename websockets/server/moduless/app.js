    const ws = new WebSocket("ws://localhost:8080");

        ws.onopen = () => {
            console.log("✅ WebSocket connected");
           
            // Note: ws.emit() doesn't exist - use ws.send() instead
        };

            ws.onmessage = (e) => {
    
          
       const ul =  document.querySelector('#messages')
      const li = document.createElement("li")
      li.textContent= ` ${e.data}` 
      ul.appendChild(li);
          
        };

        ws.onerror = (error) => {
            console.error("❌ WebSocket error:", error);

        };

        ws.onclose = () => {
            console.log("🔌 WebSocket disconnected");
         
        };


        document.querySelector(".send").addEventListener("click",()=>{

          const cht = document.querySelector(".chat").value
          console.log(cht);
          
          // Send the message to the server
          ws.send(cht);
  
        })