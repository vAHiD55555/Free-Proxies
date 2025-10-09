function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 54.226.156.148:20201",
        "SOCKS 163.223.230.92:39089",
        "SOCKS 72.10.160.93:30557",
        "SOCKS 20.210.39.153:8561",
        "SOCKS 178.165.42.166:3128",
        "SOCKS 90.156.197.189:8080",
        "SOCKS 120.92.211.211:7890",
        "SOCKS 121.132.61.211:3128",
        "SOCKS 183.62.76.91:7890",
        "SOCKS 27.74.215.131:30245",
        "SOCKS 158.69.185.37:3129",
        "SOCKS 45.166.93.113:999",
        "SOCKS 114.80.32.8:3081",
        "SOCKS 43.134.177.187:20201",
        "SOCKS 72.10.164.178:2493",
        "SOCKS 175.47.237.95:6128",
        "SOCKS 20.210.76.175:8561",
        "SOCKS 103.144.209.104:8715",
        "SOCKS 8.213.129.15:1337",
        "SOCKS 41.223.119.156:3128",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}