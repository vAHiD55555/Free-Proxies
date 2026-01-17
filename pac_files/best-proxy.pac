function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 36.255.98.180:7010",
        "SOCKS 37.120.162.180:16379",
        "SOCKS 205.185.120.241:5556",
        "SOCKS 113.59.113.4:1088",
        "SOCKS 84.17.51.241:3128",
        "SOCKS 47.238.37.111:1100",
        "SOCKS 103.103.146.149:7080",
        "SOCKS 188.93.213.242:1080",
        "SOCKS 123.136.24.161:1080",
        "SOCKS 218.4.192.62:7302",
        "SOCKS 185.236.202.205:3128",
        "SOCKS 123.182.233.70:7302",
        "SOCKS 208.65.90.3:4145",
        "SOCKS 51.195.139.95:44648",
        "SOCKS 103.240.68.135:8097",
        "SOCKS 203.189.154.80:1080",
        "SOCKS 185.6.9.176:8072",
        "SOCKS 100.48.28.177:80",
        "SOCKS 161.35.98.249:39467",
        "SOCKS 36.255.98.180:11401",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}