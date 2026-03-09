function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 218.78.65.202:6688",
        "SOCKS 206.123.156.222:6266",
        "SOCKS 103.54.57.117:50460",
        "SOCKS 85.132.37.9:1313",
        "SOCKS 206.123.156.222:5975",
        "SOCKS 206.123.156.233:5539",
        "SOCKS 209.141.58.213:5556",
        "SOCKS 91.151.88.220:6618",
        "SOCKS 8.212.165.164:5000",
        "SOCKS 206.123.156.183:5308",
        "SOCKS 194.163.182.6:1080",
        "SOCKS 125.66.165.154:7302",
        "SOCKS 119.28.182.96:1080",
        "SOCKS 5.133.219.4:63434",
        "SOCKS 71.168.71.12:8888",
        "SOCKS 139.59.7.217:36590",
        "SOCKS 104.37.175.200:22292",
        "SOCKS 51.222.241.8:42378",
        "SOCKS 222.184.48.252:22222",
        "SOCKS 154.64.240.39:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}