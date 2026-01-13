function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 178.128.167.129:1080",
        "SOCKS 193.239.86.249:3128",
        "SOCKS 147.45.179.180:1081",
        "SOCKS 221.202.27.194:10809",
        "SOCKS 119.81.71.27:8123",
        "SOCKS 98.185.94.76:4145",
        "SOCKS 51.15.241.34:3128",
        "SOCKS 35.180.127.14:1001",
        "SOCKS 101.91.242.198:6688",
        "SOCKS 222.129.36.157:57114",
        "SOCKS 135.181.203.208:80",
        "SOCKS 176.74.197.163:36918",
        "SOCKS 203.76.98.21:45958",
        "SOCKS 45.204.208.22:60002",
        "SOCKS 218.6.105.152:4216",
        "SOCKS 124.248.168.90:1080",
        "SOCKS 164.163.40.15:10000",
        "SOCKS 128.199.202.122:1080",
        "SOCKS 121.42.9.57:7201",
        "SOCKS 62.133.62.12:1081",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}