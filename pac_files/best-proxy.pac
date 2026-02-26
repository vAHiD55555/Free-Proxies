function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 51.195.139.95:44648",
        "SOCKS 213.230.110.191:3128",
        "SOCKS 159.65.230.91:20540",
        "SOCKS 119.84.215.127:3256",
        "SOCKS 103.195.5.78:30069",
        "SOCKS 146.235.19.84:10810",
        "SOCKS 103.195.5.78:30082",
        "SOCKS 185.6.9.176:8072",
        "SOCKS 38.76.200.182:58367",
        "SOCKS 103.195.5.78:30030",
        "SOCKS 121.206.205.75:4216",
        "SOCKS 125.141.133.98:5566",
        "SOCKS 161.202.226.194:8123",
        "SOCKS 5.255.99.75:1080",
        "SOCKS 209.141.58.213:5556",
        "SOCKS 43.99.243.123:58367",
        "SOCKS 159.65.230.91:20484",
        "SOCKS 94.100.18.111:3128",
        "SOCKS 159.65.230.91:20751",
        "SOCKS 159.65.230.91:20262",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}