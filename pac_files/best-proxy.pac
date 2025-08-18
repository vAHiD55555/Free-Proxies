function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 140.237.14.92:4216",
        "SOCKS 183.166.132.124:3000",
        "SOCKS 218.64.122.99:7302",
        "SOCKS 113.120.61.189:43644",
        "SOCKS 8.215.31.146:1347",
        "SOCKS 67.43.236.20:6231",
        "SOCKS 185.93.89.144:4149",
        "SOCKS 64.181.240.152:3128",
        "SOCKS 27.71.139.208:16000",
        "SOCKS 168.220.89.95:3128",
        "SOCKS 116.202.103.223:29210",
        "SOCKS 171.247.151.218:8080",
        "SOCKS 121.205.215.44:4216",
        "SOCKS 103.12.161.222:1080",
        "SOCKS 18.188.141.177:8834",
        "SOCKS 98.185.94.76:4145",
        "SOCKS 114.80.36.254:3081",
        "SOCKS 47.115.42.157:8044",
        "SOCKS 54.37.72.89:80",
        "SOCKS 159.65.69.186:9200",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}