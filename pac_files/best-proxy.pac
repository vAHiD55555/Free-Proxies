function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 165.227.174.249:33080",
        "SOCKS 184.181.217.204:4145",
        "SOCKS 159.8.114.37:80",
        "SOCKS 115.221.242.131:9999",
        "SOCKS 51.38.155.24:46069",
        "SOCKS 36.255.98.156:4076",
        "SOCKS 67.205.153.110:51528",
        "SOCKS 125.141.133.49:5566",
        "SOCKS 62.60.131.182:5031",
        "SOCKS 195.93.173.58:9050",
        "SOCKS 180.183.97.16:8080",
        "SOCKS 193.34.95.110:8080",
        "SOCKS 185.236.202.205:3128",
        "SOCKS 88.99.27.163:5093",
        "SOCKS 188.93.213.242:1080",
        "SOCKS 1.180.0.162:7302",
        "SOCKS 98.185.94.76:4145",
        "SOCKS 78.12.223.246:294",
        "SOCKS 103.54.57.117:50460",
        "SOCKS 113.45.250.180:443",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}