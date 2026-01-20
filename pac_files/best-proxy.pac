function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 181.143.181.35:8080",
        "SOCKS 81.200.149.203:5415",
        "SOCKS 101.91.242.198:6688",
        "SOCKS 64.181.240.152:3128",
        "SOCKS 72.240.9.63:80",
        "SOCKS 205.185.114.78:5556",
        "SOCKS 223.113.89.138:1080",
        "SOCKS 205.185.116.159:5556",
        "SOCKS 37.120.162.180:36831",
        "SOCKS 119.81.189.194:8123",
        "SOCKS 142.54.237.38:4145",
        "SOCKS 202.62.37.33:1080",
        "SOCKS 91.142.79.166:8888",
        "SOCKS 188.166.30.17:8888",
        "SOCKS 37.120.162.180:10477",
        "SOCKS 37.120.162.180:47377",
        "SOCKS 125.66.165.154:7302",
        "SOCKS 119.84.215.127:3256",
        "SOCKS 201.88.213.118:8080",
        "SOCKS 193.56.255.181:3128",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}