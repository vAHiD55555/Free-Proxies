function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 176.9.238.173:47679",
        "SOCKS 68.183.65.150:8888",
        "SOCKS 150.227.4.147:1080",
        "SOCKS 61.178.99.43:7302",
        "SOCKS 51.195.139.95:44648",
        "SOCKS 205.185.126.51:5556",
        "SOCKS 128.140.76.145:17328",
        "SOCKS 72.10.164.178:2493",
        "SOCKS 113.195.224.222:9999",
        "SOCKS 162.144.74.156:3620",
        "SOCKS 205.185.114.78:5556",
        "SOCKS 159.223.149.191:20202",
        "SOCKS 64.227.131.240:1080",
        "SOCKS 44.213.1.118:80",
        "SOCKS 118.99.108.4:8080",
        "SOCKS 165.227.104.122:48500",
        "SOCKS 128.140.76.145:30349",
        "SOCKS 125.87.82.86:3256",
        "SOCKS 88.99.10.252:1080",
        "SOCKS 167.172.159.43:39019",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}