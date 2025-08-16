function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 117.74.65.207:80",
        "SOCKS 20.78.118.91:8561",
        "SOCKS 172.104.240.74:9053",
        "SOCKS 47.245.117.43:80",
        "SOCKS 116.105.31.185:9100",
        "SOCKS 49.49.29.227:8080",
        "SOCKS 106.52.187.222:1080",
        "SOCKS 20.78.26.206:8561",
        "SOCKS 98.126.23.24:2846",
        "SOCKS 183.166.132.124:3000",
        "SOCKS 159.203.61.169:1080",
        "SOCKS 154.0.14.116:3128",
        "SOCKS 27.79.238.173:16000",
        "SOCKS 47.76.189.189:8899",
        "SOCKS 43.224.10.43:6667",
        "SOCKS 195.211.45.87:5050",
        "SOCKS 27.79.178.166:16000",
        "SOCKS 208.113.222.205:57226",
        "SOCKS 121.205.213.141:4216",
        "SOCKS 18.188.141.177:8834",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}