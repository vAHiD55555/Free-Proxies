function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 144.217.12.20:10808",
        "SOCKS 144.31.222.106:7890",
        "SOCKS 149.28.87.103:8888",
        "SOCKS 43.164.136.189:1080",
        "SOCKS 195.201.118.139:9050",
        "SOCKS 51.222.13.193:10084",
        "SOCKS 95.85.242.7:9050",
        "SOCKS 101.36.104.46:10808",
        "SOCKS 131.153.163.130:8184",
        "SOCKS 103.75.198.134:9051",
        "SOCKS 125.121.50.133:1080",
        "SOCKS 59.152.97.233:1080",
        "SOCKS 49.13.152.181:9104",
        "SOCKS 117.175.168.195:1080",
        "SOCKS 193.233.86.198:1080",
        "SOCKS 168.138.9.147:1080",
        "SOCKS 208.87.128.239:9150",
        "SOCKS 20.83.140.251:8080",
        "SOCKS 220.158.233.26:1080",
        "SOCKS 159.195.49.27:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}