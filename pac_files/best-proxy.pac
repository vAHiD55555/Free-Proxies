function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 61.49.87.3:80",
        "SOCKS 51.38.155.24:46069",
        "SOCKS 206.27.173.58:80",
        "SOCKS 124.248.167.211:1080",
        "SOCKS 101.91.242.198:6688",
        "SOCKS 41.65.160.173:1977",
        "SOCKS 121.169.46.116:1090",
        "SOCKS 113.128.33.60:53405",
        "SOCKS 170.106.175.48:80",
        "SOCKS 125.141.139.112:5566",
        "SOCKS 119.92.142.172:5050",
        "SOCKS 217.76.39.4:1080",
        "SOCKS 185.132.179.72:1080",
        "SOCKS 218.64.122.99:7302",
        "SOCKS 185.118.51.133:3128",
        "SOCKS 116.202.103.223:29210",
        "SOCKS 20.78.118.91:8561",
        "SOCKS 176.9.238.173:47679",
        "SOCKS 115.221.245.167:1080",
        "SOCKS 23.251.62.210:10080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}