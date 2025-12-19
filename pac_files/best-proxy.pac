function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 188.93.213.242:1080",
        "SOCKS 203.189.152.142:1080",
        "SOCKS 128.140.76.145:17923",
        "SOCKS 20.210.76.178:8561",
        "SOCKS 175.24.2.65:1080",
        "SOCKS 125.141.133.49:5566",
        "SOCKS 147.75.34.105:443",
        "SOCKS 202.65.127.194:1080",
        "SOCKS 51.15.5.21:60349",
        "SOCKS 20.210.76.175:8561",
        "SOCKS 194.87.77.22:80",
        "SOCKS 98.190.102.62:4145",
        "SOCKS 51.15.240.207:16379",
        "SOCKS 80.253.246.238:6618",
        "SOCKS 8.148.4.166:17947",
        "SOCKS 51.89.68.78:9050",
        "SOCKS 51.38.155.24:46069",
        "SOCKS 193.216.224.108:8192",
        "SOCKS 218.78.65.202:6688",
        "SOCKS 178.49.22.23:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}