function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 5.255.117.127:1080",
        "SOCKS 51.89.68.78:9050",
        "SOCKS 188.93.213.242:1080",
        "SOCKS 51.195.139.95:44648",
        "SOCKS 47.88.104.126:3344",
        "SOCKS 222.129.38.21:57114",
        "SOCKS 205.185.114.78:5556",
        "SOCKS 176.74.192.44:24822",
        "SOCKS 203.189.154.80:1080",
        "SOCKS 125.141.139.112:5566",
        "SOCKS 203.189.151.19:1080",
        "SOCKS 15.207.196.77:3128",
        "SOCKS 185.236.203.208:3128",
        "SOCKS 8.222.151.218:5566",
        "SOCKS 85.214.94.28:3128",
        "SOCKS 144.91.118.176:3128",
        "SOCKS 84.17.51.235:3128",
        "SOCKS 209.141.58.213:5556",
        "SOCKS 124.248.189.223:1080",
        "SOCKS 89.249.65.191:3128",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}