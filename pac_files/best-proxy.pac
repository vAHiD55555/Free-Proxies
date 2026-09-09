function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 15.204.235.27:1080",
        "SOCKS 118.179.93.216:9090",
        "SOCKS 174.138.162.34:37167",
        "SOCKS 159.100.20.206:27866",
        "SOCKS 195.91.129.101:1337",
        "SOCKS 93.180.134.36:3128",
        "SOCKS 23.95.171.196:9050",
        "SOCKS 143.246.197.187:1080",
        "SOCKS 203.175.126.229:8000",
        "SOCKS 174.138.162.35:32184",
        "SOCKS 210.87.92.207:8080",
        "SOCKS 47.82.68.78:1011",
        "SOCKS 213.165.43.73:46650",
        "SOCKS 103.119.60.219:1080",
        "SOCKS 110.235.255.252:1080",
        "SOCKS 117.244.114.54:1080",
        "SOCKS 47.242.207.71:9898",
        "SOCKS 174.138.162.36:8880",
        "SOCKS 45.74.31.30:4080",
        "SOCKS 51.178.49.241:1088",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}