function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 13.36.243.194:9899",
        "SOCKS 113.100.209.184:3128",
        "SOCKS 141.11.42.163:1080",
        "SOCKS 223.113.89.138:1080",
        "SOCKS 47.236.20.209:1145",
        "SOCKS 13.229.47.109:80",
        "SOCKS 206.123.156.200:10121",
        "SOCKS 61.171.50.169:6688",
        "SOCKS 67.205.190.164:8080",
        "SOCKS 217.76.245.80:999",
        "SOCKS 5.9.55.221:5000",
        "SOCKS 67.205.153.110:51528",
        "SOCKS 51.158.98.211:16379",
        "SOCKS 149.202.75.85:36666",
        "SOCKS 174.138.62.182:43715",
        "SOCKS 188.166.30.17:8888",
        "SOCKS 121.141.161.55:1080",
        "SOCKS 165.227.104.122:48500",
        "SOCKS 129.159.119.154:1080",
        "SOCKS 176.113.73.99:3128",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}