function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 202.40.179.186:64564",
        "SOCKS 222.129.32.173:57114",
        "SOCKS 157.173.201.10:1080",
        "SOCKS 162.144.74.156:3620",
        "SOCKS 174.138.61.184:1080",
        "SOCKS 147.45.60.60:80",
        "SOCKS 120.77.203.0:443",
        "SOCKS 115.127.62.50:1088",
        "SOCKS 91.211.115.127:1080",
        "SOCKS 85.143.254.38:1080",
        "SOCKS 218.64.122.99:7302",
        "SOCKS 62.60.131.184:4115",
        "SOCKS 194.233.78.142:42495",
        "SOCKS 51.15.240.207:16379",
        "SOCKS 51.16.209.246:8080",
        "SOCKS 185.6.9.176:8072",
        "SOCKS 195.93.173.58:9050",
        "SOCKS 125.141.133.49:5566",
        "SOCKS 103.148.112.69:8199",
        "SOCKS 111.61.73.175:7302",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}