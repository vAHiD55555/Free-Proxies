function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 100.27.183.62:8080",
        "SOCKS 175.24.2.65:1080",
        "SOCKS 52.202.30.36:80",
        "SOCKS 165.227.104.122:48500",
        "SOCKS 203.189.152.49:1080",
        "SOCKS 47.81.14.7:3128",
        "SOCKS 136.118.15.230:8000",
        "SOCKS 103.174.178.131:1020",
        "SOCKS 103.148.192.189:3128",
        "SOCKS 144.91.78.34:20269",
        "SOCKS 34.234.201.164:80",
        "SOCKS 137.184.228.194:40886",
        "SOCKS 202.47.185.181:8085",
        "SOCKS 205.185.114.78:5556",
        "SOCKS 134.122.21.142:33346",
        "SOCKS 27.153.141.90:4216",
        "SOCKS 195.154.43.198:39522",
        "SOCKS 64.227.131.240:1080",
        "SOCKS 195.234.68.34:3128",
        "SOCKS 104.248.151.64:8080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}