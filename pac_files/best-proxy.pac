function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 185.123.143.247:3128",
        "SOCKS 160.20.55.235:8080",
        "SOCKS 138.201.139.252:12344",
        "SOCKS 125.87.82.86:3256",
        "SOCKS 183.164.254.8:4216",
        "SOCKS 218.78.65.202:6688",
        "SOCKS 85.133.227.182:80",
        "SOCKS 123.54.197.51:20732",
        "SOCKS 115.127.36.190:1088",
        "SOCKS 51.158.68.133:8811",
        "SOCKS 125.141.139.198:5566",
        "SOCKS 51.89.68.78:9050",
        "SOCKS 125.66.165.154:7302",
        "SOCKS 185.61.38.140:1080",
        "SOCKS 72.10.164.178:2493",
        "SOCKS 212.33.248.45:1080",
        "SOCKS 118.99.108.4:8080",
        "SOCKS 27.254.99.183:8118",
        "SOCKS 85.214.244.174:3128",
        "SOCKS 51.222.241.8:42378",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}