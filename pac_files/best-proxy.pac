function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 47.250.56.98:19190",
        "SOCKS 162.144.74.156:3620",
        "SOCKS 159.8.114.37:80",
        "SOCKS 113.100.209.184:3128",
        "SOCKS 193.34.95.110:8080",
        "SOCKS 124.248.184.144:1080",
        "SOCKS 165.227.104.122:48500",
        "SOCKS 106.45.221.168:3256",
        "SOCKS 15.207.196.77:3128",
        "SOCKS 193.56.255.179:3128",
        "SOCKS 79.122.230.20:8080",
        "SOCKS 51.15.133.214:16379",
        "SOCKS 181.78.202.28:8080",
        "SOCKS 103.242.175.241:8899",
        "SOCKS 120.224.234.71:7300",
        "SOCKS 103.174.178.145:2005",
        "SOCKS 112.86.116.24:1080",
        "SOCKS 67.205.190.164:8080",
        "SOCKS 81.12.119.171:8080",
        "SOCKS 46.10.208.106:8192",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}