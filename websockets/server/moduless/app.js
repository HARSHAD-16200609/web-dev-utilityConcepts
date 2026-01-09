    const ws = new WebSocket("ws://localhost:8080");

        ws.onopen = () => {
            console.log("✅ WebSocket connected");
            document.getElementById('status').textContent = "Connected!";
            ws.send("Hello Server");
            // Note: ws.emit() doesn't exist - use ws.send() instead
        };

        ws.onmessage = (e) => {
            console.log("📩 From server:", e.data);
            const messagesDiv = document.getElementById('messages');
            messagesDiv.innerHTML += `<p>From server: ${e.data}</p>`;
        };

        ws.onerror = (error) => {
            console.error("❌ WebSocket error:", error);
            document.getElementById('status').textContent = "Error!";
        };

        ws.onclose = () => {
            console.log("🔌 WebSocket disconnected");
            document.getElementById('status').textContent = "Disconnected";
        };