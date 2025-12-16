function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 128.140.76.145:13087",
        "SOCKS 106.52.187.222:1080",
        "SOCKS 51.158.98.211:16379",
        "SOCKS 205.185.116.159:5556",
        "SOCKS 8.210.4.18:7779",
        "SOCKS 217.150.43.249:8080",
        "SOCKS 185.6.9.176:8072",
        "SOCKS 128.140.76.145:25284",
        "SOCKS 185.244.208.195:23699",
        "SOCKS 115.127.179.86:2026",
        "SOCKS 188.165.233.121:9151",
        "SOCKS 175.24.2.65:1080",
        "SOCKS 47.250.56.98:19190",
        "SOCKS 222.129.35.9:57114",
        "SOCKS 39.170.85.129:7302",
        "SOCKS 195.234.68.34:3128",
        "SOCKS 62.60.131.26:8888",
        "SOCKS 128.140.76.145:27557",
        "SOCKS 208.113.155.120:41154",
        "SOCKS 118.27.111.97:80",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}