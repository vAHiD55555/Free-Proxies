function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 185.61.38.140:1080",
        "SOCKS 188.93.213.242:1080",
        "SOCKS 51.158.64.130:16379",
        "SOCKS 88.99.10.252:1080",
        "SOCKS 78.140.13.97:10801",
        "SOCKS 205.185.114.78:5556",
        "SOCKS 20.27.14.220:8561",
        "SOCKS 222.184.48.241:22222",
        "SOCKS 156.244.39.41:20002",
        "SOCKS 103.93.93.221:8181",
        "SOCKS 203.25.208.163:1100",
        "SOCKS 84.17.51.240:3128",
        "SOCKS 47.82.66.142:1080",
        "SOCKS 206.123.156.220:11742",
        "SOCKS 83.228.227.81:1090",
        "SOCKS 113.121.240.114:3256",
        "SOCKS 180.183.97.16:8080",
        "SOCKS 115.221.242.131:9999",
        "SOCKS 8.217.110.202:9999",
        "SOCKS 125.128.12.124:3128",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}