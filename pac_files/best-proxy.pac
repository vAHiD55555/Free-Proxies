function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 125.141.133.98:5566",
        "SOCKS 43.224.10.43:6667",
        "SOCKS 218.78.65.202:6688",
        "SOCKS 222.71.131.131:1080",
        "SOCKS 45.122.123.29:1452",
        "SOCKS 185.93.89.182:12179",
        "SOCKS 20.27.14.220:8561",
        "SOCKS 138.201.139.252:12344",
        "SOCKS 185.93.89.182:8168",
        "SOCKS 115.127.83.142:1088",
        "SOCKS 138.68.60.8:1080",
        "SOCKS 161.35.70.249:1080",
        "SOCKS 188.166.197.129:3128",
        "SOCKS 185.93.89.180:8846",
        "SOCKS 185.93.89.146:8097",
        "SOCKS 121.169.46.116:1090",
        "SOCKS 20.27.15.49:8561",
        "SOCKS 185.93.89.182:8834",
        "SOCKS 179.27.158.78:80",
        "SOCKS 185.93.89.146:9281",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}