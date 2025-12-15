function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 222.71.131.131:1080",
        "SOCKS 91.209.77.93:3128",
        "SOCKS 176.9.238.173:47679",
        "SOCKS 218.78.65.202:6688",
        "SOCKS 36.111.205.203:6666",
        "SOCKS 52.201.85.24:80",
        "SOCKS 128.140.76.145:28093",
        "SOCKS 139.28.97.51:1080",
        "SOCKS 43.102.204.46:8080",
        "SOCKS 208.113.222.205:57226",
        "SOCKS 114.236.93.203:15800",
        "SOCKS 222.129.36.115:57114",
        "SOCKS 205.185.126.51:5556",
        "SOCKS 109.238.14.123:52663",
        "SOCKS 163.172.176.48:3128",
        "SOCKS 91.213.99.134:3128",
        "SOCKS 116.202.103.223:29210",
        "SOCKS 5.133.219.4:63434",
        "SOCKS 98.185.94.76:4145",
        "SOCKS 37.228.137.183:10808",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}